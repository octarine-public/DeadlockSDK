// AUTO-GENERATED - do not edit.
/**
 * The particles a script draws, kept under keys of its choosing. Changes are batched and handed
 * to the game once a frame inside one main-thread session (`MainThread`), in the order they were
 * made, so a script never needs a session of its own. Every particle is removed when the game ends.
 * @example
 * const particles = new ParticlesSDK()
 * particles.AddOrUpdate(
 * 	"ring",
 * 	"particles/ui/ring.vpcf",
 * 	ParticleAttachment.PATTACH_ABSORIGIN_FOLLOW,
 * 	hero,
 * 	[1, Color.Red]
 * )
 */
declare class ParticlesSDK implements IParticleOwner {
	/**
	 * Every `ParticlesSDK` made, in the order made; none leaves it. Their particles are destroyed
	 * when the game ends.
	 */
	public static readonly Instances: ParticlesSDK[]
	/** The particles by the key each was added under; a destroyed one is taken out. */
	public readonly AllParticles: Map<any, Particle>
	/** An empty set of particles, added to {@link Instances}. */
	constructor()
	/**
	 * The particle under the key, made anew when its path, entity or attachment changed, with the
	 * control points set on it.
	 */
	public AddOrUpdate(key: any, path: string, attachment: ParticleAttachment, entity: Entity, ...points: ControlPointParam[]): Particle
	/**
	 * Sets control point `id` of the particle under `key`; nothing when there is none. `point`
	 * becomes a vector: a number or boolean as its x, a color as its r, g and b, an entity as
	 * where it stands at the call.
	 */
	public SetControlPointByKey(key: any, id: number, point: ControlPoint): void
	/** Sets each `[id, point]` pair on the particle under `key`; nothing when there is none. */
	public SetControlPointsByKey(key: any, ...points: ControlPointParam[]): void
	/**
	 * Removes the particle under `key` from the game and from {@link AllParticles}; nothing when
	 * there is none.
	 */
	public DestroyByKey(key: any): void
	/** Removes every particle of this set from the game and from {@link AllParticles}. */
	public DestroyAll(): void
}
