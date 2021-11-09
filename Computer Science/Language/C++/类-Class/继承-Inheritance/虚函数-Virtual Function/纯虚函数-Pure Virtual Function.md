# 介绍

考虑以下

```cpp
class Student { // such a class is called an abstract class
public:
    virtual float fees() const = 0; // called as a pure virtual method (subclass must override this method)
};

class RegularStudent : public Student {
public:
    virtual float fees() const override {}
};

class CoOpStudent : public Student {
public:
    virtual float fees() const override {}
};

```

* **Abstract Class** - <u>CANNOT</u> be instantiated.
* **Concrete Class** - classes are not abstract classes.
* **Pure Virtual Method** - NO implementation, sub class must override.
* **Subclasses of Abstract Class** - are also abstract, unless, all pure virual methods are implemented.

虽然不能被实例化, 但是我们可以创建对应的指针去指向其他concrete classes

```cpp
Student *s = new RegularStudent {};
```

## 抽象类的作用 - Usage on Abstract Class

* Used to organize concrete subclasses (<u>a way to describe the relationship between concrete classes</u>)
* can contain common fields, methods, default implementation.