# 介绍

关于实参的三件事:

* 既可以在函数声明中, 也可以在函数定义中, 指定默认实参. 但是在一个文件中, 只能为一个形参指定默认实参一次.
* 如果在函数定义的形参表中提供默认实参，那么只有在包含该函数定义的源文件中调用该函数时，默认实参才是有效的。细细一想才明白这句话的含义，于是从网上找了一篇关于这两句话的解释，然后转在这里，积累点点滴滴。
* **实参后面只能跟实参**.

## 案例

```cpp
//CPerson.h
int initPerson(int old, string name = "二毛", string race = "汉");

//CPerson.cpp
#include "CPerson.h"

//int initPerson(int old, string name = "二毛", string race = "汉") {...} 

/* 
既可以在函数声明也可以在函数定义中指定默认实参。但是，在一个文件中(注意#include 
包含了接口文件CPerson.h)，只能为一个形参指定默认实参一次。所以上面的是错误的。 
*/  
int initPerson(int old, string name, string race)  { /* ... */ } 
```

