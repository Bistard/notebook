# 介绍

```cpp
class vector final {
    // ...
}
```

`final`关键词让`vector`类无法成为`superclass`.

## 没用的小知识

`final`并不是关键词, 你可以像下面这样写:

```cpp
int main() {
    int final = 5; // 可以成功compile
}
```

`final`是C++独二的, 只有在非常具体的使用情况下 (写在一个函数declaration的末尾), 才会被识别成相对应的功能.

剩下的最后一个是`override`标识符.
