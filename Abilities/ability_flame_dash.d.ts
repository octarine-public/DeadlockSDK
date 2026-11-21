// AUTO-GENERATED - do not edit.
/** Flame Dash: Infernus dashes along where he looks, leaving a trail of fire behind him. */
declare class ability_flame_dash extends Ability {
	/** Whether the dash runs, from its wind-up to the end of its travel. */
	public get IsDashing(): boolean
	/**
	 * How far the dash carries Infernus: its speed over its duration, spirit duration applied.
	 * Upgrades to either are in it.
	 */
	public get Reach(): number
	/** A dash that travels nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
