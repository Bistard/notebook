# 概览

本身<u>类 - Class</u>, 也是提供一个方便统一管理不同数据的方法. 那么具体相关的exception handling中, 就要在各种场合, 去考虑哪些地方可能会出现exception或者throw. 一旦出现, 就经常会涉及到很多复杂的数据处理了, 需要考虑到底是实现basic guarantee, strong guarantee还是nothrow guarantee.

以下sub page的代码, 都是基于下面这段已有的代码:

```cpp
#ifndef VECTOR_H
#define VECTOR_H
#include <ostream>
#include <cstddef>

template<typename T>
class vector {
	T *theVector;
	size_t n, cap;
public:
	vector();
	size_t size() const { return n; }
	const T &operator[](size_t i) const { return theVector[i]; }
	T &operator[](size_t i) { return theVector[i]; }
	void push_back(const T &n);
	void push_back(T &&n);
	void pop_back();
	~vector();
private:
	void increaseCap();
};

```

