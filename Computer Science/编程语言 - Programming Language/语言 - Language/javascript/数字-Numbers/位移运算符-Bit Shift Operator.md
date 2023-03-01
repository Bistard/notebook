# 位移运算符 - Bit Shift Operator



## >>> 无符号右移运算符 - Unsigned Right Shift Operator

用法：`number >>> n`。

将所有bit向右移动`n`位。新的位（bit）会被0替代。

```ts
let a = 4;   // 0b0100 - 4
a = a >>> 2; // 0b0001 - 1
```

## <<< 无符号左移运算符 - Unsigned Left Shift Operator

用法：`number <<< n`。

将所有bit向左移动`n`位。**新的位（bit）会被0替代**。

```ts
let a = 4;   // 0b00000100 - 4
a = a <<< 2; // 0b00010000 - 16
```

## >> 右移运算符 - Right Shift Operator

用法：`number >> n`。

将所有bit向右移动`n`位。**新的位（bit）会被原先的bit替代。**

```ts
let a = -5;   // 0b11111111111111111111111111111011 - -5
a = a >> 2;   // 0b11111111111111111111111111111110 - -2
```

## >> 左移运算符 - Left Shift Operator

用法：`number << n`。

将所有bit向左移动`n`位。**新的位（bit）会被原先的bit替代。**

```ts
let a = 5;  // 00000000000000000000000000000101 - 5
a = a << 2; // 00000000000000000000000000000010 - 20
```

