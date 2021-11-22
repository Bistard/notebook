# 适配器模式 - Adapter Pattern

>  将一个类的接口转换成客户希望的另一个接口。Adapter 模式使得原本由于接口不兼容而不能在一起工作的那些类可以一起工作。

<img src="D:\dev\AllNote\.mdnote\assets\image-20211122120722326.png" alt="image-20211122120722326" style="zoom:50%;" />

## 案例 - Example

用TypeScript来举例，我们有

```tsx
interface NeededInterface {
  hello: () => void;
}

class ProvidedClass {
  sayHello() {
    console.log('hello');
  }
}

// 适配器继承 ProvidedClass 并实现 NeededInterface
class Adapter extends ProvidedClass implements NeededInterface {
  hello() {
    super.sayHello();
  }
}
```

或者利用Composition relationship:

```ts
interface NeededInterface {
  hello: () => void
}

class ProvidedClass {
  sayHello() {
    console.log('hello');
  }
}

class Adapter implements NeededInterface {
  private providedClass: ProvidedClass;

  constructor(providedClass: ProvidedClass) {
    this.providedClass = providedClass;
  }

  hello() {
    this.providedClass.sayHello();
  }
}
```

