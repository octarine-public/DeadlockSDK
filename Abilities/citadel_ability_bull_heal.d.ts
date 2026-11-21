// AUTO-GENERATED - do not edit.
/** Siphon Life: an aura around Abrams that drains the enemies inside it and heals him. */
declare class citadel_ability_bull_heal extends Ability {
	/** Whether the aura is draining. */
	public get IsActive(): boolean
	/** The radius of the aura, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** The aura reaches as far as its radius around Abrams. */
	public get Reach(): number
	/** Not while the aura drains. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** An aura without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
