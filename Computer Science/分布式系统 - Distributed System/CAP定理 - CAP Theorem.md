# CAP定理 - CAP Theorem

> 作者是University of California, Berkeley, 计算机科学家Eric Brewer提出的一个猜想，以“CAP定理”享誉IT理论界。
>
> Eric Brewer在1998年提出【CAP猜想】（Conjecture），1999年出版。在2002年由MIT的Seth Gilbert和Nancy Lynch给出了数学证明，从此正式地被命名为【CAP定理】（Theorem）。
> ![image-20230211203728675](./.images/image-20230211203728675.png)
>
> **该定理对分布式系统的【架构设计】具有深刻影响。**但也存在大量的【误解】。很多人把该定理庸俗地理解为“三选二”，或者理解为“完全放弃 CAP 的其中一方”。
>
> > P.S. Nancy Lynch奶奶同时也写过一本《Distributed Algorithm》书籍广受好评。但因为该书中的算法证明涉及到大量的数学，读起来也绝对是困难中的困难。
> > ![image-20230211233357629](./.images/image-20230211233357629.png)

> **P.S.** 接下来这篇笔记主要是对Brewer于2012年发表的文章“[CAP Twelve Years Later: How the "Rules" Have Changed](https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/)”的摘抄及概述。还是强烈建议看一看英文原文。

## CAP理论概述

**一个分布式系统最多只能同时满足一致性（Consistency）、高可用性（Availability）和分区容错性（Partition tolerance）这三项中的两项**。

> “The CAP theorem states that any networked shared-data system can have at most two of three desirable properties:
>
> - consistency (C) equivalent to having a single up-to-date copy of the data;
> - high availability (A) of that data (for updates);
> - tolerance to network partitions (P).”

1. 一致性（**C**onsistency）—— “Every read receives the most recent write or an error”（下面会细谈具体分类）
2. 高可用性（**A**valiability）—— “Every request receives a (non-error) response, without the guarantee that it contains the most recent write.”
3. 网络容忍性（**P**artition Tolerance）—— “The system continues to operate despite an arbitrary number of messages being dropped (or delayed) by the network between nodes.”（可以理解为“网络故障的概率”）

> “The CAP theorem asserts that any net­worked shared-data system can have only two of three desirable properties. How­ever, by explicitly handling partitions, designers can optimize consistency and availability, thereby achieving some trade-off of all three.” —— Eric Brewer

## 一致性（Consistency）

对于一致性，可以分为从客户端和服务端两个不同的视角：

- 客户端（client-side）: 一致性主要指的是多并发访问时更新过的数据如何获取的问题。
- 服务端（server-side）: 更新如何分布到整个系统，以保证数据最终一致。

对于一致性，可以分为强/弱/最终一致性三类。

### 强一致性 - Strong Consistency [^1]

* 对于关系型数据库，要求更新过的数据能被后续的访问都能看到，这是强一致性。
* “All accesses are seen by all parallel processes (or nodes, processors, etc.) in the same order (sequentially).”

### 弱一致性 - Weak Consistency [^2]

* 如果能容忍后续的部分或者全部访问不到，则是弱一致性。
* “All accesses to synchronization variables are seen by all processes (or nodes, processors) in the same order (sequentially) - these are synchronization operations. Accesses to critical sections are seen sequentially.”
* “All other accesses may be seen in different order on different processes (or nodes, processors).”
* “The set of both read and write operations in between different synchronization operations is the same in each process.”

### 最终一致性 - Eventual Consistency [^3]

* 如果经过一段时间后要求能访问到更新后的数据，则是最终一致性。
* “It defines that if no update takes a very long time, all replicas eventually become consistent.”

## 高可用性（High Avaliability）



## 网络容忍性（Partition Tolerance）



## “三选二”的误解

很对人会片面地认为CAP定理就是简单的“三选二”。这样的理解存在着一定的误导性（个人认为甚至是致命的），它会过分简单化（或者叫做二元化？）各个性质之间的相互关系。

现在我们有必要辨析其中的细节：实际上只有 “在分区（P）存在的前提下呈现完美的数据一致性（C）和高可用性（A）” 这种情况是CAP定理认为不可能出现的存在。

# Reference

* https://en.wikipedia.org/wiki/CAP_theorem#cite_note-Brewer1999-10
* 谈谈分布式系统的CAP理论 - 崔同学的文章 - 知乎 https://zhuanlan.zhihu.com/p/33999708
* CAP 理论常被解释为一种“三选二”定律，这是否是一种误解？ - 欧长坤的回答 - 知乎 https://www.zhihu.com/question/64778723/answer/224132958
* https://www.infoq.cn/article/cap-twelve-years-later-how-the-rules-have-changed/
* (英文原版) https://www.infoq.com/articles/cap-twelve-years-later-how-the-rules-have-changed/

* https://en.wikipedia.org/wiki/Consistency_model

* [^1]: https://en.wikipedia.org/wiki/Strong_consistency

* [^2]: https://en.wikipedia.org/wiki/Weak_consistency

* [^3]: https://en.wikipedia.org/wiki/Eventual_consistency
