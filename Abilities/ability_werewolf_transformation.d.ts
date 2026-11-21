// AUTO-GENERATED - do not edit.
/** Lycan Curse: once her bloodlust is full, Silver turns into a wolf with a kit of its own. */
declare class ability_werewolf_transformation extends Ability {
	/** Native is transformed. */
	public readonly IsTransformed: boolean
	/** Native werewolf start time. */
	public readonly WerewolfStartTime: number
	/** Whether Silver's bloodlust is full: the curse's `ready` buff is on her. */
	public get IsBloodlustReady(): boolean
	/**
	 * Only with full bloodlust, and not in wolf form: the game refuses the curse before, though
	 * its cooldown reads ready, and in wolf form a press starts no new curse.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
