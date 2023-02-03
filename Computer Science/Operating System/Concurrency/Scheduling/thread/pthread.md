# PThread

*   A UNIX based third library that supports thread manipulation.



## `pthread_create`

```c
#include <pthread.h>
int pthread_create(pthread_t *restrict thread,
                   const pthread_attr_t *restrict attr,
                   void *(*start_routine)(void *),
                   void *restrict arg);
```

*   Create a new thread identified by `thr` with optional attributes, run `fn` with `arg`.

## `pthread_exit`

```c
```

