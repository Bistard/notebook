# 柯里化 - Currying

> 一句话：柯里化是指将一个带有多个参数的函数转换为一系列只有一个参数的函数，并且返回一个新函数的过程。这个新函数可以在之后被调用，它会依次调用这些只有一个参数的函数，并返回最终结果。

In mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument. For example, currying a function $f$ that takes three arguments creates a nested unary function $g$, so that the code

```
let x = f(a, b, c)
```

gives $x$ the same value as the code

```
let h = g(a)
let i = h(b)
let x = i(c)
```

or called in sequence,

```
let x = g(a)(b)(c)
```

## 简单实例

在柯里化之前：

```javascript
function isGreaterThan(a, b) {
  return b > a;
}
// isGreaterThan(2, 5)
```

在柯里化之后：

```js
function isGreaterThan(a) {
  return function (b) {
    return b > a;
  }
}
// isGreaterThan(2)(5)
```

## 柯里化有哪些用处

### 1. 延迟计算 / 缓存性（重复计算）

因为对于一个函数`f(a, b, c)`而言，我们将其拆分成`f(a)(b)(c)`是可以中间任意步骤中停止运算，从而实现延迟计算的可能性。除此之外，还提供了将步骤返回值缓存起来以备避免重复计算。

### 2. 避免重复else if检查

```js
function log(type, msg) {
  if (type == "error")
    console.error(msg);
  if (type == "warn")
    console.warn(msg);
  if (type == "info")
    console.info(msg);
}
```

```js
// Without currying
const error = msg => log("error", msg);
const warn = msg => log("warn", msg);
const info = msg => log("info", msg);

// With currying
log = curry(log);
const error = log("error");
const warn = log("warn");
const info = log("info");
```

### 3. 参数复用

当多次调用同一个函数，并且传递的参数绝大多数是相同的时候，那么该函数就是一个很好的柯里化候选。

### 4. 开发高效

通过柯里化，我们可以把一个需要多个参数的函数，分解成更小的函数，开发者可以更加快速的实现功能。

## 柯里化有哪些缺点

### 1. 效率问题

柯里化会增加函数的调用次数和内存使用，从而可能会对性能产生一定的影响。

### 2. 不支持可变参数

柯里化不支持可变参数，这意味着如果我们要柯里化一个带有可变参数的函数，就必须使用一些特殊的技巧来实现。

### 3. 可读性不足

柯里化可能会使代码变得更加抽象和难以理解，<u>特别是当函数嵌套过多时</u>（譬如，一眼看不出来一共需要哪些参数），代码的可读性会进一步降低。

## 任何函数的柯里化

```js
// JavaScript
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    }
    return (..._args) => 
      curried.apply(this, args.concat(_args)); 
  };
}
```

> 这种方法增加了些许的performance cost，但是大大提高了灵活性，可以考虑选择。
>
> > 同时也可以搭配decorator使用。

# Reference

* https://en.wikipedia.org/wiki/Currying
* https://towardsdatascience.com/what-is-currying-in-programming-56fd57103431#:~:text=Currying%20is%20the%20transformation%20of,is%20very%20similar%20to%20it.
* https://www.zhihu.com/question/37774367/answer/192978122
