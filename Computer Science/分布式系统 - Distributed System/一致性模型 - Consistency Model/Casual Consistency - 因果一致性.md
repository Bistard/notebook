# Casual Consistency - 因果一致性

> Weaker than sequential consistency. 它在保证一致性的同时，允许一定程度的并发性。

* In the <u>causal consistency model</u>, all processes see only those memory reference operations in the same (correct) order that are potentially causally related. Memory reference operations that are not potentially causally related may be seen by different processes in different orders.
    * 在这个模型中，对于数据的更新，如果存在因果关系，即某些更新对于其他更新是有依赖关系的，那么这些更新的顺序将被保留。而对于没有因果关系的更新，则可以并发进行，因此可以提高系统的性能。
* 我们也可以给出以下定义，只要符合下面两个条件，即可描述成是一种Casual Consistency：
    1. Writes that are potentially causally related must be seen by all processes in the same order.
    2. Concurrent writes may be seen in a different order on different machines.

# Reference

* https://www.cs.colostate.edu/~cs551/CourseNotes/Consistency/TypesConsistency.html
* https://en.wikipedia.org/wiki/Consistency_model