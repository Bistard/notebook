## 介绍

`typeid`是个关键词, 不是函数.

我们可以利用`typeid`进行类型比较, 进行的是绝对的数据类型比较 (class之间依赖关系也会影响结果)

```cpp
if (typeid(var1) == typeid(var2)) {
	// ...
}
```

我们可以输出数据类型

```cpp
std::cout << typeid(var).name() << std::endl;
```

## `typeid` 和 `dynamic_cast` 的区别

我们是可以利用`dynamic_cast`进行类型比较的, 参考一下代码

```cpp
class Textbook : public Book {
public:
    Textbook &operator=(const Book &other) override {
        const Text & otherText = dynamic_cast<Const Textbook &>(other); // (1)
        if (&otherText == this) return *this;
        Book::operator=(other);
        topic = other.topic;
        return *this;
    }
};
```

在`(1)`处, 如果`other`的类型不是`Const Textbook &`类型, 那么就会throw.

现在如果说有一个新的class叫做`ExpensiveTextbook : public Textbook`. 当`other`的类型为`ExpensiveTextbook`的时候, `(1)`处并不会报错. 因为`dynamic_cast`比较的是**<u>该类型是否为需要的类型, 或者是需要的类型的子类</u>**.

但是如果`(1)`的比较改成`typeid`, 当`other`的类型为`ExpensiveTextbook`的时候, `(1)`处会报错. 因为`typeid`**<u>比较的是绝对的类型</u>**.

