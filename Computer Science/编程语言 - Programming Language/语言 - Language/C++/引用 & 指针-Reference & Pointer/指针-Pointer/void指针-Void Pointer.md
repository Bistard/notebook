# 介绍

**Void 指针** **(Void Pointer)** 可以指向任意数据类型. Void指针适用于Generic Functions, 同样适用于[通用ADTs-Generic ADTs](onenote:#通用ADTs-Generic ADTs&section-id={58712194-3308-4C18-A280-546EB1B359B3}&page-id={FF2C95E9-5161-46B8-9BA1-A127323D70FC}&end&base-path=https://d.docs.live.net/2551e99ca9cfecde/文档/Computer Science/Language_Notes/C.one).



* Void pointer **CANNOT** be dereferenced.

```cpp
int main() {
  int a = 5;
  void *vp = &a;
  *vp; // ERROR!
}
```

从逻辑上解释, 由于不知道void指针指向哪里, 因此无法被dereference.



* 但是void double pointer **CAN** be dereferenced.

```cpp
int main() {
  int a = 5;
  void *vp = &a;
  void **vpp = &vp;
  *vpp; // successed
}
```

从逻辑上解释, `*vpp`等效于"the address wheter the vp pointing at". 因此, `(int *)(**vpp)`就相当于利用cast operator创建了一个指向`a`的新`int`类型指针.

* C++和C的区别

在C++中, 将一个void指针转换成一个其它类型指针时, **必须**使用cast operator:

```cpp
int *a = (int *)malloc(sizeof(int) * 10);
```

在C中, 上述的操作可有可无:

```cpp
int *a = malloc(sizeof(int) * 10);
```



* 注意 (caution)

```cpp
int main() {
  int i = 42;
  void *vp = &i;
  struct posn *pp = vp;    // BAD (but allowed by C)
  int j = pp->y;           // BAD (undefined behaviour)
  pp->y = 13;              // BAD (undefined behaviour)
  return 0;
}
```

You should only assign from a void pointer **when you are sure** that the pointer variable is the **correct type** for the data at the address.

