// AUTO-GENERATED - do not edit.
/**
 * A projectile an item or ability sends out — Silence Wave's wave travels as one, and the homing
 * {@link TrackedProjectile} builds on it. The ability id it carries names the ability that fired
 * it, and the wrapper resolves that to the {@link Ability} the projectile's owner holds. Its
 * `Velocity` follows its own moves (see {@link UpdateVelocity}): only the velocity it set out with
 * is networked.
 */
declare class Projectile extends Entity {
	/** The ability that fired it, resolved off the subclass id it carries. */
	public Ability: Nullable<Ability>
	/** How fast it flies, in units per second. */
	public readonly ProjectileSpeed: number
	/** How long it lives at most, in seconds, after which it dissolves wherever it is. */
	public readonly MaxLifetime: number
	/**
	 * The velocity it set out with, in units per second. A straight flier keeps it for its
	 * whole life; a homing one steers away from it the moment its target moves.
	 */
	public readonly InitialVelocity: Vector3
	/** How wide its hit reads, in world units. */
	public readonly ParticleRadius: number
	/**
	 * Takes its velocity from its own moves, one server tick of `dt` seconds at a time: until it
	 * has moved, the velocity it set out with; then its last move over the time it took. The
	 * networked position changes on most ticks, not all, so a tick that brings none keeps the
	 * velocity it had, where a delta over that tick alone would read it standing still.
	 */
	public UpdateVelocity(dt: number): void
}
/** Every projectile alive, the homing ones included. */
declare const Projectiles: Projectile[]
