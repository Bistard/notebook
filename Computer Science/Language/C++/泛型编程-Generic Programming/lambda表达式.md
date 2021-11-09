# 介绍

一个lambda表达式表示一个callable的代码单元 (即 foo() ). 我们可以将其理解为未命名的inline函数. 与任何函数类似, 一个lambda具有:

* 一个返回值 (return value)
* 参数列表 (parameter list)
* 函数体 (body)

但与函数不同, lambda可以定义在函数内部. 一个lambda的表达式具有如下格式:

```cpp
[capture_list] (parameter_list) -> return_type { function_body }
```

其中, `capture_list` (捕获列表) 是一个lambda所在函数中, 定义的`local variable`的列表. 于function不同的是, lambda必须使用置尾返回. 

## 案例一

我们可以忽略参数列表和返回类型, 但必须永远包含捕获列表和函数体:

```cpp
int main() {
    auto f = [] { return 42; };
	std::cout << f() << std::endl; // 42
}
```

## 向lambda传递参数

lambda不能有默认参数; 我们编写一个判断两个string的长度谁更短的lambda表达式:

```cpp
[] (const std::string &a, const std::string &b) { return a.size() > b.size(); }
```

空的捕获列表表示, lambda不使用它所在的函数中的任何局部变量. 

## 使用捕获列表 (capture list)

```cpp
int main() {
    int LOCAL_MAX = 1024;
    int LOCAL_MIN = 512;
    [LOCAL_MIN, LOCAL_MAX] (const int num) { return (LOCAL_MIN <= num) && (num <= LOCAL_MAX); }
}
```

## 值捕获 (capture by value)

类似于参数传递, 变量的捕获方式可以是passed by value或者passed by reference. 

```cpp
int main() {
    int LOCAL_MAX = 1024;
    int LOCAL_MIN = 512;
    auto f = [LOCAL_MIN, LOCAL_MAX] (const int num) { return (LOCAL_MIN <= num) && (num <= LOCAL_MAX); };
    LOCAL_MIN = 800;
    auto res = f(600);
    std::cout << res << std::endl; // true
}
```

比如上面的案例, 测采用的是passed by value, 因此在lambda表达式创建的时候, `LOCAL_MIN`已经被"拷贝"过去了, 因此这里的`res`, 为`true`.

## 引用捕获 (capture by reference)

```cpp
int main() {
    int LOCAL_MAX = 1024;
    int LOCAL_MIN = 512;
    auto f = [&LOCAL_MIN, &LOCAL_MAX] (const int num) { return (LOCAL_MIN <= num) && (num <= LOCAL_MAX); };
    LOCAL_MIN = 800;
    auto res = f(600);
	std::cout << res << std::endl; // false
}
```

这里的`LOCAL_MIN`则是passed by reference, 因此这里`res`为`false`. 

