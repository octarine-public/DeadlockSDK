// AUTO-GENERATED - do not edit.
/** Call Bell: Doorman throws a bell that explodes after a delay, or once a bullet sets it off. */
declare class ability_doorman_bomb extends Ability {
	/** Call Bell's bomb starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** The radius of the bell's blast, spirit radius bonuses applied. */
	public get AOERadius(): number
	/**
	 * Seconds from the bell's throw to its blast, unless a bullet sets it off first
	 * (`ProjectileFuse`).
	 */
	public get Fuse(): number
	/** How close to the bell a bullet has to pass to set it off, in world units. */
	public get BulletTriggerRadius(): number
}
