// AUTO-GENERATED - do not edit.
/**
 * Flow State: drags a brush that keeps travelling forward, leaving a trail that lengthens allies'
 * slides and slows and damages enemies more the further it went; re-activating flicks it forward,
 * ending the ability for spirit damage in a larger area. The brush appears {@link SpawnAhead} in
 * front of Violet and rolls along the ground parallel to the yaw of the view the command carries,
 * unless that is more than {@link MaxTurn} off its heading. The solid world ends it; heroes and
 * troopers do not. Its velocity is not networked: `Velocity` follows its moves.
 */
declare class ability_artist_rollingprojectile extends SteeredAbility {
	/** Whether the brush is out, which turns the button into the flick. */
	public readonly IsActive: boolean
	/** Handle of the brush, or INVALID_HANDLE when there is none. */
	public readonly DeployedProjectileHandle: number
	/** The brush travelling now. */
	public get DeployedProjectile(): Nullable<Projectile>
	/** The brush while the ability holds it out: it follows the view until it ends. */
	public get SteeredProjectile(): Nullable<Projectile>
	/** Seconds the brush travels before its damage stops growing. */
	public get MaxDamageTime(): number
	/** How far forward of the brush the flick bursts, with the spirit bonus the data scales it by. */
	public get ExplosionRadius(): number
	/**
	 * How far from the brush's centre its trail touches what it passes, with the spirit bonus the
	 * data scales it by.
	 */
	public get GroundAuraRadius(): number
	/**
	 * How far a flick at full damage reaches: the brush's travel while its damage grows, and the
	 * burst past it.
	 */
	public get Reach(): number
	/**
	 * How far above the ground the brush's centre rolls: its ground clearance and its trace radius
	 * (`m_flDistanceAboveGround`, `m_flTraceRadius`).
	 */
	public get RideHeight(): number
	/** The tallest step the brush climbs (`m_flClimbHeight`); anything taller ends it. */
	public get ClimbHeight(): number
	/** How far the brush's body reaches past its centre against the world: its trace radius. */
	public get WorldRadius(): number
	/**
	 * The widest turn the brush takes, in radians: a view further off its heading leaves it
	 * rolling straight on.
	 */
	public get MaxTurn(): number
	/**
	 * How far ahead of Violet's origin the brush appears, along the view the cast was made with:
	 * live 115 units, 44 above her, settling onto the ground within 0.15 s. A wall that close ends
	 * it the tick it appears.
	 */
	public get SpawnAhead(): number
	/**
	 * Whether `unit` is still ahead of the brush on its way out from Violet. The flick bursts
	 * forward of the brush, so a unit the brush has passed is behind the burst; false without a
	 * brush out.
	 */
	public HasAhead(unit: Entity): boolean
	/**
	 * Level, down the ground direction from the brush to `point`: the brush turns parallel to the
	 * view's yaw, and only within {@link MaxTurn} of its heading. False for a point straight above
	 * or below it.
	 */
	public SteerPoint(projectile: Projectile, point: Vector3, camera: Vector3, out: Vector3): boolean
	/**
	 * A short run along its heading, 0.08 s of travel and never past `point`: the brush turns to
	 * the view within two or three ticks.
	 */
	public JoinPoint(from: Vector3, heading: Vector3, point: Vector3, _camera: Vector3, out: Vector3): void
	/**
	 * Not while the brush is out: its key is the flick then
	 * (`ability_artist_rollingprojectile_trigger`).
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A brush that travels nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
