// AUTO-GENERATED - do not edit.
/**
 * Vexing Bolt: Sinclair launches a slow bolt that bursts on what it meets; while it flies, its
 * key is the trigger that redirects it (`ability_magician_magicbolt_trigger`).
 */
declare class ability_magician_magicbolt extends Ability {
	/** Vexing Bolt starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/**
	 * How far the bolt carries before it fades: its launch speed over its lifetime, within the
	 * cast range.
	 */
	public get Reach(): number
	/** Whether a bolt of the latest cast still flies, for the trigger to redirect. */
	public get IsInFlight(): boolean
	/**
	 * Only from its own slot, and not while a cast winds up or channels: while a bolt flies the
	 * key is its redirect, and a press mid-cast is no new bolt.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A bolt that carries nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
