// AUTO-GENERATED - do not edit.
/**
 * An ability whose projectile keeps following its caster's aim after it leaves. The server turns
 * it by the view angles each command carries, not its camera angles, and by the camera position
 * the command carries, each ability by its own law. {@link SteerPoint} answers where the
 * crosshair goes for the projectile to head at a point; what a wall does to it is the ability's
 * own.
 */
declare abstract class SteeredAbility extends Ability {
	/**
	 * The projectile following the aim now: the one that left first while several are out, none
	 * once the last has landed or stopped following.
	 */
	public abstract get SteeredProjectile(): Nullable<Projectile>
	/** Whether a projectile is following the aim now. */
	public get IsSteering(): boolean
	/**
	 * How far the projectile's body reaches past its centre against the world, in world units;
	 * 0 where the data gives it none.
	 */
	public get WorldRadius(): number
	/**
	 * Whether the projectile flies at what the crosshair meets first, so that a crosshair meeting
	 * cover sends it into the cover; false where the crosshair's line or direction steers it,
	 * walls on the way or not.
	 */
	public get FliesAtFirstHit(): boolean
	/**
	 * Where to put the crosshair, seen from `camera`, for `projectile` to head at `point`:
	 * written to `out`. False when no crosshair turns it there. Ask from `CreateMove`, where the
	 * tracer answers.
	 */
	public abstract SteerPoint(projectile: Projectile, point: Vector3, camera: Vector3, out: Vector3): boolean
	/**
	 * Where to move the camera position the command carries when {@link SteerPoint} from the
	 * client's camera answers false: a camera the server accepts, from which the crosshair turns
	 * `projectile` to `point` without meeting `target`, written to `camera`, and the crosshair
	 * seen from there, written to `out`. False when none does, and for every ability the server
	 * does not steer by the command's camera position. Ask from `CreateMove`, where the tracer
	 * answers.
	 */
	public SteerCamera(_projectile: Projectile, _point: Vector3, _target: Entity, _camera: Vector3, _out: Vector3): boolean
	/**
	 * Where a projectile at `from`, flying along the unit `heading`, has settled on its way to
	 * `point` once the crosshair is put where {@link SteerPoint} says: written to `out`. It flies
	 * on while it turns or settles, so its way runs from `from` to `out` and from there to `point`.
	 */
	public abstract JoinPoint(from: Vector3, heading: Vector3, point: Vector3, camera: Vector3, out: Vector3): void
	/**
	 * Seconds from now until `projectile` deals its damage at a point `distance` further along
	 * its way: its flight there.
	 */
	public ImpactDelay(projectile: Projectile, distance: number): number
}
