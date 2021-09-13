

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
|              | ✔pdf (52 pages)                                              |                                          |
|              | ✔Marked Quiz 1 available                                     | Sep 15, 2021 12:00 PM                    |
| CS 246E      |                                                              |                                          |
|              | ✔[Tutorials](https://learn.uwaterloo.ca/d2l/le/content/709722/Home?itemIdentifier=D2L.LE.Content.ContentObject.ModuleCO-3910158) |                                          |
|              | ✍[lecture video Part 1 and Part 2 (1hr +)](https://piazza.com/class/ksak5md8lmy6w1?cid=24) |                                          |
|              | ✍Assignment #0                                               | Tuesday, September 14, 2021, 5pm         |
| SPOCOM 100   |                                                              |                                          |
|              | ✔fill location table                                         |                                          |
|              | ✍[introducing myself](https://learn.uwaterloo.ca/d2l/le/726790/discussions/topics/458071/View) | Wednesday September 15                   |
| PD1          |                                                              |                                          |
|              | update a new resume                                          |                                          |
|              | ⏰interview (booked)                                          | Tuesday, September 14, 2021 at 8:00 AM   |
|              | ✔integrity assignment                                        | Thursday, September 9, 2021 at 11:55 PM  |
|              | ✔Assignment 1: Skills and Bullet Points                      | Thursday, September 9, 2021 at 11:55 PM  |
|              | Assignment 2: Values and Cover Letters                       | Tuesday, September 14, 2021 at 11:55 PM  |
|              | Work permit info sessions                                    | September 17❓, 10:00 pm                  |
| DWZQ-coop    |                                                              |                                          |
|              | ✔compilation                                                 |                                          |
|              | ✍develop on xxx.xxx.xxx.167                                  |                                          |
|              | connect A5                                                   |                                          |
| MarkdownNote |                                                              |                                          |
|              | ✔source code reading (vscode): Event && Emitter              |                                          |
|              | ✍stream.ts && buffer.ts                                      |                                          |
|              | fileService.ts                                               |                                          |



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

