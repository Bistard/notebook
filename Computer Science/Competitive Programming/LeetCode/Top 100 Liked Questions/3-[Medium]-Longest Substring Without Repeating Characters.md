



<img src="D:\dev\AllNote\.mdnote\assets\image-20211014005626249.png" alt="image-20211014005626249" style="zoom:50%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20211014005638200.png" alt="image-20211014005638200" style="zoom:50%;" />

## approach#1 - hash map - $O(n^2)$

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        size_t maxlen = 0;
        size_t len = 0;
        bool cnt[256] = {false};
        
        for (size_t i = 0; i < s.size(); i++) {
            len = 0;
            for (size_t j = i; j < s.size(); j++) {
                if (cnt[s[j]]) {
                    for (size_t k = 0; k < 256; k++) cnt[k] = false;
                    break;
                }
                cnt[s[j]] = true;
                len++;
            }
            maxlen = max(maxlen, len);
        }

        return maxlen;
    }
};
```

## approach#2 - $O(n^2)$ improved

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        size_t maxlen = 0;
        size_t len = 0;
        int cnt[256];
        for (size_t _ = 0; _ < 256; _++) cnt[_] = -1;
        
        for (size_t i = 0; i < s.size(); i++) {
            len = 0;
            for (size_t j = i; j < s.size(); j++) {
                if (cnt[s[j]] != -1) {
                    i = cnt[s[j]];
                    for (size_t _ = 0; _ < 256; _++) cnt[_] = -1;
                    break;
                }
                cnt[s[j]] = j;
                len++;
            }
            maxlen = max(maxlen, len);
        }

        return maxlen;
    }
};
```

## approach#3 - $O(n)$ - Sliding Window

```cpp
class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        int maxlen = 0;
        int dict[256];
        for (int i = 0; i < 256; i++) 
            dict[i] = -1;
        
        int l = -1;
        for (int r = 0; r < s.size(); r++) {
            if (dict[s[r]] > l) {
                l = dict[s[r]];
            }
            dict[s[r]] = r;
            maxlen = max(maxlen, r - l);
        }

        return maxlen;
    }
};
```

<img src="D:\dev\AllNote\.mdnote\assets\image-20211014105424886.png" alt="image-20211014105424886" style="zoom:33%;" />
