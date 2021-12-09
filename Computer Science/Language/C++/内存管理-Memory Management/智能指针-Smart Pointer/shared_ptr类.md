# 介绍

于`std::unique_ptr`类不同， `std::shared_ptr`类允许多个`std::shared_ptr`指向同一个对象。当下面任意一个条件达成的时候，被指向的对象就会自动被摧毁：

* the last remaining `shared_ptr` owning the object is destroyed.
* the last remaining `shared_ptr` owning the object is assigned another pointer via [operator=](https://en.cppreference.com/w/cpp/memory/shared_ptr/operator%3D) or [reset()](https://en.cppreference.com/w/cpp/memory/shared_ptr/reset).

# 成员函数 - Member Functions

![image-20211208234317288](../../../../../.mdnote/assets/image-20211208234317288.png)

# 共享ownership的隐患

> `shared_ptr` objects can only share ownership by copying their value: If two `shared_ptr` are constructed (or `make_shared()`) from the same (non-`shared_ptr`) pointer, they will both be owning the pointer without sharing it, causing potential access problems when one of them releases it (deleting its managed object) and leaving the other pointing to an invalid location.

# 传入函数

如果说函数内部需要获得该object的ownership, 那么passing by value会copy一个`shared_ptr`该object的ref count + 1.

如果函数内部只是需要to access object，那么pass by (const) reference是个好主意。

# # 类型转换 - casting

## Downcasting `shared_ptr<Base>` to `shared_ptr<Derived>`

```cpp
std::shared_ptr<Base> base (new Derived());
std::shared_ptr<Derived> derived = std::dynamic_pointer_cast<Derived> (base);
```

这里需要注意的是，`Base`类必须是polymorphic. 需要一个virtual method / virtual destructor.

# 空共享指针

A `shared_ptr` that does not own any pointer is called an *empty* `shared_ptr`. A `shared_ptr` that points to no object is called a *null* `shared_ptr` and shall not be dereferenced. Notice though that an *empty* `shared_ptr` is not necessarily a *null* `shared_ptr`, and a *null* `shared_ptr` is not necessarily an *empty* `shared_ptr`.



---

部分摘抄于

* https://www.cplusplus.com/reference/memory/shared_ptr/
* https://en.cppreference.com/w/cpp/memory/shared_ptr