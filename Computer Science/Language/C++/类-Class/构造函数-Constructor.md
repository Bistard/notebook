# 介绍

每个类都会定义它的对象被初始化的方式. 类会通过一个/多个特殊的成员函数 (method) 去控制初始化的过程, 这些特殊的函数被叫做**构造函数(constructor functions)**. 在被初始化 (实例化) 的过程中, 构造函数总是被运行.

* *structures that can contain functions* - `class`

* *functions inside a structure* - `method`

* *instances of a structure* - `object`

紧接着上一章的案例:

```cpp
    1 class Human {
    2     public:
    3         string name;
    4         int age;
    5         double height;
    6 };
    7 
    8 int main()
    9 {
   10     Human man;
   11     man.name = "Chris Li";
   12     man.age = 18;
   13     man.height = 1.7;
   14     return 0;
   15 }
```

# 构造函数-Constructor

每一次初始化Human类之后, 都要手动输入数据, 过于麻烦. 这个时候我们就可以在class类中添加一个构造函数, 去设定一个初始化的方法. 以下列出了构造函数的一些特点+案例代码:

* 构造函数一定与类名称**同名**.
* 构造函数**没有返回类型**.
* 构造函数可以**没有/有多个**参数 (parameters).
* 构造函数可以有一个**空的函数体**.

以上面的案例做改造, 从案例中可以看出唯一的构造函数需要3个arguments (aName前面的a代表argument), 并将这些arguments分别传入Human类的成员属性当中, 并print出来. 所以在主函数main中, 需要在对象实例化的过程中, 用调用符()去传入参数:

```cpp
    1 class Human {
    2     public:
    3         string name;
    4         int age;
    5         double height;
    6         
    7         Human(string aName, int aAge, double aHeight) {
    8             name = aName;
    9             age = aAge;
   10             height = aHeight;
   11             cout << "My name is " << name << ", and I'm " << age 
   12                 << " years old and " << height << " tall." << endl;
   13         }
   14 };
   15 
   16 int main()
   17 {
   18     Human man("Chris Li", 18, 1.7);
   19     return 0;
   20 }
```

```cpp
>>>My name is Chris Li, and I'm 18 years old and 1.7 tall.
```

对象

当一个对象 (Object) 被创建的时候, 以下是四个步骤:

* Space
   allocated
* (later)
* Field
   constructor in declaration order (field ctor called for which are objects)
* Constructor
   body runs

# 多个构造函数-Mutiple Constructors

一个类可以有多个不同的构造函数, 这样就可以有不同的初始化方法. 

## 默认构造函数 - Default Constructor

如果一个class/struct的定义内, 没有显性地写出一个constructor, 则compiler会生成一个**默认构造函数 - default constructor function**. 当你初始化那个class/struct的时候则会调用这个默认构造函数.

如果class中每个object field都有自己的default constructor, 那么当当前class的默认构造函数则会初始化这些field, 然后最终实例化一个该class的object. 见下面案例:

```cpp
#include <iostream>

class Class1 {
public:
    void print_field()
    {
        std::cout << _num_field << std::endl;
    }
private:
    int _num_field;
    Class2 _class2_field;
};

class Class2 {
public:
    Class2() {} // 如果这一行没有, 那么Class1的默认构造函数将不能正常实例化类, 因此会报错.
    Class2(int num) 
    {
        _num_field = num;
    }
    void print_field()
    {
        std::cout << _num_field << std::endl;
    }
private:
    int _num_field;
};

int main() {
    Class1 class1;
}
```
