// AUTO-GENERATED - do not edit.
/**
 * The parry every hero has, on its own key: the block stands for its active time once up.
 * @example
 * const parry = local.GetAbilityByClass(citadel_ability_melee_parry)
 * if (parry !== undefined && !parry.IsPressing && parry.CanBeCasted()) {
 * 	parry.PressKey(cmd)
 * }
 */
declare class citadel_ability_melee_parry extends Ability {
	/** When the last parry began. */
	public readonly ParryStartTime: number
	/**
	 * Whether the last parry caught a blow; it stays up until the next cast. It says nothing about
	 * whether the parry can be cast again: a caught hero's swing hands the cooldown straight back,
	 * a caught neutral's blow leaves it running, and `CanBeCasted` reads the cooldown itself.
	 */
	public readonly IsAttackParried: boolean
	/**
	 * When the success animation of the last landed parry ends. It moves only on a parry that
	 * actually caught something, so a rising edge is the game's own word that a block connected.
	 */
	public readonly ParrySuccessEndTime: number
	/**
	 * The parry key (`IN_ABILITY_HELD`), which `PressKey` taps: one press edge on one command.
	 * The ability sits in an innate slot no slot key casts.
	 */
	public get KeyMask(): bigint
	/**
	 * Whether the game takes a parry pressed now. It drops one pressed in its owner's own melee
	 * swing, through charge, dash and attack of a light or a heavy alike, until
	 * `AbilityPress.QueueTime` before the swing lets them go
	 * (`citadel_ability_hold_melee.SwingEndTime`). One pressed after that is held, and the block
	 * goes up the moment the swing ends ({@link PressQueuedUntil}).
	 */
	public get TakesPress(): boolean
	/**
	 * The game time a parry pressed now goes up at where its owner's own swing holds the press
	 * ({@link TakesPress}): the end of that swing. 0 while no swing holds one.
	 */
	public get PressQueuedUntil(): number
}
