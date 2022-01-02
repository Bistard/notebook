|                  | **Description**                                              |      |
| ---------------- | ------------------------------------------------------------ | ---- |
| **Daily**        |                                                              |      |
|                  | 华为安装google service                                       |      |
|                  | 去银行换手机绑定                                             |      |
|                  | 报名WE                                                       |      |
|                  | 申请coop工签                                                 |      |
|                  | 发邮件关于转cs系的事情（等出分以后）                         |      |
|                  | 试着上1/2门课                                                |      |
|                  | 租房                                                         |      |
|                  | ✔网购HDMI to DP / miniDP                                     |      |
| **MarkdownNote** |                                                              |      |
|                  | architecture explanation.md                                  |      |
|                  | UML for DI                                                   |      |
|                  | UML && 时序图 - FileService                                  |      |
|                  | 观察stream如何按chunk读文件                                  |      |
|                  | decode DataBuffer                                            |      |
|                  | 替换/实装service                                             |      |
|                  | 测试按chunk读取 vs. 一次性读取                               |      |
|                  | performanceService?                                          |      |
|                  | writeFile功能                                                |      |
|                  | 优化uri.ts                                                   |      |
|                  | 完善fileService和diskFileSystemProvider                      |      |
|                  | 研究protobuf技术 (效率 + 体积 + 是否足够轻便?)               |      |
|                  | 如果protobuf整个数据集太臃肿了, 要不要试一下json+部分protobuf数据集? |      |
|                  | 每个notebook都用一个单独的protobuf去记录, 这样子当只修改了一个notebook的时候不需要全部重新生成新的protobuf |      |
|                  | 重构file tree                                                |      |



| 产品名称               | 订阅价格   | 间隔 | 订阅起始日期  | 下次收费      |
| ---------------------- | ---------- | ---- | ------------- | ------------- |
| Microsoft 365 personal | CAD $79.00 | 1年  |               | 2022年5月14日 |
| bilibili年度会员       | 108$       | 1年  | 2021年9月30日 | 2022年9月30日 |



## vscode fileService Related Code Step By Step

* [x] **VSBuffer**

  * [x] wrapper of `Uint8Array`

* [x] **stream**

  * [x] `ReadableStreamEvent`

  * [x] `ReadableStream`继承了上述

  * [x] `ReadableBufferedStream`是一个interface存了一个`ReadableStream`和一个array of buffer. 理解为a stream that has a buffer already read.

  * [x] `WriteableStream`继承了上述

  * [x] `Readable`

    ​	这玩意只是一个interface拥有一个`read()`函数，涉及面就很广了，可以全局搜索关键词`public read()`。

    ​	又或者，调用函数`toReadable<T>(t: T): Readable<T>`可将数据转换成`Readable`。

  * [x] `writeableStreamImpl`继承了`WriteableSteam`

    * [x] 在非`flow`状态下，`write()`函数只会将`buffer`储存到`stream`里面，并不会开始将数据发送给监听者。想要开始`flow`数据，只能需要调用`resume()`。

      我没理解错的话，在vscode中，不存在一个stream是`readable`但不是`writeable`的。

* [x] **provider**

  * [x] 我对`provider`的理解偏向于总结为，不同`URI.scheme`会有一个自己对应功能的`provider`，`provider`是用来抽象化不同`URI.scheme`所对应的`read/write/...`等函数内部实现的。比如我们有`diskFileSystemProvider`对应的就是`Schemas.file: "file"`。

* [ ] **fileService Writing Functionality**
  
  * 总结：对于`fileService`的写入功能来说，可以写入四种数据，`VSBuffer`, `Readable<VSBuffer>`, `ReadableStream<VSBuffer>`, `ReadableBufferedStream<VSBuffer>`。
  * [x] `writeFile()`函数
    * [x] 函数内部中，首先会获得一个`writeableProvider`，然后需要的话会recursively创建路径文件夹。
    * [ ] 然后做了一个optimization：读取3个chunks试图去reduce overhead。然后根据provider，有两种写入方法，buffered和unbuffered。
    * [x] `doWriteUnbuffered()`
      * [x] 会调用`ResourceQueue.queueFor()`，
      * [x] 然后去调用`doWriteUnbufferedQueued()`
        * [x] 最后会将写入数据最终转换成`VSBuffer`，并调用`provider.writeFile()`, 
        * [x] 总结：一次性写入。
    * [x] `doWriteBuffered()`
      * [x] 会调用`ResourceQueue.queueFor()`，然后会根据传入数据不同，调用两个不同函数。
      * [x] `doWriteStreamBufferedQueued()`
        * [x] 这个函数会开始真正的writing，首先试图把以读的buffer写入（`doWriteBuffer() -> provider.write()`）。
        * [x] 然后调用`listenStream()`来将stream里的数据写入（`doWriteBuffer() -> provider.write()`）。
      * [x] `doWriteReadableBufferedQueued()`
        * [x] 和上面函数基本一样的逻辑，一直调用`read()`函数获得`VSBuffer`，然后将数据写入（`doWriteBuffer() -> provider.write()`）。
  
* [ ] **fileService Reading Functionality**

  内部可以通过`registerProvider()`来提供`provider`, 比如`fileDiskSystemProvider`.

  * [x] `readFile()`函数

    * [x] 先获得一个`provider`（`withReadProvider()`）

    * [x] 调用`doReadFile()`

      * [x] 直接调用`doReadFileStream()`

        内部implementation会涉及到三种读取文件的方式，`readFileUnbuffered()`，`readFileStreamed()`，`readFileBuffered()`。

        `readFileBuffered()`和`readFileUnbuffered()`都会创建一个`WriteableStreamImpl<VSBuffer>()`。

        * [x] `readFileBuffered()`
          * 会调用函数`readFileIntoStream()`.
          * 核心逻辑放在`doReadFileIntoStream()`中，
          * 运行逻辑是打开文件(`provider.open()`)，
          * 然后分配一个`buffer(VSBuffer.alloc())`，
          * 紧接着循环向`buffer`里面读取数据（`provider.read()`），
          * 一旦`buffer`读满了会将`buffer`存入`writeableStream`当中（`stream.write(buffer)`）并创建一个新的`buffer`。
            * 注意，因为这里的stream为非`flow`状态，因此数据并不会发送给任何`listeners`。
          * 直到整个文件读取完毕后关闭文件（`provider.close()`），最后返回整个`writeableStream`。
          * 总结：同步（`sync`）的一次性读完整个文件。
        * [x] `readFileUnBuffered()`
          * 和上面一种方法有两个不一样的地方，一是通过异步(`async`)读取文件并写入到`stream`中，并且只会读取一次整个文件进入一个`buffer`。
        * [ ] `readFileStreamed()` 
          * 该方法永远优先于`readFileBuffered`（对于`diskFileSystemProvider`而言，永远都是优先采用该方法来读取文件）
          * 该方法会调用`provider.readFileStream()`，
            * 因此对于`diskFileSystemProvider`而言，该函数里会创建一个`WriteableStreamImpl<Uint8Array>()`并且调用`readFileIntoStream()`。
      
      * [x] 调用`streamToBuffer()`
      
        * [x] `streams.consumeStream()`
          * [x] `listenStream()`
            * [x] `stream.on('data')`
              * [x] `stream.resume()`
                * [x] `flowData()`
                  * [x] `emitData()`
                    * [x] sending `VSBuffer` to listeners (callbacks from all the listeners are invoked)



