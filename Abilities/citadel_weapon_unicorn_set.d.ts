// AUTO-GENERATED - do not edit.
/**
 * Carny Life, Celeste's gun: slow bullets that leave above the view and arc down
 * (`ShotElevation`, `BulletGravity`) and bounce off the first surface they meet. A bullet that
 * meets the floor or a wall is re-fired, as a `FireBullets` not fired from the gun, straight at
 * an enemy ahead of its reflected path ({@link RicochetTurnsAt}), pitched at the enemy's centre
 * plus 7.5 degrees (`m_flRicochetPitchAddition`) and the gun's elevation; with no enemy there it
 * reflects on. A turned bullet deals a whole bullet's damage. Bullets do not home in flight.
 */
declare class citadel_weapon_unicorn_set extends citadel_ability_primary_weapon {
	/**
	 * Degrees across the cone ahead of a bounce that a bounced bullet turns at an enemy in
	 * (`m_flRicochetConeAngle`).
	 */
	public get RicochetConeAngle(): number
	/** World units from a bounce, seen from above, within which a bounced bullet turns at an enemy. */
	public get RicochetReach(): number
	/**
	 * Whether a bullet of the gun flying along the unit `direction` into a surface with the unit
	 * normal `normal`, re-fired from `bounce`, turns there at `target`. The bullet reflects off the
	 * surface; seen from above, the target's origin has to lie ahead of the reflected path, no more
	 * than {@link RicochetReach} (14 m) from `bounce`, inside the cone of {@link RicochetConeAngle}
	 * around the reflected heading whose apex lies 240 u behind `bounce`. A bullet reflected
	 * straight up or down has no heading and turns at nothing.
	 * @param bounce where the game re-fires the bullet: where it flew on its last tick short of
	 * the surface, up to a tick's flight back along its path and 2 u off the surface
	 * @returns true only for a turn the game makes: the cone is fitted to bounces off floors and
	 * walls and errs towards no turn; bounces off ceilings are not confirmed
	 * @example
	 * const turns = gun.RicochetTurnsAt(bounce, direction, contactNormal, enemy)
	 */
	public RicochetTurnsAt(bounce: Vector3, direction: Vector3, normal: Vector3, target: Entity): boolean
}
