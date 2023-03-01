# `typename`关键词

我们上个例子的案例:

```cpp
template <typename T>  
int compare(T v1, T v2) {
    if (v1 < v2) return 1;
    else if (v1 > v2) return -1;
    return 0;
}
```

我们compare函数中, 有一个**模板类型参数 (type parameter)**. 

>  类型参数可以用来指定函数的返回值, 定义函数形参的类型, 或者在函数体中进行变量申明或者变量类型转换.

```cpp
template <typename T>
T foo(T* p){
    T temp = *p;
    return temp;
}
```

## `typename`和`class`的区别

在声明类型参数时, `typename`和`class`起到**完全一模一样**的作用. `typename`比`class`看起来更直观一点, 而且`typename`是在`C++11`的时候推出, 所以有些程序员可能还在用`class`.

你可以在一个模板函数参数表中同时使用`class`或者`typename`.

```cpp
template <typename T, class A>
int compare(T v1, A v2) {
    if (v1 < v2) return 1;
    else if (v1 > v2) return -1;
    return 0;
}
```

