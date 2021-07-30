# 队帧-Stack Frame

已知电脑中的内存结构可以大致分为5种 (图文不对应): heap, stack, global read-only data, code.

这里主要介绍的是**堆(stack)**的部分. 这里是用来存所有function calls包括所有local variables.

在C语言中, 对于每一个堆帧来说, 里面拥有所有的local variable+parameter+return address (return address因为是一个pointer, 因此**永远**占用8 bytes).

在function stack frame结束的时候, 整个stack的memory都会被释放掉.

**注意: 永远不要**返回一个指向当前stack frame中的pointer. 因为当运行到return时, 此时整个stack frame已经被释放掉了, 因此这个pointer实际是指向stack某个位置的garbage memory.

