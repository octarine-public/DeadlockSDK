// AUTO-GENERATED - do not edit.
/**
 * An item whose effect covers an area - an aura around its owner, a wave out of it, a pull where
 * it lands: `Catches` says whether a unit stands in it, by the radius its data gives.
 */
declare abstract class AreaItem extends Item {
	/** How far the area reaches from its centre, in world units. */
	public abstract get Radius(): number
	/** Whether `unit` stands in the area put down at `center`, its owner's feet by default. */
	public Catches(unit: Entity, center?: Vector3): boolean
}
