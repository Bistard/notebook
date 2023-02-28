# 设计模式 - Design Pattern

> Design Patterns（设计模式）是一种被反复使用、已经被证明可以解决特定问题的<u>设计经验的总结</u>。设计模式是软件设计中的一种通用解决方案，<u>它们是对过去设计经验的总结和提炼</u>，通常被视为面向对象设计的基本原则。
>
> 设计模式可以帮助软件开发人员有效地解决常见的设计问题，这些问题包括对象的创建、对象的管理、算法和模块之间的交互等等。它们通常是基于面向对象编程的思想，提供了一套标准的解决方案，可以被反复使用，降低代码的重复性和维护成本。

## 设计模式三大类 - Patterns by Type

* 创造型（Creational）
    * Creational patterns are the ways to create objects, rather than having to instantiate objects directly. This gives the program more flexibility in deciding which objects need to be created for a given case.
* 结构型（Structural）
    * These concern class and object composition. They use inheritance to compose interfaces and define ways to compose objects to obtain new functionality.
* 行为型（Behavioral）
    * Most of these design patterns are specifically concerned with communication between objects.

## 《设计模式：可复用面向对象软件的基础》- 《Design Patterns: Elements of Reusable Object-Oriented Software》

* 是软件工程领域有关设计模式的一本书，提出和总结了对于一些常见软件设计问题的标准解决方案，称为软件设计模式。该书作者是埃里希·伽玛（Erich Gamma）、Richard Helm、Ralph Johnson和John Vlissides，后以“四人帮”（Gang of Four，GoF）[1]著称，书中的设计模式也被称为“四人帮设计模式”（Gang of Four design patterns）。

* 这本书在1994年10月21日首次出版，至2012年3月已经印刷40版。

* 这本书里提到了23个design patterns：
    1. [Abstract factory](https://en.wikipedia.org/wiki/Abstract_factory_pattern) groups object factories that have a common theme.
    2. [Builder](https://en.wikipedia.org/wiki/Builder_pattern) constructs complex objects by separating construction and representation.
    3. [Factory method](https://en.wikipedia.org/wiki/Factory_method_pattern) creates objects without specifying the exact class to create.
    4. [Prototype](https://en.wikipedia.org/wiki/Prototype_pattern) creates objects by cloning an existing object.
    5. [Singleton](https://en.wikipedia.org/wiki/Singleton_pattern) restricts object creation for a class to only one instance.
    6. [Adapter](https://en.wikipedia.org/wiki/Adapter_pattern) allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class.
    7. [Bridge](https://en.wikipedia.org/wiki/Bridge_pattern) decouples an abstraction from its implementation so that the two can vary independently.
    8. [Composite](https://en.wikipedia.org/wiki/Composite_pattern) composes zero-or-more similar objects so that they can be manipulated as one object.
    9. [Decorator](https://en.wikipedia.org/wiki/Decorator_pattern) dynamically adds/overrides behaviour in an existing method of an object.
    10. [Facade](https://en.wikipedia.org/wiki/Facade_pattern) provides a simplified interface to a large body of code.
    11. [Flyweight](https://en.wikipedia.org/wiki/Flyweight_pattern) reduces the cost of creating and manipulating a large number of similar objects.
    12. [Proxy](https://en.wikipedia.org/wiki/Proxy_pattern) provides a placeholder for another object to control access, reduce cost, and reduce complexity.
    13. [Chain of responsibility](https://en.wikipedia.org/wiki/Chain-of-responsibility_pattern) delegates commands to a chain of processing objects.
    14. [Command](https://en.wikipedia.org/wiki/Command_pattern) creates objects that encapsulate actions and parameters.
    15. [Interpreter](https://en.wikipedia.org/wiki/Interpreter_pattern) implements a specialized language.
    16. [Iterator](https://en.wikipedia.org/wiki/Iterator_pattern) accesses the elements of an object sequentially without exposing its underlying representation.
    17. [Mediator](https://en.wikipedia.org/wiki/Mediator_pattern) allows [loose coupling](https://en.wikipedia.org/wiki/Loose_coupling) between classes by being the only class that has detailed knowledge of their methods.
    18. [Memento](https://en.wikipedia.org/wiki/Memento_pattern) provides the ability to restore an object to its previous state (undo).
    19. [Observer](https://en.wikipedia.org/wiki/Observer_pattern) is a publish/subscribe pattern, which allows a number of observer objects to see an event.
    20. [State](https://en.wikipedia.org/wiki/State_pattern) allows an object to alter its behavior when its internal state changes.
    21. [Strategy](https://en.wikipedia.org/wiki/Strategy_pattern) allows one of a family of algorithms to be selected on-the-fly at runtime.
    22. [Template method](https://en.wikipedia.org/wiki/Template_method_pattern) defines the skeleton of an algorithm as an abstract class, allowing its subclasses to provide concrete behavior.
    23. [Visitor](https://en.wikipedia.org/wiki/Visitor_pattern) separates an algorithm from an object structure by moving the hierarchy of methods into one object.


# Reference

* https://en.wikipedia.org/wiki/Abstract_factory_pattern
* https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82