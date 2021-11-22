# 工厂方法模式 - Factory Method Pattern

> The Factory Method Pattern deﬁnes an interface for creating an object, but **lets subclasses decide which class to instantiate**. Factory Method lets a class **defer instantiation to subclasses**.



## 案例 - Example

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122133203001.png" alt="image-20211122133203001" style="zoom:67%;" />

Consider if we want

* when GameLevel is Easy: generate mostly Turtle.
* when GameLevel is Hard: generate mostly Bullet.

```cpp
class GameLevel {
public:
    virtual Enemy *getEnemy() = 0;
};

class Easy : public GameLevel {
public:
    Enemy *getEnemy() override {
        // generates mostly Turtle
    }
};

class Hard : public GameLevel {
public:
    Enemy *getEnemy() override {
        // generates mostly Bullet
    }
};
```



```cpp
Enemy *generateAnEnemy(Level *l) {
    Enemy *e = l->getEnemy(); // we do not what kind of enemy we got, it dep
    return e;
}
```

