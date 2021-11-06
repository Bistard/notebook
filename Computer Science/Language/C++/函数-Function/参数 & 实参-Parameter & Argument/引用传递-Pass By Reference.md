# 介绍

回忆之前的知识, 我们知道对引用的操作实际上是作用在引用索引的对象上. 和指针类似, 我们可以通过引用传递让function修改多个实参 (argument)的值:

```cpp
#include <stdio.h>
void reset(int &num) {
    num = 0;
}
int main() {
    int a = 5;
    reset(a);
    printf("%d\n", a); // 0
}
```

