// AUTO-GENERATED - do not edit.
/**
 * A length: a number is in dp, one pixel of a 1080-pixel-high screen at a menu scale of 100%; a
 * string is written as it is, unit and all, as `"50%"` or `"auto"`.
 */
type StyleLength = number | string
/** A colour: a CSS colour string such as `"#00000080"`, or a token from `MenuSDK.Tokens`. */
type StyleColor = string | ThemeTokenRef

/**
 * A reference to a palette token. As a style value it resolves to the token's value in the palette
 * of the theme scope being drawn, `""` for a token that palette lacks.
 */
interface ThemeTokenRef {
	/** The token's name, a key of the palette such as `"TextPrimary"`. */
	readonly token: string
}

/**
 * The inline style of a menu element: CSS properties under their camel-case names, as RmlUi takes
 * them. A number given for a length is in dp unless the property says otherwise, `undefined`
 * clears a property, and a value RmlUi cannot parse is ignored, leaving the property as it was.
 */
interface RmlStyle {
	display?: "flex" | "block" | "inline" | "inline-block" | "none"
	/**
	 * `hidden` hides the element and everything inside it, whatever `visibility` they set, and
	 * none of it takes the mouse; the space stays laid out.
	 */
	visibility?: "visible" | "hidden"
	position?: "absolute" | "relative" | "fixed"
	/**
	 * `hidden`, `auto` and `scroll` cut the content only while it reaches past the right or bottom
	 * edge, or while the element has a border radius: content standing out only to the left or
	 * top is drawn uncut, unless `clip` is `always`.
	 */
	overflow?: "visible" | "hidden" | "auto" | "scroll"
	/**
	 * Inherited, and the menu's layers set `none`, so an element takes no mouse input until it or
	 * an ancestor sets `"auto"`.
	 */
	pointerEvents?: "auto" | "none"
	boxSizing?: "border-box" | "content-box"
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
	flexWrap?: "nowrap" | "wrap" | "wrap-reverse"
	alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline"
	justifyContent?:
		| "flex-start"
		| "flex-end"
		| "center"
		| "space-between"
		| "space-around"
		| "space-evenly"
	textAlign?: "left" | "center" | "right" | "justify"

	/** A number is written bare, as in `flex: 1`, not as dp. */
	flex?: StyleLength
	/** Works on any element, positioned or not, and makes it a stacking context of its own. */
	zIndex?: number
	/**
	 * Inherited as a value, not multiplied: an element inside that sets its own opacity draws at
	 * that alone. `filter: "opacity(...)"` fades an element together with everything inside it.
	 */
	opacity?: number
	/**
	 * RmlUi's own property, not CSS `clip`: what may cut the element. `auto` is cut by every
	 * ancestor that clips its overflow; `none` by none, and what it holds by nothing above it;
	 * `always` makes the element cut what it holds even while its overflow is `visible`. A number
	 * is how many of the nearest ancestors that clip their overflow the element is not cut by.
	 */
	clip?: "auto" | "none" | "always" | number

	width?: StyleLength
	height?: StyleLength
	minWidth?: StyleLength
	maxWidth?: StyleLength
	minHeight?: StyleLength
	top?: StyleLength
	right?: StyleLength
	bottom?: StyleLength
	left?: StyleLength

	padding?: StyleLength
	paddingTop?: StyleLength
	paddingRight?: StyleLength
	paddingBottom?: StyleLength
	paddingLeft?: StyleLength
	marginTop?: StyleLength
	marginRight?: StyleLength
	marginBottom?: StyleLength
	marginLeft?: StyleLength

	/**
	 * RmlUi has no `border-style`: any width draws a solid border, black until a border colour is
	 * set. No keyword such as `thin` is taken.
	 */
	borderWidth?: StyleLength
	borderTopWidth?: StyleLength
	borderRightWidth?: StyleLength
	borderBottomWidth?: StyleLength
	borderLeftWidth?: StyleLength
	/**
	 * A number is dp times the theme's corner scale, `MenuSDK.Theme.RadiusScale`; a string is
	 * written unscaled. RmlUi takes no percentage here.
	 */
	borderRadius?: StyleLength
	/** A number is dp times the theme's corner scale, as for {@link RmlStyle.borderRadius}. */
	borderTopLeftRadius?: StyleLength
	/** A number is dp times the theme's corner scale, as for {@link RmlStyle.borderRadius}. */
	borderTopRightRadius?: StyleLength
	/** A number is dp times the theme's corner scale, as for {@link RmlStyle.borderRadius}. */
	borderBottomRightRadius?: StyleLength
	/** A number is dp times the theme's corner scale, as for {@link RmlStyle.borderRadius}. */
	borderBottomLeftRadius?: StyleLength

