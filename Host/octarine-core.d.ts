// AUTO-GENERATED - do not edit.
/** How a hitbox is shaped, matching the model's own declaration. */
type EHitboxShape = EHitboxShape.Box | EHitboxShape.Sphere | EHitboxShape.Capsule
declare namespace EHitboxShape {
	type Box = 0
	type Sphere = 1
	type Capsule = 2
}
/**
 * A loaded model's bones, mesh bounds and hitboxes; an entity's is `Entity.ModelData`. Every
 * method throws once the host has released the model.
 */
interface ModelData {
	/**
	 * Names of the model's bones in the skeleton's order, the order a bone index counts in.
	 * Empty for a model with no meshes.
	 */
	getBoneNames(): string[]
	/**
	 * Radius of the sphere the model gives each bone, in the order of {@link getBoneNames}; 0
	 * for a bone it gives none. Empty for a model with no meshes.
	 */
	getBoneSpheres(): number[]
	/**
	 * Writes the box around all of the model's meshes into `IOBuffer`: its minimum corner at 0
	 * to 2, its maximum at 3 to 5. `Vector3.fromIOBuffer(0)` and `Vector3.fromIOBuffer(3)` read
	 * them.
	 */
	getBounds(): void
	/**
	 * The model's hitbox sets, one per set name: of same-named sets in several meshes the first
	 * is kept. Each call builds the whole answer anew, so keep the result.
	 */
	getHitboxSets(): ModelHitboxSet[]
}
/** One named set of a model's hitboxes, an entry of what `ModelData.getHitboxSets` returns. */
declare interface ModelHitboxSet {
	/** The name the model declares the set under. */
	name: string
	/** The set's hitboxes, in the order the model lists them. */
	hitboxes: ModelHitbox[]
}
/**
 * One hitbox of a model — the damage registration the game hit-tests against, not the physics
 * hull it collides with.
 */
declare interface ModelHitbox {
	/** The name the model declares the hitbox under. */
	name: string
	/**
	 * Name of the bone the hitbox rides, as the hitbox spells it: its case may differ from the
	 * bone's own name in `ModelData.getBoneNames`. {@link boneIndex} is the bone it resolved to.
	 */
	boneName: string
	/** Index into the model's bones, or -1 when the model has no such bone. */
	boneIndex: number
	/** Which damage group a hit here lands in, and so which multiplier it takes. */
	groupId: number
	/**
	 * Box, sphere or capsule, which decides what {@link localMin} and {@link localMax} are: the
	 * opposite corners of a box, the centres of a capsule's two caps, and for a sphere its
	 * centre in `localMin`.
	 */
	shapeType: EHitboxShape
	/** Radius of a sphere or capsule; 0 for a box. */
	radius: number
	/** Whether the hitbox follows only the position of its bone and not the bone's rotation. */
	translationOnly: boolean
	/**
	 * Extents in the bone's own space as `[x, y, z]` — carry these through the live bone
	 * transform. The native side emits a plain array, not a Vector3.
	 */
	localMin: [number, number, number]
	/**
	 * The other end of the shape from {@link localMin}, in the bone's own space as `[x, y, z]`:
	 * the maximum corner of a box, the centre of a capsule's second cap.
	 */
	localMax: [number, number, number]
	/** Extents in the model's bind pose, as `[x, y, z]`. Not where the hitbox is right now. */
	min: [number, number, number]
	/**
	 * Upper corner of the axis-aligned box around the hitbox in the model's bind pose, as
	 * `[x, y, z]`, the radius of a sphere or capsule included. {@link min} is the lower corner.
	 */
	max: [number, number, number]
}
