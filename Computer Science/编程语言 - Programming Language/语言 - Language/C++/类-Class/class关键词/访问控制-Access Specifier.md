# 介绍

到目前为止, 我们已经为类定义了接口, 但是目前没有任何机制去限制用户使用这些接口. 也就是说我们的类还没有封装, 用户可以直接访问类对象的内部并控制它的具体实现细节. 我们使用**访问说明符 (access specifiers)** 去限制用户的权限, 加强**封装性**:

* 在**public说明符 (public specifier)** 之后的成员可以在整个程序中被访问.

* 在**private说明符 (private specifier)** 之后的成员只能在当前类中被访问.

* 在**protected说明符 (protected specifier)** 之后的成员只能在当前类或者继承类中被访问.

# 案例

你可能不太明白限制权限有什么实际作用, 我将继续使用之前案例来进行更具象的描述. 现在我们想给human类添加一个新的属性 - 性别 (sex), 如下案例显示:

```cpp
    1 #include <string>;
    2 #include <iostream>;
    3 using namespace std;
    4 
    5 class Human {
    6     public:
    7         string name;
    8         string sex;
    9         int age;
   10         double height;
   11 
   12         Human(string name, string sex, int age, double height) {
   13             this->name = name;
   14             this->sex = sex;
   15             this->age = age;
   16             this->height = height;
   17         }
   18 };
   19 
   20 int main()
   21 {
   22     Human Chris("Chris Li", "dog", 18, 1.7);
   23     return 0;
   24 }
```

在上面的案例中, 看到在主函数main里, 我们初始化案例的时候, 用户输入了dog作为性别. 但是在常识中, 大部分的性别只分male和female. 之所以会导致这种现象就是因为: **用户的权限过高, 可以随意改变类的细节**. 因此我们用关键词private, 并将sex属性放入private关键词内, 这样做就表示sex属性只能在类中被访问:

```cpp
    1 class Human {
    2     private:
    3         string sex;
    4     public:
    5         string name;
    6         int age;
    7         double height;
    8 ...
    9 }
```

紧接着, 我们在public下面, 定义一个返回string类型的函数, 作用就是用来更改private下的sex属性, 并用if语句限定只能出现male或者female:

```cpp
    1 string getSex(string sex) {
    2     if (sex == "male" || sex == "female") {
    3         return sex;
    4     }
    5     else {
    6         cout << "Unidentified sex." << endl;
    7         return "unknown";
    8     }
    9 }
```

再然后, 将构造函数中第14行 `this->sex = sex;` 的代码修改为如下:

这样我们就有效的限制了用户的权限, 防止了"糟糕的输入":

```
>>> Undetified sex.
```
