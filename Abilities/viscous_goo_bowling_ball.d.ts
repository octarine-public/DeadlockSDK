// AUTO-GENERATED - do not edit.
/**
 * Goo Ball: Viscous rolls up into a ball that knocks and stuns the enemies it rolls into; a
 * press of the key while rolling ends it.
 */
declare class viscous_goo_bowling_ball extends Ability {
	/** Whether Viscous rolls in the ball. */
	public get IsRolling(): boolean
	/**
	 * How far the ball carries Viscous in a straight line: its top speed over its duration,
	 * spirit duration applied.
	 */
	public get Reach(): number
	/** Not while rolling: a press then ends the roll. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A ball that rolls nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
