# 介绍

 一个**可变参数模板 (Varadic Template)** 就是一个接受<u>可变数目参数</u>的模板函数或模板类. 

可变数目的参数被称为参数包 (Parameter Packet). 存在两种函数包: 

* 模板参数包 (Template Parameter Packet), 表示零个或多个模板参数; 
* 函数参数包 (Function Parameter Packet), 表示零个或多个函数参数.

我们用一个省略号来指出一个模板参数或者函数参数表示一个Packet. 在一个模板参数列表中, 用`class…`或者`typename…`指出接下来的参数表示模板参数包.

在一个函数参数列表中, 如果一个参数的类型是一个模板参数包, 则此参数也是一个函数参数包.

```CPP
// Args 是一个模板参数包; 
// args是一个函数参数包
// Args 表示零个或多个模板参数列表
// args 表示零个或多个函数参数列表
template<typename T, typename... Args>
void foo(const T &t, const Args &... args);
```

例如

```cpp
int i = 0; double d = 3.14; std::string s = "hello world!";
foo(i, s, 42, d);
foo(s, 42, "hi");
foo(d, s);
foo("hi");
```

compiler会编译出4个不同的版本

```cpp
void foo(const int &, const string &, const int &, const double &);
void foo(const string &, const int &, const char[3] &);
void foo(const double &, const string &);
void foo(const char[3] &);
```

## `std::forward()`的使用

考虑以下代码

```cpp
struct Posn {
  	Posn(int x, int y);
};

int main() {
    std::vector<Posn> v;
    v.push_back( Posn {3, 4} ); // (1)
}
```

`(1)`标记点的运行顺序为:

1. `Posn` constructor invokes.
2. copy or move the `Posn`into the `std::vector` (depending on whether `Posn` has a move ctor).
3. `Posn `destructor invokes on the temp object.

可以发现1. 和 3. 可以互相抵消. 我们能不能在函数内部去构造一个`Posn`呢?

我们可以利用varadic template和`std::forward`将构造需要的参数传入一个函数, 然后在该函数内直接构造:

```cpp
template<typename T>
class vector {
// ...
    template<typename... Args>
    void emplace_back(Args &&... args) { // universal reference (forwarding reference)
        new (an_address) T { std::forward<Args>(args)... }; // 根据每一个入参的类型, 去按照左右值的类型
    }
// ...
};
```

