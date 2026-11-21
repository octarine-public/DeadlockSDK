// AUTO-GENERATED - do not edit.
/**
 * Bounce Pad: Holliday puts a pad down ahead of her that launches whoever steps on it; landing
 * from a launch stomps what stands around her.
 */
declare class ability_bounce_pad extends Ability {
	/** Whether Holliday rides a launch off a pad, from the bounce until her landing stomps. */
	public get IsStomping(): boolean
	/** The radius of the pad's stomp, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** The pad is put down `PlaceDistance` ahead of Holliday and reaches its radius past that. */
	public get Reach(): number
	/** A pad that reaches nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
