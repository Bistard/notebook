# Introduction

It is a new C++ 11 feature.

It means that you want to use the compiler-generated version of that function, so you don't need to specify a body.

# Constructor  = default;

假设我们有以下代码:

```cpp
#include <iostream>
#include <string>

class Person {
public:
    Person(std::string name): _name(name) {}
private:
    std::string _name;
};

int main() {
    Person class1; // ERROR
}
```

上述案例中, `Person`因为已经有一个给定的constructor, 因此并不会生成对应的default constructor, 因此在实例化的时候会有error.

**因此在C++11中, 我们可以显性的写`=default`来生成一个 *compiler-generated version* 的constructor**, 这样就可以避免了再手动写一个constructor body:

```cpp
#include <iostream>
#include <string>

class Person {
public:
    Person() = default;
    Person(std::string name): _name(name) {}
private:
    std::string _name;
};

int main() {
    Person class1;
}
```
