# `[[nodiscard]]`和`[[nodiscard("reason")]]`

这两个属性和前面的`[[deprecated]]`类似，但是他们是在不同的`C++`标准中被引入的: 

* `[[nodiscard]]`是在`C++17`标准中引入，
* 而`[[nodiscard("reason")]]`是在`C++20`标准中引入。

> 这个属性的含义是明确的告诉编译器，用此属性修饰的函数，<u>其返回值（必须是按值返回）不应该被丢弃</u>，如果在实际调用中舍弃了返回变量，则编译器会发出警示信息。如果此属性修饰的是枚举或者类，则在对应函数返回该类型的时候也不应该丢弃结果。

```cpp
struct [[nodiscard("IMPORTANT THING")]] important {};
important i = important();
important get_important() { return i; }
important& get_important_ref() { return i; }
important* get_important_ptr() { return &i; }

int a = 42;
int* [[nodiscard]] func() { return &a; }

int main()
{
    get_important();      // 此处编译器会给出警告。
    get_important_ref();  // 此处因为不是按值返回nodiscard类型，不会有警告。
    get_important_ptr();  // 同上原因，不会有警告。
    func();               // 此处会有警告，虽然func不按值返回，但是属性修饰的是函数。
    return 0;
}
```

在对上述例子进行编译的时候，我们可以看到如下的警告信息：

```cpp
nodiscard.cpp:8:25: warning: 'nodiscard' attribute can only be applied to functions or to class or enumeration types [-Wattributes]
    8 | int* [[nodiscard]] func() { return &a; }
      |                         ^
nodiscard.cpp: In function 'int main()':
nodiscard.cpp:12:18: warning: ignoring returned value of type 'important', 
   declared with attribute 'nodiscard': 'IMPORTANT THING' [-Wunused-result]
   12 |     get_important();
      |     ~~~~~~~~~~~~~^~
nodiscard.cpp:3:11: note: in call to 'important get_important()', declared here
    3 | important get_important() { return i; }
      |           ^~~~~~~~~~~~~
nodiscard.cpp:1:41: note: 'important' declared here
    1 | struct [[nodiscard("IMPORTANT THING")]] important {};
      |                                         ^~~~~~~~~
```



