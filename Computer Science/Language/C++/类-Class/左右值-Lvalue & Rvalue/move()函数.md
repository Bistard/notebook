# `std::move()`函数

作用: 将一个值当作<u>右值 (Rvalue)</u> 处理.

## 实现 1 - Implementation #1

考虑以下`deque<T>`的成员函数`push_back()`:

```cpp
template<typename T> 
void deque::push_back(T x) { // (1)
    increaseCapacity();
    new (theVector + (n++)) T {x}; // (2)
}
```

* 如果`x`是`lvalue`, 那么`(1)`和`(2)`都是<u>copy constructor</u>. 但是我们只想要一次`copy`.
* 如果`x`是`rvalue`, 那么`(1)`是<u>move constructor</u>, `(2)`是<u>copy constructor</u>. 但是我们想要只有一次`move`.

## 实现 2 - Implementation #2

我们试着优化一下:

```cpp
template<typename T> 
void deque::push_back(T x) { // (1)
    increaseCapacity();
    new (theVector + (n++)) T { std::move(x) }; // (2)
}
```

* 如果`x`是`lvalue`, 那么`(1)`是<u>copy</u>, `(2)`是<u>move</u>. ✔
* 如果`x`是`rvalue`, 那么`(1)`是<u>move</u>, `(2)`是<u>move</u>. ✔

**但是**, 如果`T`类型没有提供`move constructor`, 那么不管是左值还是右值, 都是2次`copy`!

## 额外内容 - 实现 3 - Implementation #3

我们可以写成两个函数:

```cpp
// 处理左值
template<typename T> 
void deque::push_back(const T &x) { // no copy, move
    increaseCapacity();
    new (theVector + (n++)) T { x }; // copy ctor
}

// 处理右值
template<typename T> 
void deque::push_back(T &&x) { // no copy, move
    increaseCapacity();
    new (theVector + (n++)) T { std::move(x) }; // move ctor
}
```

如果`T`类型没提供`move`, 那么不管是左值还是右值, 都是1次`copy`!
