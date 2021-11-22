

# 开闭原则 - Open-Close Principle

Open-closed Principle (OCP) states:

> Objects or entities should be open for extension but closed for modification.

This means that a class should be extendable without modifying the class itself.

* changes in a program's behaviour should happen by writing new code - extending functionality - not changing old code.

## 案例 - Example

考虑以下UML

![image-20211122110222722](D:\dev\AllNote\.mdnote\assets\image-20211122110222722.png)

如果说我们想要往Earth添加一个新的物钟，比如`Cat`呢？这样的UML设计就是not open for extension - must change source code.

我们可以修改成以下 (利用Abstraction): Earch should work with an abstract Animal (this is using <u>Strategy Pattern</u>).

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122110742423.png" alt="image-20211122110742423" style="zoom:50%;" />

> **Note**: can't really be 100% closed. Some changes require source modification.

