# `[[deprecated]]`

这个属性是在`C++14`的标准中被引入的。

> 被这个属性加持的名称或者实体在编译期间会输出对应的警告，告诉使用者该名称或者实体将在未来被抛弃。

> 如果指定了具体的"reason"，则这个具体的原因也会被包含在警告信息中。

```cpp
[[deprecated]]
void old_hello() {}

[[deprecated("Use new_greeting() instead. ")]]
void old_greeting() {}

int main()
{
    old_hello();
    old_greeting();
    return 0;
}
```

在支持对应属性的编译器上，这个例子程序是可以通过编译并正确运行的，但是编译的过程中，编译器会对属性标志的函数进行追踪，并且打印出相应的信息（如果定义了的话）。在我的环境中，编译程序给出了我如下的提示信息：

```cpp
deprecated.cpp: In function 'int main()':
deprecated.cpp:9:14: warning: 'void old_hello()' is deprecated [-Wdeprecated-declarations]
    9 |     old_hello();
      |     ~~~~~~~~~^~
deprecated.cpp:2:6: note: declared here
    2 | void old_hello() {}
      |      ^~~~~~~~~
deprecated.cpp:10:17: warning: 'void old_greeting()' is deprecated: 
   Use new_greeting() instead.  [-Wdeprecated-declarations]
   10 |     old_greeting();
      |     ~~~~~~~~~~~~^~
deprecated.cpp:5:6: note: declared here
    5 | void old_greeting() {}
      |      ^~~~~~~~~~~~
```

`[[deprecated]]`属性支持广泛的名字和实体，除了<u>函数</u>，它还可以修饰：

- 类，结构体
- 静态数据成员，非静态数据成员
- 联合体，枚举，枚举项
- 变量，别名，命名空间
- 模板特化

---

摘抄于

* https://www.zhihu.com/search?type=content&q=C%2B%2B%20attribute