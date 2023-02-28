# Dispose模式 - Dispose Pattern

> 这个pattern就比较冷门了，基本只属于拥有Garbage Collection特性的语言才会需要的设计模式。常见于C#等语言。
> 可以简单理解为去模拟C++里面的RAII特性：模拟destructor。一旦一个resource（an object）被dispose了，那么这个object所提供的功能在期望上就被GC回收了。

* The dispose pattern is used to ensure that an object's resources are properly released when the object is no longer needed.
* In this pattern, a resource is held by an object, and released by calling a conventional method – usually called `close`, `dispose`, `free`, `release` etc.
* A resource usually needs to implement an interface named `IDisposable` to indicates this is a resource that can be disposed.

The Dispose method typically performs the following tasks:

1. Releases any unmanaged resources held by the object, such as file handles or network connections.
2. Disposes of any child objects that also implement the dispose pattern.
3. Suppresses finalization of the object, if it has been implemented.

## TypeScript案例 - TypeScript Example

```ts
export interface IDisposable {
	dispose(): void;
}

export class DisposableManager implements IDisposable {

	private readonly _disposables = new Set<IDisposable>();
	private _disposed = false;

	constructor() {}

	public dispose(): void {
		
		// prevent double disposing
		if (this._disposed) {
			return;
		}

		// actual disposing
		this._disposed = true;
		try {
			disposeAll(this._disposables.values());
		} finally {
			// whether disposeAll throws or not, we need to clean the set.
			this._disposables.clear();
		}
	}

	get disposed(): boolean {
		return this._disposed;
	}

	public register<T extends IDisposable>(obj: T): T {
		
		if (obj && (obj as any as DisposableManager) === this) {
			throw new Error('cannot register the disposable object to itself');
		}

		if (this._disposed) {
			console.warn('cannot register a disposable to a object which is already disposed');
			return obj;
		}

		this._disposables.add(obj);
		return obj;
	}
}
```

```ts
test('dispose recursively', () => {
    const disposable = new DisposableManager();

    const disposable2 = new Disposable();
    const disposable3 = new DisposableManager();

    disposable.register(disposable2);
    disposable.register(disposable3);

    const disposable4 = new Disposable();
    disposable3.register(disposable4);

    disposable.dispose();

    assert.ok(disposable.disposed);
    assert.ok(disposable2.isDisposed());
    assert.ok(disposable3.disposed);
    assert.ok(disposable4.isDisposed());
});
```

# Reference

* https://en.wikipedia.org/wiki/Dispose_pattern