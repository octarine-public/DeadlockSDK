// AUTO-GENERATED - do not edit.
/** Sanguine Retreat's recast: blinks Mina again within the window the first blink opens. */
declare class ability_vampirebat_batblink_trigger extends Ability {
	/**
	 * Whether the recast holds Sanguine Retreat's key: a blink opened its window, and Sanguine
	 * Retreat itself sits out of its slot.
	 */
	public get IsArmed(): boolean
	/** The blink this recast continues; none without one. */
	public get Blink(): Nullable<ability_vampirebat_batblink>
	/**
	 * Only while it holds the key and the blink has a recast left, and not while Mina winds up,
	 * channels or is still dispersed: a press then blinks her no further.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
