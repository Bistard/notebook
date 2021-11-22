# Non-Virtual Idiom - NVI

NVI says

> All virtual methods should be private or protected (exception: destructor). All public methods should be non-virtual.



## Example

bad:

```cpp
class DigitalMedia {
public:
    virtual void play() = 0;
};
```



good:

```cpp
class DigitalMedia {
public:
    void play() {
        __doPlay(); // can add before/after code to make guarantee to the purpose of play() 
    }
private:
    virtual void __doPlay() = 0;
};
```

