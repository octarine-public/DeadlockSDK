// AUTO-GENERATED - do not edit.
/**
 * Jar of Dead: Graves lobs a jar that breaks on the first unit or ground it meets and lets out
 * four Deadheads, skulls that look for the enemies around it, dash at them and bite them again
 * and again until they expire. The jar is a bullet under gravity: it leaves her left hand, about
 * 32 units ahead of her and 100 above her feet, along her view yaw, `VerticalAimBias` degrees
 * above her view pitch. Its charges come back from the deaths it collects, not with time alone.
 */
declare class ability_necro_hauntingskull extends Ability {
	/** How far around where the jar breaks the Deadheads look for an enemy, in world units. */
	public get SearchRadius(): number
	/** Degrees above the view pitch the jar leaves at. */
	public get VerticalAimBias(): number
	/** The pull on the jar in flight, in world units a second squared. */
	public get Gravity(): number
	/** How far the jar carries over flat ground at its best angle, in world units. */
	public get ThrowRange(): number
	/** The jar reaches what stands within its search radius of where it can land. */
	public get Reach(): number
	/** The view pitch, in degrees, of the throw that carries the jar farthest. */
	public get FarthestPitch(): number
	/**
	 * The view pitch, in degrees, that lands a jar thrown now toward `to` on it, along its low arc
	 * from where it leaves Graves' hand; `NaN` where no throw reaches it. The view yaw is the one
	 * from Graves to `to`.
	 */
	public ThrowPitch(to: Vector3): number
	/** A jar that flies nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
	/**
	 * Only with a jar left: the data gives its charges back conditionally, not on a recharge
	 * alone, so a spent jar can read as ready with nothing to throw.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
