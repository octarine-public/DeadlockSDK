// AUTO-GENERATED - do not edit.
/** An element's inline style by CSS property name, `undefined` where none is set. */
declare interface RmlStyleDeclaration {
	[property: string]: string | undefined
}

/** An element's attributes by name. */
declare interface RmlAttributes {
	[name: string]: string | number | boolean | undefined
}

/** An element's children, in order from index 0. */
declare interface RmlChildNodes {
	readonly length: number
	readonly [index: number]: HTMLElement
}

/**
 * The parameters an RmlUi event carries in `Event.data`, by name: the pointer's position and
 * button, the key and its modifiers, the typed text or a control's value, as the event has them.
 */
declare interface RmlEventData {
	readonly [name: string]: any
	readonly screenX?: number
	readonly screenY?: number
	readonly button?: number
	readonly key?: string
	readonly location?: number
	readonly ctrlKey?: boolean
	readonly shiftKey?: boolean
	readonly altKey?: boolean
	readonly metaKey?: boolean
	readonly text?: string
	readonly value?: string
}

/** An event RmlUi dispatches to an element's listeners; its parameters are in `data`. */
declare class Event {
	public readonly data: RmlEventData
	public readonly isTrusted: boolean
	public readonly type: string
	public readonly cancelable: boolean
	public readonly timeStamp: number
	public readonly target: HTMLElement
	public readonly currentTarget: HTMLElement
	public readonly bubbles: boolean
	public stopPropagation(): void
	public stopImmediatePropagation(): void
	public preventDefault(): void
}

/** An element of an RmlUi document, reached under the browser DOM's names. */
declare class HTMLElement {
	public className: string
	public id: string
	public innerHTML: string
	public scrollLeft: number
	public scrollTop: number
	public readonly childNodes: RmlChildNodes
	public readonly clientHeight: number
	public readonly clientLeft: number
	public readonly clientTop: number
	public readonly clientWidth: number
	public readonly offsetLeft: number
	public readonly offsetTop: number
	public readonly firstChild: Nullable<HTMLElement>
	public readonly lastChild: Nullable<HTMLElement>
	public readonly nextSibling: Nullable<HTMLElement>
	public readonly previousSibling: Nullable<HTMLElement>
	public readonly offsetParent: Nullable<HTMLElement>
	public readonly ownerDocument: Nullable<HTMLDocument>
	public readonly parentNode: Nullable<HTMLElement>
	public readonly scrollHeight: number
	public readonly scrollWidth: number
	public readonly tagName: string
	public readonly style: RmlStyleDeclaration
	public readonly attributes: RmlAttributes
	public readonly width: number
	public readonly height: number
	public addEventListener(
		name: string,
		callback: (e: Event) => void,
		useCapture?: boolean
	): void
	public removeEventListener(
		name: string,
		callback: (e: Event) => void,
		useCapture?: boolean
	): void
	public dispatchEvent(name: string, params: Record<string, any>): void
	public appendChild(child: HTMLElement): void
	public insertBefore(child: HTMLElement, reference: Nullable<HTMLElement>): void
	public replaceChild(newChild: HTMLElement, oldChild: HTMLElement): void
	public removeChild(child: HTMLElement): void
	public blur(): void
	public click(): void
	public focus(): void
	public closest(selectors: string): Nullable<HTMLElement>
	public getAttribute(name: string): any
	public getElementById(id: string): Nullable<HTMLElement>
	public getElementsByTagName(tagName: string): HTMLElement[]
	public getElementsByClassName(className: string): HTMLElement[]
	public hasAttribute(name: string): boolean
	public removeAttribute(name: string): void
	public setAttribute(name: string, value: string | number | boolean): void
	public hasChildNodes(): boolean
	public querySelector(selector: string): Nullable<HTMLElement>
	public querySelectorAll(selector: string): HTMLElement[]
	public scrollIntoView(alignWithTop: boolean): void
	/**
	 * Sets one px-valued property from a number, skipping the style string parser. The ordinal
	 * indexes the host's fixed table: 0 left, 1 top, 2 width, 3 height, 4 margin-left,
	 * 5 margin-right, 6 margin-top, 7 margin-bottom, 8 font-size.
	 */
	public setPropertyPx(id: number, value: number): void
	/**
	 * Sets `transform: translate(x, y) rotate(angle) scale(scaleX, scaleY)` in px and degrees,
	 * skipping the parser. Hosts predating the scale pair take exactly three numbers; the ones with
	 * `RegisterSizedImageRegion` take five.
	 */
	public setPlacement(
		x: number,
		y: number,
		angleDeg: number,
		scaleX?: number,
		scaleY?: number
	): void
	/**
	 * Ties the element and everything it renders to anchor `slot` (Source 2's `CRenderAnchor`), or
	 * unties it with -1: its box is laid out as if the anchor's point were the origin, it is drawn
	 * where the anchor lands at every present, and it takes no input. Hosts predating anchors have
	 * no such method.
	 */
	public setAnchor(slot: number): void
	/**
	 * Replaces what a `<hud-surface>` draws with the list in the first `byteLength` bytes of
	 * `data`, in the format core's `hud_list.h` documents. False, drawing nothing, for a malformed
	 * list; throws on any other element. Hosts predating HUD lists have no such method.
	 */
	public submitHud(data: ArrayBufferView | ArrayBuffer, byteLength: number): boolean
	/** The string a `<hud-surface>`'s text commands name by `id`, below 4096. */
	public setHudText(id: number, text: string): void
	/** The image source a `<hud-surface>`'s image commands name by `id`, below 1024; "" for none. */
	public setHudImage(id: number, source: string): void
	public destroy(): void
}

