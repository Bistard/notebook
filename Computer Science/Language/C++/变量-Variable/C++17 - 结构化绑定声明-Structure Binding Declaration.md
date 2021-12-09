# 介绍

C++17语言上(**语言特性**，而不是标准库新特性)引入了一种结构化绑定的新特性，使用该特性可以利用`auto`同时声明多个不同类型的变量并即时从一个`tuple-like`对象得到赋值/初始化。

> Structured binding不但可以使C++的代码更加简洁，从语法上更贴近Python这种脚本语言了。另外，`auto`变量会在编译时推导出变量的类型，所以无需担心会有运行时效率的下降。而且，好像也并不会影响到编译效率，这一点尚未看到有实测。

# 在C++17之前

在C++17之前，如果要接收从函数返回的`std::tuple`对象，我们可以使用`std::tie`:

```cpp
std::set<S> mySet;
std::set<S>::iterator iter;

S value {42, "Test", 3.14};
bool inserted;
// unpacks the return val of insert into iter and inserted
std::tie(iter, inserted) = mySet.insert(value);

if (inserted) {
    std::cout << "Value was inserted\n";
}
```

# 在C++17之后

利用Structured binding特性，可以这样处理使得代码更精简

```cpp
std::set<S> mySet;

S value{42, "Test", 3.14};
auto [iter, inserted] = mySet.insert(value); //use 'const auto' or `const auto &` if necessary
```

# 使用场景

C++17语言上规定structured binding有如下三种使用格式：

![image-20211209210541782](../../../../.mdnote/assets/image-20211209210541782.png)



## 案例一 - case #1 - binding an array

```cpp
int a[2] = {1,2};

auto [x,y] = a; // creates e[2], copies a into e, then x refers to e[0], y refers to e[1]
auto& [xr, yr] = a; // xr refers to a[0], yr refers to a[1]
```

## 案例二 - case #2 - binding a tuple-like type

```cpp
float x{};
char  y{};
int   z{};
 
std::tuple<float&,char&&,int> tpl(x,std::move(y),z);
const auto& [a,b,c] = tpl;
// a names a structured binding that refers to x; decltype(a) is float&
// b names a structured binding that refers to y; decltype(b) is char&&
// c names a structured binding that refers to the 3rd element of tpl; decltype(c) is const int
```

## 案例三 - case #3 - binding to data members

```cpp
#include <iostream>
struct S {
    mutable int x1 : 2;
    volatile double y1;
};
S f() { return S{1, 2.3}; }
 
int main() {
    const auto [x, y] = f();  // x is an int lvalue identifying the 2-bit bit field
                              // y is a const volatile double lvalue
    std::cout << x << ' ' << y << '\n';  // 1 2.3
    x = -2;   // OK
//  y = -2.;  // Error: y is const-qualified
    std::cout << x << ' ' << y << '\n';  // -2 2.3
}
```



---

摘抄于

* https://en.cppreference.com/w/cpp/language/structured_binding