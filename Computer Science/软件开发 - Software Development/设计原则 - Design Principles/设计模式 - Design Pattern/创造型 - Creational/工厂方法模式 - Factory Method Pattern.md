# 工厂方法模式 - Factory Method Pattern

> The Factory Method Pattern deﬁnes an interface for creating an object, but **lets subclasses decide which class to instantiate**. Factory Method lets a class **defer instantiation to subclasses**.

<img src=".images/image-20230227111401703.png" alt="image-20230227111401703" style="zoom:50%;" />

## 案例 - Example

<img src=".\.images\image-20211122133203001.png" alt="image-20211122133203001" style="zoom:67%;" />

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
Enemy *generateAnEnemy(GameLevel *l) {
    Enemy *e = l->getEnemy(); // we do not know what kind of enemy we got, it depends on the actual implementations.
    return e;
}
```

