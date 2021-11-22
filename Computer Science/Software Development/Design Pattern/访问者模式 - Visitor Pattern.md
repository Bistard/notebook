# 访问者模式 - Visitor Pattern

> 最复杂的设计模式，并且使用频率不高，《设计模式》的作者评价为：大多情况下，你不需要使用访问者模式，但是一旦需要使用它时，那就真的需要使用了。
>
> 访问者模式是一种将数据操作和数据结构分离的设计模式。



**意图：**主要将数据结构与数据操作分离。

**主要解决：**稳定的数据结构和易变的操作耦合问题。

**何时使用：**需要对一个对象结构中的对象进行很多不同的并且不相关的操作，而需要避免让这些操作"污染"这些对象的类，使用访问者模式将这些封装到类中。

**如何解决：**在被访问的类里面加一个对外提供接待访问者的接口。

**关键代码：**在数据基础类里面有一个方法接受访问者，<u>将自身引用传入访问者</u>。

**应用实例：**您在朋友家做客，您是访问者，朋友接受您的访问，您通过朋友的描述，然后对朋友的描述做出一个判断，这就是访问者模式。

**优点：** 1、符合单一职责原则。 2、优秀的扩展性。 3、灵活性。

**缺点：** 1、具体元素对访问者公布细节，违反了迪米特原则。 2、具体元素变更比较困难。 3、违反了依赖倒置原则，依赖了具体类，没有依赖抽象。

## 案例 1 - Example 1

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122143344887.png" alt="image-20211122143344887" style="zoom:67%;" />



```cpp
class Enemy {
    virtual void beStrikeBy(Weapon &w) = 0;
};

class Turtle : public Enemy {
	void beStrikeBy(Weapon &w) override { w.strike(*this); }
};

class Bullet : public Enemy {
	void beStrikeBy(Weapon &w) override { w.strike(*this); }
};

class Weapon {
	virtual void strike(Turtle &t) = 0;
	virtual void strike(Bullet &t) = 0;
};

class Stick : public Weapon {
	void strike(Turtle &t) override { /* strike a Turtle with a stick */ }  
    void strike(Bullet &t) override { /* strike a Bullet with a stick */ }  
};

class Rock : public Weapon {
	void strike(Turtle &t) override { /* strike a Turtle with a rock */ }  
    void strike(Bullet &t) override { /* strike a Bullet with a rock */ }  
};
```



## 案例 2 - Example 2

这里的案例也用了visitor pattern

* Book -> Enemy
* BookVisitor -> Weapon
* accept() -> beStrikeBy()
* visit() ->strike()

```cpp
class Book {
public:
    virtual void accept(BookVisitor &v) { v.visit(*this); }
};

class Textbook : public Book {
	virtual void accept(BookVisitor &v) { v.visit(*this); }
};

class Comic : public Book {
	virtual void accept(BookVisitor &v) { v.visit(*this); }
};

class BookVisitor {
public:
	virtual void visit(Book &b) = 0;
    virtual void visit(Textbook *t) = 0;
    virtual void visit(Comic *c) = 0;
};

class Catalogue : public BookVisitor {
public:
    map<std::string, int> theCat;
    void visit(Book &b) overrdie { ++theCat[b.getAuthor()]; }
    void visit(Textbook &t) overrdie { ++theCat[t.getTopic()]; }
    void visit(Comic &c) overrdie { ++theCat[c.getHero()]; }
};
```



---

部分摘抄于

* https://www.runoob.com/design-pattern/visitor-pattern.html

