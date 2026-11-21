// AUTO-GENERATED - do not edit.
/**
 * An orb (`CItemXP`) that a hit claims between {@link AttackableTime} and
 * {@link EndAttackableTime}; its `Name` is its entry in the misc data.
 */
declare class ItemXP extends Entity {
	/**
	 * The orb's entry in the misc data (`scripts/misc.vdata`), found by its subclass id;
	 * `MiscStore.empty` until that arrives, and for a subclass the data lacks.
	 */
	public MiscStore: MiscStore
	/** When the server launched the orb. */
	public readonly TimeLaunch = 0
	/**
	 * When the orb starts taking a claim. The server rolls it at launch between the data's
	 * `m_flInvulDurationMin` and `m_flInvulDurationMax` after {@link TimeLaunch} - the maximum while
	 * `citadel_orb_experiment_staticlifetime` is on, as it is by default: 0.65 s for trooper orbs.
	 */
	public readonly AttackableTime = 0
	/**
	 * When the orb stops taking a claim: {@link AttackableTime} plus {@link LifeTime}, as the server
	 * sets and networks it at launch. Left alone, the orb lingers past it only so that hits judged
	 * inside the window can still reach the server (`citadel_orb_lagcomp_buffer_uncontested`, 0.25 s).
	 */
	public readonly EndAttackableTime = 0
	/** Id of the orb's entry in the misc data, the one {@link MiscStore} is looked up by. */
	public SubclassID: number
	/**
	 * How long the orb stays claimable once it turns attackable, in seconds: the data's
	 * `m_flLifeTime`, which the server adds to {@link AttackableTime} for
	 * {@link EndAttackableTime}.
	 */
	public get LifeTime(): number
	/**
	 * The data's `m_flInvulDuration`, which the server no longer reads: it rolls the orb's
	 * invulnerability between the data's minimum and maximum and networks the result as
	 * {@link AttackableTime}, which is what every timing here reads.
	 */
	public get InvulDuration(): number
	/** The radius of the sphere a bullet has to touch, swept by the bullet's own radius. */
	public get CollisionRadius(): number
	/** Whether a hit judged now claims the orb. */
	public get CanHit(): boolean
	/**
	 * Whether a hit the server judges at `time` (`GameState.RawGameTime` clock) claims the orb:
	 * from {@link AttackableTime} up to, not including, {@link EndAttackableTime}. A bullet is
	 * judged at the time the server rewinds to for that step of its flight, not when the hit
	 * arrives (`citadel_ability_primary_weapon.JudgedFlightTime`). The first hit inside the window
	 * takes the orb 0.17 s (`citadel_orb_lagcomp_buffer_contested`) after its judged time unless
	 * one judged earlier arrives by then; a deny's time counts 0.06 s (`m_flOrbClaimWindow`) later.
	 *
	 * @example
	 * const claims = orb.CanHitAt(GameState.RawGameTime + weapon.JudgedFlightTime(travel))
	 */
	public CanHitAt(time: number): boolean
	/**
	 * Whether {@link AttackableTime} has come; unlike {@link CanHit}, it stays true past
	 * {@link EndAttackableTime}.
	 */
	public get CanAttack(): boolean
	/** Seconds left until the orb stops taking a claim. */
	public get RemainingTime(): number
	/** Seconds until the orb turns attackable; a hit judged earlier claims nothing. */
	public get InvulRemainingTime(): number
	/**
	 * How fast the orb moves, in units per second, from its networked moves in either phase. A
	 * launched orb still rises for over a second after it turns attackable, and the client keeps
	 * no velocity for it: the draw stream carries zero.
	 */
	public get Velocity(): Vector3
}
