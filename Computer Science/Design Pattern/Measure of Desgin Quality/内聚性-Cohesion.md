# 内聚性 - Cohesion

How closely are elements at a module related to each other.

## High Cohesion ✔

* arbitrary grouping (eg. `<untility>`)
* common theme, otherwise unrelated, maybe some common base code (eg. `<algorithm>`)
* elements manipulate state over the lifetime of an object (eg. `open/read/close` files, these functions don’t know each other, but we use them together)
* elements pass data to each other

## Low Cohesion❌

* elements cooperate to perform exactly one task
* consequence: poorly organized code, hard to understand and maintain