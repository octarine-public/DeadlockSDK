// AUTO-GENERATED - do not edit.
/**
 * Spectral Wall: McGinnis raises a wall that splits the ground and knocks up the enemies it
 * rises under. While a wall is placed and while it stands, its key is the trigger that raises
 * it (`citadel_ability_fissure_wall_trigger`) and then the cancel that brings it down
 * (`citadel_ability_fissure_wall_cancel`).
 */
declare class citadel_ability_fissure_wall extends Ability {
	/** Whether a wall is placed or stands: the key is its trigger or its cancel then. */
	public get IsDeployed(): boolean
	/** The closest to McGinnis a wall can be placed, in world units. */
	public get MinRange(): number
	/** Not while a wall is placed or stands. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** Within the cast range, and no closer than `MinRange`. */
	public CanHit(target: Entity): boolean
}
