# 介绍

以下为全部代码:

```cpp
#include <iostream>
#include <string>

class Human 
{
public:
    
    // constructor
    Human() = default;
    Human(std::string name, int age, double height): _name(name), _age(age), _height(height), _child(nullptr) 
    {
        std::cout << "calling constructor" << std::endl;
    }

    // copy constructor
    Human(Human &other): _name(other._name), _age(other._age), _height(other._height) 
    {
        std::cout << "calling copy constructor" << std::endl;
        _child = nullptr;
        if (other._child) {
            _child = new Human(*other._child);
        }
    }
    
    // copy-assignment operator
    Human &operator=(const Human &other)
    {
        std::cout << "calling copy-assignment operator" << std::endl;
        if (&other != this) {
            _name = other._name;
            _age = other._age;
            _height = other._height;
            delete _child;
            _child = other._child;   
        }
        return *this;
    }

    // move constructor
    Human(Human &&other): _name(other._name), _age(other._age), _height(other._height), _child(other._child)
    {
        std::cout << "calling move constructor" << std::endl;
        other._child = nullptr;
    }

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

    void info()
    {
        std::cout << "name: " << _name << std::endl;
        std::cout << "age: " << _age << std::endl;
        std::cout << "height: " << _height << std::endl;
        std::cout << "child: " << (_child ? _child->_name : "no children") << std::endl;
    }
private:
    std::string _name;
    int _age;
    double _height;
    Human *_child;
};

Human createHuman()
{
    Human newman("chris li", 19, 180.12);
    return newman;
}

int main()
{
    Human chris = createHuman();
    chris.info();
}
```

按照常理来说, `main()`中应该会先constructor, 然后调用move constructor. 然而我们的output为:

```cpp
calling constructor
name: chris li
age: 19
height: 180.12
child: no children
```

⭐并没有调用任何的copy/move constructor. 因为我们的compiler帮助我们省略掉了. 我们可以在g++中, 添加以下flag来**阻止这种优化**:

```
g++14 -fno-elide-constructors ...
```

当我们添加了该flag然后再compile后, 我们获得

```
calling constructor
calling move constructor
calling move constructor
name: chris li
age: 19
height: 180.12
child: no children
```

