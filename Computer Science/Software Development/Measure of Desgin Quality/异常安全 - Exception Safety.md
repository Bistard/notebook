# Exception Safety



## Basic Guarantee

Once an exception has been handled, the program is in some valid state. 

* No leaked memory, no corrupted data structure, all invariants maintained.

## Strong Guarantee

If an exception propagates out of a function `f`, then the state of the program will be as if `f` has not been called.

* f either succeeds completely or not at all.

## Nothrow Guarantee

A function `f` offers the nothrow guarantee if it never emits an exception and always accomplishes its purpose.

