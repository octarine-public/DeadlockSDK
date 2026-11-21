// AUTO-GENERATED - do not edit.
/**
 * Rule, Ratannia!: charges up, then leaps to plant the banner of Ratannia, which speeds nearby
 * allies, makes them immune to slows and reduces the damage they take.
 */
declare class ability_ratking_standard_bearer extends Ability {
	/** Game time at which the charge began. */
	public readonly ChargeStartTime: number
	/** Game time at which the charge resumed. */
	public readonly ChargeResumeTime: number
	/** Game time at which the banner is planted without waiting for the charge. */
	public readonly ForcedPlantTime: number
	/** Phase of the planting leap. */
	public readonly PlantLeapPhase: ERatkingPlantLeapPhase
	/** Game time at which {@link PlantLeapPhase} began. */
	public readonly PlantLeapPhaseStartTime: number
	/**
	 * Seconds from the banner being planted to its blast going off (`m_flExplodeTimer`). The plant
	 * sounds `Ratking.Charge.Cast`.
	 */
	public get ExplodeTimer(): number
	/**
	 * Whether Rule, Ratannia! runs, from its wind-up until the banner lands: the wind-up hands
	 * over to the carry through a tick of channelling, and while the banner is carried its
	 * trigger holds the ultimate's slot and a primary-fire press plants the banner where Rat
	 * King stands.
	 */
	public get IsActive(): boolean
	/** Not while it runs: a press then is no new banner. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
