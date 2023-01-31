# 观察者模式 - Observer Pattern

参考以下UML

<img src=".\.images\image-20211122132215855.png" alt="image-20211122132215855" style="zoom:50%;" />

Sequence of calls:

1. subject's state changes
2. `subject::notifyObservers()` is invoked
3. Each observer's `notify()` will be invoked, passing data if needed

常用的地方例如，MVC，MVVM，事件系统 （Event Emitter)等等。

