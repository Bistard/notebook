# 介绍

什么是`const_cast<T>`?

> C++中唯一一个cast可以去除 `const`.

不过这并不代表着, 它字面意义上所表述的: 去除掉`const`之后我们就可以随意修改 (mutate) 原始数据了.

因为被`const`修饰的数据很有可能被存放在内存中`read-only`的部分, 那么当我们试图去修改原始数据的时候, 程序就会崩溃.

那么我要去除`const`的目的还有什么用呢?

## 案例一 - 解决function的signiture的问题

考虑以下

```cpp
void f(int x);
void g(const int x) {
    // 我们无法在g里面, 去调用f(x), 因为x是const
}
```

那么假设其实`f()`的内部实现中, 其实根本就没有修改 `x`. 那么这个时候`const_cast`的作用就出现了

```cpp
void f(int x);
void g(const int x) {
    f(const_cast<int>(x));
}
```

