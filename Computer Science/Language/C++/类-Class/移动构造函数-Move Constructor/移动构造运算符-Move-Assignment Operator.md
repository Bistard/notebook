# 移动构造运算符-Move-Assignment Operator



```cpp
Human &operator=(Human &&other); // move-assignment operator
```

```cpp
// move-assign operator
Human &operator=(Human &&other)
{
    std::cout << "calling move-assignment operator" << std::endl;
    if (this == &other) {
        delete _child;
        _name = other._name;
        _age = other._age;
        _height = other._height;
    }
    return *this;
}
```

