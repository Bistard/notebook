# 回顾 - C的风格

在C语言中, 类型转换的语法为

```
cast_type variable = (cast_type) expression;
```

从风险上考虑, 上述在编程的过程中确实是一个很危险的事情, <u>我们无法在compile time的时候去及时发现问题所在</u>.

C++的风格中, 提供了<u>4种casting way</u>.

* `static_cast` - for conversions with a well-defined semantics.
* `reinterpret_cast`  - for casts without a well-defined semantics (unsafe, implementation-dependent, weird casting).
* `const_cast` - for adding / removing `const`.
* `dynamic_cast` - more safe conversions than `staic_cast`.

