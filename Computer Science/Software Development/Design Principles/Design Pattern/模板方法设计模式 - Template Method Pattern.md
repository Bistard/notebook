# 模板设计模式 - Template method pattern

考虑以下C++代码：

```cpp
class Turtle {
public:
    void draw() {
        __drawHead();
        __drawShell();
        __drawFeet();
	}
private:
    void __drawHead();
    virtual void __drawShell() = 0;
    void __drawFeet();
};
```

```cpp
class GreenTurtle : public Turtle {
private:
    void __drawShell() overrdie;
};

class RedTurtle : public Turtle {
private:
    void __drawShell() overrdie;
};
```

> subclasses cannot control the steps of drawing a turtle, nor the drawing of head or feet. Can only control the drawing of the shell, called the <u>Template Method Pattern</u>.

