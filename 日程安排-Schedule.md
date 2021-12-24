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



## vscode fileService Step By Step

* [ ] fileService

  * [ ] readFile()

  * [ ] doReadFile()

  * [ ] _doReadFile()

  * [ ] _doReadFileStream()

    * [ ] readFileUnbuffered()

    * [x] readFileStreamed(provider)

      * [x] call: provider.readFileStream() - diskFileSystemProvider

        * [x] newWriteableStream()

        * [x] readFileIntoStream()

          * [x] ⭐doReadFileIntoStream()

            * [x] const handle = await provider.open();

            * [x] let buffer = VSBuffer.alloc();

            * [x] do {

              	bytesRead = await provider.read(handle, posInFile, buffer.buffer, posInBuffer, buffer.byteLength - posInBu);
  
              provider.write(buffer);
            
              buffer = VSBuffer.alloc();
            
            * [x] } while (bytesread > 0);

    * [ ] readFileBuffered()

    * [ ] ...

  * [ ] streamToBuffer()
  
    * [ ] streams.consumeStream()
  



* class `Compoennt` base class 和 一堆超级简单无脑的迷你继承`Component`s, 比如velocity, position, render, texture, 
    * 记得写一个helper function用来为每个不同的component type生成一个unique id， see `chrisli/component.h`

* class `Object` (对应ECS中的`Entity`)
    * wrapper of `Component`s
    * 必顶有个vector存`Component`
    * 额外的一些details：
        * 需要些APIs去add/remove `Compoennt` (最好不用写在`Entity`里面， 写在`ObjectManger`)
* class `ObjectManager` (对应的就是我的`Registry`)
    * fields:
        * vector of `Object`
    * APIs:
        * Object &createObject(); 唯一正确途径去创建一个`Object`
        * 
        * ComponentType &addComponent\<ComponentType, Arg...\>(Object &, Args... args); [note: 必定是个template function]
        * removeComponent<>() [对应的是我的Regisry::remove()]
        * bool hasComponent<>(Object &);
        * ComponentType &getComponent<>(Object &);
        * void destroyObject(Object &);
        * void clearAllObjects();
        *  
        * vector\<Object *\> query\<ComponentType\>();
            * 注释：用来搜索所有Object which obtains the provided ComponentType.
            * 实现：for loop every `Object`, for each `component` in `Object`, check if the component is the same as the `ComponentType`, if so , add a pointer to that Obejct into a vector, if not , pass it. Return the vector at last.