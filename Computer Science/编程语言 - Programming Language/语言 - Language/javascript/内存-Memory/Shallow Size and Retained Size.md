# Introduction

> This section is Chrome related concepts and could be found at https://developer.chrome.com/docs/devtools/memory-problems/memory-101/.

# Object Size

Think of memory as a graph with primitive types (like numbers and strings) and objects (associative arrays). It might visually be represented as a graph with a number of interconnected points as follows:

<img src="../../../../../nota-manual/assets/image/image-20220927212714010.png" alt="image-20220927212714010" style="zoom:50%;" />

An object can hold memory in two ways:

* Directly by the object itself.
* Implicitly by holding references to other objects, and therefore preventing those objects from being automatically disposed by a garbage collector (**GC** for short).

# Shallow Size

**Shallow size** of an object is the amount of memory allocated to store the object itself, not taking into account the referenced objects. Shallow size of a regular (non-array) object depends on the number and types of its fields. Shallow size of an array depends on the array length and the type of its elements (objects, primitive types). Shallow size of a set of objects represents the sum of shallow sizes of all objects in the set.



# Retained Size

**Retained size** is the size of memory that is freed once the object itself is deleted along with its dependent objects that were made unreachable from **GC roots**.

