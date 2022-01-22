<img src="D:\dev\AllNote\.mdnote\assets\image-20211014002042344.png" alt="image-20211014002042344" style="zoom:50%;" />

<img src="D:\dev\AllNote\.mdnote\assets\image-20211014002057792.png" alt="image-20211014002057792" style="zoom:50%;" />

## approach#1 - Elementary Math - $O(n)$

```cpp
// struct ListNode {
//     int val;
//     ListNode *next;
//     ListNode() : val(0), next(nullptr) {}
//     ListNode(int x) : val(x), next(nullptr) {}
//     ListNode(int x, ListNode *next) : val(x), next(next) {}
// };

class Solution {
public:
    ListNode *addTwoNumbers(ListNode *l1, ListNode *l2) {
        ListNode *leftMostDight = new ListNode {};
        ListNode *rightMostDigit = leftMostDight;

        bool carry = false;
        while (l1 || l2 || carry) {

            if (!l1 && !l2 && carry) {
                rightMostDigit->next = new ListNode {carry};
                break;
            }

            ListNode *newDight = new ListNode {};

            char res = (l1 ? l1->val : 0) + (l2 ? l2->val : 0) + carry;
            carry = res >= 10 ? true : false;
            res %= 10;

            newDight->val = res;
            rightMostDigit->next = newDight;
            rightMostDigit = newDight;
            if (l1) l1 = l1->next;
            if (l2) l2 = l2->next;
        }

        ListNode *sum = leftMostDight->next;
        delete leftMostDight;
        return sum;
    }
};
```
