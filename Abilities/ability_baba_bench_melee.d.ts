// AUTO-GENERATED - do not edit.
/**
 * The melee Granny Long Legs puts on Baba's melee button while the ride lasts; no ability key
 * casts it. A one-command tap kicks (`Kick`): wound up for `KickChargeTime`, then a lunge of
 * about 0.14 s to a blow that knocks back a target whose hull stands within `Reach` before her.
 * Held past `HeavyHoldTime` it becomes the ground pound (`Pound`): Baba rises for
 * `PoundChargeTime`, keeping her speed, dives back down and strikes everything within `PoundRadius`
 * of where she lands. The ride goes on through both, and either can be thrown while she brews.
 */
declare class ability_baba_bench_melee extends Ability {
	/** How far the current attack has got. */
	public readonly State: EBabaBenchMeleeState
	/** Which attack is under way. */
	public readonly AttackType: EBabaBenchMeleeAttackType
	/** Game time at which {@link State} last changed. */
	public readonly StateStartTime: number
	/** Game time at which the attack was committed to. */
	public readonly CommitTime: number
	/** Game time at which the attack was triggered. */
	public readonly AttackTriggeredTime: number
	/** Earliest game time for the next kick. */
	public readonly NextLightAttackAllowedTime: number
	/** Earliest game time for the next ground pound. */
	public readonly NextHeavyAttackAllowedTime: number
	/** Direction of the attack's dash. */
	public readonly DashDir: Vector3
	/** Baba's velocity when the dash began. */
	public readonly DashStartVelocity: Vector3
	/** Whether the attack's dive has been applied. */
	public readonly IsDiveApplied: boolean
	/** Whether the attack's impulse has been applied. */
	public readonly IsAttackImpulseApplied: boolean
	/**
	 * Seconds the button has to be held, once a ground pound is allowed, for the attack to become
	 * one; let go sooner and it is the kick.
	 */
	public get HeavyHoldTime(): number
	/** Seconds the kick winds up once committed to, before it lunges. */
	public get KickChargeTime(): number
	/** Seconds the ground pound rises once committed to, before it dives back down. */
	public get PoundChargeTime(): number
	/** Sound event the kick raises the moment it is committed to; everyone near hears it. */
	public get KickSound(): string
	/**
	 * How far the attack reaches, in world units: the melee's own length and the bonus the ride
	 * gives it.
	 */
	public get Reach(): number
	/** Degrees either side of where Baba looks that the kick still meets a target within. */
	public get HalfAngle(): number
	/**
	 * How far around where Baba comes down the ground pound strikes, in world units, to the
	 * hull; 0 without Granny Long Legs.
	 */
	public get PoundRadius(): number
	/**
	 * Seconds from a ground pound's press to its blow on flat ground: the hold that makes the
	 * attack the pound, the rise and the dive.
	 */
	public get PoundTime(): number
	/** Whether a kick or a ground pound is under way, from its charge to the end of its blow. */
	public get IsAttacking(): boolean
	/** Whether the attack under way has become the ground pound. */
	public get IsPounding(): boolean
	/**
	 * Whether a press now kicks: Baba rides Granny Long Legs, can act, has no attack under way
	 * and the kick's own clock has run out.
	 */
	public get CanKick(): boolean
	/**
	 * Whether a hold now pounds: Baba rides Granny Long Legs, can act, has no attack under way
	 * and the ground pound's own clock has run out.
	 */
	public get CanPound(): boolean
	/**
	 * Where a ground pound pressed now comes down, written into `out`: Baba keeps the speed she
	 * rides at through the press, the hold and the rise, and dives straight back down.
	 */
	public PoundLanding(out: Vector3): Vector3
	/**
	 * Kicks with a tap of melee, from a `CreateMove` listener, where Baba looks, and follows the
	 * press. Refused unless a press now kicks (`CanKick`) and while the last press holds the
	 * button. Whether it pressed.
	 */
	public Kick(cmd: UserCmd): boolean
	/**
	 * Whether a ground pound `Pound` pressed still wants melee held: the press on its way while
	 * Baba rides, or the charge it started not yet committed to the pound. A charge the player
	 * started is not one.
	 */
	public get IsHoldingPound(): boolean
	/**
	 * Holds melee for a ground pound, from a `CreateMove` listener, called every tick until it
	 * returns false: the first call presses while a hold now pounds (`CanPound`), and the button
	 * stays down while that press is on its way and through the charge it starts
	 * (`IsHoldingPound`), until the attack commits to the pound - let go sooner and the game
	 * throws the kick. Follows the press. Whether it held the button.
	 */
	public Pound(cmd: UserCmd): boolean
}
