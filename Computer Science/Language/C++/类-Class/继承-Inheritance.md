# 介绍

通过<u>继承 (inheritance)</u> 将两个不同的类构成一种层次结构. 在层次的底部的类叫做<u>父类 (parent class, aka. base class)</u>, 处于层次的上部的类叫做<u>子类 (child class, aka. derived class)</u>. 超类是子类的超集.

假设我们有一个类名叫Chef:

```cpp
    1 class Chef {
    2     string name;
    3     public:
    4         
    5         Chef(string name){
    6             this->name = name;
    7             cout << "My name is " << name << endl;
    8         }
    9         
   10         void makeNoodle() {
   11             cout << "I can make noodle." << endl;
   12         }
   13 
   14 };
```

# 派生类列表 (Class Derivation List)

子类需要用派生类列表来指明来自于哪一个(哪一些)父类. 派生类列表的形式是: 首先是一个冒号, 后面紧跟着访问说明符和父类的名称, 首先，继承过程中使用访问说明符主要是为了控制**继承下来的成员的访问性 (accessible)**.

现在我们来创建一个类名叫ChineseChef并继承Chef类:

```cpp
    1 class ChineseChef: public Chef 
    {

    }
```

因为ChineseChef在派生列表中使用了public关键词, 因此我们完全可以把ChineseChef当作Chef类来使用 (因为Chef类中所有成员都定义在public后面, 所以我们的ChineseChef使用了public访问说明符继承之后就可以使用所有的Chef类的成员).

# 子类构造函数

尽管在子类对象中含有从父类继承过来的成员, 但是子类并不能直接初始化这些成员. 子类也必须使用父类的构造函数来初始化子类本身的一部分.

接着定义一下ChineseChef类的构造函数, 我们将name参数传入了Chef父类, 由Chef类的构造函数负责初始化这些数据 (相当于调用了一次Chef的构造函数):

```cpp
    1 ChineseChef(string name, string country): Chef(name){
    2     this->country = country;
    3     cout << "Im a " << country << " chef." << endl;
    4 }
```

# 案例 - Example

最终代码呈现如下:

```cpp
    1 #include <iostream>;
    2 using namespace std;
    3 
    4 class Chef {
    5     public:
    6         string name;
    7         Chef(string name){
    8             this->name = name;
    9             cout << "My name is " << name << endl;
   10         }
   11         
   12         void makeNoodle() {
   13             cout << "I can make noodle." << endl;
   14         }
   15 };
   16 
   17 class ChineseChef: public Chef {
   18     public:
   19         string country;
   20 
   21         ChineseChef(string name, string country): Chef(name) {
   22             this->country = country;
   23             cout << "Im a " << country << " chef." << endl;
   24         }
   25 
   26         void makeChineseFood() {
   27             cout << "I can make chinese noodle." << endl;
   28         }
   29 };
   30 
   31 int main()
   32 {
   33     Chef man1("Chris Li");
   34     man1.makeNoodle();
   35     man1.makeChineseFood();  //❌因为该成员函数只存在子类ChineseChef
   36     ChineseChef man2("Peter Li", "chinese");
   37     man2.makeNoodle();
   38     man2.makeChineseFood();
   39     return 0;
   40 }
```

```cpp
>>>My name is Chris Li.
>>>I can make noodle.
>>>My name is Peter Li.
>>>I'm a chinese chef.
>>>I can make noodle.
>>>I can make chinese noodle.
```
