// AUTO-GENERATED - do not edit.
/** `T`, or `undefined` where there is none. */
type Nullable<T> = T | undefined
/**
 * Any class whose instances are `T`, whatever its constructor takes. An abstract class, or one
 * whose constructor is not public, does not fit.
 */
type Constructor<T> = new (...args: any[]) => T
/**
 * KeyValues converted for a script, as {@link parseKV} returns them. A key repeated with a block
 * value comes back as `key`, `key0`, `key1`…; one repeated with a plain value keeps only the last.
 */
type RecursiveMap = Map<string, RecursiveMapValue>
/**
 * One decoded protobuf field value: `string` for a string field, `Uint8Array` for bytes,
 * `bigint` for a 64-bit integer, `number` for any other number or an enum, `boolean` for a bool
 * and a {@link RecursiveProtobuf} for a nested message.
 */
type ProtobufFieldType =
	string | number | bigint | boolean | RecursiveProtobuf | Uint8Array
/**
 * A decoded protobuf message: field names mapped to values, a repeated field to an array. A field
 * the bytes lack is absent, except a repeated one, which is an empty array, and a number, bool or
 * enum field with a declared default, which holds that default.
 */
type RecursiveProtobuf = Map<string, ProtobufFieldType[] | ProtobufFieldType>
/**
 * A value in a {@link RecursiveMap}: a nested block, an array, binary data as `Uint8Array`, text,
 * a 64-bit integer as `bigint`, any other number as `number`, or a boolean.
 */
type RecursiveMapValue =
	RecursiveMap | RecursiveMapValue[] | Uint8Array | string | bigint | number | boolean

/**
 * Whether a file exists at `path`. `path` is relative and is looked up in the game's files, in
 * every package's `scripts_files/fs` and under the packages root, which
 * {@link __OCT_PACKAGE_ROOT__} paths start from.
 */
declare function fexists(path: string): boolean
/**
 * The KeyValues of the file at `path`, found as {@link fexists} finds it, or an empty Map when it
 * is missing or nothing in it parses. From a compiled resource (`_c`) the block `block` is read,
 * `"DATA"` by default, named by its four-letter id or given as its index; any other file is read
 * as text KeyValues.
 */
declare function parseKV(path: string, block?: string | number): RecursiveMap
/**
 * The KeyValues in `data`, or an empty Map when nothing in it parses. From a compiled resource
 * (`_c`) the block `block` is read, `"DATA"` by default, named by its four-letter id or given as
 * its index; anything else is read as text KeyValues. Binary data in the result may be a view
 * into `data` rather than a copy.
 */
declare function parseKV(data: Uint8Array, block?: string | number): RecursiveMap
/**
 * The binary KeyValues (KV3 or VBKV) `data` starts with, or an empty Map when it starts with
 * neither. It takes a bare block, not a whole compiled resource as {@link parseKV} does. Binary
 * data in the result may be a view into `data` rather than a copy.
 */
declare function parseKVBlock(data: Uint8Array): RecursiveMap
/**
 * The binary KeyValues (KV3 or VBKV) the file at `path` starts with, found as {@link fexists}
 * finds it, or an empty Map when it is missing or starts with neither. It takes a bare block, not
 * a whole compiled resource as {@link parseKV} does.
 */
declare function parseKVBlock(path: string): RecursiveMap
/**
 * The unsigned 32-bit MurmurHash2 of the UTF-8 bytes of `str`, seeded with `seed`. Case-sensitive.
 */
declare function MurmurHash2(str: string, seed: number): number
/**
 * Calls `callback` once, at the first check of the timers at least `delay` milliseconds after this
 * call, and returns the id {@link clearTimeout} cancels it by. The timers are checked after each
 * `Draw`, at most once a frame, so `delay` 0 or omitted means the next check.
 */
declare function setTimeout(callback: () => void, delay?: number): number
/**
 * Calls `callback` every `delay` milliseconds until {@link clearInterval}, and returns its id.
 * The timers are checked after each `Draw`, at most once a frame: a call comes at least `delay`
 * after the one before, never twice in a frame, and at every check when `delay` is 0 or omitted.
 */
declare function setInterval(callback: () => void, delay?: number): number
/**
 * Cancels the pending timer with id `handle`. Timeouts and intervals share one set of ids, so this
 * stops an interval too; an id that names no pending timer is ignored.
 */
