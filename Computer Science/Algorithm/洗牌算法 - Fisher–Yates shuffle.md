# 洗牌算法 - Fisher–Yates shuffle Algorithm

> 小故事: Fisher-Yates洗牌算法是由 Ronald A.Fisher和Frank Yates于1938年发明的，后来被Knuth在书中介绍，很多人直接称Knuth洗牌算法。 
>
> Knuth大家应该比较熟悉，《The Art of Computer Programming》作者，算法理论的创始人。我们现在所使用的各种算法复杂度分析的符号，就是他发明的。

对于给定的n个元素，根据该算法处理过后的排列，每一个元素都能**等概率地（1 / 数组长度）**出现在每一个位置。时间复杂度为**O(n)**。

代码非常简洁如下：

```cpp
void shuffle(std::vector<int> &arr) {
    for (int i = arr.size() - 1; i > 0; --i) {
        swap(arr[i], arr[rand(0, i)]); // rand(0, i) range is [0, i]
    }
}
```

## 案例 - Example

假设给定array如下: `[1, 2, 3, 4, 5]`。

`[1, 2, 3, 4, 5]`: 对于第一轮swap，会从前五个随机选择一个数字与5交换。假设随机的数字是1，那么1被选中的概率是**1/5**。

`[5, 2, 3, 4, 1]`: 对于第二轮swap，会从前四个随机选择一个数字与4交换。假设随机的数字是2 ，因为2错过了第一轮的随机选择的概率是4/5，但是第二轮被选中了，总共概率是4/5 x 1/4 = **1/5**。

`[5, 4, 3, 2, 1]`: 对于第三轮swap，会从前三个随机选择一个数字与3交换。假设随机的数字是5 ，因为5错过了第一轮的随机选择的概率是4/5，错过了第二轮的随机选择的概率是3/4，但是第三轮被选中了，总共概率是4/5 x 3/4 x 1/3 = **1/5**。

...

因此最后每一个element被随机摆放的概率都是**1/5**。

# references

* https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
* 一个公平的洗牌算法 | Knuth-Shuffle - 一个游戏开发者的文章 - 知乎 https://zhuanlan.zhihu.com/p/100350548
* 有哪些算法惊艳到了你？ - 知乎用户R26s0w的回答 - 知乎 https://www.zhihu.com/question/26934313/answer/1232915231
* https://zhuanlan.zhihu.com/p/334553072