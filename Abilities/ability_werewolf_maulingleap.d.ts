// AUTO-GENERATED - do not edit.
/** Mauling Leap: the wolf leaps onto an enemy, mauling it and weakening its bullet armor. */
declare class ability_werewolf_maulingleap extends Ability {
	/** Native leap start time. */
	public readonly LeapStartTime: number
	/** Whether the leap runs: winding up, channeling or carrying the wolf. */
	public get IsActive(): boolean
	/** Only in wolf form: the wolf kit sits out of its slot otherwise. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
