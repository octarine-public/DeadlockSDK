// AUTO-GENERATED - do not edit.
/**
 * Aura of Suffering: a toggled aura that burns the enemies around Victor at the cost of his own
 * health; once switched on it stays on for a moment before a press switches it off.
 */
declare class ability_frank_painaura extends Ability {
	/** Seconds after switching the aura on before a press switches it off. */
	public get ToggleOffDelay(): number
	/** The radius of the aura, with the spirit bonus the data scales it by. */
	public get AOERadius(): number
	/** The aura reaches as far as its radius around Victor. */
	public get Reach(): number
	/** Not within `ToggleOffDelay` of switching the aura on: the game takes no press then. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** An aura without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
