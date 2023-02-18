# Eventual Consistency - 最终一致性

> Eventual Consistency是一种weak consistency model，但是非常快。

* <u>它允许数据副本在分布式系统中短暂的不一致性，但最终会达到一致性状态</u>。
    * 这意味着在一段时间内，对于某些读操作，不同的节点可能会返回不同的值，但随着时间的推移，所有的副本最终都会达到一致的状态。
    * 在eventual consistency模型中，当一个数据副本被更新时，这个更新不会立刻被复制到所有的副本中。相反，这个更新会被异步地传播到其他的副本中，这可能需要一些时间。在这个过程中，不同的副本之间可能会出现短暂的不一致性，因为某些节点可能会读取到旧的数据。但是，随着时间的推移，所有的副本最终都会被更新为相同的值。
    * Eventual consistency通常被用于需要高可用性的分布式系统中，因为它可以提高系统的可用性和可扩展性。但是，由于这个模型允许一定程度的不一致性，所以对于一些对数据一致性有更高要求的应用场景，如金融交易等，eventual consistency可能不适用。

## Eventual Consistency特征

* Order does not matter.
* Easy to implement, hard to use.
* Limited usage scenarios.

## 案例

比如在一个社交平台中，比如Twitter，当你刚对一条tweet进行评论的时候，在前几秒钟你的画面里只有你一个人的评论，但是刷新几次过后就会发现会有新的评论，并且ta的评论比你更靠前（系统判定ta的评论更早）。这就是一种eventual consistency。

# Reference

* https://www.youtube.com/watch?v=Fm8iUFM2iWU&list=RDLVFm8iUFM2iWU&start_radio=1&rv=Fm8iUFM2iWU&t=0
* https://en.wikipedia.org/wiki/Consistency_model