declare function clearTimeout(handle: number): void
/**
 * Stops the interval with id `handle`. Timeouts and intervals share one set of ids, so this
 * cancels a timeout too; an id that names no pending timer is ignored.
 */
declare function clearInterval(handle: number): void
/**
 * Runs `callback` once the code now running has returned to the host, in the same queue as
 * promise callbacks.
 */
declare function queueMicrotask(callback: () => void): void
/** The web `performance` object, of which only `now` exists here. */
declare const performance: {
	/** The same reading as {@link hrtime}: milliseconds on a monotonic clock. */
	now(): number
}
/**
 * The file at `path`, found as {@link fexists} finds it: its bytes as a new `ArrayBuffer` when
 * `binary`, otherwise its text. `undefined` when there is no such file. Text is read as UTF-8
 * unless a UTF-16 byte order mark says otherwise.
 */
declare function fread(path: string, binary: boolean): Nullable<ArrayBuffer | string>
/**
 * The bytes of the file at `path` as a new `ArrayBuffer`, or `undefined` when there is no such
 * file. `path` is found as {@link fexists} finds it.
 */
declare function fread(path: string, binary: true): Nullable<ArrayBuffer>
/**
 * The text of the file at `path`, or `undefined` when there is no such file. `path` is found as
 * {@link fexists} finds it. Read as UTF-8 unless a UTF-16 byte order mark says otherwise.
 */
declare function fread(path: string, binary: false): Nullable<string>

/**
 * Milliseconds on a monotonic clock, with a fractional part. It counts from an unspecified start,
 * so only the difference between two readings means anything.
 */
declare function hrtime(): number

/** V8's console API, the type of {@link console}. */
interface Console {
	/** `undefined` here: this console reports no memory figures. */
	memory: any
	/** Prints `data` as an error when `condition` is falsy, and nothing otherwise. */
	assert(condition?: boolean, ...data: any[]): void
	/** Clears the DevTools console. */
	clear(): void
	/**
	 * Prints `label: n`, where n counts the calls with that `label`, this one included. `label`
	 * is `"default"` when omitted.
	 */
	count(label?: string): void
	/** Starts the count of `label` over from 0, or warns when there is none by that name. */
	countReset(label?: string): void
	/** Prints `data` at the debug level. */
	debug(...data: any[]): void
	/** Prints `item` as an object to expand. */
	dir(item?: any, options?: any): void
	/** Prints `data` as {@link log} does. */
	dirxml(...data: any[]): void
	/** Prints `data` at the error level. */
	error(...data: any[]): void
	/** Not on this console: `console.exception` is `undefined` here. Use {@link error}. */
	exception(message?: string, ...optionalParams: any[]): void
	/** Prints `data` as a label and nests what is printed after it, up to {@link groupEnd}. */
	group(...data: any[]): void
	/** {@link group}, with the group shown collapsed. */
	groupCollapsed(...data: any[]): void
	/** Closes the innermost open group. */
	groupEnd(): void
	/** Prints `data` at the info level. */
	info(...data: any[]): void
	/** Prints `data` at the log level. */
	log(...data: any[]): void
	/** Prints `tabularData` as a table, a row per entry; `properties` picks the columns. */
	table(tabularData?: any, properties?: string[]): void
	/**
	 * Starts a timer named `label`, `"default"` when omitted, for {@link timeLog} and
	 * {@link timeEnd}. Warns when one by that name is already running.
	 */
	time(label?: string): void
	/** Prints the milliseconds since {@link time} started `label`, and stops that timer. */
	timeEnd(label?: string): void
	/**
	 * Prints the milliseconds since {@link time} started `label`, followed by `data`, and keeps
	 * the timer running.
	 */
	timeLog(label?: string, ...data: any[]): void
	/** Does nothing here: it prints nothing and marks no timeline. */
	timeStamp(label?: string): void
	/** Prints `data` with the call stack that led here. */
	trace(...data: any[]): void
	/** Prints `data` at the warning level. */
	warn(...data: any[]): void
}
/**
 * The script console. What it prints goes only to a DevTools session connected to the game's
 * scripts; the game itself shows none of it.
 */
declare var console: Console

