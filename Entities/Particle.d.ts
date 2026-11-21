// AUTO-GENERATED - do not edit.
/**
 * A value a particle control point takes, as a vector: a number or boolean is x (`true` as 1),
 * an entity its position at the time it is set, a color its r, g and b, and an array or a
 * `Vector2` fills x, y and z in order, 0 where it runs out.
 */
type ControlPoint = boolean | number | Entity | Vector3 | Vector2 | Color | number[]
/** A control point index and the value to set it to. */
type ControlPointParam = [number, ControlPoint]
/**
 * What a particle needs of the manager that made it: the book it is kept in, and the batch that
 * hands its changes to the game.
 */
interface IParticleOwner {
	/** The owner's particles not yet destroyed, by the key each was made under. */
	readonly AllParticles: Map<any, Particle>
}
/**
 * A particle a script draws on an entity. What is set here is handed to the game by its manager
 * ({@link ParticlesSDK}) inside one main-thread session a frame, so a change shows from the next
 * frame on. A particle the game cannot create (a path it does not know) stays invalid and is not
 * tried again.
 */
declare class Particle {
	/** The manager that made the particle and hands its changes to the game. */
	public readonly Parent: IParticleOwner
	/** The key the manager keeps the particle under. */
	public readonly Key: any
	/** The particle system it plays, by its `.vpcf` resource path. */
	public readonly Path: string
	/** Where the particle sits on {@link AttachedTo}, and whether it follows it. */
	public readonly Attachment: ParticleAttachment
	/** The entity the particle is created on. */
	public readonly AttachedTo: Entity
	/** The control points as last set, by index. */
	public readonly ControlPoints: Map<number, Vector3>
	/** Whether the game holds the particle. */
	public get IsValid(): boolean
	/** Whether {@link Destroy} was called. */
	public get IsDestroyed(): boolean
	/**
	 * Sets control point `id` to `param`, turned into a vector as {@link ControlPoint} describes.
	 * Changes nothing when the point already holds that vector, after {@link Destroy}, or once the
	 * game has failed to create the particle.
	 */
	public SetControlPoint(id: number, param: ControlPoint): void
	/**
	 * Sets several control points, each an `[id, value]` pair as {@link SetControlPoint} takes it.
	 * @example
	 * particle.SetControlPoints([1, Color.Red], [2, 0.5], [3, hero])
	 */
	public SetControlPoints(...controlPoints: ControlPointParam[]): void
	/** Removes the particle from the game and from its manager. */
	public Destroy(): void
}
