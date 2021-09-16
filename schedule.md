

| **Subject**                                                  | **Description**                                              | **Deadline**                                |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------- |
| [**MATH 237**](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881420/View) |                                                              |                                             |
|                                                              | [Week#2](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881424/View) |                                             |
|                                                              | ✔ unit 2: Limits                                             |                                             |
|                                                              | ✔ unit 3: Continuous Functions                               |                                             |
|                                                              | ✍mobius assignment #2 and #3 (✍ 2.6, 3.3)                    | Wednesday, September 22, 2021 at 5:00 PM    |
| **MATH 239**                                                 |                                                              |                                             |
|                                                              | ✔readings: Part I, sections 2.1 to 2.2.1                     |                                             |
|                                                              | ✍tutorial 1                                                  |                                             |
|                                                              | ✍tutorial 1 hand in question                                 | Thursday September 17 9:30 PM               |
|                                                              | assignment 1                                                 | Thursday September 23 11:00 PM              |
| **CS 245**                                                   |                                                              |                                             |
|                                                              | week #2 lecture                                              |                                             |
|                                                              | Propositional Language - Syntax                              |                                             |
|                                                              | Propositional Language - Semantics                           |                                             |
|                                                              | practice Quiz - week 02                                      |                                             |
| [**CS 246E**](https://student.cs.uwaterloo.ca/~cs246e/F21/assignments.shtml) |                                                              | ssh -Y s795li@linux.student.cs.uwaterloo.ca |
|                                                              | ✍ [lecture video #2](https://vault.cs.uwaterloo.ca/s/eoFkNaocsCCWerm) |                                             |
|                                                              | ✍ quiz #1                                                    | 5pm Eastern time on Friday, September 17th  |
|                                                              | Assignment  #1                                               | Friday, September 24, 5pm                   |
| **SPOCOM 100**                                               |                                                              |                                             |
|                                                              | READING I && READING II                                      |                                             |
|                                                              | [assignment: Interview class colleagues](https://learn.uwaterloo.ca/d2l/le/content/726790/viewContent/3950875/View) | September 21 11: 59 pm                      |
| **PD1**                                                      |                                                              |                                             |
|                                                              | 京东/淘宝网购账号                                            |                                             |
|                                                              | ✍coop Work permit info sessions                              | September 17❓, 10:00 pm                     |
|                                                              | mock interview ( NOT booked)                                 |                                             |
|                                                              | ✍first period                                                |                                             |
|                                                              |                                                              |                                             |
| **DWZQ-coop**                                                |                                                              |                                             |
|                                                              | ✔compilation                                                 |                                             |
|                                                              | develop on xxx.xxx.xxx.167                                   |                                             |
|                                                              | connect A5                                                   |                                             |
|                                                              | connect MySQL                                                |                                             |
|                                                              | learn MySQL                                                  |                                             |
|                                                              | write configuration                                          |                                             |
|                                                              | mapping                                                      |                                             |
| **MarkdownNote**                                             |                                                              |                                             |
|                                                              | 观察stream如何按chunk读文件                                  |                                             |
|                                                              | decode DataBuffer                                            |                                             |
|                                                              | 替换/实装service                                             |                                             |
|                                                              | 测试按chunk读取 vs. 一次性读取                               |                                             |
|                                                              | performanceService?                                          |                                             |
|                                                              | writeFile功能                                                |                                             |
|                                                              | 优化uri.ts                                                   |                                             |
|                                                              | 完善fileService和diskFileSystemProvider                      |                                             |



| 产品名称               | 订阅价格                     | 间隔 | 订阅起始日期  | 下次收费       |
| ---------------------- | ---------------------------- | ---- | ------------- | -------------- |
| Microsoft 365 personal | CAD $79.00                   | 1年  |               | 2022年5月14日  |
| QQ音乐豪华绿钻连续包月 | 13元自动续费 (第一个月2.8元) | 1月  | 2021年7月5日  |                |
| pdfFiller              | 20$                          | 1月  | 2021年9月15日 | 2021年10月15日 |



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

