// AUTO-GENERATED - do not edit.
/** Affliction: Pocket curses the enemies around him with damage over time. */
declare class synth_affliction extends Ability {
	/** The radius around Pocket the curse lands in, spirit range bonuses applied. */
	public get AOERadius(): number
	/** The curse reaches as far as its radius around Pocket. */
	public get Reach(): number
	/** A curse without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
