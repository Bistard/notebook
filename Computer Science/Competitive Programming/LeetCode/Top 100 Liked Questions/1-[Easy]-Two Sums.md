<img src="D:\dev\AllNote\.mdnote\assets\image-20211013234408516.png" alt="image-20211013234408516" style="zoom:50%;" />

## approach #1 - brute force - $O(n^2)$

```cpp
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        L = len(nums)
        for i in range(L):
            for j in range(L-i):
                if nums[j] + nums[j+i] == target and j != j+i:
                    return [j, j+i]
```

## approach #2 - hash table - $O(n)$

```python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        h = {}
        for i, num in enumerate(nums):
            if num not in h:
                h[target-num] = i
            else:
                return [h[num], i]
```

