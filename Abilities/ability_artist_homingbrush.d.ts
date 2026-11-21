// AUTO-GENERATED - do not edit.
/**
 * Living Ink, Empower: Violet's next shots come to life. Each leaves as an ink projectile at
 * {@link Ability.ProjectileSpeed} instead of a bullet, dealing increased bullet damage and splash
 * spirit damage, and a hit on a hero takes time off her ability and item cooldowns. A shot is
 * pulled onto the aim ray, the line from the command's camera position along its view angles, at
 * its own distance along it, within about 0.4 s. The ray is a line, not the crosshair's hit: a
 * shot follows it past the point the crosshair meets. Touching the world ends it.
 */
declare class ability_artist_homingbrush extends SteeredAbility {
	/**
	 * Handles of the ink projectiles shot; the game leaves the handle of a landed one in the list,
	 * and it no longer resolves to an entity.
	 */
	public readonly DeployedProjectileHandles: readonly number[]
	/** Game time until which the cast keeps the gun from firing. */
	public readonly ShootingLockoutEndTime: number
	/** Empowered shots left; 0 while the gun's next shot is an ordinary bullet. */
	public get InkedShots(): number
	/** Seconds into its flight a shot stops following the aim (`m_flTrackingEndTime`). */
	public get TrackingEndTime(): number
	/**
	 * An inked shot still in flight and still following the aim, the oldest of them: one past
	 * {@link TrackingEndTime} flies on unsteered.
	 */
	public get SteeredProjectile(): Nullable<Projectile>
	/**
	 * The point itself: the line through it draws the shot on to it. False for a point no further
	 * along that line than the shot is, which the line cannot bring it back to.
	 */
	public SteerPoint(projectile: Projectile, point: Vector3, camera: Vector3, out: Vector3): boolean
	/**
	 * The point on the line from `camera` through `point` where `from` falls on it, moved on by
	 * 0.3 s of flight at `ProjectileSpeed`, about the time a shot takes to settle, and kept
	 * between `camera` and `point`.
	 */
	public JoinPoint(from: Vector3, _heading: Vector3, point: Vector3, camera: Vector3, out: Vector3): void
}
