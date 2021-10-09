

| **Subject**                                                  | **Description**                                              | **Deadline**                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------- |
| [**MATH 237**](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881420/View) |                                                              |                                                     |
|                                                              | review WA01 solution                                         |                                                     |
|                                                              | ✔[week#4 lecture](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881426/View) |                                                     |
|                                                              | ✔mobius assignment 05                                        | Friday, October 8, 2021 at 5:00 PM                  |
| [**MATH 239**](https://learn.uwaterloo.ca/d2l/le/content/708429/Home) |                                                              |                                                     |
|                                                              | watch ALL the LECTURES and take NOTES with it                |                                                     |
|                                                              | review A01 solutions                                         | important, do not forget                            |
|                                                              | review tutorial 2 hand-in questions                          |                                                     |
|                                                              | review A02 solutions                                         |                                                     |
|                                                              | review tutorial 3 hand-in questions                          |                                                     |
|                                                              | review A03 solutions                                         |                                                     |
|                                                              | Tutorial 4 hand in question for TUT-102                      | Mon, Oct 18, 2021 9:30 PM (中国标准时间)            |
| [**CS 245**](https://learn.uwaterloo.ca/d2l/le/content/709696/Home) |                                                              |                                                     |
|                                                              | review A01 solutions                                         |                                                     |
|                                                              | review A02 solutions                                         |                                                     |
|                                                              | ✔[lecture#4](https://learn.uwaterloo.ca/d2l/le/content/709696/Home) |                                                     |
|                                                              | ✔A02                                                         | Thu, Oct 7, 2021 12:00 AM (中国标准时间)            |
| [**CS 246E**](https://student.cs.uwaterloo.ca/~cs246e/F21/assignments.shtml) |                                                              | October ssh -Y s795li@linux.student.cs.uwaterloo.ca |
|                                                              | lectures (✍16 (delete [] q;), ✍21, ✍23, 28, 30, 05)          |                                                     |
|                                                              | review quiz#3                                                |                                                     |
|                                                              | ✔quiz#4                                                      | Friday, October 8th, at 5:00PM                      |
|                                                              |                                                              |                                                     |
| **SPOCOM 100**                                               |                                                              |                                                     |
|                                                              | discussion comment                                           | October 3 at 11:59pm                                |
|                                                              | [quiz](https://learn.uwaterloo.ca/d2l/lms/quizzing/user/quiz_summary.d2l?qi=194284&ou=726790) | next tuesday?                                       |
| **PD1**                                                      |                                                              |                                                     |
|                                                              | ✍apply for coop work-permit                                  |                                                     |
|                                                              | cover letter                                                 |                                                     |
|                                                              | ✔assignment 4: quiz                                          | Tuesday, October 5th at 11:55 PM                    |
| **DWZQ-coop**                                                |                                                              |                                                     |
|                                                              | ✔compilation                                                 |                                                     |
|                                                              | ✔develop on xxx.xxx.xxx.167                                  |                                                     |
|                                                              | ✔connect A5                                                  |                                                     |
|                                                              | ✔connect MySQL                                               |                                                     |
|                                                              | ✔[write configuration]                                       |                                                     |
|                                                              | ✔ login A5 first                                             | reference: *dataproxy.cpp & xxxassistant.cpp        |
|                                                              | ✔ async: get rsp - test                                      |                                                     |
|                                                              | ✔ LEARN: XML API                                             |                                                     |
|                                                              | ✔ read a5_fielddef.xml                                       |                                                     |
|                                                              | ✔ async: get rsp from A5                                     |                                                     |
|                                                              | ✔ (read a5_fielddef.xml to get coressponding field key (id value -> string field key) - e.g '605' -> 'FID_KHH' |                                                     |
|                                                              | ✔new API: create TABLE                                       |                                                     |
|                                                              | ✔合成MySQL语句 + 插入 (update map) - (MySQL.insert())        |                                                     |
|                                                              | ✔read mapConfig.xml to auto send request to A5               |                                                     |
|                                                              | ✍fix cannot get login arguments                              |                                                     |
|                                                              | check if the MySQL table matches                             |                                                     |
|                                                              | memory leak check                                            |                                                     |
|                                                              | done                                                         |                                                     |
| **MarkdownNote**                                             |                                                              |                                                     |
|                                                              | architecture explanation.md                                  |                                                     |
|                                                              | 观察stream如何按chunk读文件                                  |                                                     |
|                                                              | decode DataBuffer                                            |                                                     |
|                                                              | 替换/实装service                                             |                                                     |
|                                                              | 测试按chunk读取 vs. 一次性读取                               |                                                     |
|                                                              | performanceService?                                          |                                                     |
|                                                              | writeFile功能                                                |                                                     |
|                                                              | 优化uri.ts                                                   |                                                     |
|                                                              | 完善fileService和diskFileSystemProvider                      |                                                     |



| 产品名称               | 订阅价格                     | 间隔 | 订阅起始日期  | 下次收费       |
| ---------------------- | ---------------------------- | ---- | ------------- | -------------- |
| Microsoft 365 personal | CAD $79.00                   | 1年  |               | 2022年5月14日  |
| QQ音乐豪华绿钻连续包月 | 13元自动续费 (第一个月2.8元) | 1月  | 2021年7月5日  | 2021年10月5日  |
| pdfFiller              | 20$                          | 1月  | 2021年9月15日 | 2021年10月15日 |
| bilibili年度会员       | 108$                         | 1年  | 2021年9月30日 | 2022年9月30日  |



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

