// AUTO-GENERATED - do not edit.
/**
 * Venator's Snap Trap: it slides out, arms where it stops and roots the first enemy that walks
 * into it. It stands until it catches someone or its {@link DieTime} comes.
 * @example
 * for (const trap of EntityManager.GetEntitiesByClass(PriestSlideTrap)) {
 * 	console.log(trap.IsArmed, trap.RemainingTime.toFixed(1))
 * }
 */
declare class PriestSlideTrap extends Entity {
	/** Effective range captured by the server when this trap was launched. */
	public readonly RangeAtCast: number
	/** Whether the trap can currently catch a target. */
	public readonly IsArmed: boolean
	/** Whether the trap is still travelling before settling. */
	public readonly IsMoving: boolean
	/** The Snap Trap its owner holds, the one this trap was thrown with. */
	public get Ability(): Nullable<ability_priest_beartrap>
	/**
	 * The radius an armed trap catches an enemy in, in world units: its ability's {@link
	 * ability_priest_beartrap.AOERadius}, or 0 while the owner's ability is not known.
	 */
	public get Radius(): number
	/**
	 * The game time the trap expires at: its creation time plus its ability's {@link
	 * ability_priest_beartrap.Lifetime}, taken once, as the server fixes it when the trap is
	 * thrown. 0 while the owner's ability is not known.
	 */
	public get DieTime(): number
	/** How many seconds the trap still stands, never below 0. */
	public get RemainingTime(): number
}
