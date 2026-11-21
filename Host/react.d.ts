// AUTO-GENERATED - do not edit.
/**
 * React as the SDK ships it, global to every script and shared with the menu. JSX compiles to
 * {@link React.createElement}. Only part of React's API is declared; its other exports are there
 * at run time without types.
 */
declare namespace React {
	/**
	 * An element's identity among its siblings: across renders React matches children by key and
	 * keeps their state. A number is stored as a string.
	 */
	type Key = string | number

	/** An object whose `current` lasts across renders; {@link useRef} makes one. */
	interface RefObject<T> {
		/**
		 * The value held. Attached as a ref, it is set to the element, and to `null`, not
		 * `undefined`, once the element unmounts.
		 */
		current: Nullable<T>
	}

	/**
	 * A ref as a function: React calls it with the element once attached and with `null` once
	 * detached. A different function on the next render is detached and the new one attached, so
	 * pass the same one every time.
	 */
	type RefCallback<T> = (instance: T | null | undefined) => void
	/** What a `ref` can be: a {@link RefObject} React fills or a {@link RefCallback} it calls. */
	type Ref<T> = RefObject<T> | RefCallback<T>

	/** What JSX and {@link createElement} produce: a description of what to render. */
	interface ReactElement {
		/** The tag name of an intrinsic element, otherwise the component, provider or fragment. */
		type: unknown
		/** The props it was made with, without `key`, its children under `children`. */
		props: unknown
		/** The {@link Key} as a string; `null`, not `undefined`, when it was given none. */
		key: Nullable<Key>
	}

	/**
	 * What a component returns and what may stand as a child: elements, text from strings, numbers
	 * and bigints, and arrays of these. `true`, `false`, `null` and `undefined` show nothing.
	 */
	type ReactNode =
		ReactElement | string | number | bigint | boolean | undefined | null | ReactNode[]

	/** Props that may carry the JSX children written between a component's tags. */
	interface PropsWithChildren {
		/** One child as it is, several as an array; absent when there are none. */
		children?: ReactNode
	}

	/** A component as a function: takes its props, children included, and returns what to show. */
	type FunctionComponent<P> = (props: P & PropsWithChildren) => ReactNode

	/** A tag whose `value` the components inside it read from its context. */
	type Provider<T> = (props: { value: T } & PropsWithChildren) => ReactNode

	/**
	 * A value handed down the tree past props: made by {@link createContext}, read by
	 * {@link useContext}.
	 */
	interface Context<T> {
		/**
		 * The tag that gives `value` to the components inside it; it goes in JSX and cannot be
		 * called.
		 */
		Provider: Provider<T>
		/** A name for the context; React falls back to `"Context"` without one. */
		displayName?: string
	}

	/** What {@link Component.componentDidCatch} gets beside the error. */
	interface ErrorInfo {
		/** The components the error passed through, innermost first, as stack-trace lines. */
		componentStack: string
	}

	/**
	 * React's base class for class components. JSX and {@link createElement} accept only function
	 * components in these declarations, so a subclass cannot be rendered without a cast.
	 */
	class Component<P, S> {
		/** The props of the latest render, children included. */
		public props: Readonly<P & PropsWithChildren>
		/** The state of the latest render, `null` when the constructor set none. */
		public state: Readonly<S>
		/** Stores `props` as {@link Component.props}. */
		constructor(props: P)
		/**
		 * Merges `state` into the state and schedules a re-render. A function gets the state with
		 * every change queued before it applied, and returns the part to merge.
		 */
		public setState(state: Partial<S> | ((prev: Readonly<S>) => Partial<S>)): void
		/** What the component shows; React calls it on every render. */
		public render(): ReactNode
		/**
		 * Makes the class an error boundary: gets what a component below threw while rendering or
		 * in an effect, instead of the error unmounting the root. The boundary shows nothing until
		 * its next render; setting state here starts one.
		 */
		public componentDidCatch?(error: Error, info: ErrorInfo): void
		/** Called right before the component leaves the tree. */
		public componentWillUnmount?(): void
	}

	/** A tag that groups children without adding an element; `<>...</>` is short for it. */
	const Fragment: FunctionComponent<PropsWithChildren>

