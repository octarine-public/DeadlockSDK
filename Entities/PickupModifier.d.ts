// AUTO-GENERATED - do not edit.
/**
 * A powerup pickup on the map, named after its data entry: `gun_powerup_pickup`,
 * `casting_powerup_pickup` and the like.
 */
declare class PickupModifier extends Entity {
	/** The pickup's data from `misc.vdata`, by subclass id; `MiscStore.empty` until it arrives. */
	public MiscStore: MiscStore
	/** Whether the powerup is out; it turns true as the powerup spawns. */
	public readonly IsActive: boolean
	/**
	 * The game path of the powerup's HUD icon for `gun_`, `casting_`, `survival_` and
	 * `movement_powerup_pickup`; any other name gives a path to no file.
	 */
	public get TexturePath(): string
}
