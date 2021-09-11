| **Subject**  | **Description**                                              | **Deadline**                             |
| ------------ | ------------------------------------------------------------ | ---------------------------------------- |
| MATH 237     |                                                              |                                          |
|              | [Week#1](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881423/View)   Unit 1: Graphs of Scalar Functions |                                          |
|              | ✔Assignment: Introduce yourself                              | Monday, September 13, 2021 at 5:00 PM    |
|              | ✍Mobius assignment #1 (60%)                                  | Wednesday, September 15, 2021 at 5:00 PM |
|              | [Week#2](https://learn.uwaterloo.ca/d2l/le/content/701924/viewContent/3881424/View) |                                          |
|              | unit 2: Limits                                               |                                          |
|              | unit 3: Continuous Functions                                 |                                          |
|              | mobius assignment #2                                         | Wednesday, September 22, 2021 at 5:00 PM |
| MATH 239     |                                                              |                                          |
|              | ✔Readings: Part I, Sections 1.1.1 – 1.1.7                    |                                          |
|              | week#2                                                       |                                          |
| CS 245       |                                                              |                                          |
|              | ✍Week#1 [9.6-9.10]                                           |                                          |
|              | ✍pdf (52 pages)                                              |                                          |
|              | ✍Marked Quiz 1 available                                     |                                          |
| CS 246E      |                                                              |                                          |
|              | [Tutorial #1](https://learn.uwaterloo.ca/d2l/le/content/709722/Home?itemIdentifier=D2L.LE.Content.ContentObject.ModuleCO-3910158) (6m38s) |                                          |
|              | ✍Assignment #0                                               | Due Tuesday                              |
| SPOCOM 100   |                                                              |                                          |
|              |                                                              |                                          |
| PD1          |                                                              |                                          |
|              | update a new resume                                          |                                          |
|              | ⏰interview (booked)                                          | Thursday, September 13, 2021 at 2:00 PM  |
|              | ✔integrity assignment                                        | Thursday, September 9, 2021 at 11:55 PM  |
|              | ✔Assignment 1: Skills and Bullet Points                      | Thursday, September 9, 2021 at 11:55 PM  |
|              | Assignment 2: Values and Cover Letters                       | Tuesday, September 14, 2021 at 11:55 PM  |
|              | Work permit info sessions                                    | September 17❓, 10:00 pm                  |
| DWZQ-coop    |                                                              |                                          |
|              | ✔compilation                                                 |                                          |
|              | ✍develop on xxx.xxx.xxx.167                                  |                                          |
|              | connect A5                                                   |                                          |
| MarkdownNote |                                                              |                                          |
|              | source code reading (vscode): Event<T> && Emitter<T>         |                                          |
|              | ✍stream.ts && buffer.ts                                      |                                          |
|              | fileService.ts                                               |                                          |



## vscode fileService Step By Step

* [ ] fileService

  * [ ] doReadFile()

  * [ ] _doReadFile()

  * [ ] _doReadFileStream()

    * [ ] readFileUnbuffered()

    * [ ] readFileStreamed(provider)

      * [ ] call: provider.readFileStream()

        * [ ] diskFileSystemProvider

          * [ ] newWriteableStream()

          * [ ] readFileIntoStream()

            * [ ] ⭐doReadFileIntoStream()

              * [ ] const handle = await provider.open();

              * [ ] let buffer = VSBuffer.alloc();

              * [ ] do {

                ​	bytesRead = await provider.read(handle, posInFile, buffer.buffer, posInBuffer, buffer.byteLength - posInBu);

              * [ ] } while (bytesread > 0);

    * [ ] readFileBuffered()

    * [ ] ...

  * [ ] streamToBuffer()

  * [ ] ...
