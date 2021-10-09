# 介绍

如果一个构造函数 (constructor) 的第一个参数是一个自身类类型的引用, 且任何额外的参数都有默认值, 则此构造函数为 <u>拷贝构造函数 (Copy Constructor)</u>.

```cpp
#include <string>

class Human {
public:
    Human() = default;
    Human(std::string aName, int aAge, double aHeight);
    Human(const Human &other); // copy constructor
private:
    std::string _name;
    int _age;
    double _height;
};
```

下列情况属于常见的copy constructor的用武之地:

```cpp
int main()
{
    Human human;
    Human anotherHuman = human; // ⭐copy constructor
    anotherHuman = human; // 这里是copy-assignment operator!! 以后在讲
}
```

# 合成拷贝构造函数 (Synthesized Copy Constructor)

如果我们没有为一个类定义拷贝构造函数, 编译器会为我们定义一个. 

>  <u>即</u>使我们定义了其他的构造函数, 编译器<u>也会</u>为我们合成一个.

举一个例子, 我们得Human类的Synthesized Copy Constructor等价于下面代码:

```cpp
// equivalent to the copy constructor that would be synthesized (default)
Human(const Human &other) : 
	_name(other._name), // 调用了std::string的copy constructor
	_age(other._age), // copy by value
	_height(other._height) // copy by value
{}
```

# 拷贝初始化 (Copy Initialization)

现在, 我们可以完全理解直接初始化 (direct initialization) 和拷贝初始化 (copy initialization)了.

```cpp
string dots(10, '.');               // direct initialization
string s(dots);                     // direct initialization
string s2 = dots;                   // copy initialization (copy constructor)
string null_book = "9-999-99999-9"; // copy initialization (copy constructor)
string nines = string(100, '9');    // copy initialization (copy constructor)
```

当我们使用了copy initialization时, 我们要求compiler将右侧运算对象copy到正在创建的object中, 如果需要, 还要进行类型转换.

⭐拷贝初始化不仅仅会在我们用=定义变量的时候, 在下列情况也会发生.

* Pass an object as an argument to a parameter of nonreference type
* Return an object from a function that has a nonreference return type
* Brace initializes the elements in an array or the members of an aggregate class (advanced)

**编译器可以绕过拷贝构造函数**

```cpp
string s = "chris li";
// compiler可以b改写成
string s("chris li");
```

# 更复杂的可能性 - Temporary Object

已知我们的copy constructor:

```cpp
Human(const Human &other); // ot的类型是一个reference
```

考虑以下函数:

```cpp
Human createHuman();

int main() 
{
	Human newHuman = createHuman();   // copy constructor --> 一个rvalue - 函数的返回值(temporary object) - about to be destroyed
    Human anohterNewHuman = newHuman; // copy constructor --> 一个lvalue - 一个对象 - safe and sound
}
```

我们**需要考虑**什么时候是temporary object (rvalue), 什么时候是一个standalone object(lvalue). 这个时候我们需要override一个入参为右值引用 (rvalue reference)的而函数:

```cpp
Human(Human &&other); // 这个也叫作move constructor
```



更多细节可以移步到[移动构造函数-move constructor](./移动构造函数-Move Constructor.md).

