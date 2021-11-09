# 介绍

一个`unique_ptr`**<u>拥有</u>**它所指向的对象. 同一时间, 只能有一个`unique_ptr`指向一个给定的对象. 当`unique_ptr`被销毁的时候, 它所指向的对象也会被销毁.

由于`unique_ptr`拥有它指向的对象, 因此`unique_ptr`不支持普通的`copy`和`move`操作.

| 操作                     | 解释                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `unique_ptr<T> u1`;      | 空`unique_ptr`, 可以指向类型为`T`的对象. `u1`会使用`delete`来释放它的指针. |
| `unique_ptr<T, D> u2`;   | `u2`会使用一个类型为`D`的可调用对象来释放它的指针.           |
| `unique_ptr<T, D> u(d);` | 空`unique_ptr`, 指向类型为`T`的对象, 用类型为`D`的对象`d`代替`delete`. |
| `u = nullptr;`           | 释放`u`指向的对象, 将`u`设置为空.                            |
| `u.release();`           | `u`放弃对指针的控制权, 返回指针, 并将`u`设置为空.            |
| `u.reset();`             | 释放`u`所指向的对象.                                         |
| `u.reset(q);`            | 如果提供了内置指针`q`, 令`u`指向这个对象; 否则将`u`设置为空. |
| `u.reset(nullptr);`      |                                                              |

## 传递`unique_ptr`参数和返回`unique_ptr`

不能拷贝`unique_ptr`的规则有一个例外: 我们可以拷贝或者赋值一个将要被销毁的`unique_ptr`. 最常见的例子就是从函数中返回一个`unique_ptr`:

```cpp
unique_ptr<int> clone(int p) {
    return unique_ptr<int> ( new int  {p} );
}

unique_ptr<int> clone2(int p) {
	unique_ptr<int> unique_p { new int  {p} };
    return unique_p;
}
```

对于以上两段代码, 编译器都知道要返回的对象叫要被销毁, 因此编译器会执行一种特殊的"拷贝".

## potential内存溢出

考虑下方代码结构

```cpp
class C {};
void foo(unique_ptr<C>, int);
int g();

int main() {
	foo(unique_ptr<C> { new C {} }, g()); // (1)
}
```

> ⭐**CUATION**: C++ DOES NOT enforce order of argument evaluation !!!!!
>
> 意味着, runtime的时候, 运行逻辑可能是:
>
> 1. `new C {}`
> 2. `g()`
> 3. `unique_ptr\<C\> { new C {} }`

如果说在`g()`的函数内部发生了exception, 那么此时的`new C {}`就发生了memory leak.

如何解决这样的问题呢? 我们需要一个helper function:

```cpp
// helper function
template<typename T, typename... Args>
unique_ptr<T> make_unique(Args &&... args) {
    return unique_ptr<T> { new T {std::forward<Args>(args)...} };
}

int main() {
	foo(make_unique<C>(), g());
}
```

## `unique_ptr`遵循RAII理念

> **RAII (Resource Acquisition Is Initialization):** 
>
> * Any resources that must be properly released (memory, file handle, etc.). Should be wrapped in a static-allocated object whose destructor frees it.