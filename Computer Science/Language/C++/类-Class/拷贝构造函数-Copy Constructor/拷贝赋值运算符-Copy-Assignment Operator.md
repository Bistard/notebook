# 介绍 - Copy-Assignment Operator

与类控制其对象如何初始化一样, 类也可以控制其对象如何赋值.

```cpp
与类控制其对象如何初始化一样, 类也可以控制其对象如何赋值.
Human man;
Human anotherMan = man; // 调用了Human的copy constructor
anotherMan = man; // ⭐调用了Human的copy-assignment op
```

下面为章节内的前置代码:

```cpp
#include <string>

class Human {
public:
    Human() = default;
    Human(std::string name, int age, double height);
    Human &operator=(const Human &other);
private:
    std::string _name;
    int _age;
    double _height;
    Human *_child;
};
```

# 合成拷贝赋值运算符 - (Default)

如果一个类未定义自己的拷贝赋值运算符, compiler会为此创建一个**合成拷贝赋值运算符** **(Synthesized copy-assignment operator)**, 也就是默认的copy-assignment operator. 作为一个例子, 下面的代码**等价于**合成拷贝赋值运算符.

```cpp
Human &operator=(const Human &other)
{
    _name = other._name;
    _age = other._age;
    _height = other._height;
    _child = other._child; // ⭐注意, 这里会造成原始数据的丢失, memory leak!
    return *this;
}
```

# 深度拷贝 - Deep Copy

对于上述案例中, 我们可以override一个我们自己版本的copy-assignment operator:

```cpp
#include <string>

class Human {
public:
    Human() = default;
    Human(std::string name, int age, double height);
    Human &operator=(const Human &other) // ⭐以下版本还可以优化! 接着往下看
    {
        _name = other._name;
        _age = other._age;
        _height = other._height;
        delete _child;
        _child = other._child;
        return *this;
    }
private:
    std::string _name;
    int _age;
    double _height;
    Human *_child;
};
```

## 优化自赋值

上述的copy-assignment operator并不是最终答案了, 考虑一下:

```cpp
int main() {
	Human a = new Human();
    a = a; // ⭐
}
```

星星的位置调用了copy-assignment operator, 我们回头看一下function body, 此时`other`其实就是`*this`, 因此在`delete _child;`之后, 也就相当于`delete other._child;`. 因此这里会出现`undefined behaviour`! 因此我们需要改成;

```cpp
Human &operator=(const Human &other)
{
    if (&other == this) {
        return ;
    }
    _name = other._name;
    _age = other._age;
    _height = other._height;
    delete _child;
    _child = other._child;
    return *this;
}
```

