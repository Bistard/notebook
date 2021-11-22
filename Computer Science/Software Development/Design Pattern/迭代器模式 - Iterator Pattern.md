# 迭代器设计模式-Iterator Pattern

**意图：**提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。

**主要解决：**不同的方式来遍历整个整合对象。

**何时使用：**遍历一个聚合对象。

**如何解决：**把在元素之间游走的责任交给迭代器，而不是聚合对象。

## 案例 - C++

### 普通iterator

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

### const_iterator

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


