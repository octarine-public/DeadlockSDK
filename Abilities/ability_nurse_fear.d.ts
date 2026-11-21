// AUTO-GENERATED - do not edit.
/**
 * Lurking Terror: Nurse Harrow opens her satchel for `AbilityChannelTime` and shows the enemies
 * in front of her within `AbilityCastRange` what is inside - spirit damage a second (`DPS`). An
 * enemy who looks at her builds terror over `BuildupTime` that bars its stamina and movement
 * abilities and, once full, sends it running for `DebuffDuration` plus `FearDurationPerLeechStack`
 * for every leech she picked up. An enemy looking away takes `FacingAwayDamagePercent` of the
 * damage unless it is afraid. She walks at `ChannelMoveSpeed` while it lasts.
 */
declare class ability_nurse_fear extends Ability {
	/** The leech pickups Nurse held as the cast started: the ones its fear counts. */
	public readonly LeechStacksAtCast: number
	/** Degrees across the cone in front of Nurse the channel reaches. */
	public get ConeAngle(): number
	/**
	 * Seconds an enemy stays afraid: `DebuffDuration` and `FearDurationPerLeechStack` for every
	 * leech she holds - while the cast runs, the ones she held as it started -, with her spirit
	 * duration bonus, less `target`'s debuff resistance where one is named.
	 */
	public GetFearDuration(target?: Nullable<PlayerPawn>): number
	/** Whether `target` is afraid right now. */
	public IsAfraid(target: Entity): boolean
	/** Whether `target` is within the cone in front of Nurse, along her view. */
	public InCone(target: Entity): boolean
	/**
	 * Whether `target` looks at Nurse closely enough to build terror: its view within
	 * `BuildupLookAngle` degrees of her.
	 */
	public IsGazing(target: PlayerPawn): boolean
	/**
	 * What the channel deals `target` a second: `DPS` as spirit damage through its resistance
	 * (`Ability.GetDamage`), `FacingAwayDamagePercent` of it while it looks away and is not afraid.
	 */
	public GetDamagePerSecond(target: PlayerPawn): number
	/** Not while the channel runs: a press then does nothing. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
