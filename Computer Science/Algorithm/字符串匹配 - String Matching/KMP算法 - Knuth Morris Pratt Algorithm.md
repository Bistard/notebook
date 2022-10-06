# 介绍 - Description

> 小故事: 这个算法由 Donald Knuth、Vaughan Pratt、James H. Morris 三人于 1977 年联合发表，故取这 3 人的姓氏命名此算法。Donald Knuth 这个名字在[洗牌算法](.\洗牌算法 - Fisher–Yates shuffle.md)一文中也提到了他。

**K**nuth-**M**orris-**P**ratt 属于<u>字符串查找算法</u>，简称为 **KMP算法**，常用于在一个文本串`S`内查找一个模式串`P`的出现位置的`index`。换个说法：

给定文本串`S`长度为`n`和匹配串`P`长度为`m`，KMP算法的时间复杂度是`O(2n+2m)` = **`O(n+m)`**，空间复杂度是**`O(m)`**。

# 回顾暴力算法 - Brute Force Review

暴力算法的时间复杂度是**`O(nm)`**。

以下是简单的brute force CPP 代码：

```cpp
int match(string haystack, string needle) {
    const int n = haystack.length();
    const int m = needle.length();

    for (int i = 0; i < n; ++i) {
        bool match = true;
        for (int j = 0; j < m; ++j) {
            if (haystack[i + j] != needle[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            return i;
        }
    }

    return -1;
}
```

# KMP算法 - KMP Algorithm

KMP的代码实现上可以分成两个部分，第一部分是算出`LPS（Longest Prefix Suffix）`，第二部分就是KMP本身。

对于第一个部分详见[LPS - Longest Prefix Suffix](.\KMP算法 - Knuth Morris Pratt Algorithm\LPS - Longest Prefix Suffix.md)。

对于第二个部分，以下是KMP的完整CPP代码（本质上也是一个**状态机**的思想）：

```cpp
int match(const string &s, const string &pattern) {
    const int n = s.length();
    const int m = pattern.length();
    
    // lps
    int state = 0;
    int i = 1;
    vi lps(m, 0);
    while (i < m) {
        if (pattern[i] == pattern[state]) {
            lps[i] = state + 1;
            state++;
            i++;
        }
        else {
            if (state == 0) {
                lps[i] = 0;
                i++;
            } else {
                state = lps[state - 1];
            }
        }
    }
    
    // kmp
    i = 0;
    state = 0;
    while (i < n) {
        if (s[i] == pattern[state]) {
            i++;
            state++;
        } else {
            if (state == 0) {
                i++;
            } else {
                state = lps[state - 1];
            }
        }

        if (state == m) {
            return i - m;
        }
    }
    
    return -1;
}
```







# References

* https://www.youtube.com/watch?v=JoF0Z7nVSrA
* https://zhuanlan.zhihu.com/p/83334559