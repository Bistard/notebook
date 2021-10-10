# 介绍

在constructor的function body中, 如果一个exception出现了, 这个时候该object的状态如下:

> object is considered as partially constructed. But, destructor will NOT run on partially constructed objects.

考虑以下案例:

```
class C {};
class D {
    C *obj1;
    C *obj2;
public:
    D() {
        obj1 = new int[10];
        if (some_thing_happens) {
            throw "error";
        }
        obj2 = new int[20];
    }
};
```

在constructor的过程中, 一个throw表达式终止了ctor的运行. 此时

* D没有fully constructed, 所以~D()不会run.
* a是fully constructed, 所以a的~C()会run.

> **If a ctor wants to throw, it MUST clean up before it does the actual throwing.**

```
class C {};
class D {
    C *obj1;
    C *obj2;
public:
    D() {
        obj1 = new C();
        if (some_thing_happens) {
            delete obj1; // clean up before actual throw
            throw "error";
        }
        obj2 = new C();
    }
};
```