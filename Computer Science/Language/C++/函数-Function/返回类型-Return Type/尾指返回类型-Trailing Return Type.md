# 介绍

在C++11新标准中还有一种简化上述foo的声明方法, 就是**尾置返回类型 (Trailing Return Type)**, 任何函数的定义都能使用尾置返回.

* 下面是最常见的函数declaration格式: 

  ```cpp
  return-type identifier ( argument-declarations... )
  ```

* 下面是尾置返回类型的函数declaration格式:

  ```cpp
  auto identifier ( argument-declarations... ) -> return-type
  ```

* 以上两种是**等效** **(equivalent)** 的.

根据上面格式, 我们declare一个会返回一个指向10个大小的数组指针:

```cpp
auto foo(int i) -> int(*)[10];
```

以下是什么时候适合使用**尾置返回类型 (Trailing Return Type)** (转载[stack overflow](https://stackoverflow.com/questions/22514855/arrow-operator-in-function-heading)):

<img src="D:\dev\AllNote\.mdnote\assets\K2A7F0YQ_ZL}DB0@QK2QE8K.png" alt="img" style="zoom: 67%;" />