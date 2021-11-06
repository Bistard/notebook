# 函数模板 - Function Template

用关键词template定义模板, 一般函数模板会长下面的样子:

```cpp
template <typename T>  
int compare(T v1, T v2) {
    if (v1 < v2) return 1;
    else if (v1 > v2) return -1;
    return 0;
}
```

## 模板参数表 (template parameter list)

函数模板用关键词template开始, 紧接着**模板参数表** **(template parameter list)**, 用逗号分隔一个或多个模板函数 (template parameter) 的列表, 大于号小于号 (<>)来概括. 

* 拿上题为例, 再模板参数表中, 我们用关键词typename ([详见typename和class](onenote:#模板类型参数-§ion-id={28CAD210-DF14-423A-B5BF-6FCBA909E53E}&page-id={D0944A41-13FB-4D5B-9285-160AA02F830A}&object-id={D068DAC2-9E8A-0BA1-2250-EF5ED9656E9A}&49&base-path=https://d.docs.live.net/2551e99ca9cfecde/文档/Computer Science/C^M^M_Notes.one)) 定义了一个[模板类型参数](onenote:#模板类型参数-type parameter&section-id={28CAD210-DF14-423A-B5BF-6FCBA909E53E}&page-id={D0944A41-13FB-4D5B-9285-160AA02F830A}&end&base-path=https://d.docs.live.net/2551e99ca9cfecde/文档/Computer Science/C^M^M_Notes.one)名为T. 而T的实际类型, 在编译时会根据compare的参数类型来决定.
* 在模板定义中, 模板参数表不能为空!

## 实例化模板函数

* 案例一

当我们调用一个函数模板时, 模板会推断函数参数的类型, 并将`T`定义成该类型:

```cpp
std::cout << compare(10, 20);
```

此时编译器 (compiler) 将`T`类型定义为`int`类型. 并编译出一个`int`类型的版本:

```cpp
int compare(int v1, int v2);
```

* 案例二

```cpp
std::cout << compare(10.3, 20.2);
```

此时编译器 (compiler) 将`T`类型定义为`double`类型. 并编译出一个`double`类型的版本:

```cpp
int compare(double v1, double v2);
```

* 案例三

```cpp
std::cout << compare(10.3, 20);
```

报错, 因为我们只定义了一个模板类型`T`, 而在实际编译中, 函数参数有两个不同的类型 (`int`型和`float`型), 此时此刻我们需要像下面再一次定义一个`typename`为`A`:

```cpp
template <typename T, typename A>
int compare(T v1, A v2) {
    if (v1 < v2) return 1;
    else if (v1 > v2) return -1;
    return 0;
}
```

