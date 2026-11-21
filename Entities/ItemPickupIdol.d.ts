// AUTO-GENERATED - do not edit.
/** The Soul Urn as a pickup (`CCitadelItemPickupIdol`); its `Name` is its misc data entry. */
declare class ItemPickupIdol extends ItemPickup {
	/** A team bias the server networks for the urn; the SDK reads it nowhere. */
	public readonly TeamBias = 0
	/**
	 * The urn's entry in the misc data (`scripts/misc.vdata`), found by its subclass id;
	 * `MiscStore.empty` until that arrives, and for a subclass the data lacks.
	 */
	public MiscStore: MiscStore
	/** Game path of the Soul Urn's minimap icon, the same for every urn. */
	public get TexturePath(): string
}
