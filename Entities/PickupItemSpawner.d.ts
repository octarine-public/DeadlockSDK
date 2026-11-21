// AUTO-GENERATED - do not edit.
/**
 * A pickup spawner on the map (`CCitadel_PickupItemSpawner`), timed by its entry in the misc
 * data; its `Name` is that entry.
 */
declare class PickupItemSpawner extends Entity {
	/**
	 * The spawner's entry in the misc data (`scripts/misc.vdata`), found by its subclass id;
	 * `MiscStore.empty` until that arrives, and for a subclass the data lacks.
	 */
	public MiscStore: MiscStore
	/** Seconds between spawns, from the misc data's `m_flSpawnInterval`; 0 where it has none. */
	public get SpawnInterval(): number
	/**
	 * Second of match time (`GameRules.GameTime`) the first spawn comes at, from the misc data's
	 * `m_flInitialSpawnTime`; 0 where it has none.
	 */
	public get InitialSpawnTime(): number
	/**
	 * Seconds until the next spawn by `GameRules.GameTime`, or `GameState.RawGameTime` while there
	 * are no game rules: until {@link InitialSpawnTime}, then until the next whole multiple of
	 * {@link SpawnInterval}. NaN from {@link InitialSpawnTime} on while the interval is 0.
	 */
	public get RemainingTime(): number
}
