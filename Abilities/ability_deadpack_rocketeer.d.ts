// AUTO-GENERATED - do not edit.
/**
 * Chimera Mk1: a jetpack flown by holding Mantle, building heat. At max heat it overheats and
 * dives to the ground, exploding on impact; pressing the ability dives early.
 */
declare class ability_deadpack_rocketeer extends Ability {
	/** Phase of the flight. */
	public readonly State: EDeadpackRocketeerState
	/** Game time at which {@link State} was entered. */
	public readonly StateEnterTime: number
	/** The jetpack's velocity in flight. */
	public readonly FlightVelocity: Vector3
	/** Height the flight started at. */
	public readonly StartHeight: number
	/** Game time at which the jetpack's heat starts to decay. */
	public readonly HeatDecayStartTime: number
	/** Game time at which Mantle was first held to fly. */
	public readonly JetpackInputHeldStartTime: number
	/** Game time at which the reduced gravity starts. */
	public readonly GravityReductionStartTime: number
	/** Game time at which the reduced gravity ends. */
	public readonly GravityReductionEndTime: number
	/** Whether the dive goes straight down. */
	public readonly IsDivingStraightDown: boolean
	/**
	 * Whether the overheated jetpack is diving or about to: the dive heads where Danny looks until
	 * it lands.
	 */
	public get IsDiving(): boolean
}
