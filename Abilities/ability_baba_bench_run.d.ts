// AUTO-GENERATED - do not edit.
/** Baba's Granny Long Legs. */
declare class ability_baba_bench_run extends Ability {
	/** Game time at which Granny Long Legs began. */
	public readonly RideStartTime: number
	/** Game time at which Granny Long Legs ends. */
	public readonly RideEndTime: number
	/** Game time of the ride's end launch. */
	public readonly EndLaunchTime: number
	/** Whether crouch is being held to charge a high jump. */
	public readonly IsHoldingJump: boolean
	/** Whether the high jump being charged was called off. */
	public readonly IsHeldJumpAborted: boolean
	/** Game time at which the high-jump charge began. */
	public readonly HoldJumpStartTime: number
	/** Charge, 0 to 1, of the last high jump released. */
	public readonly LastChargeJumpFraction: number
	/** Whether a kick or a ground pound is under way. */
	public readonly IsInMelee: boolean
	/** Whether that melee is the heavy ground pound rather than the light kick. */
	public readonly IsRideCut: boolean
	/**
	 * Whether Baba is riding Granny Long Legs right now, which puts
	 * {@link ability_baba_bench_melee} on the melee button in place of the usual melee.
	 */
	public get IsRiding(): boolean
	/** How much further Baba's melee reaches while the ride lasts, in world units. */
	public get BonusMeleeRange(): number
	/**
	 * How far around where Baba comes down the ground pound's blow reaches, in world units to a
	 * target's hull, spirit range applied.
	 */
	public get PoundRadius(): number
}
