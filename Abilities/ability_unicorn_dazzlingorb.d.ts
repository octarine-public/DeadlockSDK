// AUTO-GENERATED - do not edit.
/**
 * Shining Wonder: Celeste charges an orb while her key is held and launches it on release; it
 * bounces between the enemies around its target.
 */
declare class ability_unicorn_dazzlingorb extends Ability {
	/** Shining Wonder starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/**
	 * Not while the orb winds up or is held: letting go of the held key launches it, so a press
	 * then starts no new cast.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
