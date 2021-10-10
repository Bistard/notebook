# 无返回值函数-void

- **介绍**

无返回值函数使用void来代替返回值. 通常情况下, void函数想要在中间部分提前退出, 可以使用return语句. 比如, 下面案例用来编写一个swap函数:

```cpp
void swap(int &v1, int &v2) {
    if (v1 == v2) {
        return;
    }
    else {
        int temp = v1;
        v1 = v2;
        v2 = temp;
    }
}

int main()
{
    int v1, v2;
    v1 = 5, v2 = 3;
    swap(v1, v2);
    cout << v1 << v2 << endl;
    return 0;
}
```

