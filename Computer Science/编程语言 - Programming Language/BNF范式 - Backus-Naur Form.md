# BNF范式 - Backus-Naur Form

为了描述编程语言的结构，John Backus和Peter Naur创造了一种描述方法，称为BNF（Backus-Naur Form）。

## 总览 - Overview

A BNF specification is a set of derivation rules, written as:

```
<symbol> ::= expression
```

* <u>非终结符（Non-terminal Symbol）</u>：指由终结符和其他非终结符组合而成的符号，它们是语法树的非叶子节点。
* `<symbol>`永远属于非终结符。
* `expression`由一个或者多个terminal或者non-terminal的符号组成。
    * 其中可以用`|`符号来表示potential的选择。
* <u>终结符（Terminal Symbol）</u>：指语法规则中的最基本的符号，它们通常是单词、标点符号或其他基本元素。终结符是语法树的叶子节点。
    * 对于从来没有在`::=`左边出现的符号而言，都是terminal symbol。出现在`::=`左边的符号都需要`<>`标注。

## 案例 - Example

用BNF来描述U.S.邮件地址：

```
 <postal-address> ::= <name-part> <street-address> <zip-part>
      <name-part> ::= <personal-part> <last-name> <opt-suffix-part> <EOL> | <personal-part> <name-part>
  <personal-part> ::= <initial> "." | <first-name>
 <street-address> ::= <house-num> <street-name> <opt-apt-num> <EOL>
       <zip-part> ::= <town-name> "," <state-code> <ZIP-code> <EOL>
<opt-suffix-part> ::= "Sr." | "Jr." | <roman-numeral> | ""
    <opt-apt-num> ::= <apt-num> | ""
```

This translates into English as:

* A postal address consists of a name-part, followed by a street-address part, followed by a zip-code part.
* A name-part consists of either: a personal-part followed by a last name followed by an optional suffix (Jr., Sr., or dynastic number) and end-of-line, or a personal part followed by a name part (this rule illustrates the use of recursion in BNFs, covering the case of people who use multiple first and middle names and initials).
* A personal-part consists of either a first name or an initial followed by a dot.
* A street address consists of a house number, followed by a street name, followed by an optional apartment specifier, followed by an end-of-line.
* A zip-part consists of a town-name, followed by a comma, followed by a state code, followed by a ZIP-code followed by an end-of-line.
* An opt-suffix-part consists of a suffix, such as "Sr.", "Jr." or a roman-numeral, or an empty string (i.e. nothing).
* An opt-apt-num consists of an apartment number or an empty string (i.e. nothing).

> Note that many things (such as the format of a first-name, apartment number, ZIP-code, and Roman numeral) are left unspecified here. If necessary, they may be described using additional BNF rules.



# Reference

* https://en.wikipedia.org/wiki/Backus%E2%80%93Naur_form
* https://zhuanlan.zhihu.com/p/34063805
