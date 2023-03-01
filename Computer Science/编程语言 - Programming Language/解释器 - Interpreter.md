# 解释器 - Interpreter

> 解释器（Interpreter）是一种计算机程序，用于解释和执行高级编程语言中的代码。与编译器不同，解释器不会将源代码转换为机器代码或汇编代码，而是直接执行源代码。当解释器读取源代码时，它会逐行解释并执行代码，一行一行地进行操作，从而将代码转换为计算机可以理解和执行的指令。

An interpreter generally uses one of the following strategies for program execution:

1. Parse the source code and perform its behavior directly;
    * e.g. BASIC, early version of Lisp.
2. Translate source code into some efficient intermediate representation or object code and immediately execute that;
    * e.g. Java, Perl, Python, MATLAB, Ruby.
3. Explicitly execute stored precompiled bytecode made by a compiler and matched with the interpreter Virtual Machine.
    * e.g. Java.

> While interpretation and compilation are the two main means by which programming languages are implemented, they are not mutually exclusive, as most interpreting systems also perform some translation work, just like compilers. The terms "interpreted language" or "compiled language" signify that the canonical implementation of that language is an interpreter or a compiler, respectively.

## 效率问题 - Efficiency

The main disadvantage of interpreters is that an interpreted program typically runs slower than if it had been compiled.

* The difference in speeds could be tiny or great.

* It generally takes longer to run a program under an interpreter than to run the compiled code but it can take less time to interpret it than the total time required to compile and run it. This is especially important when prototyping and testing code when an edit-interpret-debug cycle can often be much shorter than an edit-compile-run-debug cycle.

* Interpreting code is slower than running the compiled code because the interpreter must analyze each statement in the program each time it is executed and then perform the desired action, whereas the compiled code just performs the action within a fixed context determined by the compilation. 

    > This run-time analysis is known as "interpretive overhead". Access to variables is also slower in an interpreter because the mapping of identifiers to storage locations must be done repeatedly at run-time rather than at compile time.

# Reference

* https://en.wikipedia.org/wiki/Interpreter_(computing)