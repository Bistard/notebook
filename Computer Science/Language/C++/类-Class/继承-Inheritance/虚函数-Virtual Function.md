# 介绍

使用指针, 调用类的成员函数时, 普通函数由<u>**指针类型**</u>直接决定.

使用指针, 调用类的虚函数时, 虚函数由指针指向的<u>**对象类型**</u>决定.

这样的特性让我们可以实现<u>多态 - Polymorphism</u>.

# 案例

 紧接着兼容性-Compatibility的内容, 我们修改源代码:

```cpp
class Book {
public:
	virtual bool isHeavy() const; // virtual 关键词
};

class Comic : public Book {
public:
    bool isHeavy() const override; // override 关键词
};

int main() {
    Book *b = new Comic {"superman", "abc", 75, "superman"}; 
    std::cout << b.isHeavy() << std::endl; // true!
}
```

这样我们紧接着兼容性-Compatibility的内容, 我们可以实现一个真正的heterogenous collection:

```cpp
size_t howManyHeavyBooks(const std::vector<Book *> &lib) {
    size_t count = 0;
    for (auto &b : lib) {
        // isHeavy() will behave differently due to the type of the object, instead of the type of the poiner (Book *)
        if (b->isHeavy() == true) ++count;
    }
    return count;
}

int main() {
    std::vector<Book *> library; // we can actually store different types of books into the library now!
    library.push_back( new Book {} );
    library.push_back( new Comic {} );
    // ...
}
```

even better with

```cpp
std::vector<std::unique_ptr<Book>> library;
```

# 原理

参考下图

<img src="D:\dev\AllNote\.mdnote\assets\image-20211109174530427.png" alt="image-20211109174530427" style="zoom:50%;" />

If there is at least one virtual method for each class:

* class creates a table of fn's pointers - one table per class. Such a table is called **virtual table (vtable)**. It contains each corressponding virtual function pointer to its own type. Only accessable by virtual methods.
* each instance (object) of that class or the subclass, it contains an extra **virtual pointer (vptr)** which points to the corresponding virtual table.
* virtual pointer usually are implemented in the first (there are good reasons for such implementation).

## 实际运行逻辑

- calling a virtual method -> follow the virtual pointer (vptr) to the virtual table (vtable), follow the ptr to the correct version of the function.
- if a subclass doesn't override a virtual method -> its vtable will point to the superclass implementation.

# 内存溢出

考虑以下

```cpp
class X {
    int *a;
public:
    X(int n): a {new int {n}} {}
    ~X() { delete [] a; }
};

class Y {
    int *b;
public:
    Y(int n, int m): X {n}, b {new int {m}} {}
    ~Y() { delete [] b; } // Note: Y's dtor will call X's dtor (step (3))
};

int main() {
    X *ptr_x = new Y {3, 4};
    delete ptr_x; // will CALL X's dtor, memory leaks!
}
```

## 解决方案 - Virtual Destructor

```cpp
class X {
    int *a;
public:
    X(int n): a {new int {n}} {}
    virtual ~X() { delete [] a; } // NO MORE LEAKS
};

int main() {
    X *ptr_x = new Y {3, 4};
    delete ptr_x; // will CALL Y's dtor.
}
```

## 注意事项 - Remarks

> **<u>ALWAYS</u>**: make the destructor virtual in classes that are meant to be superclasses - even if the dtor does nothing - your never know what the subclass might do, so you need to make sure its dtor gets called.

> **<u>ALWAYS</u>**: gives your virtual dtor an implementation even if it is empty. Because the subclass dtor will call it.

> If the class is <u>**NOT**</u> meant to be a superclass - no need to incur the cost of the virtual methods. Leave the dtor non-virtual, but declare the class with the keyword: **final**.

