// AUTO-GENERATED - do not edit.
/** Slam Fire: Silver loads a burst of enhanced shots into her rifle. */
declare class ability_werewolf_unloadgun extends Ability {
	/** Native active end time. */
	public readonly ActiveEndTime: number
	/** Whether the burst is loaded: its buff is on Silver, in human form. */
	public get IsActive(): boolean
	/** Not in wolf form: the human kit then sits out of its slot. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
