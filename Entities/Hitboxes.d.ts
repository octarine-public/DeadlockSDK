// AUTO-GENERATED - do not edit.
/**
 * One hitbox placed in the world, in the pose the entity stands in right now.
 *
 * A box is described by its eight corners, a sphere by its centre and radius, and a capsule by the
 * centres of its two caps and radius — the shapes the model itself declares, rather than one
 * bounding box standing in for all of them.
 */
declare class WorldHitbox {
	/** The bone this hitbox rides, which is what maps it to a body part. */
	public BoneName: string
	/** Which damage group a hit here lands in, and so which multiplier it takes. */
	public GroupID: number
	/** Box, sphere or capsule, as the model declares the hitbox. */
	public Shape: EHitboxShape
	/** Radius of a sphere or capsule, scaled with its bone; 0 for a box. */
	public Radius: number
	/** Centre for a sphere, first cap for a capsule, centre for a box. */
	public readonly Start: Vector3
	/** Second cap of a capsule; equal to Start for a sphere and unused for a box. */
	public readonly End: Vector3
	/**
	 * The eight corners of a box, in the entity's current pose. Empty for other shapes, and only
	 * allocated for a model that actually declares a box.
	 */
	public Corners: Vector3[]
}