	/** Inherited; text with no colour set above it is white. */
	color?: StyleColor
	backgroundColor?: StyleColor
	borderColor?: StyleColor
	borderTopColor?: StyleColor
	borderRightColor?: StyleColor
	borderBottomColor?: StyleColor
	borderLeftColor?: StyleColor
	/**
	 * RmlUi's own property: a tint multiplied into what an `img` or `svg` draws and into an image
	 * `decorator`. White, the default, leaves the picture as it is. Not inherited.
	 */
	imageColor?: StyleColor

	/**
	 * One family by name, case ignored: a list is not split into fallbacks, and a family no font
	 * was loaded under draws no text. The menu's layers are set in the theme's family.
	 */
	fontFamily?: string
	letterSpacing?: string | number
	/**
	 * Inherited, and the menu's layers set `nowrap`: text wraps only under `normal`, `pre-wrap`
	 * or `pre-line`.
	 */
	whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line"
	/**
	 * A number is dp times `MenuSDK.Theme.FontScale`, the theme's text scale; a string such as
	 * `"14dp"` is written unscaled. Text with no size set above it is 15dp.
	 */
	fontSize?: StyleLength
	/**
	 * A number is raised to the weight the theme's font setting asks for, 500 for Medium and 700
	 * for Bold, and never lowered; a string is written as it is.
	 */
	fontWeight?: number | string
	/**
	 * `italic` draws no text at all in a family without an italic face; `MenuSDK.MenuFontStyle`
	 * falls back to `normal` there.
	 */
	fontStyle?: "normal" | "italic"
	/**
	 * A number is a height in dp, not a multiple of the font size; a multiple goes as a string,
	 * `"1.5"`.
	 */
	lineHeight?: StyleLength
	/** Glyph effects, e.g. `outline(1px #000000)` or `shadow(2px 2px #000000)`. Inherited. */
	fontEffect?: string

	transform?: string
	transformOrigin?: string
	/**
	 * Animates only the changes the style sheet makes, as a class or `:hover` starts or stops
	 * matching; a change to the inline style lands at once. RmlUi's syntax, as in
	 * `"opacity 0.2s cubic-in-out"`: a time takes the `s` unit only, and the easing is one of
	 * RmlUi's tweens such as `sine-out` or `linear-in-out`.
	 */
	transition?: string
	/** A token reference resolves to a whole shadow, as `MenuSDK.Tokens.PillInset` holds one. */
	boxShadow?: string | ThemeTokenRef
	/**
	 * A token reference resolves to a whole filter, as `MenuSDK.Tokens.GlassBlur` holds the
	 * theme's glass blur.
	 */
	backdropFilter?: string | ThemeTokenRef
	filter?: string
	/**
	 * RmlUi's own property: what is painted over the background and under the content, such as
	 * `image(<src>)`, `linear-gradient(...)` or `ninepatch(...)`. `MenuSDK.SdfRounded` returns a
	 * style whose decorator draws an antialiased rounded box.
	 */
	decorator?: string
	/** Alpha mask over the element and everything in it, e.g. a `linear-gradient(...)`; `none` lifts it. */
	maskImage?: string
	/**
	 * RmlUi's own property: whether a left press starts a drag of the element. `drag` sends it
	 * `dragstart` and `drag` as the pointer moves and `dragend` on release; `drag-drop` also sends
	 * `dragover`, `dragdrop` and `dragout` to what lies under the pointer, and `clone` adds a copy
	 * of the element following the pointer. `block` keeps a press here from dragging an ancestor;
	 * `none` leaves the press to the nearest ancestor that drags.
	 */
	drag?: "none" | "drag" | "drag-drop" | "block" | "clone"
}

/** The camel-case name of an {@link RmlStyle} property. */
type StyleProperty = keyof RmlStyle
