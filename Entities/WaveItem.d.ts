// AUTO-GENERATED - do not edit.
/**
 * An item that sends a wave out of its owner - Arctic Blast, Cold Front: the wave catches a unit
 * whose hull it reaches by `Radius` and that stands within `Height` of its owner's feet.
 */
declare class WaveItem extends AreaItem {
	/** How far the wave reaches, with the spirit bonus the data scales it by. */
	public get Radius(): number
	/** How far above or below its owner the wave still catches a unit, in world units. */
	public get Height(): number
	/** Whether the wave going out of its owner now would catch `unit`. */
	public Catches(unit: Entity): boolean
	public CanHit(target: Entity): boolean
}
