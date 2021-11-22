# 单一功能 - Single Responsibility Principle (SRP)

Single-responsibility Principle (SRP) states:

> A class should have one and only one reason to change, meaning that a class should have only one job.

## 违反案例 - Violates SRP

### Print Things

Don't let your classes print things

```cpp
class ChessBoard {
	std::cout << "your move" << std::endl;
};
```

- bad design: inhibits (抑制) code reuse.

假设我们有一个`ChessBoard` 类。

violates SRP means we must change this class if there is any change to the specification for

* game rules
* strategy
* interface
* etc.

It means we have a <u>low cohesion</u> code. We need to split these responsibilities up into different smaller classes.