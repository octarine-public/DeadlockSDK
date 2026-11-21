// AUTO-GENERATED - do not edit.
/** A prop that can be broken; its `Name` names its entry in the misc data (`MiscStore`). */
declare class BreakableProp extends Entity {
	/** The prop's currency value. */
	public readonly CurrencyValue: number
	/**
	 * The prop's entry in the misc data (`scripts/misc.vdata`), found by its subclass;
	 * `MiscStore.empty` until that arrives, and for a subclass the data lacks.
	 */
	public MiscStore: MiscStore
	/** The panorama path of the prop's HUD icon, from its misc data; empty where it has none. */
	public get TexturePath(): string
}
