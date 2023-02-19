# 接口隔离 - Interface Segregation Principle

ISP says

> A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

or

> If a class has many functionalities, each client of the class should see only the functionality they need.

## 案例 - Example

```cpp
// enemy.h
class Enemy {
public:
	virtual void draw();   // needed by UI
    virtual void strike(); // needed by Game Logic
};

// ui.h
class UI {
	std::vector<Enemy *> vec;
};

// battlefield.h
class BattleField {
	std::vector<Enemy *> vec;
};
```

如果说我们修改了`void draw()`函数， `BattleField`必须要被recompile。

同理如果我们修改了`void strike()`函数，`UI`必须要被recompile。

但是这些recompile都是完全没必要的 - change one feature will also changes the other - high coupling.

### 解决方案一 - Solution One

```cpp

class Draw {
public:
    virtual void draw() = 0;
};

class Combat {
public:
    virtual void stirke() = 0;
};

class Enemy : public Draw, public Combat {};

// ui.h
class UI {
	std::vector<Enemy *> vec;
};

// battlefield.h
class BattleField {
	std::vector<Enemy *> vec;
};
```



