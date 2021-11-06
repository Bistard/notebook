# Initializer_list\<T>类型 (C++ 11)

需要以下头文件

```cpp
#include <initializer_list>
```

* C++11新增的通用初始化语法, 可使用表用法 `{}`而不是`()`来调用类构造函数.
* `initialier_list`类的迭代器类型是`const`, 因此不能修改`initializer_list`中的值.

## 成员类型 - Member Types

| value_type      | T           |
| --------------- | ----------- |
| reference       | const T &   |
| const_reference | const T &   |
| size_type       | std::size_t |
| iterator        | const T *   |
| const_iterator  | const T *   |

## 案例 - Example

```cpp
#include <iostream>
#include <initializer_list>

class Array {
public:
	Array(std::initializer_list<int> list) 
		_arr_size = list.size();
		_arr = new int [_arr_size];

		size_t i = 0;
		for (auto it = list.begin(); it != list.end(); ++it) { // const int *
			_arr[i] = *it;
			++i;
		}
	}
	~Array() { delete [] _arr; }
private:
	size_t _arr_size = 0;
	int *_arr = nullptr;
};

int main()
{
	Array arr = {1, 2, 3, 4, 5, 6}; // initializer_list constructor
}
```

> <u>Remark</u>: Default constructor take precedure over initializer list constructors, which take precedure over other constructors.



