// AUTO-GENERATED - do not edit.
/** A punchable powerup entity, its data read from `misc.vdata` by subclass id. */
declare class PunchablePowerup extends Entity {
	/** The powerup's data from `misc.vdata`, by subclass id; `MiscStore.empty` until it arrives. */
	public MiscStore: MiscStore
	/** Whether the powerup is active, as the entity networks it. */
	public readonly IsActive: boolean
	/**
	 * The game path of the powerup's HUD icon for `gun_`, `casting_`, `survival_` and
	 * `movement_powerup_pickup`; any other name gives a path to no file.
	 */
	public get TexturePath(): string
}
