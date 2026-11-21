// AUTO-GENERATED - do not edit.
/**
 * Threadsap: Baba weaves a thread that follows her crosshair and bursts on what it reaches. The
 * thread turns its flight parallel to the view direction, not onto the aim ray nor at what the
 * crosshair meets, at up to `ProjectileTurnRate` degrees a second. It flies at its projectile
 * speed until it has covered the cast range, then hangs. A wall does not end it but turns it
 * aside along the wall, slowed. {@link ExplodeTime} after it left, the whole of its path bursts
 * {@link ExplodeRadius} around it.
 */
declare class ability_baba_bubbling_brew extends SteeredAbility {
	/** Threadsap's thread starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** Phase of the current Threadsap cast, from weaving the thread to its burst. */
	public readonly State: EBabaBubblingBrewState
	/** Whether the thread is out, from its weaving to its burst. */
	public get IsSteering(): boolean
	/**
	 * Whether Baba holds spirit she stole (`modifier_baba_bubbling_brew_buff`), her bullets
	 * carrying Threadsap's spirit damage.
	 */
	public get HoldsStolenSpirit(): boolean
	/**
	 * Threadsap's spirit damage on one of Baba's bullets while she holds stolen spirit
	 * ({@link HoldsStolenSpirit}), as it lands on `target`: `MagicDamagePerBullet` with the spirit
	 * power it scales by, the stolen spirit in it, falling off over the bullet's `travel` as the
	 * bullet does (`citadel_ability_primary_weapon.GetFalloff`) and no more on the head, through
	 * the target's spirit resistance. 0 while she holds none.
	 */
	public GetBulletProcDamage(target: PlayerPawn, travel: number, _weakPoint: boolean): number
	/** Seconds from the thread leaving to its burst. */
	public get ExplodeTime(): number
	/** How far around its path the thread's burst reaches, with the spirit bonus it scales by. */
	public get ExplodeRadius(): number
	/** The thread while it still flies and turns, before it has covered the cast range. */
	public get SteeredProjectile(): Nullable<Projectile>
	/** Seconds `thread` still flies before it has covered the cast range and hangs. */
	public FlightLeft(thread: Projectile): number
	/**
	 * Down the direction the thread should turn to for `point`, as it turns parallel to the view,
	 * but never more than 45 degrees off its own heading: past that it already turns at full rate,
	 * and a wider view only swings the camera. False when it cannot get there: the point lies
	 * behind it, which a thread that has passed its target leaves, or further round than it can
	 * still turn before its flight ends.
	 */
	public SteerPoint(projectile: Projectile, point: Vector3, camera: Vector3, out: Vector3): boolean
	/**
	 * The corner of the thread's turn: it swings on to the new direction at `ProjectileTurnRate`
	 * degrees a second, an arc of `ProjectileSpeed` over that rate in radius, so it meets the
	 * straight way to `point` that arc's tangent length past `from`.
	 */
	public JoinPoint(from: Vector3, heading: Vector3, point: Vector3, _camera: Vector3, out: Vector3): void
	/** The thread hurts nothing before it bursts: the burst, or the flight there when later. */
	public ImpactDelay(projectile: Projectile, distance: number): number
}
