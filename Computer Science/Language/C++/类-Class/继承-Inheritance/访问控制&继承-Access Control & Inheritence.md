# 介绍

在定义子类并继承父类的时候, 我们使用访问说明符去控制继承下来的成员的访问性.

## 访问控制 - Access Control

* private: 只能由该类中的函数、其友元函数访问,不能被任何其他访问，该类的对象也不能访问.

* protected: 可以被该类中的函数、子类的函数、以及其友元函数访问, 但不能被该类的对象访问

* public: 可以被该类中的函数、子类的函数、其友元函数访问,也可以由该类的对象访问

## 继承后的属性变化 - Inheritence

* 使用private继承, 父类的所有方法在子类中变为private;

* 使用protected继承, 父类的protected和public方法在子类变为protected, private方法不变;

* 使用public继承, 父类中的方法属性不发生该改变;


