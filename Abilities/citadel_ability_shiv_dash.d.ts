// AUTO-GENERATED - do not edit.
/**
 * Slice and Dice: Shiv dashes ahead along the view he holds when the wind-up ends, cutting every
 * enemy on his way and taking a stack of spirit resistance off each one for a while.
 */
declare class citadel_ability_shiv_dash extends Ability {
	/**
	 * How far the dash carries Shiv into a cut: its `DashRange`, spirit range applied, and the
	 * `DashRadius` it cuts in to either side - a target 2.8 m off his line was cut, one 3.1 m off
	 * was not.
	 */
	public get Reach(): number
	/** A dash its data gives no reach reaches nothing, rather than everything. */
	public CanHit(target: Entity): boolean
}
