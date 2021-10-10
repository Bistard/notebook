# 友元-Friendship

继续[迭代器设计模式](./class关键词/迭代器设计模式-Iterator Pattern.md)里的代码, 在封装的精神上还是有一些小缺口:

```cpp
int main {
    List::const_iterator iter(nullptr); // 实例化了一个const_iterator类型, 但是没有通过List.end()!
}
```

解决办法就是将`const_iterator`的构造函数放在`private`里面, 但是这样的话, `List`类就没法access它的ctor了, 因此这里有个解决办法就是**友元 (Friendship)**.

利用关键词`friend`, **<u>类可以允许其他类或者函数访问它的非公有成员 (private or protected)</u>**:

```cpp
class List {
private:
    struct Node {
        int _data;
        Node *_next;
        // ...
    };
    // ...
    Node *_first_node;
public:
    class iterator {
    private:
        Node *_p;
        iterator(Node *p): _p(p) {} // private ctor of iterator
    public:
        friend class List; // friendship
        bool operator!=(const iterator &iter) const { return _p != iter._p; }
        int &operator*() { return _p->_data; }
        iterator &operator++() {
            _p = _p->_next;
            return *this;
        }
    };

    class const_iterator {
    private:
        Node *_p;
        const_iterator(Node *p): _p(p) {} // private ctor of const_iterator
    public:
        friend class List; // friendship
        bool operator!=(const const_iterator &iter) const { return _p != iter._p; }
        const int &operator*() const { return _p->_data; }
        const_iterator &operator++() {
            _p = _p->_next;
            return *this;
        }
    };

    iterator begin() { return iterator {_first_node}; }
    iterator end() { return iterator {nullptr}; }

    const_iterator begin() const { return const_iterator {_first_node}; }
    const_iterator end() const { return const_iterator {nullptr}; }
    // ...
};

```

# 注意事项

* 友元声明只能出现在类定义的内部.
* 但是在类内出现的具体位置不限.
* 友元不是类的成员也不受它所在区域访问控制级别的约束.

> <u>一般来说, 最好在类定义开始或结束前的位置集中声明友元。</u>