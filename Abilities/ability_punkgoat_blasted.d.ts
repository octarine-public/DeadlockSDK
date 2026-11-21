// AUTO-GENERATED - do not edit.
/** Blasted: Billy pumps himself up, his melee hits stretching how long it lasts. */
declare class ability_punkgoat_blasted extends Ability {
	/** Whether Blasted is active on Billy. */
	public get IsActive(): boolean
	/** Whether a cast hands Billy a Bashdown charge, as an upgrade makes it. */
	public get GainsSlamOnUse(): boolean
	/** Not while Blasted is active: a press then is no new Blasted. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
