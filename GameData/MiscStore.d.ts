// AUTO-GENERATED - do not edit.
/**
 * An entry of the game's `misc.vdata`: the data of a pickup, breakable prop, XP orb or other map
 * object, found by the subclass id the entity networks. Each such entity holds it as `MiscStore`.
 */
declare class MiscStore {
	/**
	 * The entry's data id, hashed from {@link Name}: the `m_nSubclassID` an entity built from
	 * it networks. -1 on {@link empty}.
	 */
	public readonly SubclassID: number
	/** The entry's name in `misc.vdata`, which an entity built from it takes as its `Name`. */
	public readonly Name: string
	/** Every entry by {@link SubclassID}, refilled on each `ServerInfo` event. */
	public static globalStorage: Map<number, MiscStore>
	/**
	 * The store of no entry: an empty name, zeros and the error model. An entity holds it until
	 * its subclass id arrives, and for an id the data lacks.
	 */
	public static empty: MiscStore
	/**
	 * The panorama path of the HUD icon of the entry's modifier (`m_strHudIcon` of
	 * {@link Modifer}); empty where it has none.
	 */
	public readonly HudIcon: string
	/**
	 * Seconds the entry's `m_flLifeTime` gives, 0 where it declares none: for an XP orb, how long
	 * it stays claimable once it turns attackable (`ItemXP.LifeTime`).
	 */
	public readonly LifeTime: number
	/**
	 * The entry's `m_flInvulDuration`; 0 where it declares none. For an XP orb the server rolls
	 * the invulnerability instead and networks its end as `ItemXP.AttackableTime`.
	 */
	public readonly InvulDuration: number
	/**
	 * The entry's `m_flCollisionRadius`; 0 where it declares none. For an XP orb, the radius of
	 * the sphere a bullet has to touch (`ItemXP.CollisionRadius`).
	 */
	public readonly CollisionRadius: number
	/**
	 * The modifier block the entry declares (`m_sModifer`) as raw key-values, empty where it has
	 * none. `ModifierStore` holds it as well, under its `_my_subclass_name`.
	 */
	public readonly Modifer: Map<string, RecursiveMapValue>
	/** The entry's model path (`m_hModel`); `models/dev/error.vmdl` where it names none. */
	public readonly ModelName: string
	/** The entry's `m_flHealthBarOffset`; 0 where it declares none. */
	public readonly HealthBarOffset: number
	/**
	 * The game time a pickup spawner first spawns at, in seconds (`m_flInitialSpawnTime`); 0
	 * where the data declares none.
	 */
	public readonly InitialSpawnTime: number
	/** Seconds between a pickup spawner's spawns (`m_flSpawnInterval`); 0 where it has none. */
	public readonly SpawnInterval: number
	/** The entry whose {@link SubclassID} is `subClassID`, or {@link empty} for none. */
	public static GetStoreBySubclassID(subClassID: number): MiscStore
}
