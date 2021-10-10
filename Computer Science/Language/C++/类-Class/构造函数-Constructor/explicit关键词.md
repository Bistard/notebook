# 现象-Behaviour

> The compiler is allowed to make one implicit conversion to resolve the parameters to a function. What this means is that the compiler can use constructors callable with a **single parameter** to convert from one type to another in order to get the right type for a parameter.

Here's where the `DoBar` function is called:

```cpp
int main ()
{
  DoBar (42);
}
```

Here's a simple function that takes a `Foo` object:

```cpp
void DoBar (Foo foo)
{
  int i = foo.GetFoo ();
}
```

Here's an example class with a constructor that can be used for implicit conversions:

```cpp
class Foo
{
public:
  // single parameter constructor, can be used as an implicit conversion
  Foo (int foo) : m_foo (foo) {}
  int GetFoo () { return m_foo; }
private:
  int m_foo;
};
```

The argument is not a `Foo` object, but an `int`. However, there exists a constructor for `Foo` that takes an `int` so this constructor can be used to convert the parameter to the correct type.

The compiler is allowed to do this once for each parameter.

# explicit关键词

Prefixing the `explicit` keyword to the constructor prevents the compiler from using that constructor for implicit conversions.

Given the example as below:

```cpp
class Foo
{
public:
  // CANNOT be used as an implicit conversion
  explicit Foo (int foo) : m_foo (foo) {}
  int GetFoo () { return m_foo; }
private:
  int m_foo;
};
```

reference: [c++ - What does the explicit keyword mean? - Stack Overflow](https://stackoverflow.com/questions/121162/what-does-the-explicit-keyword-mean)
