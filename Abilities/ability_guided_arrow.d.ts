// AUTO-GENERATED - do not edit.
/** What one arrow would do to a target right now. */
interface IGuidedArrowExecuteInfo {
	/** Damage the arrow lands, after the target's resistances. */
	damage: number
	/** The target dies to this arrow, either outright or through the execute. */
	lethal: boolean
	/** The arrow leaves the target under the low-health threshold and executes them. */
	execute: boolean
}
/** Guided Owl: Grey Talon becomes a spirit owl he steers until it strikes. */
declare class ability_guided_arrow extends Ability {
	/** Guided Owl starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** Whether Grey Talon steers the owl, from its release until it strikes. */
	public get IsActive(): boolean
	/**
	 * Neither lethal nor an execute while the target cannot die (`Entity.IsUnkillable`).
	 * @param hpLookahead Seconds of the target's health regen to credit before the arrow lands;
	 * pass the projectile's travel time to judge a shot that is still in the air.
	 */
	public GetExecuteInfo(target: PlayerPawn, hpLookahead?: number): IGuidedArrowExecuteInfo
}
