# 介绍

> what happens if a destructor throws?

By default, the program will terminate IMMEDIATELY, `std::terminate` is called.

If you want to throw a destructor, we use the keyword `noexcept`.

> <u>NEVER</u> let destructor throws.

