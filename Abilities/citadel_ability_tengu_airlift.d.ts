// AUTO-GENERATED - do not edit.
/**
 * Air Drop: Ivy takes flight, alone with a bomb or carrying an ally, and a press of the key in
 * flight drops her, blasting what stands around where she lands.
 */
declare class citadel_ability_tengu_airlift extends Ability {
	/**
	 * Air Drop's phase as the server numbers it: 0 outside a flight, 1 while Ivy takes off, 2
	 * once she is up.
	 */
	public readonly FlightState: number
	/** Whether Air Drop is currently acquiring its passenger. */
	public readonly IsGrabbing: boolean
	/** Whether Ivy currently carries her solo Air Drop bomb. */
	public readonly IsHoldingBomb: boolean
	/** Handle of the unit held by Air Drop, or INVALID_HANDLE when none is held. */
	public readonly GrabTargetHandle: number
	/** Current flight speed in world units per second. */
	public readonly CurrentSpeed: number
	/** The buff of the flight Ivy is in, from take-off until she lands; none outside one. */
	public get Flight(): Nullable<Modifier>
	/** Whether Ivy flies alone with her bomb: she holds it and carries nobody. */
	public get IsSolo(): boolean
	/**
	 * Whether a press of the key now drops Ivy with her bomb: she is in a solo flight and nothing
	 * keeps her from casting.
	 */
	public get CanDrop(): boolean
	/** How high over the ground Ivy can fly, in world units (`m_flMaxFlyHeight`). */
	public get MaxFlyHeight(): number
	/** The radius the bomb blasts in where Ivy lands, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** Whether a drop from where Ivy is now blasts `target`: it stands within the blast radius. */
	public DropHits(target: Entity): boolean
	/** Not in flight: a press then is the drop. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
