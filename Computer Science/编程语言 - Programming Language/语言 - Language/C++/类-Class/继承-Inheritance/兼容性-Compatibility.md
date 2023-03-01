# 前提代码

```cpp
class Book {
public:
    Book(std::string title, std::string author, int length): title {title}, author {author}, length {length} {}
    bool isHeavy() const  { return length > 100; }
    std::string getTitle() const { return title; }
protected:
    std::string title, author;
    int length;
};

class Textbook : public Book {
public:
    Textbook(std::string title, std::string author, int length, std::string topic): Book {title, author, length}, topic {topic} {}
    bool isHeavy() const { return length > 200; }
    std::string getTopic() const { return topic; }
private:
    std::string topic;
};

class Comic : public Book {
public:
    Comic(std::string title, std::string author, int length, std::string hero): Book {title, author, length}, hero {hero} {}
    bool isHeavy() const { return length > 50; }
    std::string getHero() const { return hero; }
private:
    std::string hero;
};
```

# 兼容性

## 内存切片 - slicing

```cpp
int main() {
    Book b = Comic {"superman", "abc", 75, "superman"}; // (1)
    std::cout << b.isHeavy() << std::endl; // false
}
```

考虑以上案例, `(1)`处到底发生了什么? 从stack memory的角度去考虑, `Comic`多余出来的那部分memory被`chop off`了, 只留下了`Book`的部分:

<img src="D:\dev\AllNote\.mdnote\assets\image-20211109164626576.png" alt="image-20211109164626576" style="zoom:50%;" />

> slicing happens even if the superclass has the same size as the subclass.

为了验证此想法, 我们可以做个简单的实验:

```cpp
int main() {
    Book b = Comic {"superman", "abc", 75, "superman"};
    std::cout << "size of Book type:" << sizeof(Book) << std::endl;  // 72
    std::cout << "size of Comic type" << sizeof(Comic) << std::endl; // 104
    std::cout << "size of b: " << sizeof(b) << std::endl;            // 72 (same as Book Type)
}
```

更多的, 对于下面案例中, 我们向`vector`中`push ``Comic`类型, 实际上`push`的是`Book`类型:

```cpp
int main() {
    std::vector<Book> vec;
    vec.push(Comic {"superman", "abc", 75, "superman"}); // we are actually pushing Book type instead of Comic type
}
```

## 安全性

考虑以下

```cpp
void foo(Book books[]);

int main() {
	Comic comics[] = { /* ... */ };
	foo(comics);
}
```

* will compile and run - but <u>**NEVER**</u> do this!
* array will be misaligned (since `comics` are aligned by the size of `Comic` type, but in the function `foo`, the `books` is aligned by the size of `Book` type)
* will not act like an array of Books.
* Use `std::vector<T>` can avoid such things.

## 指针不会触发内存切片 - pointer and slicing

```cpp
int main() {
    Book *b = new Comic {"superman", "abc", 75, "superman"}; 
    std::cout << b.isHeavy() << std::endl; // still false
}
```

> <u>The choice of which `isHeavy` to run is based on the type of the pointer (static type), not the object (dynamic type).</u>

为什么这是一个default behaviour呢?

> Because it is cheaper! It gives you a cheapest choice.

那么要如何做才能让`b`表现得像个Comic一样呢?

> Use virtual function. But it is more expensive.
