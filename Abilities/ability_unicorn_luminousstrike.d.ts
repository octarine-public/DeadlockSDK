// AUTO-GENERATED - do not edit.
/**
 * Radiant Daggers: Celeste calls daggers down on a spot, exploding there after a delay. A press
 * casts at once at the ground under the crosshair, with no targeting to confirm, though the
 * daggers are the selected ability through their wind-up. A spot past the cast range is pulled
 * in to it.
 */
declare class ability_unicorn_luminousstrike extends Ability {
	/** Scheduled native Radiant Daggers explosion times. */
	public readonly NextExplosionTimes: readonly number[]
	/** Native world positions corresponding to the scheduled explosions. */
	public readonly NextExplosionLocations: readonly Vector3[]
	/**
	 * The explosion's radius, in world units, upgrades and spirit range applied: live it hit a
	 * hero whose origin stood 8.5 m beside the spot.
	 */
	public get AOERadius(): number
	/**
	 * The daggers reach as far as the cast range and the explosion's radius beyond it: the game
	 * pulls a farther spot in to the cast range.
	 */
	public get Reach(): number
	/**
	 * Seconds from now to the explosion of a cast that goes out now: what is left of the wind-up
	 * (`AbilityCastDelay`) and the beam's forming (`PreExplosionDuration`).
	 */
	public get ImpactDelay(): number
	/** Not without a charge left: a press then calls no daggers. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
