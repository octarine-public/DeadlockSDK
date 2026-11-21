// AUTO-GENERATED - do not edit.
/** Scorn: Mo & Krill drain the enemies around them, healing from the damage dealt. */
declare class ability_intimidate extends Ability {
	/** The radius Scorn drains in, spirit range bonuses applied: the data scales it by range. */
	public get AOERadius(): number
	/** Scorn reaches as far as its radius around Mo & Krill. */
	public get Reach(): number
	/** A drain without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
