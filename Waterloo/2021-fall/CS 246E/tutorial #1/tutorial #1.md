# tutorial #1



## 1. **What is a Shell?**

<u>A shell is any interface which allows you to interact with your operating system</u>. The graphical user interface for any operating system you’ve used is a shell. Furthermore, if you have ever used the "command prompt," or "terminal" on your OS before, what you are using is a command-line shell. In CS246E, we’ll be using a specific command line shell called Bash - the Bourne Again Shell, but some scripts you write may also need to be compatible with sh, the Bourne Shell (which has less features).

## 2. Some Bash Commands

Command-line shells predate modern GUIs for operating systems, but why would we want to use such old technology? The answer is the same as why we write programs to automate tasks for us rather than doing them manually: command-line shells tend to be excellent at doing repetitive tasks with relatively little user guidance, whereas GUI shells are generally not.

At its core, Bash relies on a large number of programs, some of which you’ve seen before, some which you’ve seen before, some which you’ll see in this tutorial, and many more which you’re welcome to discover on your own.

## 3. Using the Shell from C++

You can run shell commands easily from within a C/C++ program by including  and using the system function. system actually runs /bin/sh, which doesn’t have all the features of Bash, but everything we’ve seen so far will work on both.

```cpp
#include <cstdlib>
int main() {
	// Prints 2 to stdout, assuming helloworld.txt contains "Hello World"
	system( "wc -w helloworld.txt" );
}
```

**3.1 Exercise** 

We’re ready to start writing our program. Write a program which accepts a file as a command-line argument and copies it 10 times to files named copy0, ..., copy9. Use system rather than trying to create files using C++ I/O.

## 4. Exit Statuses and the Test Command

### 4.1 Exit Statuses 

In addition to the output printed by a program to standard out and standard error, every program also returns an exit status (or exit code) which tells the user whether it was successful or not. 

* A code of 0 means "true" or "success" 
* A code between 1-255 means "false" or "failure" 

The idea is that every successful command is successful in the same way, whereas commands may fail in a number of ways. It is up to each individual program to specify what its exit statuses mean, usually in the program’s man pages. For example, `diff` returns 0 if the input files are identical, 1 if they are different, and 2 if an error occurred (such as one file not existing). 

The exit status of the most recently run program can be checked using the `$?` shell variable.

### 4.2 Test

The Bash `test` command (which can also be written as paired square brackets) can do all sorts of boolean conditions: see the man pages for a comprehensive list. In our case, we’d like to know whether the file the user supplied us as a command line argument actually exists. `test -f` <u>will tell us whether a specifed file exists and is not a directory</u>.

```bash
$ ls
file1 dir1
$ test -f file1
$ echo $?
0
$ test -f dir1
$ echo $?
1
$ test -f file2
$ echo $?
1
$ [ -f file2 ] # alternative syntax for test
1
```

### 4.3 Reading Exit Statuses in C++

You may have noticed that `system` returns an int. However, it doesn’t just return the exit status: it also returns some other information we don’t care about. The `WEXITSTATUS` function in `<sys/wait.h>` can convert `system`’s return value into an exit status that we can work with in `C++`.

### 4.4 Exercise 

Using what we have learned so far, verify that the user supplied a path to a regular file which exists. If they did not, print a helpful error message and exit.

## 5. Using the Results of Commands in Other Commands

You’ve already seen how we can redirect input from and output to files in the shell. However, sometimes we want to get command-line arguments or input from another command, or equivalently we want to redirect a command’s output to be sent to another command.

### 5.1 Piping 

The most basic way to do this is piping. A pipe ties the output of a command to the input of another, so that the first program’s output can be read as input by the second program. The syntax is a pipe (|), hence the name. $ echo "Hello World" | wc -w 2

```bash
$ echo "Hello World" | wc -w
2
```

### 5.2 Piping in C 

We can also open a pipe in a C program, where one end of the pipe is our program and the other end is another program. The `popen` and `pclose` functions can be used to do this: their syntax is the same as `fopen` and `fclose`, except that the first argument to `popen` should be a shell command rather than a file name. `popen` then returns a `FILE *` which can be used in the same way that the `FILE *` from `fopen` is used.

```cpp
#include <cstdio>
#include <iostream>
int main() {
    FILE* f = popen( "wc -w helloworld.txt", "r" );
    int words;
    fscanf( f, "\%d", words );
    pclose( f );
    std::cout << words << std::endl;
    return 0;
}
```

### 5.3 Using Program Output as a Command-line Argument

We can also use the results of a program’s output anywhere in Bash we could use a string by using the special `$()` syntax. Simply place the command you wish to execute between the parentheses.

```bash
$ cat args.txt
-w file.txt
$ cat file.txt
Hello from file.txt
$ wc $(cat args.txt)
3
```

### 5.4 Exercise 

Using what we have learned so far, modify your program so that it copies the specified file until exactly 10 (non-hidden) files total are in the current directory.

## 6. Suppressing Unwanted Output

Sometimes we don’t care about the output of a command: perhaps we know it will succeed, or perhaps we only care about the exit status or a side-effect of the command. One thing we could do is create a temporary file and then delete it:

```bash
$ mktemp
/tmp/example.file.path
$ mycommand > /tmp/example.file.path
$ rm /tmp/example.file.path
```

However, as you can imagine this gets very cumbersome. Unix provides a better way: there are a number of files in the devices folder which behave specially when you interact with them (for example, `/dev/stdin`, `/dev/stdout`, and `/dev/stderr` allow you to interact with I/O as files). In particular, the /dev/null file simply ignores whatever is written to it, and can be used as a way to get rid of unwanted output.

```bash
$ mycommand > /dev/null # Standard output is not printed to screen
```

### 6.1 Exercise 

You now have everything you need to finish your program. Modify your program to use diff to find out how many files in the current directory are the same as the supplied file (including the supplied file itself), and copy until there are at least 10. Use diff’s exit status to determine whether the files are identical: do not use its output. You can assume that there are at most 10 files in the current directory, each with a name of length at most 128 and containing no spaces, and no identical file has is named copy0,...,copy9.