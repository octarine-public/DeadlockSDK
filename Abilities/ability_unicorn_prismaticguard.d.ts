// AUTO-GENERATED - do not edit.
/**
 * Dazzling Trick: a prism shields Celeste with a barrier, and breaking the barrier blasts and
 * silences the enemies around her.
 */
declare class ability_unicorn_prismaticguard extends Ability {
	/** Whether the prism's barrier of a cast of this ability shields Celeste. */
	public get IsActive(): boolean
	/** The radius around Celeste the blast hits in, spirit bonuses applied as the data scales it. */
	public get AOERadius(): number
	/** The blast reaches as far as its radius around Celeste. */
	public get Reach(): number
	/** A blast without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
