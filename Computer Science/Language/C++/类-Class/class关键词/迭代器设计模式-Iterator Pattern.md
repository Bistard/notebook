# 迭代器设计模式-Iterator Pattern

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
    public:
        iterator(Node *p): _p(p) {}
        bool operator!=(const iterator &iter) const { return _p != iter._p; }
        int &operator*() { return _p->_data; }
        iterator &operator++() {
            _p = _p->_next;
            return *this;
        }
    };
    iterator begin() { return iterator {_first_node}; }
    iterator begin() { return iterator {nullptr}; }
    // ...
};
```

