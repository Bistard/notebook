# 移动构造函数 - Move Constructor

类似string类（及其他标准库类)，如果我们自己的类也同时支持移动和拷贝，那么也能从中受益。为了让我们自己的类型支持移动操作，需要为其定义移动构造函数和移动赋值运算符. 这两个成员类似对应的拷贝操作，但它们从给定对象 “**窃取 (steal data)**” 资源而不是拷贝资源.

类似拷贝构造函数，移动构造函数的第一个参数是该类类型的一个引用.

不同于拷贝构造函数的是，这个引用参数在移动构造函数中是一个**右值引用 (rvalue reference, &&)**.

与拷贝构造函数一样，任何额外的参数都必须有默认实参.

```cpp
class Human {
	Human(Human &&other); // Move ctor
};
```

除了完成资源移动，移动构造函数还必须确保移动后, 源对象处于这样一个状态——销毁它是无害的。特别是，一旦资源完成移动，源对象必须**<u>不再指向</u>**被移动的资源——这些资源的<u>**所有权已经归属**</u>新创建的对象。

考虑以下情况:

```cpp
class Human {
public:    

    Human() = default;
    Human(std::string name, int age, double height): _name(name), _age(age), _height(height), _child(nullptr) {}
    // move constructor
    Human(Human &&other): _name(other._name), _age(other._age), _height(other._height), _child(other._child) {
        std::cout << "calling move constructor" << std::endl;
        other._child = nullptr;
    }
private:
    std::string _name;
    int _age;
    double _height;
    Human *_child;
};

Human createHuman(Human newman) {
    return newman;
}

int main() {
    Human newman("chris li", 19, 180.12);
    Human chris = createHuman(newman); // calling copy constructor, then will call move constructor
    chris.info();
}
```



