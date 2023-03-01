# `[[fallthrough]]`

这个属性只可以用于`switch`语句中，通常在`case`处理完毕之后需要按照程序设定的逻辑退出`switch`块，通常是添加`break`语句；或者在某些时候，程序又需要直接进入下一个`case`的判断中。而现代编译器通常会检测程序逻辑，在前一个`case`处理完毕不添加break的情况下发出一个警告信息，让作者确定是否是他的真实意图。但是，在`case`处理部分添加了`[[fallthrough]]`属性之后，编译器就知道这是程序逻辑有意为之，而不再给出提示信息。

---

摘抄于

* https://www.zhihu.com/search?type=content&q=C%2B%2B%20attribute