# Strict Consistency -严格一致性

> Strict Consistency是<u>最强的</u>一致性模型。

* Under this model, a write to a variable by any processor needs to be **seen instantaneously** by all processors.
    * That is, a shared-memory system is said to support the strict consistency model if: “the value returned by a read operation on a memory address is always the same as the value written by the most recent write operation to that address, irrespective of the locations of the processes performing the read and write operations.”

## 案例 - Example

对于一个具有Strict Consistency的系统来说，考虑以下三个文件的代码：

```c
// process 1
{
    a = 1;
}
```

```c
// process 2
{
    while (a == 0) {}
    b = 1;
}
```

```c
// process 3
{
    while (b == 0) {}
    assert(a == 1);
}
```

由于在具有strict consistency性质的系统中，每一次write operation都是atomic的，因此当$P_1$完成了$a = 1$的时候，$P_2$也可以同时知道$a = 1$的存在，继而成功的完成$b = 1$，$P_3$也同理。因此，对于$assert(a == 1)$是不会报错的。

## 局限性

* Slow.

Strict Consistency很少被用在Distributed System的大部分情况中，作为替代方案，sequential consistency被Lamport提了出来（相比较于strict consistency更加的relax）。



# Reference

* https://www.youtube.com/watch?v=Fm8iUFM2iWU&list=RDLVFm8iUFM2iWU&start_radio=1&rv=Fm8iUFM2iWU&t=0
* https://en.wikipedia.org/wiki/Consistency_model

