# const重载 - Const Overloading

```cpp
class MyVector {
public:
    MyVector() = default;
    int itemAt(int i);
    const int itemAt(int i) const;
private:
    int _arr[10];
};
```

考虑以上代码, 对于类方法 (method) `itemAt()`而言, 后置`const`**也是function signature的一部分**. 这里的const修饰的是implicit pointer `this`, 那下面举例:

```cpp
int main() {
    MyVector vec1;       // this是一个pointer, 指向MyVector类型
    const MyVector vec2; // this是一个pointer, 指向const MyVector类型
}
```

那么`itemAt()`会根据object的this的类型去判断调用哪一个版本, 也就是说, 当object为const的时候, 则`itemAt()`返回的就是一个`const int`. 反之亦然.

# const对象的修改隐患

假设我们想要override`<<`来正确print一个vector:

```cpp
#include <iostream>
#include <string>
#include <vector>

std::ostream &operator<<(std::ostream &out, const std::vector<int> &vec) {
    for (size_t i = 0; i < vec.size(); i++) {
        std::cout << vec[i] << " ";
    }
    return out;
}

int main()
{
    std::vector<int> vec = {1, 2, 3, 4, 5, 6};
    std::cout << vec << std::endl;
}
```

```
1 2 3 4 5 6
```

对于上述`<<`的override而言, 在一些compiler的flag中是不被允许compile的. 因为`size()`和`at()`是**<u>有隐患</u>**改变object的field. 而入参的类型是一个const, 因此不能保证达到`const`的目标.

作为解决方案, 我们已知`size()`和`at()`并不会改变field, 因此我们要告诉compiler, 这些method不会change field, 因此我们要给这个function的尾部, declare一个const关键词:

```cpp
std::ostream &operator<<(std::ostream &out, const std::vector<int> &vec) const { // changed
    for (size_t i = 0; i < vec.size(); i++) {
        std::cout << vec[i] << " ";
    }
    return out;
}
```

**另一个案例**

```cpp
#include <iostream>
#include <string>

class Human {
public:
    Human() = default;
    Human(int age): _age(age) {}
    
    void growup() {
        _age++;
    }

    void info() const {
        std::cout << _age << std::endl;
    }

private:
    int _age;
};

int main()
{
    const Human chris(19);
    chris.growup(); // 不能被call, 因为growup会改变field
    chris.info(); // 能被call, 因为declaration的后边写了const
}
```

