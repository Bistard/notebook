# 类模板 - Class Template

类模板 (class template) 是用来生成类的蓝图的. 

与函数模板的不同之处: 编译器不能为类模板推断模板参数类型.

```cpp
template <typename T>  
int compare(T v1, T v2);
template <typename T>
class deque;
    
int main() {
    compare(1, 2);  // 可以不写成compare<int, int>
    deque<int> deq; // 必须写成deque<int>
}
```

## 定义类模板

```cpp
#include <initializer_list>

template <typename T> 
class Deque {
public:
	deque();
	deque(size_t fill_size, T data = T {});
	deque(std::initializer_list<T> init);
	deque(const deque &other);
	deque(deque &&other);
	~deque();
	deque &operator=(const deque &other);
	deque &operator=(deque &&other);
    
	T &operator[](size_t i);
	const T &operator[](size_t i) const;

	bool empty() const;
	size_t size() const;
    
	T &at(size_t i);
	const T &at(size_t i) const;

    void push_front(const T &data);
    void push_front(T &&data);
    void push_back(const T &data);
    void push_back(T &&data);
    void pop_front();
    void pop_back();
};
```



## 实例化类模板

当使用一个类模板时, 我们必须提供额外信息, 显式模板实参 (explicit template argument). 例如:

```cpp
int main() {
    deque<int> deq;                // 空deque<int>
    deque<int> deq = {1, 2, 3, 4}; // 有4个元素
    deque<int> deq(3, 5);          // 有3个int类型的5
}
```

## 类模板中, 成员函数的实例化

> 默认情况下, 一个类模板的成员函数只有当陈鼓型用到它的时候才进行实例化.