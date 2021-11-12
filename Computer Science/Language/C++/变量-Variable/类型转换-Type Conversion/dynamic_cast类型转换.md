# 介绍

什么是`dynamic_cast<T>`?

> 会根据情况去进行casting, 比`static_cast<T>`更加safe!

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

