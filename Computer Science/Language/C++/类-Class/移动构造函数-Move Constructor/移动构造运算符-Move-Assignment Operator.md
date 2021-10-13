# 移动构造运算符-Move-Assignment Operator



```cpp
Human &operator=(Human &&other); // move-assignment operator
```

```cpp
// move-assign operator
Human &operator=(Human &&other)
{
    std::cout << "calling move-assignment operator" << std::endl;
    if (this != &other) {
        std::swap(_child, other._child);
        std::swap(_name, other._name);
        std::swap(_age, other._age);
        std::swap(_height, other._height);
    }
    return *this;
}
```

