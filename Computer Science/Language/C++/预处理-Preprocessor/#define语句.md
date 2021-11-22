# 介绍

每行`#define `(逻辑行) 都由3部分组成. 

第1部分是#define指令本身.

第2部分是选定的缩写, 也成为**宏** **(macro)**.

第3部分 (指令行的其余部分) 成为**替换体** **(replacement body)**.

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122151517039.png" alt="image-20211122151517039" style="zoom:50%;" />

`#define`作为最简单的预处理语句的一种, 会在**真正编译 (compile) 之前**对一些名词进行**简单的替换**.

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122151544380.png" alt="image-20211122151544380" style="zoom:50%;" />

## `#define`的简单实用

```cpp
// main1.cpp
int main() {
    int a = 5, b = 6;
    int c = a * b;
}

// 上下两个文件等效

// main2.cpp
#define INTEGER int
INTEGER main() {
    INTEGER a = 5, b = 6;
    INTEGER c = a * b;
}
```

# `#define`的函数定义

`\#define`同时也可以声明一个函数:

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122151743967.png" alt="image-20211122151743967" style="zoom:50%;" />

```cpp
#include <stdio.h>
#define add(a, b) a+b
int main() {
    std::cout << add(5, 6);
}
```

在上面代码中, `add(a, b)` 会被**直接替换**成 `a+b`. 请注意, 在该`#define`中, 并没有申明数据类型, 跟模板 (Template) 的使用非常像. 但是没用模板那么**严谨**. 下面的代码将会展现出`#define`的不严谨.

```cpp
#include <stdio.h>
#define add(a, b) a+b
int main() {
    std::cout << 2 * add(5, 6); // 2 * 5 + 6
}
```

在上述代码中, 我们期望的答案是: 2 * (5+6) = 22. 但是, 经过编译后发现答案是 2 * 5 + 6 = 16. 由此可见: **#define的作用仅仅是最简单的搜查与替换, 并没有做到任何的逻辑处理.**

我们可以简单修改为

```cpp
#include <stdio.h>
#define add(a, b) (a+b)
int main() {
    std::cout << 2 * add(5, 6); // 2 * 5 + 6
}
```

