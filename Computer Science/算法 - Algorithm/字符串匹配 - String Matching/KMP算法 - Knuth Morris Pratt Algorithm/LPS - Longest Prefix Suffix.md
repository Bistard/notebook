# Longest Prefix Suffix (LPS)

在KMP原视论文中，或者其他常见的知识科普类关于KMP的文章中，一般会refer这种array叫做`next`。但是这里我们管它叫做`lps`也就是Longest Prefix Suffix，当前笔记隶属于KMP算法下的子部分。

> 在KMP算法中，这个LPS相当于一个**确定有限状态自动机**。

# 定义 - Definition

给定一个字符串`S`，长度为`m`:

1. `length(lps) == m`
2. `lps[i], 0 <= i < m`, 代表的是子字符串（substring）`S[0:i]`的**最长公共前缀后缀的长度**（我编的名字）。

# 案例 - Example

对于第二点，我们可以举个例子：假设`S`为`ABACCABA`，当`i=m-1`的时候，也就是substring为`S`本身。当prefix和suffix的长度都为3的时候，它们的prefix和suffix都为`ABA`，也就是`"ABA" CC "ABA"`。当超过3的时候prefix和suffix就不再一样，因此`lps[i] = 3`，此为**最长公共前缀后缀的长度**。

再举个例子，还是假设`S`为`ABACCABA`，但是对于当`i=2`的时候，也就是substring为`ABA`，他们的最长公共前缀后缀的长度为1，也就是`"A" B "A"`。因此`lps[2] = 1`。

按照以上的规则，那么对于`S`为`ABACCABA`时，那么`lps = [0, 0, 1, 0, 0, 1, 2, 3]`。

我用一下table来表示全部的计算和视觉化，加粗的部分分别代表最长的prefix和suffix，最左列的数字代表**最长公共前缀后缀的长度**：

|  i   | lps[i] |   A   |   B   |   A   |  C   |  C   |   A   |   B   |   A   |
| :--: | :----: | :---: | :---: | :---: | :--: | :--: | :---: | :---: | :---: |
|  0   |   0    |   A   |       |       |      |      |       |       |       |
|  1   |   0    |   A   |   B   |       |      |      |       |       |       |
|  2   |   1    | **A** |   B   | **A** |      |      |       |       |       |
|  3   |   0    |   A   |   B   |   A   |  C   |      |       |       |       |
|  4   |   0    |   A   |   B   |   A   |  C   |  C   |       |       |       |
|  5   |   1    | **A** |   B   |   A   |  C   |  C   | **A** |       |       |
|  6   |   2    | **A** | **B** |   A   |  C   |  C   | **A** | **B** |       |
|  7   |   3    | **A** | **B** | **A** |  C   |  C   | **A** | **B** | **A** |

# 代码 - Code

以下为完整的CPP代码：

```cpp
std::vector<int> lps(const std::string &S) {
    const int m = S.length();
    int state = 0;
    int i = 1;
    std::vector<int> lps(m, 0);
    
    while (i < m) {
        if (S[i] == S[state]) {
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
    
    return lps;
}
```

如何理解这段代码呢？首先花时间做视觉化实在是太占用时间了，我这里只是非常简单的用自然语言重复了一下，能不能理解纯看玄学。核心思想这就是一个**状态机**的运作逻辑。

首先构建LPS的时间复杂度是`O(m)`。那么每次遍历character的情况有两种，一种是`S[i] == S[state]`一种是`S[i] != S[state]`。

* `S[i] == S[state]`
    * 因为两个characters相等，因此非常straight forward，只需要将`state`和`i`都向前移动一步，同时将当前的`lps[i]`等于当前`state`下的最长公共前缀后缀的长度+1。
* `S[i] != S[state]`
    * 在两个characters不相等的情况下，又分成两种情况。
    * `state != 0` 
        * 已知两个characters不相等，那么当前`state`就必须要**回退**，也就是`lps[state - 1]`干的事情。每一次回退之后，都会再一次检查两个characters是否相等。
    * `state == 0`
        * 如果当回退到最初状态的时候，`state`就不能再回退了，只能单纯地让`i`进一步。