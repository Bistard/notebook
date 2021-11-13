# 介绍

什么是`static_cast<T>`?

> 相当于告知compiler, **<u>你要相信我</u>**, 这么写没有问题.

## 案例一 - 普通的类型转换

```cpp
void foo(int x);
void foo(double x);
int main() {
    int a = 5;
    foo(static_cast<double>(a));
}
```

## 案例二 - Derived Class Pointer to Base Class Pointer

```cpp
int main() {
	Book *b = new Textbook {};
    Textbook *text_b = b; // NOT WORK
    Textbook *text_b = static_cast<Textbook *>(b); // FORCE compiler to 'TRUST ME'
}
```

> you <u>HAVE</u> to make 100% sure that this will work!

## 小小的好处

参考下面C风格的casting

```cpp
(type) expression
```

你无法在代码中去试图搜索 `(type)`, 因为这基本上可以是任何文本...

但是`static_cast`的好处之一, 就是你可以去搜索出来`static_cast`到底出现在了哪里, 可以快速定位潜在问题.