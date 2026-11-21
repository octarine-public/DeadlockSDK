// AUTO-GENERATED - do not edit.
/** Gutshot: after a short wind-up Venator blasts the enemies before him back. */
declare class ability_priest_knockback extends Ability {
	/** Gutshot starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** Not during the wind-up: a press then is no new blast. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
