// AUTO-GENERATED - do not edit.
/** The trigger that holds Ava's key while Calico is in cat form: its press ends the form. */
declare class ability_nano_catform_trigger extends Ability {
	/**
	 * Only in cat form (`modifier_catform`). The trigger is no movement ability, so a movement
	 * silence, which keeps Ava from starting, leaves the way out of the form open.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
