// AUTO-GENERATED - do not edit.
/**
 * Close The Deal: grabs an enemy, flies high into the air with them and crashes back down,
 * damaging both on the way down and on impact.
 */
declare class ability_deadpack_ultimate extends Ability {
	/** Phase of the flight. */
	public readonly State: EDeadpackUltimateState
	/** Game time at which {@link State} began. */
	public readonly StateStartTime: number
	/** Where Deadman Danny was when {@link State} began. */
	public readonly StateStartOrigin: Vector3
	/** Deadman Danny's angles when {@link State} began. */
	public readonly StateStartAngles: QAngle
	/** Handle of the grabbed enemy, or INVALID_HANDLE when there is none. */
	public readonly TargetHandle: number
	/** Elevation the rise is heading for. */
	public readonly RiseTargetElevation: number
	/** Whether the rise is nearing its apex. */
	public readonly IsApproachingApex: boolean
	/**
	 * Whether Danny is past the wind-up: closing in, grabbing, rising or crashing down with the
	 * target.
	 */
	public get IsFlying(): boolean
	/** The grabbed enemy. */
	public get Target(): Nullable<Entity>
}
