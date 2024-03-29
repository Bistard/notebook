# 编译器 - Compiler

> In computing, a compiler is a computer program that translates computer code written in one programming language (the source language) into another language (the target language). 
>
> The name "compiler" is primarily used for programs that translate source code from a high-level programming language to a low-level programming language (e.g. assembly language, object code, or machine code) to create an executable program.

> A compiled language is a programming language whose implementations are typically compilers (translators that generate machine code from source code), and not interpreters (step-by-step executors of source code, where no pre-runtime translation takes place).

编译器包含以下三个部分，

1. 编译器前端：词法分析，语法分析，最终生成抽象语法树这种中间代码。
2. 编译器优化：中间代码多次转换，多种优化，
3. 编译器后端：目标代码生成，优化目标代码。

<img src="./.images/image-20230304202440847.png" alt="image-20230304202440847" style="zoom:67%;" />

## Compiled Language

Some languages that are commonly considered to be compiled:

 <img src="./.images/image-20230228225551764.png" alt="image-20230228225551764" style="zoom:67%;" />

# Reference

* https://en.wikipedia.org/wiki/Compiler