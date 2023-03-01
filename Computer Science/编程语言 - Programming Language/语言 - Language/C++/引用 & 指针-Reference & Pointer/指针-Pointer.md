# 介绍

指针 (pointer) 是指向另外一种类型的复合类型 (Compound Types). 于引用类似, 都是一种对其他对象的一种"间接引用". 不同的是:

* 指针本身就是一个**对象**, 可以对指针拷贝和赋值 (相比reference并不是一个对象).
* 指针无需在初始化时赋值.

```cpp
int *num1, *num2, *num3;
```

# 获取地址 (Address)

指针存放某个对象的内存地址, 要想获取该地址, 需要使用取地址符 (& - ampersand, aka. address-of operator):

```cpp
int num = 27;
int* pNum = &num; //pNum存放了num的地址, 或者说pNum是指向num的指针
```

* 先将pNum定义为指向int的指针 (因为引用不是对象, 没有实际地址, 所以不能定义为指向引用的指针).
* 再将pNum指向名为num的int对象.

# 指针和对象的类型

指针和其指向对象的类型必须严格匹配:

```cpp
int num;
int* pNum = &num; // ✔

int* pNum2 = pNum; // ✔
double* pNum3 = pNum; // ❌
```

# 取址 - Dereference

如果指针指向了一个对象, 我们使用解引用符 (操作符 *, aka. Dereference operator):

```cpp
int age = 18;
int* pAge = &age;
    
cout << pAge << endl;  // 00AFFE80
cout << *pAge << endl; // 18
```

# 空指针 - Void Pointer

创建空指针有3种方法:

```cpp
int *p = nullptr; // c++ 建议使用该方式
int *p = 0;
int *p = NULL;
```

最直接的方法就是用字面值nullptr来初始化空指针. 空指针的含义是**不再指向任何东西**. 我们无法通过空指针去访问数据.

> ```cpp
> int num = 0;
> int *p = num; // 这么写是不对的, 哪怕刚好等于0
> ```

> 我们不能对空指针进行dereference:

# 赋值和指针

给指针赋值就是令它指向一个新的对象, 获得一个新的地址:

```cpp
int i = 18; 
int* pi = 0; //初始化pi不指向任何地址.
int* pi2 = &i; //初始化pi2指向i的地址.
int* pi3; //初始化pi3不指向任何地址.

pi3 = pi2; //pi3和pi2同时指向同一个地址.
pi2 = 0; //pi2现在不指向任何地址.
```