/** An RmlUi document: the root its elements are made by and hung under. */
declare class HTMLDocument extends HTMLElement {
	public createElement(tagName: "img"): HTMLElementImage
	public createElement(tagName: "input"): HTMLElementFormControlInput
	public createElement(tagName: "#text"): HTMLElementText
	public createElement(tagName: string): HTMLElement
	public createTextNode(text: string): HTMLElementText
	public setStyleSheet(source: string): void
	/**
	 * A fresh full-screen document over the same skeleton, for one UI layer. Layout dirt is per
	 * document, so a layer that moves every frame stops reformatting the layers that do not.
	 */
	public createLayerDocument(): HTMLDocument
	/** Unloads this document; the host refuses to close its base one. */
	public close(): void
}

/** An `<img>` element. */
declare class HTMLElementImage extends HTMLElement {
	public src: string
	public width: number
	public height: number
}

/** A text node: a run of text inside an element. */
declare class HTMLElementText extends HTMLElement {
	public text: string
	public setText(text: string): void
	public clearLines(): void
	public suppressAutoLayout(): void
}

/** A `<form>` element. */
declare class HTMLElementForm extends HTMLElement {
	public submit(name?: string, submitValue?: string): void
}

/** A form control: an input, a select or a text area. */
declare class HTMLElementFormControl extends HTMLElement {
	public name: string
	public readonly isSubmitted: boolean
	public isDisabled: boolean
}

/** An `<input>` element. */
declare class HTMLElementFormControlInput extends HTMLElementFormControl {
	/** Selects all text; text and password inputs only. */
	public select(): void
}

/** A `<select>` element and its options. */
declare class HTMLElementFormControlSelect extends HTMLElementFormControl {
	public selection: number
	public getOption(index: number): Nullable<HTMLElement>
	public getNumOptions(): number
	public add(option: HTMLElement, before?: number): void
	public remove(index: number): void
	public removeAll(): void
}

/** A `<textarea>` element. */
declare class HTMLElementFormControlTextArea extends HTMLElementFormControl {
	public numColumns: number
	public numRows: number
	public maxLength: number
	public wordWrap: boolean
}

/** The base RmlUi document the menu is built in. */
declare var document: HTMLDocument

