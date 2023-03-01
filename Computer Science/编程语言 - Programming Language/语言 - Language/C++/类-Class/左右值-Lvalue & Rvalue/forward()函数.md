# `std::forward()`函数

前置阅读 - 万能引用 - Universal Reference.

回顾上次讲到的函数`deduce()`:

```cpp
template <typename T>
void deduce(T&& x);
```

现在假设`deduce(T &&x)`的内部实现如下:

```cpp
void foo(const int &);
void foo(int &&);

template <typename T>
void deduce(T&& x) {
    foo(x); // 这里我们无法在compile-time来确定x的类型
}
```

而`std::forward()`这里就可以派上用场啦, 官方对该函数的功能的解释为:

> Forwards lvalues as either lvalues or as rvalues, depending on T.

```cpp
template <typename T>
void deduce(T&& x) {
    foo( std::forward<T>(x) ); // 如果x是lvalue, 那么就当作lvalue; 如果x是rvalue, 那么x就当作rvalue.
}
```