	/**
	 * The element JSX compiles to: `type` with `props`, `key` taken out of them, and `children`
	 * as `props.children`, one as it is and several as an array.
	 */
	function createElement(
		type: string,
		props?: Record<string, unknown> | null,
		...children: ReactNode[]
	): ReactElement
	function createElement<P>(
		type: FunctionComponent<P>,
		props?: P | null,
		...children: ReactNode[]
	): ReactElement

	/**
	 * A value that lasts across renders, and the setter that replaces it and re-renders the
	 * component. `initial` counts on the first render only, and a function there is called once
	 * to make it. A function given to the setter gets the latest value.
	 */
	function useState<S>(
		initial: S | (() => S)
	): [S, (value: S | ((prev: S) => S)) => void]
	/**
	 * Runs `effect` after the first commit and after each one in which a value of `deps` changed
	 * by `Object.is`, or, without `deps`, after every commit that renders the component. What
	 * `effect` returns runs before its next run and when the component unmounts.
	 */
	function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void
	/** {@link useEffect}, run during the commit itself, before any `useEffect` of that commit. */
	function useLayoutEffect(
		effect: () => void | (() => void),
		deps?: readonly unknown[]
	): void
	/**
	 * What `factory` returns, made on the first render and again only when a value of `deps`
	 * changes by `Object.is`.
	 */
	function useMemo<T>(factory: () => T, deps: readonly unknown[]): T
	/**
	 * `callback` as of the render in which a value of `deps` last changed, so the function keeps
	 * its identity across renders that change none of them.
	 */
	function useCallback<T extends (...args: never[]) => unknown>(
		callback: T,
		deps: readonly unknown[]
	): T
	/**
	 * An object whose `current` lasts across renders; writing it does not re-render. `current`
	 * starts as `initial`, or `undefined` without one.
	 */
	function useRef<T>(initial: T): RefObject<T>
	function useRef<T>(): RefObject<T>
	/**
	 * The `value` of the closest {@link Context.Provider} above the component, or the default
	 * {@link createContext} was given when there is none. The component re-renders when it
	 * changes.
	 */
	function useContext<T>(context: Context<T>): T
	/**
	 * A value read from a store outside React, re-rendering the component when it changes.
	 * `subscribe` gets the callback to call on each change and returns what unsubscribes;
	 * `getSnapshot` must return the same value by `Object.is` while the store is unchanged.
	 */
	function useSyncExternalStore<T>(
		subscribe: (onChange: () => void) => () => void,
		getSnapshot: () => T
	): T

	/** A new context; a component with no provider above it reads `defaultValue`. */
	function createContext<T>(defaultValue: T): Context<T>
	/**
	 * `component` made to skip a render its parent causes while every prop is the same by
	 * `Object.is` as last time. The result goes in JSX or {@link createElement}; it cannot be
	 * called.
	 */
	function memo<P>(component: FunctionComponent<P>): FunctionComponent<P>
	/**
	 * A component whose `render` gets the `ref` it was given as a second argument, `null` when it
	 * was given none. The result goes in JSX or {@link createElement}; it cannot be called.
	 */
	function forwardRef<T, P>(
		render: (props: P & PropsWithChildren, ref: Ref<T>) => ReactNode
	): FunctionComponent<P & { ref?: Ref<T> }>

	/** The version of React the SDK ships, such as `"19.2.8"`. */
	const version: string
}

/** How TypeScript types JSX: what a tag may be, the props it takes, what an expression gives. */
declare namespace JSX {
	/** What a JSX expression gives: the element {@link React.createElement} returns. */
	type Element = React.ReactElement
	/**
	 * What may stand as a JSX tag: an intrinsic element's name or a function component. A class
	 * component is not one.
	 */
	type ElementType = string | ((props: never) => React.ReactNode)

	/** Attributes every component accepts in JSX beside its own props. */
	interface IntrinsicAttributes {
		/** The element's {@link React.Key} among its siblings; it does not reach the props. */
		key?: React.Key
	}

	/** Attributes TypeScript adds to a class component's props. */
	interface IntrinsicClassAttributes<T> {
		/** A ref to the class component's instance. */
		ref?: React.Ref<T>
	}

	/** Tells TypeScript which instance property of a class component holds its props. */
	interface ElementAttributesProperty {
		/** A class component's props are typed from its instance property of this name. */
		props: unknown
	}

	/** Tells TypeScript which prop receives the children written between a component's tags. */
	interface ElementChildrenAttribute {
		/** The prop JSX children are checked against. */
		children: unknown
	}

