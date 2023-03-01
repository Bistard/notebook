# 介绍

```cpp
Human(std::string name, int age, float height) : _name(name), _age(age), _height(height) {}
```

这个定义中, 出现了新的部分, 即冒号 (:) 以及花括号之前的代码. 我们把这部分新的代码称作为**构造函数初始值列表 (Member Initalization List)**. 它负责为新创建的对象的一个或几个**数据成员赋初始值**. 

在这个案例中, 等价于:

```cpp
Human(std::string name, int age, float height)
{
    this->_name = name;
    this->_age = age;
    this->_height = height;
}
```

# 进阶

对于上例中, 也不是无时无刻两种代码都是**等价的**. MIL在一些时候是无法被替代的, 比如如下:

```cpp
#include <iostream>
#include <string>

class Person {
public:
    Person(std::string name, const int id) {
        _name = name;
        _id = id; // ERROR, 因为const int不是一个modifiable的lvalue
    }
private:
    std::string _name;
    const int _id;
};
```

**唯一的解决办法就是用MIL**:

```cpp
#include <iostream>
#include <string>

class Person {
public:
    Person(std::string name, const int id): _name(name), _id(id) {}
private:
    std::string _name;
    const int _id;
};
```
