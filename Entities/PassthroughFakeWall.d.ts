// AUTO-GENERATED - do not edit.
/**
 * A passthrough fake wall (`CCitadelPassthroughFakeWall`); its `Name` is its entry in the misc
 * data.
 */
declare class PassthroughFakeWall extends Entity {
	/** Id of the wall's entry in the misc data, the one {@link MiscStore} is looked up by. */
	public SubclassID: number
	/**
	 * The wall's entry in the misc data (`scripts/misc.vdata`), found by its subclass id;
	 * `MiscStore.empty` until that arrives, and for a subclass the data lacks.
	 */
	public MiscStore: MiscStore
}
