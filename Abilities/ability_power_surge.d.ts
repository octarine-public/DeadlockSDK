// AUTO-GENERATED - do not edit.
/** Power Surge: Seven charges himself, and his shots chain lightning between enemies. */
declare class ability_power_surge extends Ability {
	/** Whether the surge charges Seven. */
	public get IsActive(): boolean
	/** Not while the surge charges Seven: a press then is no new cast. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
