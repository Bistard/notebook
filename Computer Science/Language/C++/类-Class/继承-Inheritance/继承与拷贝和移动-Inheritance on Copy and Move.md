## 派生类的Big 4 - Big 4 of Derived Class

回顾我们前提代码中, 一共涉及到了3个classes: `Book`, `Textbook` 和 `Comic`.

> <u>当为派生类 (derived class) 定义copy/move constructor的时候, 我们通常使用对应的基类 (base class) 构造函数初始化对象的base class的部分.</u>

下面为derived class的big 4的写法案例

```cpp
class Textbook : public Book {
public:
    // copy constructor
    Textbook(const Textbook &other): Book {other},       // base class:    copy constructor
    								 topic {other.topic} // derived class: member initialization
    {}
    // move constructor
    Textbook(Textbook &&other): Book {std::move(other)},       // base class:    move constructor 
    							topic {std::move(other.topic)} // derived class: member initialization
    {}
    // copy operator
    Textbook &operator=(const Textbook &other) {
        if (&other == this) return *this;
        Book::operator=(other); // base class:    copy assignment operator
        topic = other.topic;    // derived class: member initialization
        return *this;
    }
    
    // move operator
    Textbook &operator=(Textbook &&other) {
        if (&other == this) return *this;
        Book::operator=(std::move(other)); // base class:    copy assignment operator
        topic = std::move(other.topic);    // derived class: member initialization
        return *this;
    }
};
```

## 基类的拷贝赋值运算符 - Copy Assignment Operator of a Based Class

考虑一下情景

```cpp
int main() {
	Book *b1 = new Textbook {};
    Book *b2 = new Textbook {};
    *b1 = *b2; // (0)
}
```

在`(0)`处时, 只有`Book`的部分数据被赋值 (copy)了, 因此这个情况被叫做<u>partial assignment</u> (memory corrupted). 

那么我们要如何解决呢? 我们可以<u>试图</u>去使用`virtual `去定义copy assignment operator.

先看一段错误代码:

```cpp
class Book {
public:
    virtual Book &operator=(const Book &other);
};

class Textbook : public Book {
public:
    Textbook &operator=(const Textbook &other) override; // (1)
};
```

上述`(1)`不能被compile, 因为在`Textbook`中, 被标记为override的copy assignment operator的signature, 和`Book`中的copy assignment operator<u>并不同</u>. 因为他们不是同一个function parameter.

> Remark: 注意问题并不出现在它们的返回值不同, 因为返回一个`Textbook`就相当于返回一个`Book`, 因为一个`Textbook`就是一个`Book`. 

所以上述代码应该改为

```cpp
class Textbook : public Book {
public:
    Textbook &operator=(const Book &other) override; // (2)
};
```

**但是**, 问题并没有被完全解决. 如果传入进来的类型是一个`Comic`类型呢? 那么它的成员`std::string hero`该何去何从呢? 外面可能有无穷无尽个派生类 (derived class), 我们没法去对每一个class都针对写一个assignment operator.

## 解决方案 - 1

考虑之前的继承关系为下图左边, 现在我们将关系改写成下图右边:

<img src="D:\dev\AllNote\.mdnote\assets\image-20211112144643643.png" alt="image-20211112144643643" style="zoom:50%;" />

对于`AbstractBook`, 我们有以下代码

```cpp
class AbstractBook {
protected:
    AbstractBook &operator=(const AbstractBook &other); // non-virtual
};
```

那么我们就可以像下方一样去完成我们派生类的拷贝赋值运算符

```cpp
class Textbook : public AbstractBook {
public:
    Textbook &operator=(const Textbook &other) // non-virtual
    {
		if (&other == this) return *this;
        AbstractBook::operator=(other);
        topic = other.topic;
        return *this;
    }
};
```

**<u>我们这么做的目的是什么</u>**? 就是防止以下代码发生:

```cpp
int main() {
    Book *b1 = new Textbook {};
    Book *b2 = new Textbook {};
    *b1 = *b2; // (3) 因为是copy assignment operator protected, 因此防止了此类事件的发生, 不允许partial assignment
}
```

## 解决方案 - 2

我们重新考虑`(2)`处的代码, 并利用`dynamic_cast<T>`帮助我们解决问题

```cpp
class Textbook : public Book {
public:
    Textbook &operator=(const Book &other) override {
        const Text & otherText = dynamic_cast<Const Textbook &>(other); // (4)
        if (&otherText == this) return *this;
        Book::operator=(other);
        topic = other.topic;
        return *this;
    }
};
```

**注意**, 这种写法在`(4)`处的时候, 如果`other`不是`const TextBook &`, 那么就会发生throw. 问题将抛给caller去解决. 



## 小结

解决防范1的好处是, 可以直接在compile time去避免发生类似的问题. 解决方法2的好处是, 可以通过compile time, 但是runtime可能会出现throw. 至于权衡利弊, 就要交给给你去考量了.

