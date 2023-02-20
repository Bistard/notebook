

# 消息驱动 - Message Driven

> 先说传统的编程模型中，组件A调用组件B中的method是在时间上紧耦合的：如果组件B正在忙或在处理方法调用时速度较慢，则组件A必须等待（blocking）。

在消息驱动（Message Driven）系统中，组件A生成一个消息（message），并必须将其传递到组件B的地址。当组件A发送完该消息之后，立即返回控制权，而不是等待组件B完成消息的处理（non blocking）。消息驱动系统中的组件通常有一个队列，可以在负载高峰期间存储传入的消息。消息传递是一种用于实现空间解耦（space decoupling）。

## 和事件驱动（Event Driven）的关系

* 在事件驱动系统（EDA）中，组件A会明确公开对应的事件（event）将来会发送到什么地址（event manager）。 与消息驱动不同的地方在于，组件A不知道哪些组件会通过这个公开的地址来使用这些事件。
* 用大白话可以这么理解：The difference being that messages are directed, events are not — a message has a clear addressable recipient while an event just happen for others (0-N) to observe it.

    > 因为消息驱动使两个组件的耦合度（coupling）更强，逻辑性也更强。相反事件驱动对应的是低耦合度。各有千秋，不同的场景适合不同的模型。

# Reference

* https://developer.lightbend.com/docs/akka-guide/concepts/message-driven-event-driven.html
* https://stackoverflow.com/questions/1659351/message-driven-vs-event-driven-approaches-to-application-integration

