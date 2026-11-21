// AUTO-GENERATED - do not edit.
/**
 * Itani Lo Sahn: Apollo winds up, dashes along where he aims and sweeps the enemies he passes;
 * from the ground the dash carries less far than through the air.
 */
declare class ability_fencer_ultimate extends Ability {
	/** Native ult state. */
	public readonly UltState: number
	/** Native state start time. */
	public readonly StateStartTime: number
	/**
	 * Whether the ultimate runs: from its wind-up through the dash, hold and sweep to the
	 * movement recovery after.
	 */
	public get IsActive(): boolean
	/** Whether the ultimate winds up, before Apollo dashes. */
	public get IsWindingUp(): boolean
	/** How far the dash carries Apollo through the air, spirit range bonuses applied. */
	public get Reach(): number
	/**
	 * How far the dash carries Apollo from the ground: `GroundDashReductionPercent` short of
	 * `Reach`.
	 */
	public get GroundReach(): number
	/** A dash that carries nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
