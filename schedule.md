

| **Subject**                                                  | **Description**                                              | **Deadline**                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------------------------------- |
| [**MATH 237**](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881420/View) |                                                              |                                              |
|                                                              | review WA01 solution                                         |                                              |
|                                                              | review WA02 solution                                         |                                              |
|                                                              | ✔[week7 reading - unit 9 - Critical Points](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881429/View) |                                              |
|                                                              | ✔MA09<br />✔Q1-Q4<br />✔Q5-Q9                                | Friday, November 5, 2021 at 5:00 PM          |
|                                                              | WA03 (lots of stuff)                                         | Monday, November 8, 2021 at 6:00 PM          |
| [**MATH 239**](https://learn.uwaterloo.ca/d2l/le/content/708429/Home) |                                                              |                                              |
|                                                              | review A01 solutions                                         | important, do not forget                     |
|                                                              | review A02 solutions                                         |                                              |
|                                                              | review A03 solutions                                         |                                              |
|                                                              | review A04 solutions (Q3b and Q3c)                           |                                              |
|                                                              | ✔lecture L-7-x                                               |                                              |
|                                                              | ✍tutorial on wednesday                                       |                                              |
| [**CS 245**](https://learn.uwaterloo.ca/d2l/le/content/709696/Home) |                                                              |                                              |
|                                                              | week 07 - lectures (~100 pdf)<br />logic10<br />logic11<br />logic12 |                                              |
|                                                              |                                                              |                                              |
| [**CS 246E**](https://student.cs.uwaterloo.ca/~cs246e/F21/assignments.shtml) |                                                              | ssh -Y s795li@linux.student.cs.uwaterloo.ca  |
|                                                              | ✍lecs: Oct 19, Oct 21, Oct 26, Oct 28, Nov 02                |                                              |
|                                                              | unfinished tutorial                                          |                                              |
|                                                              | quiz #7                                                      | Due on Nov 5, 2021 5:00 PM                   |
|                                                              | A03                                                          |                                              |
| [**SPOCOM 100**](https://learn.uwaterloo.ca/d2l/le/content/726790/Home) |                                                              |                                              |
|                                                              | 3 comments for each week (>= 100 words) (comment should no longer than 3 weeks) |                                              |
| **PD1**                                                      |                                                              |                                              |
|                                                              | 2nd job posting                                              | Oct 26th at 9:00 AM                          |
|                                                              | interviews begin                                             | Oct 22nd until the rank/match on Nov 4th     |
|                                                              | apply for coop work-permit                                   |                                              |
|                                                              | ✔Unit 6 exercise: EQ and Workplace Etiquette (10%)           | Tuesday, November 2nd at 11:55 PM            |
|                                                              | Unit 7: Protect Your Rights (5%) assignment                  | Tuesday, November 9th at 11:55 PM            |
|                                                              | Assignment 8: Pulling It All Together                        | Tuesday, November 16, 2021 at 11:55 PM (20%) |
| **DWZQ-coop**                                                |                                                              |                                              |
| #1                                                           | ✔compilation                                                 |                                              |
|                                                              | ✔develop on xxx.xxx.xxx.167                                  |                                              |
|                                                              | ✔connect A5, MySQL                                           |                                              |
|                                                              | ✔[write configuration]                                       |                                              |
|                                                              | ✔ login A5 first                                             | reference: *dataproxy.cpp & xxxassistant.cpp |
|                                                              | ✔ async: get rsp - test                                      |                                              |
|                                                              | ✔ LEARN: XML API                                             |                                              |
|                                                              | ✔ read a5_fielddef.xml                                       |                                              |
|                                                              | ✔ async: get rsp from A5                                     |                                              |
|                                                              | ✔ (read a5_fielddef.xml to get coressponding field key (id value -> string field key) - e.g '605' -> 'FID_KHH' |                                              |
|                                                              | ✔new API: create TABLE                                       |                                              |
|                                                              | ✔合成MySQL语句 + 插入 (update map) - (MySQL.insert())        |                                              |
|                                                              | ✔read mapConfig.xml to auto send request to A5               |                                              |
|                                                              | ✔fix cannot get login arguments                              |                                              |
| #2                                                           |                                                              |                                              |
|                                                              | ✔协议protobuf (google protocol buffer)                       |                                              |
|                                                              | ✔修167上dwzq-map-test的bug先 (out_of_range) (密码错误)       |                                              |
|                                                              | ✔本地: 装protobuf , 测试服: 需要compile过后的protobuf文件    |                                              |
|                                                              | ✔protoc -I=./ --cpp_out=./ ./funcMessage.proto               |                                              |
|                                                              | ✔本地: 测试收发序列化/反序列化protobuf                       |                                              |
|                                                              | ✔在同一个线程或者开一个线程来监听                            |                                              |
|                                                              | ✔(原生API) 去监听多个listeners                               |                                              |
|                                                              | ✔远程: 成功编译 (带protobuf)                                 |                                              |
|                                                              | ✔远程: 从另一台远程发送数据进行测试                          |                                              |
|                                                              | ✔利用protobuf反序列化                                        |                                              |
|                                                              | ✔测试是否成功                                                |                                              |
|                                                              | ✔发送对应的mysql语句                                         |                                              |
|                                                              | ✔获得mysql的response                                         |                                              |
|                                                              | 设计一个std::mutex队列. 每次client请求request时就往队列塞    |                                              |
|                                                              | 然后开一个额外线程, 专用消耗该队列 (同步), 同时负责发送rsp给client |                                              |
|                                                              | 设计protobuf协议: 用来传输接受其他protobuf协议的协议         |                                              |
|                                                              | 二次测试是否可以进行收发                                     |                                              |
|                                                              | 发送rsp给listeners                                           |                                              |
|                                                              | 最终检测                                                     |                                              |
| **MarkdownNote**                                             |                                                              |                                              |
|                                                              | architecture explanation.md                                  |                                              |
|                                                              | UML && 时序图 - DI && FileService                            |                                              |
|                                                              | 观察stream如何按chunk读文件                                  |                                              |
|                                                              | decode DataBuffer                                            |                                              |
|                                                              | 替换/实装service                                             |                                              |
|                                                              | 测试按chunk读取 vs. 一次性读取                               |                                              |
|                                                              | performanceService?                                          |                                              |
|                                                              | writeFile功能                                                |                                              |
|                                                              | 优化uri.ts                                                   |                                              |
|                                                              | 完善fileService和diskFileSystemProvider                      |                                              |
|                                                              | 研究protobuf技术 (效率 + 体积 + 是否足够轻便?)               |                                              |
|                                                              | 如果protobuf整个数据集太臃肿了, 要不要试一下json+部分protobuf数据集? |                                              |
|                                                              | 每个notebook都用一个单独的protobuf去记录, 这样子当只修改了一个notebook的时候不需要全部重新生成新的protobuf |                                              |
|                                                              | 重构file tree                                                |                                              |



| 产品名称               | 订阅价格                     | 间隔 | 订阅起始日期  | 下次收费      |
| ---------------------- | ---------------------------- | ---- | ------------- | ------------- |
| Microsoft 365 personal | CAD $79.00                   | 1年  |               | 2022年5月14日 |
| QQ音乐豪华绿钻连续包月 | 13元自动续费 (第一个月2.8元) | 1月  | 2021年7月5日  | 2021年10月5日 |
| bilibili年度会员       | 108$                         | 1年  | 2021年9月30日 | 2022年9月30日 |



## vscode fileService Step By Step

* [ ] fileService

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

              ​	bytesRead = await provider.read(handle, posInFile, buffer.buffer, posInBuffer, buffer.byteLength - posInBu);

              provider.write(buffer);
            
              buffer = VSBuffer.alloc();
            
            * [x] } while (bytesread > 0);

    * [ ] readFileBuffered()

    * [ ] ...

  * [ ] streamToBuffer()

    * [ ] streams.consumeStream()