/** The SDK's additions to every bigint: bit tests, the list of set bits, a signed 16-bit read. */
declare interface BigInt {
	/** Whether bit `bit` is set, counting from 0 at the lowest. */
	hasBit(bit: bigint): boolean
	/** Whether every bit set in `mask` is set in this value too. */
	hasMask(mask: bigint): boolean
	/**
	 * The positions of the set bits, lowest first: `0b1010n.toMask` is `[1, 3]`. A negative value
	 * is read as its 64-bit two's complement, so `-1n.toMask` lists 0 to 63.
	 */
	toMask: number[]
	/**
	 * This value read as a signed 16-bit integer: `0xFFFFn.toInt16` is `-1n`. Meant for a value
	 * within `[0, 0xFFFF]`; bits above the sixteenth are not cleared.
	 */
	toInt16: bigint
}

declare interface Number {
	/** Whether bit `bit` of this value as a 32-bit integer is set: 0 is the lowest, 31 the top. */
	hasBit(bit: number): boolean
	/** True if bit `this` is set in a packed uint32 bit-vector `mask` — word (N>>>5), bit (N&31). */
	hasBitInMask(mask: number[]): boolean
	/**
	 * Whether every bit set in `mask` is set in this value too, both taken as 32-bit integers.
	 */
	hasMask(mask: number): boolean
	/** popcount */
	bitCount(): number
	/**
	 * The positions of the set bits of this value as a 32-bit integer, lowest first:
	 * `0b1010.toMask` is `[1, 3]`.
	 */
	toMask: number[]
	/**
	 * This value read as a signed 16-bit integer: `0xFFFF.toInt16` is `-1`. Meant for a value
	 * within `[0, 0xFFFF]`: higher bits are not cleared.
	 */
	toInt16: number
}

declare interface String {
	/**
	 * Encodes this string as UTF-8 bytes.
	 * @example
	 * const bytes = "héllo".toUTF8()
	 */
	toUTF8(): Uint8Array
	/** Streams this string's UTF-8 bytes to a callback, one byte at a time. */
	toUTF8Cb(writeByte: (b: number) => void): void
}

/** The SDK's addition to every Map: conversion to a plain object. */
declare interface Map<K, V> {
	/**
	 * Deep-converts this Map (and any nested Maps/arrays) into a plain object. Pass a type argument
	 * to type the result; defaults to `Record<string, unknown>`.
	 * @example
	 * new Map([["a", 1]]).toObject() // { a: 1 }
	 */
	toObject<T = Record<string, unknown>>(): T
}

