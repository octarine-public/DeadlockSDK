// AUTO-GENERATED - do not edit.
/**
 * Death Slam: Lash locks on to the enemies around him for the channel, then lifts the ones he
 * took and throws them down where he aims.
 */
declare class citadel_ability_lash_ultimate extends Ability {
	/** Game time at which the current lock-on phase began. */
	public readonly LockOnStartTime: number
	/**
	 * Death Slam's phase as the server numbers it: 0 outside one and through the lock-on, then 1
	 * and 2 in turn once the lock-on has ended, and 0 again.
	 */
	public readonly GrappleState: number
	/** Game time at which the current Death Slam phase began. */
	public readonly StateEnterTime: number
	/** Scheduled transition time reported for the current phase. */
	public readonly NextStateTime: number
	/** End of the upward boost following a confirmed throw. */
	public readonly BoostEndTime: number
	/** Whether Lash locks on: the channel that marks the enemies around him. */
	public get IsLocking(): boolean
	/** Whether Death Slam is past the lock-on: lifting, holding or throwing what it took. */
	public get IsThrowing(): boolean
	/**
	 * Whether primary fire now throws what the lock-on holds: Lash locks on in a channel that
	 * has started, and nothing keeps him from acting - stunned, silenced or command-restricted.
	 */
	public get CanThrow(): boolean
	/**
	 * How far around Lash the lock-on takes enemies, measured flat: the cast range, which the
	 * data scales by spirit radius rather than range.
	 */
	public get Reach(): number
	/**
	 * Whether the lock-on of the current cast holds `target` with the stacks a throw takes
	 * (`MaxLockonStacks`): a throw then lifts it.
	 */
	public IsLockedOn(target: Entity): boolean
	/** Not while Lash locks on or throws: a press then is no new Death Slam. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/**
	 * Whether the lock-on from where Lash is now reaches `target`: Lash alive, neither stunned nor
	 * silenced, and it within `Reach` of him on the ground plane.
	 */
	public CanHit(target: Entity): boolean
}
