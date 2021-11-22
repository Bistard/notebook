# 单例模式 - Singleton Pattern

单例模式（Singleton Pattern）是 最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。

这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。

> * 1、单例类**只能有一个**实例。
> * 2、单例类必须自己创建自己的唯一实例。
> * 3、单例类必须给所有其他对象提供这一实例。

## 案例

拿c++举例, 写法如下

```cpp
// singleton.h
class Singleton {
private:
	Singleton(); // private constructor, cannot be constructed outside of the classes
public:
	static Singleton &Instance() {
        static Singleton instance;
        return instance;
    }
    ~Singleton();
};

// main.cpp
int main() {
    Singleton &instance = Singleton::Instance(); // This is the ONLY way to get the instance of the class type `Singleton`
}
```

---

部分内容摘抄于

* https://www.runoob.com/design-pattern/singleton-pattern.html