/**
 * Turns on or off the capture of the game frame that frosted-glass panels blur behind them; the
 * menu keeps it on while a panel needs it.
 */
declare function SetRMLBackdropCapture(enabled: boolean): void
/**
 * Captures the whole screen for frosted glass rather than only where the panels stand; the menu
 * turns it on for the length of a drag, while a panel can go anywhere.
 */
declare function SetRMLBackdropFullCapture(enabled: boolean): void

/**
 * Playback control for a clip loaded through `<img src="…mp4">` or `.gif`. RmlUi caches one
 * texture per source path, so the resolved path identifies the clip, and two elements showing the
 * same file share a decoder and therefore share playback.
 */
declare function SetRMLVideoPlaying(source: string, playing: boolean): void

/** Seeks to a fraction of the clip, clamped to 0…1. */
declare function SeekRMLVideo(source: string, fraction: number): void

/** Progress as a fraction, negative while the clip has no duration or is not loaded. */
declare function GetRMLVideoProgress(source: string): number

/** Going off screen resets a clip to playing, so this has to be read back rather than assumed. */
declare function IsRMLVideoPlaying(source: string): boolean

/**
 * Analytic rounded clip for the window's glass composite (window-space px; w/h <= 0
 * disables): the backdrop composite carrying the {@link RMLAnalyticClipFilter} marker
 * is multiplied by rounded-rect coverage in-shader instead of being cut by the
 * 1x-rasterized stencil, keeping the glass edge smooth. Also the capability marker
 * for the SDF shader decorators.
 */
declare function SetRMLAnalyticClip(
	x: number,
	y: number,
	w: number,
	h: number,
	radius: number
): void

/**
 * The `backdrop-filter` token the window's glass appends to its blur, naming its
 * composite as the one {@link SetRMLAnalyticClip} shapes; every other glass on screen
 * composites unclipped whatever its region. A host predating it clips by shape
 * instead (any bottom composite whose region contains the window rect), so
 * feature-detect.
 */
declare function RMLAnalyticClipFilter(): string

/**
 * Menu scale multiplier folded into the native dp ratio, so dp layout and fonts
 * rasterize at the effective size instead of being resampled by a transform.
 * Also the capability marker for native-scaled layout: without it MenuScale() is 1.
 */
declare function SetRMLDpScale(scale: number): void

/**
 * Uploads one slot of segment data for the `capsules` SDF decorator; a host that has the
 * function has the capsules shader. `data` holds 40 vec4s of quad-local px endpoints (x1, y1,
 * x2, y2 per segment) at 0…159, then one chain id per segment at 160…199; `count` is the
 * segment count. Runs of equal chain id are unioned into one field and shaded together, later
 * runs laid over earlier ones. The decorator string only names the slot, so it stays the same
 * across frames. Raw px throughout; dp scaling never touches it.
 */
declare function SetRMLShaderVectors(
	slot: number,
	data: Float32Array,
	count: number
): void

/**
 * How many capsule vector slots the host carries. Hosts predating the function carry 16;
 * feature-detect before calling.
 */
declare function RMLShaderSlotCount(): number

/**
 * Mints an image source for bytes a script holds, such as cover art it fetched or a chart it
 * built, so an element can name something that was never a file. The answer goes straight into
 * `src`.
 *
 * Returns `""` when the bytes are unusable or over the size cap.
 * @example
 * const src = RegisterImageBlob(await (await SharedSDK.fetch(url)).arrayBuffer())
 * element.setAttribute("src", src)
 */
declare function RegisterImageBlob(data: ArrayBuffer | ArrayBufferView): string
/**
 * Drops the bytes behind a source minted by {@link RegisterImageBlob}. A texture already built
 * from them stays valid, since the bytes are only read while it loads, so the moment to free one
 * is when its replacement is ready (see {@link ImageBlobReady}).
 */
