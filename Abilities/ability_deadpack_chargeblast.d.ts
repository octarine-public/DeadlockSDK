// AUTO-GENERATED - do not edit.
/**
 * Strix Salvo: a salvo of spirit missiles that lodge in the ground along a line and explode after
 * a delay or on an enemy, marking it. The line's angle is set by holding and dragging.
 */
declare class ability_deadpack_chargeblast extends Ability {
	/** Whether the line is being aimed. */
	public readonly IsTargeting: boolean
	/** Game time at which the launch button was first held. */
	public readonly LaunchHeldStartTime: number
	/** Start of the aimed line. */
	public readonly StartPoint: Vector3
	/** End of the aimed line. */
	public readonly EndPoint: Vector3
	/** Offset of the aim from where the line starts. */
	public readonly AimOffset: Vector3
	/** How far from a missile it homes onto an enemy, with the spirit bonus the data scales it by. */
	public get ExplosionRadius(): number
	/** Whether missiles of this salvo are out, on their way or lodged in the ground. */
	public get HasMissilesOut(): boolean
	/**
	 * Whether the aimed line runs past `target` within `ExplosionRadius` of its hull, on the
	 * ground plane: the missiles lodged along it home onto the target.
	 */
	public LineCovers(target: Entity): boolean
	/** Whether `target` carries the mark of Danny's salvo, waiting for a charged shot to consume it. */
	public HasMarked(target: Entity): boolean
}
