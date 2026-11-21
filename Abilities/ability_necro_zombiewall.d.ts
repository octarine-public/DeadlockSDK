// AUTO-GENERATED - do not edit.
/**
 * Grasping Hands: Graves tears a line of grasping hands out of the ground where her camera's aim
 * meets it, on the command the game takes the cast with. The line runs across her aim; laid from
 * its targeting with the alt-cast held (`HoldAlongAim`) it runs along it. The hands rise
 * `PopDelay` after the cast and grab whoever stands on the line then or crosses the rift it
 * leaves for its duration: its damage, a hold in place, and a pull toward the hand that took
 * them.
 */
declare class ability_necro_zombiewall extends Ability {
	/** Server game-time deadline for Grasping Hands' wall deployment. */
	public readonly DeployFinishTime: number
	/** Whether the wall is still rising, until `DeployFinishTime`. */
	public get IsDeploying(): boolean
	/** The radius of each of the hands' grabbing areas along the wall, in world units. */
	public get AuraRadius(): number
	/** Seconds from the cast until the hands rise along the line and grab what stands on it. */
	public get PopDelay(): number
	/**
	 * How long the line of hands is, end to end, in world units: its upgraded length with the
	 * spirit power the data scales it by.
	 */
	public get WallLength(): number
	/** The line's middle goes down within the cast range; its hands grab `AuraRadius` beyond it. */
	public get Reach(): number
	/** A line put down nowhere grabs nothing. */
	public CanHit(target: Entity): boolean
	/**
	 * Holds the alt-cast that turns the line along the aim. The game reads it only while the line
	 * waits in its targeting (opened by its key, `PressKey`) and only when it is held from before
	 * the confirm (`Confirm`) through it: from the confirm's own command on, the line still runs
	 * across. A quick cast (`Use`) lays it across whatever is held.
	 */
	public HoldAlongAim(cmd: UserCmd): void
	/**
	 * Leaves the line's targeting without laying it, with secondary fire as a player's right
	 * click does; Graves' secondary fire only zooms her gun. Pressing the key again only opens
	 * the targeting anew. Whether it pressed.
	 */
	public CancelTargeting(cmd: UserCmd): boolean
}
