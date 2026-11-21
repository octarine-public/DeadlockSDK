// AUTO-GENERATED - do not edit.
/**
 * A neutral camp's spawn point, which the SDK builds from the map's `info_neutral_trooper_*`
 * entries while their world layer is shown; the server does not network it. Its `Name` is the
 * camp's name, such as `neutral_camp_weak`, and vault camps are left out.
 */
declare class NeutralTrooperCamp extends Entity {
	/** The camp's `subclass_name` in the map data; empty where it has none. */
	public SubclassName: string
	/** The camp's tier, as {@link SetInternalType} reads it from the camp's name. */
	public Type: ENeutralNPCType
	/** Where the map data places the camp. */
	public OriginPosition: Vector3
	/** Always true. */
	public get IsAlive(): boolean
	/** Always 0. */
	public get RemainingSpawn(): number
	/**
	 * The tier a camp name stands for: `neutral_camp_weak` and `_medium` give `NEUTRAL_NPC_WEAK`,
	 * `_normal` `NEUTRAL_NPC_NORMAL`, `_strong` `NEUTRAL_NPC_STRONG`, `_midboss` `NEUTRAL_SUPER`
	 * and `_vaults` `NEUTRAL_VAULT`; any other name `NEUTRAL_INVALID`. It sets nothing.
	 */
	public SetInternalType(name: string): ENeutralNPCType.NEUTRAL_INVALID | ENeutralNPCType.NEUTRAL_NPC_WEAK | ENeutralNPCType.NEUTRAL_NPC_NORMAL | ENeutralNPCType.NEUTRAL_NPC_STRONG | ENeutralNPCType.NEUTRAL_SUPER | ENeutralNPCType.NEUTRAL_VAULT
}
