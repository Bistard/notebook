# RAII - Resource Acquisition Is Initialization

> It's a really terrible name for an incredibly powerful concept, and perhaps one of the number 1 things that C++ developers miss when they switch to other languages. There has been a bit of a movement to try to rename this concept as **Scope-bound Resource Management** or **Scope-based Resource Management**, though it doesn't seem to have caught on just yet. —— From StackOverFlow.

## 原理

为了遵循RAII的设计理念，总共会需要三个步骤：

1. 获取资源：通常来说会在object的constructor里获得资源，不过也可以通过parameter将资源传进来。

2. 使用资源：在scope内可以合法地适用资源。

3. 释放资源：将释放资源的代码写在object的destructor里面，当脱离了当前scope地时候（不管是normal return还是exception throw），destructor都会被调用。

    > 对于primitive type而言，比如int，bool，char等等，也同样遵循了RAII的设计：作为stack variable，当脱离了scope的时候就会自动被release。

## RAII的第三步 - 程序员的痛处之忘了又忘

第三步则是RAII的重中之重：

* 在普通编程环境下，程序员是有机会在使用完资源之后忘记对其进行释放，RAII能够将其进行封装（encapsulation）的同时，还能进行自动化释放（减少心智压力）。

* 对于C++而言，为了实现exception，如果没有RAII，哪怕程序员没有忘记释放资源，也会常常出现unexpected behavior，考虑以下代码：
    ```cpp
    {
        RawResourceHandle* handle = createNewResource();
    	handle->performInvalidOperation();  // Oops, exception throws.
    	// ...
    	deleteResource(handle); // oh dear, never gets called then the resource leaks.
    }
    ```

* 但是有了RAII之后:

    ```cpp
    class ManagedResourceHandle {
    public:
       ManagedResourceHandle(RawResourceHandle* rawHandle_) : rawHandle(rawHandle_) {};
       ~ManagedResourceHandle() {delete rawHandle; }
    private:
       RawResourceHandle* rawHandle;
    };
    
    // ...
    
    {
    	ManagedResourceHandle handle(createNewResource());
    	handle->performInvalidOperation(); // exception throws
    } 	// even when the exception throws, destructor will always be called due to the benefit of RAII
    ```

## 历史小故事 - History

RAII一开始是大概在1984-1989年左右，C++为了exception-safe resource management而提出来的概念，主要是由Bjarne Stroustrup和Andrew Koenig设计和命名。

> 不过这个命名确实有够糟糕的，相比起来Scope-based Resource Management（SBRM）就好的太多太多。

# Reference

* https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization
* https://stackoverflow.com/questions/2321511/what-is-meant-by-resource-acquisition-is-initialization-raii
* https://zhuanlan.zhihu.com/p/34660259