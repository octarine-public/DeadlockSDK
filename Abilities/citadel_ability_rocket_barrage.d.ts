// AUTO-GENERATED - do not edit.
/**
 * Heavy Barrage: McGinnis fires a volley of rockets at an area; the rockets cannot land closer
 * to her than a minimum distance.
 */
declare class citadel_ability_rocket_barrage extends Ability {
	/** Whether the volley fires. */
	public get IsActive(): boolean
	/** The closest to McGinnis the volley can be aimed, in world units. */
	public get MinDistance(): number
	/** Not while the volley fires: a press then is no new volley. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** Within the cast range, and no closer than `MinDistance`. */
	public CanHit(target: Entity): boolean
}
