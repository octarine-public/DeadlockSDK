// AUTO-GENERATED - do not edit.
/**
 * Flawless Advance: Apollo lunges forward slashing; holding the key charges each strike, and
 * releasing it in the perfect window empowers it.
 */
declare class ability_fencer_lunge extends Ability {
	/** Native lunge state. */
	public readonly LungeState: number
	/** Native state start time. */
	public readonly StateStartTime: number
	/** Native remaining casts. */
	public readonly RemainingCasts: number
	/** Native recast end time. */
	public readonly RecastEndTime: number
	/**
	 * Whether a lunge runs: from its wind-up through the strike to the movement recovery after,
	 * which holds the next strike back until it clears.
	 */
	public get IsActive(): boolean
	/** Whether a strike begins, before Apollo can hold its charge. */
	public get IsStrikeStarting(): boolean
	/** Whether Apollo holds a strike charged, its key down. */
	public get IsStrikeHeld(): boolean
	/** Game time the held strike's perfect release window opens; 0 unless a strike is held. */
	public get PerfectWindowStart(): number
	/** How long the perfect release window stays open, in seconds. */
	public get PerfectWindowDuration(): number
	/**
	 * How far a strike carries Apollo into a hit: the length of the slash and the dash before
	 * it, spirit range bonuses applied, as the data scales them.
	 */
	public get Reach(): number
	/** Not while a lunge runs: a press then is its strike, not a new lunge. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A lunge that carries nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
