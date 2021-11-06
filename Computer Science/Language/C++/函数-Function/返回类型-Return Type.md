# 无返回值 - void

无返回值函数使用void来代替返回值. 通常情况下, void函数想要在中间部分提前退出, 可以使用return语句. 比如, 下面案例用来编写一个swap函数:

```cpp
    1 void swap(int &v1, int &v2) {
    2     if (v1 == v2) {
    3         return;
    4     }
    5     else {
    6         int temp = v1;
    7         v1 = v2;
    8         v2 = temp;
    9     }
   10 }
   11 
   12 int main()
   13 {
   14     int v1, v2;
   15     v1 = 5, v2 = 3;
   16     swap(v1, v2);
   17     cout << v1 << v2 << endl;
   18     return 0;
   19 }

// >>> 35
```

## 小技巧

```cpp
void f1() { /* ... */ } // 隐式地定义空形参列表
void f1(void) { /* ... */ } // 显式地定义空形参列表
```

# 有返回值 - return

有返回值函数需要给函数声明一个任意合法的c++数据类型, 结尾使用return语句的时候也要返回同样的类型, 否则会编译错误:

```cpp
    1 bool isMale(string sex) {
    2     if (sex == "male") {
    3         return true;
    4     }
    5     else {
    6         return false;
    7     }
    8 }
    9 
   10 int main()
   11 {
   12     string sex = "male";
   13     cout << isMale(sex) << endl;
   14     return 0;
   15 }
// >>> 1
```

