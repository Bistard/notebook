# 介绍

你可以告知compiler该函数时候为no exception / no throw:

```cpp
int create_ten() noexcept {
    return 10;
}

class MyClass {
    MyClass(int arg1, double arg2) noexcept;
    MyClass(const MyClass &other) n
};
```

## noexcept运算符

```cpp
noexcept (expression)
```

* The `noexcept` operator performs a compile-time check that **returns** `true `if an expression is declared to not throw any exceptions.
* It can be used within a function template's noexcept specifier to declare that the function will throw exceptions for some types but not others.

拿`std::swap(T &a, T &b)`举例, 如果`T`的类型为`int`或者`pointer`, 那么就是`noexcept`.  同时, `std::swap()`代码如下:

```cpp
template<typename T> void swap(T &a, T &b) {
    T tmp { std::move(a) }; // T's move constructor
    a = std::move(b);       // T's move assignment operator
    b = std::move(tmp);     // T's move assignment operator
}
```

可是如果T's不提供`noexcept`版本的move ctor/oper呢? 那么我们就可以利用`noexcept`运算符

```cpp
template<typename T> void swap(T &a, T &b) noexcept(std::is_nothrow_move_constructible<T>::value && std::is_nothrow_move_assignable<T>::value);
```

