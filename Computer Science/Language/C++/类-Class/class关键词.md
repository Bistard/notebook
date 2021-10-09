类的基本思想就是**数据抽象 (data abstraction)** 和**封装 (encapsulation)**. 类体由花括号{}包围形成一个新的作用域, 类内部的定义的名字**必须唯一**, 但是可以与类外部的定义重复.

# class关键词

定义一个**类 (class)** 使用class关键词, 后面紧跟**大写开头**的类名称 (建议而已). 假设我想定义一个叫Human的类, 并紧接着实例化名叫为man:

```cpp
    1 class Human {};
    2 
    3 int main()
    4 {
    5     Human man;
    6     return 0;
    7 }
```

# 属性 - Field

对于每个Human来说, ta们都有自己的名字 (name), 年龄 (age)和身高(height), 这些数据都属于类的**属性 (field)**. 所以我们对原来的类进行改造:

```cpp
    1 class Human {
    2     public:
    3         string name;
    4         int age;
    5         double height;
    6 };
```

* 给object的属性赋值:

```cpp
    1 int main()
    2 {
    3     Human man;
    4     man.name = "Chris Li";
    5     man.age = 18;
    6     man.height = 1.7;
    7     return 0;
    8 }
```

# 隐性参数 - this

`this`是一个`implicit pointer to the object`可以通过隐形参数this去修改field:

```cpp
class Class1 {
public:
    Class1(int num) {}
    void print_field()
    {
        std::cout << this->_num_field << std::endl;
    }
private:
    int _num_field;
};
```

this的目的总是指向"这个"object (理解为python中的变量"self"), 所以this是一个**常量指针**, 我们不允许修改this中保存的地址.

# 成员函数 - Member Functions (method)

定义在类的作用域之内的函数 (非构造函数), 名为成员函数 (member functions), 或者叫做类方法 (method).

现在我们回到前面案例提到的Human类, 每个Human都会"长大", 因此我们去定义一个成员函数去修改对象的age属性, 因为不需要返回任何值, 所以我们返回类型选择void:

```cpp
    1 void growUp() {
    2     age++; // age++'
    3     cout << "I'm " << age << " years old." << endl;
    4 }
```

```cpp
    1 Human Chris("Chris Li", 18, 1.7);
    2 Chris.growUp();
```

```cpp

```
