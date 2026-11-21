// AUTO-GENERATED - do not edit.
/**
 * Pain Battery: Victor stores up the damage he takes and releases it as a spread of bolts;
 * it fires only once fully charged, whatever its cooldown says.
 */
declare class ability_frank_shocktarget2 extends Ability {
	/** Whether the battery is fully charged and ready to fire. */
	public get IsFullyCharged(): boolean
	/** Only fully charged: before that a press fires nothing. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
