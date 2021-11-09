# 介绍

> `move_if_noexcept` obtains an rvalue reference to its argument if <u>its move constructor does not throw exceptions</u> **<u>OR</u>** <u>if there is no copy constructor (move-only type)</u>, otherwise obtains an lvalue reference to its argument. It is typically used to combine move semantics with strong exception guarantee.

案例

```cpp
template<typename T> void unitialized_copy_or_move(T *start, T *finish, T *target) {
    T *p;
    try {
        for (p = start; p != finish; ++p, ++target) {
            new (p) T { std::move_if_noexcept(*target) };
        }
    } catch (...) { // will never happen if T has a no-throw move constructor
        while (p != start) (--p)->~T();
    }
}
```

## 什么时候`move constructor`会`throw`?

实际上, `move constructor`的`throw`非常的`rare`.

