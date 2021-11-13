## 介绍

什么是`dynamic_cast<T>`?

> 会根据情况去进行casting, 比`static_cast<T>`更加safe!

- `dynamic_cast`只能

## 案例一

考虑以下代码

```cpp
void foo(void *might_be_a_book) {
    Book *b = dynamic_cast<Book *>(might_be_a_book);
    if (b) { // it does point to the Book type, we succeed.
        b->getAuthor();
    } else { // it is not a book type, b is assigned with nullptr.
        /
    }
}
```

 ## 不好的style

```cpp
void whatIsIt(void *b) {
    if (dynamic_cast<Textbook *>(b) {
        std::cout << "a textbook" << std::endl;
    } else if (dynamic_cast<Comic *>(b) {
        std::cout << "a comic book" << std::endl;
    } else {
        std::cout << "a book" << std::endl;
    }
}
```

> Why generally this is not a good style? What happens when you create a new Book Type? 违背了OOP的设计理念.

## 运作原理

`dynamic_cast`到底是怎么运作的? 它会在runtime的时候, 去vtable里面去寻找该object的实际类型是什么.

> `dynamic_cast` works by accessing an object's <u>Run-Time Type Information (RTTI)</u> - **this is stored in the virtual table for the class**.

> `dynamic_cast` **<u>Can only be used on objects with at least one virtual method.</u>**

## Dynamic Reference Casting

考虑以下代码

```cpp
void foo(Book *b) {
    Textbook &t = dynamic_cast<Textbook &>(*b); // (1)
}
```

如果`dynamic_cast`的对象是个pointer, 并且发现并不是对应的pointer类型, 那么就会赋值为`nullptr`.

但是如果`dynamic_cast`的对象是个reference, 可是ref没法被初始化, 因此在`(1)`处会发生throw.