/** The SDK's additions to every array: sorting by a key, set operations, counting and removal. */
declare interface Array<T> {
	/**
	 * In-place quicksort by a comparator (`< 0` = a before b). Returns this array.
	 * @example
	 * arr.qsort((a, b) => a - b)
	 */
	qsort(cmpFunc: (a: T, b: T) => number, left?: number, right?: number): T[]
	/** Mutating sort by key(s). */
	orderBy(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/** Non-mutating sort by key(s). */
	toOrderBy(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/**
	 * Sorts this array in place by `callback`, highest first, and returns it. Ties go to
	 * `thenBy`, lowest first.
	 */
	orderByDescending(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/**
	 * A copy of this array sorted by `callback`, highest first; ties go to `thenBy`, lowest first.
	 * With fewer than two elements it returns this array itself, not a copy.
	 */
	toOrderByDescending(
		callback: (obj: T) => number | boolean,
		thenBy?: (obj: T) => number | boolean
	): T[]
	/** Lowest-scoring element in a single pass (≈ orderBy(cb)[0]). */
	orderByFirst(callback: (obj: T) => number): Nullable<T>
	/** Removes the first matching element; true if removed. */
	remove(value: T, useDelete?: boolean): boolean
	/** Removes the first element matching the callback; true if removed. */
	removeCallback(
		callback: (value: T, index: number, obj: T[]) => boolean,
		useDelete?: boolean
	): boolean
	/** How many elements are `=== element`. */
	count(element: T): number
	/** Whether `array` holds the same elements as this one, each as many times, in any order. */
	compare(array: T[]): boolean
	/**
	 * Whether `array` holds the same elements as this one, in any order. With `unique`, only which
	 * elements appear counts, though the lengths must still be equal: `[1, 1, 2]` matches
	 * `[1, 2, 2]`. With `unique` false, the same as the one-argument form.
	 */
	compare(array: T[], unique: boolean): boolean
	/**
	 * Whether the two arrays share at least one element, the same as {@link hasIntersect}. It does
	 * not check that all of `array` is here.
	 */
	contains(array: T[]): boolean
	/** A new array of the elements of this one that are not in `array`, in order, repeats kept. */
	except(array: T[]): T[]
	/** A new array of the elements of this one that are also in `array`, in order, repeats kept. */
	intersect(array: T[]): T[]
	/** Whether the two arrays share at least one element, compared with `===`. */
	hasIntersect(array: T[]): boolean
	/** Removes every element, in place. */
	clear(): void
}

declare interface Math {
	/** `radian` converted to degrees: `Math.PI` gives 180. */
	radianToDegrees(radian: number): number
	/** `degrees` converted to radians: 180 gives `Math.PI`. */
	degreesToRadian(degrees: number): number
	/**
	 * The point `amount` of the way from `start` to `end`: `start` at 0, `end` at 1. `amount` is
	 * not clamped, so a value outside `[0, 1]` lands beyond the ends.
	 */
	lerp(start: number, end: number, amount: number): number
	/** `amount` clamped to `[0, 1]` and eased by `3t² − 2t³`, slow at both ends. */
	smoothStep(amount: number): number
	/** `value` held within `[min, max]`. When `min` is above `max`, the result is `max`. */
	clamp(value: number, min: number, max: number): number
	/**
	 * `value` mapped linearly from `[min, max]` onto `[minResult, maxResult]` and clamped to that
	 * range; `minResult` when `min` equals `max`.
	 */
	remapRange(
		value: number,
		min: number,
		max: number,
		minResult: number,
		maxResult: number
	): number
	/**
	 * A random number in `[min, max)`, uniform by default. `skew` raises the draw, as a share of
	 * the range, to its power first: above 1 leans toward `min`, between 0 and 1 toward `max`.
	 */
	randomRange(min: number, max: number, skew?: number): number
	/**
	 * A random number between `min` and `max`, bell-shaped about the middle: a normal draw with a
	 * sixth of the range as its deviation, drawn again while it falls outside, so the whole range
	 * is reached and two thirds of the draws land in its middle third. `skew` raises the draw, as a
	 * share of the range, to its power first, as {@link randomRange} does.
	 * @example
	 * const delay = Math.randomRangeGaussian(80, 160)
	 */
	randomRangeGaussian(min: number, max: number, skew?: number): number
	/**
	 * Converts an RGB color (channels in `[0, 255]`) to HSL (components in `[0, 1]`).
	 * @example
	 * const [h, s, l] = Math.rgbToHSL(255, 128, 0)
	 */
	rgbToHSL(r: number, g: number, b: number): [number, number, number]
	/**
	 * Converts an HSL color (components in `[0, 1]`) to RGB (channels in `[0, 255]`).
	 * @example
	 * const [r, g, b] = Math.hslToRGB(0.083, 1, 0.5)
	 */
	hslToRGB(h: number, s: number, l: number): [number, number, number]
	/**
	 * Converts an RGB color (channels in `[0, 255]`) to HSV (components in `[0, 1]`).
	 * @example
	 * const [h, s, v] = Math.rgbToHSV(255, 128, 0)
	 */
	rgbToHSV(r: number, g: number, b: number): [number, number, number]
	/**
	 * Converts an HSV color (components in `[0, 1]`) to RGB (channels in `[0, 255]`). Pass
	 * `isHueDegrees` for a hue in `[0, 360)`, and `isRound` for whole channels.
	 * @example
	 * const [r, g, b] = Math.hsvToRGB(0.083, 1, 1)
	 * const [r2, g2, b2] = Math.hsvToRGB(30, 1, 1, true, true)
	 */
	hsvToRGB(
		h: number,
		s: number,
		v: number,
		isHueDegrees?: boolean,
		isRound?: boolean
	): [number, number, number]
	/**
	 * Returns `currentValue` as a percentage: `currentValue / maxValue * 100`, or `currentValue * 100`
	 * when `maxValue` is omitted. Non-finite inputs yield `0`.
	 * @example
	 * Math.toPercentage(30, 120) // 25
	 */
	toPercentage(currentValue: number, maxValue?: number): number
	/**
	 * Formats a duration in seconds as `m:ss` (or `m ss` in chat mode).
	 * @example
	 * Math.formatTime(95) // "1:35"
	 */
	formatTime(time: number, isChat?: boolean): string
}

/**
 * This package's path under the packages root, without a trailing slash: `github.com/owner/repo`,
 * or `local/<tag>/<name>` for one loaded from a local folder. Each package's bundle gets its own.
 * @example
 * const icon = `${__OCT_PACKAGE_ROOT__}/scripts_files/images/icon.svg`
 */
declare const __OCT_PACKAGE_ROOT__: string
