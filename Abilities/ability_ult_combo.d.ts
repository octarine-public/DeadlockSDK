// AUTO-GENERATED - do not edit.
/** Combo: Mo & Krill grab an enemy and hold them stunned for the channel, damaging them. */
declare class ability_ult_combo extends Ability {
	/** Whether Mo & Krill hold an enemy, from the grab to the end of its channel. */
	public get IsActive(): boolean
	/** Not while Mo & Krill hold an enemy: a press then is no new grab. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
