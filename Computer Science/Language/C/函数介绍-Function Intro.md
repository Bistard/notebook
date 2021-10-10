# 函数介绍-Function Intro

- **介绍**

一个C++程序会包含多个函数(Function), 其中有一个必须命名为 **main**. 一个函数必须包含四个部分: **返回类型** (return type), **函数名** (function name), **形参列表** (parameter, 用括号()包括, 允许为空) 和**函数体** (function body, 用花括号{}包括). 比如下面是一个什么也不干的**main**函数:

```cpp
int main()  {
    return 0;  
}  
```

一个典型的函数 (function) 包括以下部分: 返回类型 (return type), 函数名字, 0个/多个形参 (parameter), 其中形参以逗号分开.

我们通过调用运算符 (call operator) 来执行函数 (一对圆括号). 圆括号内用逗号来区分实参 (argument). 

- 案例

- 如何编写一个求数的阶乘函数:

  ```cpp
  #include <iostream>;
  using namespace std;
  
  int factorial(int val) {
      int res = 1;
      for (int i = 2; i <= val; i++) {
          res *= i;
      }
      return res;
   }
       
   int main()
   {
       cout << factorial(5) << endl;
       return 0;
   }
  ```

  

- **调用函数(call the function)**

当一个函数完成调用时, 需要完成两项任务: 一是将实参传入对应的形参. 二是暂时中止主函数 (calling function) 的执行, 先运行被调函数 (called function).

 

- **形参(parameter)/实参(argument)**

当有多个形参, 传入实参时并须按照顺序对应, 哪怕有的形参可能在代码块中并没有使用到 (程序员失误), 但也必须提供一个实参, 也就是说实参和形参的数量一定相等.

- **局部对象**

如我们所知, 函数体是一个**语句块**. 块构成了一个**新的作用域**. 我们在其中定义的变量和形参, 统统叫做**局部变量** **(****local** **variable****)**. 

- **函数声明**

一个函数只能**定义一次**, 但是可以**声明多次** (如果一个函数我们永远都用不到, 那么他就可以只有声明但没有定义). 

- 可以先声明, 然后定义放在后面.

```cpp
using namespace std;

int factorial(int val);
    
int main()
{
    cout << factorial(5) << endl;
    return 0;
}
 
int factorial(int val) {
    int res = 1;
    for (int i = 2; i <= val; i++) {
        res *= i;
    }
    return res;
}
```

