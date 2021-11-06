# 值传递 - Pass By Value

当初始化 (initialize) 一个<u>非引用类型</u>的变量时, 初始值被拷贝给变量.

```cpp
#include <stdio.h>
void reset(int num) {
    num = 0;
}
int main() {
    int a = 5;
    reset(a);
    printf("%d\n", a); // 5
}
```

# 指针传递 - Pass By Value

## 案例:

```cpp
#include <stdio.h>
void reset(int *num) {
    *num = 0;
}
int main() {
    int a = 5;
    reset(&a);
    printf("%d\n", a); // 0
}
```

注意

```cpp
void reset(int *num)
{
    *num = 0; // 改变num指针所指对象的值
    num = 0; // 只改变了num的局部变量, 实参(argument)未被改变
}
```

下面的案例则不能通过指针修改原数值:

```cpp
#include <stdio.h>
void reset(int *num)
{
    num = 0;
}
int main()
{
    int a = 5;
    reset(&a);
    printf("%d\n", a); // 5
}
```

