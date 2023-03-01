# 有返回值函数-return

- **介绍**

有返回值函数需要给函数声明一个任意合法的c数据类型, 结尾使用return语句的时候也要返回同样的类型, 否则会编译错误:

```cpp
bool isMale(string sex) {
    if (sex == "male") {
        return true;
    }
    else {
        return false;
    }
}
int main()
{
    string sex = "male";
    cout << isMale(sex) << endl;
    return 0;
}
```

```cp
>>>1
```

- **指数函数**

给出base和exponent, 用c++函数知识计算结果, 例如base=3, exponent=3 -> 33=27:

```cpp
int exponent(int base, int expo) {
    int res = 1;
    for (int i = 0; i < expo; i++) {
        res *= base;
    }
    return res;
}

int main()
{
    int base, expo;
    cin >> base;
    cin >> expo;
    cout << exponent(base, expo);
    return 0;
}
```

```cp
<<<3
<<<3
>>>27

<<<2
<<<4
>>>16
```



