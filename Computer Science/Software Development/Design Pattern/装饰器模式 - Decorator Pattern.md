# 装饰器模式 - Decorator Pattern

> 装饰器模式（Decorator Pattern）**允许向一个现有的对象添加新的功能，同时又不改变其结构**。这种类型的设计模式属于结构型模式，它是作为现有的类的一个包装。

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122140950852.png" alt="image-20211122140950852" style="zoom:50%;" />

> **Note**: A decorator `IS-A` Component, a decorator also `OWNS-A` component.

## 案例 - Example

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122141256469.png" alt="image-20211122141256469" style="zoom:50%;" />

* window with scrollbar is a kind of window, and has a pointer to a plain window.
* window with menu is a kind of window, and has a pointer to a plain window.
* window with scrollbar and menu is a kind of window, and has a pointer to a window with scrollbar/menu, which also has a pointer to a plain window.

