// AUTO-GENERATED - do not edit.
/**
 * Boot Kick: Silver leaps into a kick that knocks the enemy back and marks it; a short success
 * window follows a landed kick.
 */
declare class ability_werewolf_kickflip extends Ability {
	/** Native is leaping. */
	public readonly IsLeaping: boolean
	/** Native leap start time. */
	public readonly LeapStartTime: number
	/** Native leap off time. */
	public readonly LeapOffTime: number
	/**
	 * Whether the kick runs: from the wind-up through the leap to the end of its success window,
	 * which outlasts the channel and in which the game refuses Silver's other skills.
	 */
	public get IsActive(): boolean
	/** Not in wolf form: the human kit then sits out of its slot. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