	/**
	 * The lowercase tags and the props each takes: `div`, `img`, `input` and `svg`, elements of
	 * the menu's RmlUi document.
	 */
	interface IntrinsicElements {}
}

/**
 * The module behind `import ... from "react"`, with the exports of the global {@link React}. Only
 * shared-sdk may import it; the build of any other package fails on the import, so a script uses
 * the global.
 */
declare module "react" {
	export = React
}

declare namespace ReactReconciler {
	/**
	 * What a renderer gives {@link ReactReconciler}. The type parameters are the host's tag,
	 * props, root container, element, text node and what a ref receives. The reconciler also
	 * reads members not declared here, such as `supportsMicrotasks` and `commitMount`.
	 */
	interface HostConfig<Type, Props, Container, Instance, TextInstance, PublicInstance> {
		/** Whether the host edits its elements in place, through append, insert and remove. */
		supportsMutation: boolean
		/** Whether the host clones its tree on every change instead, through undeclared members. */
		supportsPersistence: boolean
		/** Whether a root can adopt host elements that exist already, via undeclared members. */
		supportsHydration: boolean
		/**
		 * Whether this is the primary renderer: a context keeps one value for the primary renderer
		 * and one for a secondary.
		 */
		isPrimaryRenderer: boolean
		/** A handle meaning no timeout is scheduled; {@link scheduleTimeout} must not return it. */
		noTimeout: -1
		/** Creates the host element for an intrinsic tag such as `div`, with its first props. */
		createInstance(type: Type, props: Props): Instance
		/** Creates the host node for a text child. */
		createTextInstance(text: string): TextInstance
		/** Appends `child` to an element that is still being built and not yet in the tree. */
		appendInitialChild(parent: Instance, child: Instance | TextInstance): void
		/** Appends `child` as the last child of `parent` during a commit. */
		appendChild(parent: Instance, child: Instance | TextInstance): void
		/** Appends `child` at the top level of the root container. */
		appendChildToContainer(container: Container, child: Instance | TextInstance): void
		/** Inserts `child` into `parent` right before `before`. */
		insertBefore(
			parent: Instance,
			child: Instance | TextInstance,
			before: Instance | TextInstance
		): void
		/** Inserts `child` at the top level of the container right before `before`. */
		insertInContainerBefore(
			container: Container,
			child: Instance | TextInstance,
			before: Instance | TextInstance
		): void
		/** Removes `child` from `parent`. */
		removeChild(parent: Instance, child: Instance | TextInstance): void
		/** Removes `child` from the top level of the container. */
		removeChildFromContainer(
			container: Container,
			child: Instance | TextInstance
		): void
		/** Applies to `instance` the props that changed from `prev` to `next`. */
		commitUpdate(instance: Instance, type: Type, prev: Props, next: Props): void
		/** Changes the text of a text node from `prev` to `next`. */
		commitTextUpdate(instance: TextInstance, prev: string, next: string): void
		/**
		 * Called once the first children of an element are appended; `true` makes the reconciler
		 * call the host's `commitMount` for it after the commit.
		 */
		finalizeInitialChildren(instance: Instance, type: Type, props: Props): boolean
		/** Whether the element takes its text from `props` itself, so React makes no text child. */
		shouldSetTextContent(type: Type, props: Props): boolean
		/** The host context at the root, handed down through {@link getChildHostContext}. */
		getRootHostContext(container: Container): Nullable<object>
		/** The host context for an element's children, from the one of its parent. */
		getChildHostContext(parent: Nullable<object>): Nullable<object>
		/** What a ref attached to the element receives. */
		getPublicInstance(instance: Instance): PublicInstance
		/** Called before a commit changes the container's tree; the result is ignored. */
		prepareForCommit(container: Container): Nullable<object>
		/** Called once a commit has changed the container's tree, before its layout effects run. */
		resetAfterCommit(container: Container): void
		/** Called when a portal into `container` mounts. */
		preparePortalMount(container: Container): void
		/** Empties the container before a root that showed nothing commits into it. */
		clearContainer(container: Container): void
		/** Called for each deleted element once React has let go of it. */
		detachDeletedInstance(instance: Instance): void
		/**
		 * Queues `callback` as a microtask. The reconciler calls it only when the config sets
		 * `supportsMicrotasks`, which this interface does not declare.
		 */
		scheduleMicrotask(callback: () => void): void
		/** Runs `callback` after `delay` milliseconds; the handle goes to {@link cancelTimeout}. */
		scheduleTimeout(callback: () => void, delay: number): number
		/** Cancels a timeout {@link scheduleTimeout} scheduled. */
		cancelTimeout(handle: number): void
		/** The priority {@link setCurrentUpdatePriority} last stored; `0` means none. */
		getCurrentUpdatePriority(): number
		/** Stores the priority the reconciler is running updates at. */
		setCurrentUpdatePriority(priority: number): void
		/** The priority an update gets when the reconciler has none for it, as during an event. */
		resolveUpdatePriority(): number
		/**
		 * Whether a new element of `type` with `props` may hold up its commit until it loads. The
		 * reconciler the SDK ships never calls it.
		 */
		maySuspendCommit(type: Type, props: Props): boolean
		/** The time in milliseconds; the reconciler the SDK ships reads its own clock instead. */
		now(): number
	}

