// AUTO-GENERATED - do not edit.
/**
 * The props every menu element takes. A handler set through an `on` prop runs in the theme scope
 * of the root that rendered the element, and the state it sets is rendered as soon as it returns.
 */
interface RmlBaseProps {
	/** React's identity for the element among its siblings; it never reaches the element. */
	key?: React.Key
	/** The `id` attribute, by which `getElementById` and `querySelector` find the element. */
	id?: string
	/**
	 * The `class` attribute, names separated by spaces. The menu's style sheet has rules for the
	 * classes in `MenuSDK.Classes`.
	 */
	className?: string
	/**
	 * The inline style, written as {@link RmlStyle} describes. A render writes only the properties
	 * whose value changed and clears those it no longer has.
	 */
	style?: RmlStyle
	/** The elements and text the element holds; a string or a number is shown as text. */
	children?: React.ReactNode
	/** The left button pressed and released over the same element: this one or one inside it. */
	onClick?: (event: Event) => void
	/**
	 * A second left press on the same element within 0.5 seconds and 3 dp of the first. It fires
	 * on that press, right after its {@link RmlBaseProps.onMouseDown}, not on the release.
	 */
	onDblClick?: (event: Event) => void
	/**
	 * The pointer came over the element, or over something inside it, from outside it. Each
	 * element inside that the pointer comes over sends one too, which bubbles up here:
	 * `event.target === event.currentTarget` keeps the element's own, as `MenuSDK.useHover` does.
	 */
	onMouseOver?: (event: Event) => void
	/**
	 * The pointer left the element and everything inside it. Each element inside that the pointer
	 * leaves sends one too, which bubbles up here: `event.target === event.currentTarget` keeps
	 * the element's own.
	 */
	onMouseOut?: (event: Event) => void
	/**
	 * A mouse button pressed over the element or something inside it. `event.data.button` is 0
	 * for the left button, 1 right, 2 middle, 3 and 4 the side buttons. Stopping the propagation
	 * of a left press also keeps it from counting toward a double click or starting a drag.
	 */
	onMouseDown?: (event: Event) => void
	/**
	 * A mouse button released over the element or something inside it; `event.data.button` as
	 * for {@link RmlBaseProps.onMouseDown}.
	 */
	onMouseUp?: (event: Event) => void
	/**
	 * The pointer moved over the element or something inside it, to `event.data.screenX` and
	 * `screenY`, in pixels.
	 */
	onMouseMove?: (event: Event) => void
	/**
	 * The wheel turned over the element or something inside it: `event.data.wheel_delta_y` is
	 * negative turning up and positive turning down, 1 a notch. `stopPropagation()` keeps the
	 * wheel from scrolling what is under the pointer. A middle press over it sends one too, with
	 * `event.data.autoscroll` true and no delta.
	 */
	onMouseScroll?: (event: Event) => void
	/**
	 * A key pressed while focus is on the element or inside it. `event.data.key` names it, as
	 * `"A"`, `"Enter"` or `"Escape"`, and `ctrlKey`, `shiftKey` and `altKey` hold the modifiers.
	 */
	onKeyDown?: (event: Event) => void
	/**
	 * A key released while focus is on the element or inside it; `event.data` as for
	 * {@link RmlBaseProps.onKeyDown}.
	 */
	onKeyUp?: (event: Event) => void
	/**
	 * The text of an `input` was edited, with the new text in `event.data.value`; Enter sends one
	 * too, with `event.data.linebreak` true. It bubbles, so a `div` hears every input inside it.
	 */
	onChange?: (event: Event) => void
	/** Focus came onto the element, or onto something inside it, from outside it. */
	onFocus?: (event: Event) => void
	/** Focus moved from the element, or from something inside it, to somewhere outside it. */
	onBlur?: (event: Event) => void
}

/** What a `div` takes: the props of every element and a ref to it. */
interface RmlDivProps extends RmlBaseProps {
	/**
	 * Called with the element once it is in the tree, and with `null` once React drops it.
	 * Only a callback is taken: `MenuSDK.RefTo` makes one that keeps the element in a ref object.
	 */
	ref?: React.RefCallback<HTMLElement>
}

/** What an `img` or an `svg` takes: the props of every element, a picture and a ref to it. */
interface RmlImageProps extends RmlBaseProps {
	/** The picture to draw, set as `src`: a path such as `MenuSDK.ResolveAsset` returns. */
	src?: string
	/** Called with the element once it is in the tree, and with `null` once React drops it. */
	ref?: React.RefCallback<HTMLElementImage>
}

/** What an `input` takes: the props of every element, its text and a ref to it. */
interface RmlInputProps extends RmlBaseProps {
	/**
	 * Text in the input, set as the `value` attribute. It is written only when it differs from the
	 * last render's, so what the user typed stays until a render passes a new value.
	 */
	value?: string
	/**
	 * Set as the `drag` attribute, which nothing reads: a text field takes drags to select its text
	 * whatever this holds.
	 */
	drag?: string
	/** Called with the element once it is in the tree, and with `null` once React drops it. */
	ref?: React.RefCallback<HTMLElementFormControlInput>
}

/** The elements menu markup is written with, each the RmlUi element of its tag. */
declare namespace JSX {
	/** The tags menu markup may use, each with the props it takes. */
	interface IntrinsicElements {
		/** A plain box that holds text and other elements. */
		div: RmlDivProps
		/**
		 * An image: draws the picture `src` names, one dp per pixel of it unless its style sets a
		 * size.
		 */
		img: RmlImageProps
		/** A one-line text field; what the user types arrives through `onChange`. */
		input: RmlInputProps
		/**
		 * RmlUi SVG plugin: rasterizes the source at the exact display size, so
		 * vector icons stay sharp at any scale (image-color tint applies as usual).
		 */
		svg: RmlImageProps
	}
}
