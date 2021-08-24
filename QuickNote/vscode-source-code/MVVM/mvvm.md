# Model-View-ViewModel-Analysis

```ts
export class CodeEditorWidget extends Disposable implements editorBrowser.ICodeEditor {
    // ...
    protected _modelData: ModelData | null;
    // bunch of services ...
    constructor(
		domElement: HTMLElement,
		_options: Readonly<editorBrowser.IEditorConstructionOptions>,
		codeEditorWidgetOptions: ICodeEditorWidgetOptions,
		@IInstantiationService instantiationService: IInstantiationService,
		@ICodeEditorService codeEditorService: ICodeEditorService,
		@ICommandService commandService: ICommandService,
		@IContextKeyService contextKeyService: IContextKeyService,
		@IThemeService themeService: IThemeService,
		@INotificationService notificationService: INotificationService,
		@IAccessibilityService accessibilityService: IAccessibilityService)
    {
        super();
        // ...
        this._modelData = null;
        // ...
    }
    
    protected _createView(viewModel: ViewModel): [View, boolean] {
        // ...
        const view = new View(
			commandDelegate,
			this._configuration,
			this._themeService,
			viewModel,
			viewUserInputEvents,
			this._overflowWidgetsDomNode
		);
        return [view, true];
    }
    
    protected _attachModel(model: ITextModel | null): void {
        // ...
        const [view, hasRealView] = this._createView(viewModel);
		if (hasRealView) {
			this._domElement.appendChild(view.domNode.domNode);
			// ...
			view.render(false, true);
			view.domNode.domNode.setAttribute('data-uri', model.uri.toString());
		}
		this._modelData = new ModelData(model, viewModel, view, hasRealView, listenersToRemove);
    }
    
    public setModel(_model: ITextModel | editorCommon.IDiffEditorModel | null = null): void {
        const model = <ITextModel | null>_model;
        // ...
        const detachedModel = this._detachModel();
        this._attachModel(model);
    }
    
}
```



```ts
export class View extends ViewEventHandler {
	// ...
    private readonly _context: ViewContext;
    private readonly _viewParts: ViewPart[];
    public readonly domNode: FastDomNode<HTMLElement>;
    constructor(
		commandDelegate: ICommandDelegate,
		configuration: IConfiguration,
		themeService: IThemeService,
		model: IViewModel,
		userInputEvents: ViewUserInputEvents,
		overflowWidgetsDomNode: HTMLElement | undefined
	) {
	    super();
         // ...
         // The view context is passed on to most classes (basically to reduce param. counts in ctors)
		this._context = new ViewContext(configuration, themeService.getColorTheme(), model);
         this._register(themeService.onDidColorThemeChange(theme => {
			this._context.theme.update(theme);
			this._context.model.onDidColorThemeChange();
			this.render(true, false);
		}));
         // ...
         const minimap = new Minimap(this._context);
		this._viewParts.push(minimap);
         // ...
        }
}
```

```ts
export class Minimap extends ViewPart implements IMinimapModel {
	// ...
	constructor(context: ViewContext) {
		super(context);
		// ...
	}
}
```

```ts
export interface IMinimapModel {
	readonly tokensColorTracker: MinimapTokensColorTracker;
	readonly options: MinimapOptions;

	getLineCount(): number;
	getRealLineCount(): number;
	getLineContent(lineNumber: number): string;
	getMinimapLinesRenderingData(startLineNumber: number, endLineNumber: number, needed: boolean[]): (ViewLineData | null)[];
	getSelections(): Selection[];
	getMinimapDecorationsInViewport(startLineNumber: number, endLineNumber: number): ViewModelDecoration[];
	getOptions(): TextModelResolvedOptions;
	revealLineNumber(lineNumber: number): void;
	setScrollTop(scrollTop: number): void;
}
```

```ts

export abstract class ViewPart {
	_context: ViewContext;
	constructor(context: ViewContext) {
		super();
		this._context = context;
		this._context.addEventHandler(this);
	}
    // ...
    public abstract prepareRender(ctx: RenderingContext): void;
    public abstract render(ctx: RestrictedRenderingContext): void;
}
```

```ts

export class ViewContext {

	public readonly configuration: IConfiguration;
	public readonly model: IViewModel;
	public readonly viewLayout: IViewLayout;
	public readonly theme: EditorTheme;

	constructor(
		configuration: IConfiguration,
		theme: IColorTheme,
		model: IViewModel
	) {
		this.configuration = configuration;
		this.theme = new EditorTheme(theme);
		this.model = model;
		this.viewLayout = model.viewLayout;
	}

	public addEventHandler(eventHandler: ViewEventHandler): void {
		this.model.addViewEventHandler(eventHandler);
	}

	public removeEventHandler(eventHandler: ViewEventHandler): void {
		this.model.removeViewEventHandler(eventHandler);
	}
}

```

