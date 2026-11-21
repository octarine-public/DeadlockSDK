// AUTO-GENERATED - do not edit.
/**
 * Frozen Shelter: Kelvin raises a dome of ice that heals his allies inside and slows the
 * enemies in it. While it stands, its key casts the trigger that brings it down early.
 */
declare class ability_ice_dome extends Ability {
	/** Whether the dome stands. */
	public get IsActive(): boolean
	/**
	 * Only from the ultimate's slot, and not while the dome stands: the key then casts the
	 * trigger that brings it down.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