	/** A root {@link Reconciler.createContainer} made; hand it back to the reconciler as it is. */
	interface OpaqueRoot {
		/** React's internal state of the root. */
		current: unknown
	}

	/** A renderer {@link ReactReconciler} built: it makes roots and renders elements into them. */
	interface Reconciler<Container> {
		/**
		 * A root that renders into `container`. `onUncaughtError` gets an error no boundary
		 * caught, and the root then shows nothing until it is given an element again;
		 * `onCaughtError` gets one a boundary caught, `onRecoverableError` one React recovered
		 * from. Every root is concurrent, whatever `tag` says.
		 */
		createContainer(
			container: Container,
			tag: number,
			hydrationCallbacks: null,
			isStrictMode: boolean,
			concurrentUpdatesByDefaultOverride: Nullable<boolean>,
			identifierPrefix: string,
			onUncaughtError: (error: unknown) => void,
			onCaughtError: (error: unknown) => void,
			onRecoverableError: (error: unknown) => void,
			transitionCallbacks: null
		): OpaqueRoot
		/** Schedules `element` to replace what `root` shows; `callback` runs after the commit. */
		updateContainer(
			element: React.ReactNode,
			root: OpaqueRoot,
			parentComponent: null,
			callback: Nullable<() => void>
		): void
		/**
		 * {@link Reconciler.updateContainer} at synchronous priority, so a
		 * {@link Reconciler.flushSyncWork} right after commits it.
		 */
		updateContainerSync(
			element: React.ReactNode,
			root: OpaqueRoot,
			parentComponent: null,
			callback: Nullable<() => void>
		): void
		/**
		 * Renders and commits the synchronous-priority work pending on every root. Does nothing
		 * when called during a render or a commit.
		 */
		flushSyncWork(): void
		/**
		 * Runs `fn` with the updates it makes at synchronous priority, commits them, and returns
		 * what `fn` returned.
		 */
		flushSyncFromReconciler<T>(fn: () => T): T
		/** Calls `fn` and returns its result; this reconciler build adds nothing to the call. */
		batchedUpdates<T>(fn: () => T): T
		/**
		 * The root's first child as a ref would see it: {@link HostConfig.getPublicInstance} of a
		 * host element, or a class component's instance. `null` when there is no such child.
		 */
		getPublicRootInstance(root: OpaqueRoot): unknown
		/**
		 * Registers the renderer with React DevTools when `__REACT_DEVTOOLS_GLOBAL_HOOK__` is
		 * defined; `config` is ignored.
		 */
		injectIntoDevTools(config: unknown): void
	}
}

/**
 * Builds a React renderer from `config`, the functions React calls to create and change the
 * host's elements. The menu's renderer into RmlUi is built with it.
 */
declare function ReactReconciler<
	Type,
	Props,
	Container,
	Instance,
	TextInstance,
	PublicInstance
>(
	config: ReactReconciler.HostConfig<
		Type,
		Props,
		Container,
		Instance,
		TextInstance,
		PublicInstance
	>
): ReactReconciler.Reconciler<Container>

/**
 * The module behind `import ... from "react-reconciler"`, the same function as the global
 * {@link ReactReconciler}. As with `"react"`, only shared-sdk may import it.
 */
declare module "react-reconciler" {
	export = ReactReconciler
}
