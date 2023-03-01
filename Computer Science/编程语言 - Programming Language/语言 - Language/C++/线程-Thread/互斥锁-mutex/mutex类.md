## 介绍

`std::mutex`位于`<mutex>`头文件下。

## 成员函数

| Member Function | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `lock()`        | locks the mutex, **blocks** if the mutex is not available.   |
| `try_lock()`    | locks the mutex, **returns a boolean** if the mutex is not available. |
| `unlock`        | unlocks the mutex.                                           |

## 案例

参考一下代码

```cpp
#include <iostream>
#include <mutex>
#include <thread>

size_t myMoney = 0;
std::mutex m;

void addMoney() {
    m.lock(); // (1)
    myMoney += 500;
    m.unlock(); // (2)
}

int main() {
    std::thread t1(addMoney);
    std::thread t2(addMoney);

    t1.join();
    t2.join();

    std::cout << myMoney << std::endl;
}
```

不管`t1`或者`t2`谁先上锁了`m`，那么另外一个线程将会挂起并堵塞（blocking）直到`m`解锁。如果不想堵塞，可以用`try_lock()`。

