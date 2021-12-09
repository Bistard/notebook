# `[[noreturn]]`

> 从字面意义上来看，noreturn是非常容易理解的，这个属性的含义就是标明某个函数一定不会返回。

请看下面的例子程序：

```cpp
// 正确，函数将永远不会返回。
[[noreturn]] void func1() { 
    throw "error"; 
}

// 错误，如果用false进行调用，函数是会返回的，这时候会导致未定义行为。
[[noreturn]] void func2(bool b) { 
    if (b) throw "error"; 
}

int main() {
    try { 
        func1(); 
    }
    catch(char const *e) { 
        std::cout << "Got something: " << e << "  \n"; 
    }

    // 此处编译会有警告信息。
    func2(false);
}

```

**这个属性最容易被误解的地方**是返回值为void的函数不代表着不会返回，它只是没有返回值而已。所以在例子中的第一个函数`func1`才是正确的无返回函数的一个例子；而`func2`在参数值为`false`的情况下，它还是一个会返回的函数。所以，在编译的时候，编译器会针对`func2`报告如下错误：

```cpp
noreturn.cpp: In function 'void func2(bool)':
noreturn.cpp:11:1: warning: 'noreturn' function does return
   11 | }
      | ^
```

而实际运行的时候，func2到底会有什么样的表现属于典型的“未定义行为”，程序可能崩溃也可能什么都不发生，所以一定要避免这种情况在我们的代码中出现。（我在gcc11编译器环境下尝试过几次，情况是什么都不发生，但是无法保证这是确定的行为。）

另外，[[noreturn]]只要函数最终没有返回都是可以的，比如用exit()调用直接将程序干掉的程序也是可以被编译器接受的行为（只是暂时没想到为啥要这么干）。

---

摘抄于

* https://www.zhihu.com/search?type=content&q=C%2B%2B%20attribute

