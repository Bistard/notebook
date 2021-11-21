# 耦合性 - Coupling

How strongly different modules depend on each stronger.

## Low Coupling ✔

* function calls with params / results of basic type
* function calls with array / struct params
* modules affect each other’s control flow

## High Couping ❌

* modules access each other’s implementation (friendship)
* consequence: changes to one module will affect other modules, harder to reuse individual modules