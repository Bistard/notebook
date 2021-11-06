# 介绍

在介绍universal reference (forward reference)之前, 有两篇推荐文章, 都是再详细的阐述在C++11之前所出现的问题:

* http://www.open-std.org/jtc1/sc22/wg21/docs/papers/2002/n1385.htm
* https://stackoverflow.com/questions/3582001/what-are-the-main-purposes-of-using-stdforward-and-which-problems-it-solves

以下是万能引用的典型声明:

```cpp
template <typename T>
void deduce(T&& x);
```

* 上面的`&&`并不能简单理解为右值`rvalue`. 为什么?

  * 因为在`C++11`中, 引进了新的rvalue-reference的规则. 用表格表示为如下:

    ```cpp
    T&   &  -> T&  
    T&   && -> T&  
    T&&  &  -> T&  
    T&&  && -> T&& 
    ```

    
  

我们按照上述的案例, 来一一举例:

```cpp
template <typename T>
void deduce(T&& x);

int main() {
    int i;
    const int j;
    deduce(i); // deduce<int &>(int & &&) -> deduce<int &>(int &)
    deduce(j); // deduce<const int &>(const int & &&) -> deduce<const int &>(const int &)
    deduce(1); // deduce<int>(int &&)
}
```

