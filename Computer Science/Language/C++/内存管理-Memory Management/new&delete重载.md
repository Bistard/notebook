# 基础 - Basic

`new`关键词, 干了两件事:

1. `operator new` function is invoked to obtain raw memory,
2. and then the appropriate constructor of `T` is invoked to turn this raw memory into a valid object.

C++允许我们去对这两个步骤进行<u>调整和分离</u>, 通过override我们自己的`operator new`和`operator delete`.

> The first of the basic rules of operator overloading – *don’t do it* – applies especially to overloading `new` and `delete`. Almost the only reasons to overload these operators are ***performance problems*** and ***memory constraints***, and in many cases, other actions, like *changes to the algorithms* used, will provide a much ***higher cost/gain ratio*** than attempting to tweak memory management. - see reference

The C++ standard library comes with a set of predefined `new` and `delete` operators. The most important ones are these:

```cpp
void* operator new(std::size_t) throw(std::bad_alloc); 
void  operator delete(void*) throw(); 
void* operator new[](std::size_t) throw(std::bad_alloc); 
void  operator delete[](void*) throw(); 
```

# placement `new`

semantic:

```cpp
new (addr) TYPE;
```

- building a `type` object at location `addr`.
- does not allocate memory.

# 重载class的operator new/delete

```cpp
class my_class { 
  public: 
    // ... 
    void* operator new();
    void  operator delete(void*,std::size_t);
    void* operator new[](size_t);
    void  operator delete[](void*,std::size_t);
    // ... 
}; 
```



reference: [stack overflow](https://stackoverflow.com/questions/4421706/what-are-the-basic-rules-and-idioms-for-operator-overloading/4421791#4421791)