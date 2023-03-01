# 介绍

在新标准下, 我们可以通过将拷贝构造函数 (Copy Constructor)和拷贝赋值运算符定义为删除的函数 (Deleted Function): 我们虽然声明了他们, 但不能以任何方式使用它们:

```cpp
class NoCopy
{
public:
    NoCopy() = default;
    NoCopy(const NoCopy &) = delete;            // 阻止拷贝
    NoCopy &operator=(const NoCopy &) = delete; // 阻止赋值
    ~NoCopy() = default;
};
```
