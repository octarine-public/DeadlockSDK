// AUTO-GENERATED - do not edit.
/**
 * The game's chams: materials built from KV3 text, styles that lay those materials over a mesh, and
 * the style each entity is drawn in. Use the `ChamsSDK` instance.
 */
interface CChams {
	/**
	 * Builds a material from the KV3 text of a `.vmat` and answers the id that names it, -1 while the
	 * chams system is not up yet. The build runs later on the main thread, so a layer whose material
	 * is not built yet does not draw. The same name and text answer the same material; edited text
	 * is a new one.
	 * @example
	 * const flat = ChamsSDK.CreateMaterial("materials/octarine/flat.vmat", kv3)
	 */
	CreateMaterial(name: string, kv3: string): number
	/**
	 * Declares style `style`: the materials drawn over a mesh, in order, `visible` where the entity
	 * stands in front of the world and `invisible` where it is behind it, each tinted by the color at
	 * the same place in `visibleColors` or `invisibleColors`, packed `0xAABBGGRR`. A pass with no
	 * materials is not drawn. `keepOriginal` draws the entity's own material under the layers.
	 * @example
	 * ChamsSDK.SetStyle(style, [flat], [flat], [0xff00ff00], [0x800000ff])
	 */
	SetStyle(style: number, visible: number[], invisible: number[], visibleColors: number[], invisibleColors: number[], keepOriginal?: boolean): void
	/**
	 * Writes `value` into parameter `name` of a built material, a number to all four components.
	 * False when the material is not built yet or has no such parameter: build it again with
	 * {@link CreateMaterial} then. A feature key (`F_...`) is not a parameter and changes only
	 * through the KV3 text.
	 */
	SetMaterialParam(material: number, name: string, value: number | number[]): boolean
	/**
	 * Draws the entity whose `CustomNativeID` is `entity` in style `style`, until
	 * {@link RemoveEntityStyle} takes it off.
	 */
	SetEntityStyle(entity: number, style: number): void
	/** Draws the entity whose `CustomNativeID` is `entity` in its own material again. */
	RemoveEntityStyle(entity: number): void
	/**
	 * Takes the style off every entity. A style outlives the script that set it, so a script clears
	 * what its previous load left on before it claims style ids of its own.
	 */
	RemoveEntityStyles(): void
}
/** The game's chams: the one {@link CChams}. */
declare const ChamsSDK: CChams
