# 介绍

**析构函数 (destructor)** 执行与constructor相反的操作: 构造函数初始化非static数据成员, 并进行一些其他操作; 析构函数释放对象使用的资源, 并销毁对象的非static数据成员. 

析构函数是类的一个成员函数, 名字由波浪号接类名构成. 它<u>没有返回值, 不接受参数</u>.

```cpp
class Human {
    public:
        ~Human();
```

由于析构函数不接受参数, 因此它不能被重载, 对于一个类, 只会有**唯一一个**析构函数.

# 合成析构函数

下面代码等效于合成析构函数:

```cpp
class Human {
    public:
        // 成员会被自动销毁, 除此之外不会做任何事情
        ~Human() {}
```

>  成员是在析构函数体结束之后, 隐性的被销毁.

# 什么时候会调用析构函数

无论何时一个对象被销毁, 就会自动调用:

* Variables are destroyed when they go out of scope.

* Members of an object are destroyed when the object of which they are a part is destroyed.

* Elements in a container—whether a library container or an array—are destroyed when the container is destroyed.

* Dynamically allocated objects are destroyed when the delete operator is applied to a pointer to the object.

* Temporary objects are destroyed at the end of the full expression in which the temporary was created.

# 深入摧毁对象过程 - Deep down into Object

当一个对象 (Object) 被摧毁的时候, 以下是四个步骤:

* Constructor body runs
* Field deconstructor in declaration order (field dector called for which are objects)
* (later)
* Space deallocated

和初始化对象过程4个步骤一一镜像对应.
