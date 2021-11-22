# 里氏替换 - Liskou Substitution Principle

Liskov Substitution Principle states:

> Every subclass or derived class should be substitutable for their base or parent class.

Or, simply put in this way:

> Public Inheritance must indicate an IS-A relationship.

But there is more to it then that:

* If $B$ is a subtype (subclass) of $A$, then we should be able to use an obejct $b$ at type $B$ in any context that requires an object of type $A$, **<u>without affecting the correctness of the program</u>** ⭐.

* More informally, a program should "not be able to tell" if it is using an object of parent class or an object of derived class.