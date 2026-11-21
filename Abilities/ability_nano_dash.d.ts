// AUTO-GENERATED - do not edit.
/** Leaping Slash: Calico dashes ahead and slashes what stands before her at its end. */
declare class ability_nano_dash extends Ability {
	/** Whether Calico dashes: the dash holds her movement. */
	public get IsDashing(): boolean
	/** The slash's radius, with the spirit bonus the data scales it by. */
	public get SlashRadius(): number
	/**
	 * How far the dash carries the slash: its cast range, then the slash's forward offset and its
	 * radius.
	 */
	public get Reach(): number
	/** Not while Calico dashes: a press then is no new dash. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A dash that reaches nowhere slashes nothing. */
	public CanHit(target: Entity): boolean
}
