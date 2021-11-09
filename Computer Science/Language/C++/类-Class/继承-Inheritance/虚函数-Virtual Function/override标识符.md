# 介绍

`override`标识符有两个功能:

1. It shows the reader of the code that "<u>this is a virtual method, that is overriding a virtual method of the super class</u>."
2. The compiler also knows that it's an override, so it can "<u>check</u>" that you are not altering/adding new methods that you think are overrides.

作为第二点的解释, 参考一下案例:

```cpp
class base {
  public:
    virtual int foo(float x) const = 0; 
};


class derived: public base {
   public:
     int foo(float x) const override { ... } // OK
}

class derived2: public base {
   public:
     int foo(int x) const override { ... } // ERROR
};

class derived3: public base {
   public:
     int foo(float x) override { ... } // ERROR
};
```

## 没用的小知识

`override`并不是关键词, 你可以像下面这样写:

```cpp
int main() {
    int override = 5; // 可以成功compile
}
```

`override`是C++独二的, 只有在非常具体的使用情况下 (写在一个函数declaration的末尾), 才会被识别成相对应的功能.

剩下的最后一个是`final`标识符.