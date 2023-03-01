# 介绍

<u>引用 (reference)</u> 是给对象起了另外一个名字, 引用类型引用 (refers to) 另外一种类型. 通过将声明符写成&d的形式来定义引用类型, 其中d是声明的变量名:

```cpp
int main() {
    int age = 18;
    int& refAge = age; // refAge指向age (是age的另一个名字) 
    int& refAge;  // 报错, 引用必须被初始化!
    cout << &refAge;
    return 0;
}
```

一般在初始化变量时, 初始值会被拷贝到新建的对象中. 但是在定义引用时, 程序会将应用和它的对象**绑定**在一起, 而**不是将对象复制给引用**. 一旦引用完成了绑定对象, 引用将无法绑定到新的对象, 因此引用必须被初始化.

* 引用**并非对象**, 它只是一个已经存在的对象所起的另外一个名字 (A reference is **not an object**. Instead, a reference is just another name for an already exisiting object).

# 常量引用 - Reference to Const

可以把引用绑在const对象上, 我们称作对常量的引用 (reference to const). 与普通引用不同的是, **对常量的引用不能用作修改它所绑定的对象**:

```cpp
const int num = 5;
int& r1 = num; //❌引用以及其对象必须都是const
const int& r1 = num; //✔
r1 = 5; //❌尝试对const对象做修改
```

