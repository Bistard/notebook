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

## 使用受限 - Limitations

RAII only works for resources acquired and released (directly or indirectly) by stack-allocated objects, where there is a well-defined static object lifetime. 

* Heap-allocated objects which themselves acquire and release resources are common in many languages, including C++. RAII depends on heap-based objects to be implicitly or explicitly deleted along all possible execution paths. In order to trigger its resource-releasing destructor, it can be achieved by using smart pointers to manage all heap objects, with weak-pointers for cyclically referenced objects.

> 以下来自chatGPT。

尽管RAII在许多情况下都是非常有用和有效的，但是它也有一些限制和局限性，包括：

1. 不适用于所有类型的资源：RAII只适用于需要在对象生命周期内分配和释放的资源，例如动态内存、文件句柄、互斥锁等。对于某些类型的资源，例如网络连接、数据库连接等，RAII可能并不是最适合的管理方式。
2. 对象生命周期的限制：RAII对象的生命周期通常由其创建的作用域和生命周期限制，因此可能无法灵活地处理一些特殊情况。例如，如果需要将资源分配给多个RAII对象，并且它们的生命周期不同，那么可能需要手动管理资源。
3. 代码可读性的影响：RAII使用了构造函数和析构函数的调用机制来管理资源，这可能会对代码的可读性和理解性造成一定的影响。对于一些复杂的场景，可能需要一些额外的注释和解释来帮助其他人理解代码的含义和作用。
4. 性能的影响：在RAII对象的创建和销毁时，可能会有一些额外的开销，例如函数调用、内存分配等，这可能会对程序的性能造成一定的影响。尤其是在一些高性能的场景中，需要权衡使用RAII和手动管理资源之间的差异，以达到最佳的性能和效率。

需要注意的是，RAII并不是一种万能的编程技术，它需要结合具体的场景和需求来使用，以达到最佳的效果和效率。在实际使用中，需要根据具体情况来选择使用RAII还是其他的资源管理技术，例如智能指针、引用计数、垃圾回收等。

## 历史小故事 - History

RAII一开始是大概在1984-1989年左右，C++为了exception-safe resource management而提出来的概念，主要是由Bjarne Stroustrup和Andrew Koenig设计和命名。

> 不过这个命名确实有够糟糕的，相比起来Scope-based Resource Management（SBRM）就好的太多太多。

# Reference

* https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization
* https://stackoverflow.com/questions/2321511/what-is-meant-by-resource-acquisition-is-initialization-raii
* https://zhuanlan.zhihu.com/p/34660259