declare function FreeImageBlob(source: string): void
/**
 * Whether the picture behind a blob source is decoded: `true` once an element given the source
 * draws it from the first frame, `false` while it is still decoding, `undefined` when it never
 * will be: the source is not a registered blob, or its bytes could not be decoded. A blob minted
 * by {@link RegisterSizedImageBlob} decodes off the render thread and draws nothing until then;
 * one minted without a size decodes the first time it is drawn and answers `true` at once.
 * Feature-detect: hosts predating it decode every blob the first time it is drawn.
 * @example
 * if (ImageBlobReady(next) === true) {
 * 	element.setAttribute("src", next)
 * 	FreeImageBlob(current)
 * }
 */
declare function ImageBlobReady(source: string): boolean | undefined

/**
 * Mints an image source naming a file and the size it will be drawn at, in whole screen pixels,
 * so the decode resamples straight to that size in one filter pass. Mip selection rounds toward
 * the smaller power-of-two level, so art drawn at a size the chain does not hold reads soft.
 * The same file, size, radius and mode answer with the same source however many elements ask,
 * and the host counts the holders, so each caller frees its own. Feature-detect: hosts predating
 * it have no such function.
 * @param radius A finite, nonnegative corner radius in screen pixels, clamped to half the smaller
 * dimension; zero by default. The rounding is baked into premultiplied RGBA: draw on a
 * rectangular element without a second rounded clip.
 * @param monochrome Loads the file white on alpha, for a silhouette whose shape is its alpha
 * alone. Hosts predating it load the file as it is.
 * @returns The source, or `""` when the path, size or radius is unusable.
 * @example
 * const src = RegisterSizedImage(path, DpToPx(width), DpToPx(height))
 * element.setAttribute("src", src)
 */
declare function RegisterSizedImage(
	path: string,
	width: number,
	height: number,
	radius?: number,
	monochrome?: boolean
): string
/**
 * Mints an image source for a rectangle of a file, one sprite of a sheet, cut out and resampled
 * on its own to the pixel size it will be drawn at, the way {@link RegisterSizedImage} does for a
 * whole file. Nothing around the rectangle bleeds into its edge, and only the rows under it are
 * decoded. The rectangle is in the file's own whole pixels and is part of the cache key; one
 * reaching past the file fails the load and draws nothing. Freed with {@link FreeSizedImage}.
 * Feature-detect: a host that has it also takes the scale pair of `setPlacement`.
 * @param radius As in {@link RegisterSizedImage}.
 * @param monochrome As in {@link RegisterSizedImage}.
 * @returns The source, or `""` when the path, rectangle, size or radius is unusable.
 * @example
 * const src = RegisterSizedImageRegion(sheet, 32, 0, 32, 32, 32, 32)
 * element.setAttribute("src", src)
 */
declare function RegisterSizedImageRegion(
	path: string,
	x: number,
	y: number,
	regionWidth: number,
	regionHeight: number,
	width: number,
	height: number,
	radius?: number,
	monochrome?: boolean
): string
/**
 * Mints an image source for bytes a script holds plus the pixel size they will be drawn at, so the
 * decode resamples straight to that size the way {@link RegisterSizedImage} does for a file. The
 * decode runs off the render thread, and {@link ImageBlobReady} says when it has landed. Freed
 * with {@link FreeImageBlob} like any other blob. Feature-detect: hosts predating it have no such
 * function.
 * @param radius As in {@link RegisterSizedImage}; a positive radius requires a nonzero size.
 * @param monochrome Loads the bytes white on alpha, as in {@link RegisterSizedImage}.
 * @returns The source, or `""` when the bytes, size or radius is unusable.
 */
declare function RegisterSizedImageBlob(
	data: ArrayBuffer | ArrayBufferView,
	width: number,
	height: number,
	radius?: number,
	monochrome?: boolean
): string
/**
 * Drops one hold on a source minted by {@link RegisterSizedImage}. A texture already built from it
 * stays valid, so the moment to free one is when its replacement is registered.
 */
declare function FreeSizedImage(source: string): void
