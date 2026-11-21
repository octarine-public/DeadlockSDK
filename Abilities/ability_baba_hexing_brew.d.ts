// AUTO-GENERATED - do not edit.
/**
 * Baba's Brew. The pot's effect cycles Barrier, Silence, Fire while she brews; once it is ready
 * ({@link IsBrewed}) its throw, `ability_baba_hexing_brew_throw`, holds this slot, primary fire
 * throws the pot and aim-down-sights pauses or resumes the brewing ({@link TogglePause}). The
 * pot flies through heroes and bursts within {@link AOERadius} of where it meets the world,
 * giving the allies there the Barrier or the enemies the Silence or the Fire.
 */
declare class ability_baba_hexing_brew extends Ability {
	/** Effect the brew would apply if thrown now. */
	public readonly BrewEffect: EBabaBrewEffect
	/** Whether brewing is paused, holding {@link BrewEffect} where it is. */
	public readonly IsBrewLocked: boolean
	/** Game time at which brewing was last paused. */
	public readonly BrewLockTime: number
	/** Seconds the brew has spent paused. */
	public readonly BrewPausedTime: number
	/**
	 * How far around where the pot bursts its effect reaches, in world units, spirit radius
	 * applied.
	 */
	public get AOERadius(): number
	/** A pot thrown within the cast range reaches what stands within its burst beyond it. */
	public get Reach(): number
	/**
	 * How far ahead of Baba the pot bursts when she throws it at herself with the alt-cast
	 * (`ability_baba_hexing_brew_throw.Throw`), in world units.
	 */
	public get SelfCastOffset(): number
	/** The throw that stands in for the brew while Baba brews; none without an owner. */
	public get Thrower(): Nullable<ability_baba_hexing_brew_throw>
	/**
	 * Whether the pot is ready to throw: Baba brews, and `BrewTime` has passed, which hands the
	 * brew's slot to the throw.
	 */
	public get IsBrewed(): boolean
	/**
	 * Whether the unpaused brew is in `effect`'s phase with at least `margin` seconds to either
	 * boundary, so a pause sent now still lands on it. Brewing time is the channel's time minus
	 * every pause. Nothing is ready before `BrewTime`; after it the effect cycles Barrier,
	 * Silence, Fire, each phase ending at its own lock time, and starts over once Fire ends. The
	 * server networks {@link BrewEffect} only once the brew is paused or thrown, which is why the
	 * phase is read off the clock.
	 */
	public InEffect(effect: EBabaBrewEffect, margin?: number): boolean
	/**
	 * Pauses brewing, or resumes it, with aim-down-sights as the player's right click does, from
	 * a `CreateMove` listener, and follows the press. Refused unless the pot is brewed
	 * (`IsBrewed`) and while the last press holds the button. Whether it pressed.
	 */
	public TogglePause(cmd: UserCmd): boolean
	/** Not while Baba brews: the brew is paused and thrown with the fire buttons then. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
