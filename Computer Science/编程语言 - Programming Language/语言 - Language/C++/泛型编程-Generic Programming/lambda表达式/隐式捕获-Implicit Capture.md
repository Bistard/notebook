# 介绍

除了显示捕获, 我们还可以让compiler根据lambda体中的代码来推断我们要用哪些变量. 为了指示compiler, 我们写入一个&或者=:

```cpp
auto f = [&] (const int num) { return (LOCAL_MIN <= num) && (num <= LOCAL_MAX); };
```

也可以混合隐式+显式 (但是隐式必须是第一个, 作为default):

```cpp
auto f = [&, LOCAL_MAX] (const int num) { return (LOCAL_MIN <= num) && (num <= LOCAL_MAX); };
```

这里的案例, 其他变量默认为captured by reference, 而`LOCAL_MAX`为显式captured by value.

<img src="D:\dev\AllNote\.mdnote\assets\image-20211107220146349.png" alt="image-20211107220146349" style="zoom:50%;" />

