## 介绍

`mutable`主要有两个可能的用处:

* `const` 函数.
* `lambda` 匿名函数.

## 和 `const` 的联系

### `debug`用途

考虑以下代码

```cpp
class Entity {
public:
    const std::string &getName() const { 
        ++_debug_increment; // (0) compile-time error
        return _name; 
    }
private:
    int _debug_increment = 0;
    std::string _name;
};
```

假设处于`debug`的目的, 我们想测试`getName()`总共被调用了多少次, 这个时候`(0)`就无法被compile, 因为`getName()`是一个`const`函数. 因此`mutable`关键词提供了一种特殊的途经, 方便我们在`const`函数中修改变量

```cpp
class Entity {
public:
    const std::string &getName() const { 
        ++_debug_increment;
        return _name; 
    }
private:
    mutable int _debug_increment = 0; // (1) now it works
    std::string _name;
};
```

### 多线程中修改`std::mutex`

另一种情况就是在写多线程的时候, 你可能需要在`const`函数里去修改`std::mutex`, 这个时候`mutable`关键词也能派上用场

```cpp
class ThreadSafeQueue {
public:
    const std::string &getFront() const
    {
        std::unique_lock<std::mutex> lock {_mutex}; // (2) this will modify `_mutex`
        return _queue.front();
	}
private:
    std::queue<std::string> _queue;
    mutable std::mutex _mutex;
};
```

## 和 `lambda` 的联系

考虑以下`lambda`

```cpp
int main() {
	int x = 8;
    auto f = [=]()
    {
        ++x; // (0) compile-time error
        std::cout << x << std::endl;
    }
}
```

我们不能在`lambda`中修改pass by value的变量, 因此我们可以像这样子写

```cpp
int main() {
	int x = 8;
    auto f = [=]()
    {
        int y = x;
        ++y;
        std::cout << y << std::endl;
    }
}
```

除此之外, 我们可以利用`mutable`关键词让源代码看起来更加的cleaner

```cpp
int main() {
	int x = 8;
    auto f = [=]() mutable // it will creates a local variable called `x`
    {
        ++x;
        std::cout << x << std::endl;
    }
    // x still equals to 8
}
```

