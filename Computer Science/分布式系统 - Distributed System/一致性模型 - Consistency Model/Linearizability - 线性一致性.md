# Linearizability

* Linearizability是**最强的单一对象**的一致性模型（Consistency Model）.

An operation (or set of operations) is **linearizable** if it consists of an ordered list of *invocation* and *response* events, that may be extended by adding response events such that:

1. The extended list can be re-expressed as a *sequential history* (is **serializable**).
2. That *sequential history* is a subset of the original unextended list.

* A **history** is a sequence of *invocations* and *responses* made of an object by a set of threads or processes.
    * An **invocation** can be thought of as the start of an operation.
    * An **response** being the signaled end of that operation.
        * Each invocation has a subsequent response.
* A **sequential history** is one in which all invocations have immediate responses.
    * A sequential history should be trivial to reason about（容易推理地）, as it has no real concurrency（因为没有并发）.

## 案例

| A invokes *lock* | B invokes *lock* | A gets "failed" response | B gets "successful" response |
| ---------------- | ---------------- | ------------------------ | ---------------------------- |

上面的history并不是sequential history，因为每个invocation并没有紧跟着对应的response。**This is where linearizability comes in**.

# Linearizable

一个history如果是**linearizable**，那么:

1. its invocations and responses <u>can be reordered to</u> yield a sequential history.
2. that sequential history is <u>correct</u> according to the sequential definition of the object.
3. if a response preceded an invocation in the original history, it <u>must still precede it after the sequential reordering</u>.

> 前两点对应了*Serializability*: the operations appear to happen in some order. 第三点对应了*Linearizability*.

## 案例继续 - Example (Cont’d)

Let us look at <u>two ways of reordering</u> the locking example above.

| A invokes *lock* | A gets "failed" response | B invokes *lock* | B gets "successful" response |
| ---------------- | ------------------------ | ---------------- | ---------------------------- |

* 该案例中的reordering符合1和3。
* 但是并不符合2：it doesn't match the sequential definition of the object (it doesn't match the semantics of the program): A should have successfully obtained the lock, and B should have subsequently aborted.

| B invokes *lock* | B gets "successful" response | A invokes *lock* | A gets "failed" response |
| ---------------- | ---------------------------- | ---------------- | ------------------------ |

* This is another <u>correct sequential history</u>. It is also a <u>linearization</u>!

* ⭐：Note that the definition of linearizability only precludes responses that precede invocations from being reordered; since the original history had no responses before invocations, we can reorder it as we wish. <u>Hence the original history is indeed linearizable</u>.

# Primitive Atomic Instructions

These instructions are used directly by compiler and operating system writers but are also abstracted and exposed as bytecodes and library functions in higher-level languages:

* atomic read-write
* atomic swap
* test-and-set
* fetch-and-add
* compare-and-swap
* load-link/store-conditional

# High-Level Atomic Operations

1. The easiest way to achieve linearizability is running groups of primitive operations in a critical section. Strictly, independent operations can then be carefully permitted to overlap their critical sections, provided this does not violate linearizability.

> Such an approach must balance the cost of large numbers of locks against the benefits of increased parallelism.

2. Another approach, favoured by researchers (but not yet widely used in the software industry), is to design a linearizable object using the native atomic primitives provided by the hardware.

    > This has the potential to maximise available parallelism and minimise synchronisation costs, but requires mathematical proofs which show that the objects behave correctly.

3. A promising hybrid of these two is to provide a <u>transactional memory</u> abstraction. As with critical sections, the user marks sequential code that must be run in isolation from other threads. The implementation then ensures the code executes atomically.
    * A common theme when designing linearizable objects is to provide an all-or-nothing interface: either an operation succeeds completely, or it fails and does nothing (ACID). For example:
        * Compare-and-swap
        * Load-link/store-conditioanl