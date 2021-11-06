# 介绍

对于每一个数组, 只对应一个地址. 假设我们有一个数组为:

```cpp
int array[2] = {7, 5};
```

它在内存中是如下图显示的:

| 内存 (byte) | 0        | 1    | 2    | 3    | 4        | 5    | 6    | 7    | 8    | 9    | 10   |
| ----------- | -------- | ---- | ---- | ---- | -------- | ---- | ---- | ---- | ---- | ---- | ---- |
| 值 (value)  | 5        |      |      |      | 6        |      |      |      |      |      |      |
| 名字 (name) | array[0] |      |      |      | array[1] |      |      |      |      |      |      |

因为`int`类型在计算机中占`4 bytes`, 并且数组在计算机中是连续的内存块, 所以每4个内存格就是一个数组元素.

> 一个数组的地址等效于这个数组的第一个元素的地址.

```cpp
int* pMyArray1 = MyArray;
int* pMyArray2 = &MyArray[0];
// 两行等效
```

用地址指针去访问数组中的每个元素

```cpp
#include <iostream>
using namespace std;

int main() {
    int myArray[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    char myArray2[5] = { 'C', 'H', 'R', 'I', 'S' };
    int* pMyArray = myArray;
    char* pMyArray2 = myArray2;

    cout << "int type:" << endl;
    for (int i = 0; i < 10; i++) {
        cout << *pMyArray << " at " << (int)pMyArray << endl;
        pMyArray++;
    }

    cout << "char type:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << *pMyArray2 << " at " << (int)pMyArray2 << endl;
        pMyArray2++;
    }
}
```

```cpp
int type:
1 at 758184520
2 at 758184524
3 at 758184528
4 at 758184532
5 at 758184536
6 at 758184540
7 at 758184544
8 at 758184548
9 at 758184552
10 at 758184556
char type:
C at 758184580
H at 758184581
R at 758184582
I at 758184583
S at 758184584
```

`int`类型在计算机中占`4 bytes`.

`char`类型在计算机中占`1 byte`.

