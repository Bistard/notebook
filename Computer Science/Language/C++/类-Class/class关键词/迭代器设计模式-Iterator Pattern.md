# 迭代器设计模式-Iterator Pattern

## 普通iterator

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
    class iterator { // iterator
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
    iterator end() { return iterator {nullptr}; }
    // ...
};
```

## const_iterator

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
        iterator operator++(int) {
            iterator temp = *this;
            _p = _p->_next;
            return temp;
        }
    };

    class const_iterator {
    private:
        Node *_p;
    public:
        const_iterator(Node *p): _p(p) {}
        bool operator!=(const const_iterator &iter) const { return _p != iter._p; }
        const int &operator*() const { return _p->_data; }
        const_iterator &operator++() {
            _p = _p->_next;
            return *this;
        }
        const_iterator operator++(int) {
            const_iterator temp = *this;
            _p = _p->_next;
            return temp;
        }
    };

    iterator begin() { return iterator {_first_node}; }
    iterator end() { return iterator {nullptr}; }

    const_iterator begin() const { return const_iterator {_first_node}; }
    const_iterator end() const { return const_iterator {nullptr}; }
    // ...
};
```

如何防止外部构造一个`iterator`类型? 见[友元-friendship](../友元-Friendship.md).

