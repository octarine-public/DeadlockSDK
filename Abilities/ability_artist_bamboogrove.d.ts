// AUTO-GENERATED - do not edit.
/**
 * Abstract Landscape: channels a circular display of ink that blocks vision and grants allies
 * inside spirit power. Enemies inside are revealed; one leaving it takes spirit damage and is
 * silenced and slowed, destroying the ink. The display stands `ForwardOffset` ahead of Violet,
 * the way she faces.
 */
declare class ability_artist_bamboogrove extends Ability {
	/** Whether the ink display stands. */
	public readonly IsActive: boolean
	/** The display's spirit power, Violet's own while it stands wherever she is. */
	public get SpiritBonus(): number
	/** How far ahead of Violet the display stands, in world units. */
	public get ForwardOffset(): number
	/** The radius of the display, with the spirit bonus the data scales it by. */
	public get AOERadius(): number
	/** The display reaches its radius past where it stands ahead of Violet. */
	public get Reach(): number
	/**
	 * Whether `unit` would stand inside a display raised now with Violet facing `toward`: its
	 * centre `ForwardOffset` ahead of her along that heading on the ground plane, on her where
	 * `toward` is where she stands.
	 */
	public Holds(toward: Vector3, unit: Entity): boolean
	/** Not while the display is raised: a press then is refused. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A display without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
