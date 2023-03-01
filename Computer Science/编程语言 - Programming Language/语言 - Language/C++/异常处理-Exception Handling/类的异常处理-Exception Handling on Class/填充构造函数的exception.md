# 介绍

考虑以下vector的`fill constructor`:

```cpp
vector<T>::vector(size_t n, const T &x): n {n}, cap {n}, theVector {static_cast<T *>(operator new (n * sizeof(T)))} {
    for (size_t i = 0; i < n; ++i) {
        new (theVector + i) T {x}; // (1): copy constructor of T
    }
}
```

如果说`(1)`处发生了exception怎么办? 我们拥有一个partial constructed vector - 我们的destructor will not run.

## strong guarantee版本

我们可以利用`try`语句来实现一个`strong guarantee`版本的`fill constructor`:

```cpp
vector<::vector(size_t n, const T &x): n {n}, cap {n}, theVector {static_cast<T *>(operator new (n * sizeof(T)))} {
	size_t progress = 0;
    try {
        for (size_t i = 0; i < n; ++i) {
            new (theVector + i) T {x}; // (1): might throw
        }
    } catch (...) { // catch anything
        while (progress) { theVector[--progress].~T(); }
        operator delete (theVector);
        throw; // rethrow
    }
}
```

## 优化二 - More Abstract

```cpp
template<typename T>
class vector {
public:
    vector(size_t n, const T &x): n {n}, cap {n}, theVector {static_cast<T *>(operator new (n * sizeof(T)))} {
		try {
            __uninitialized_fill(theVector, theVector + n, x);
        } catch (...) {
            operator delete (theVector);
            throw;
        }
    }
private:
    // __uninitialized_fill()函数, 专门负责向uninitialized memory进行construct - strong guarantee
    void __uninitialized_fill(T *start, T *finish, const T &x) {
        T *p;
        try {
            for (p = start; p != finish; ++p) {
                new (p) T {x};
            }
        } catch (...) {
            while (p != start) { (--p)->~T(); }
            throw;
        }
    }
}
```

## 优化三 - 利用RAII理念

我们可以设计一个新的类, 来同样达成`vector`的`fill constructor`的`strong guarantee`.

```cpp
// vector_base现在会处理真正的内存管理
template<typename T> struct vector_base {
 	T *vec;
    size_t n, cap;
    vector_base(size_t n): vec {static_cast<T *>(operator new (n * sizeof(T)))}, n {n}, cap {n} {}
    ~vector_base() { operator delete (vec); }
};

class vector {
public:
    vector(size_t n, const T &x): vb {n} { // strong guarantee (we don't need a try block anymore, more elegant)
        __uninitialized_fill(vb.vec, vb.vec + n, x);
    }
    ~vector() { __clear() };
private:
    vector_base<T> vb;
    void __uninitialized_fill(T *start, T *finish, const T &x);
    void __clear()
};
```

