// AUTO-GENERATED - do not edit.
/**
 * Seismic Impact: Abrams leaps high into the air, and a press of the key while he rises sends
 * him crashing down, damaging and stunning what the landing hits.
 */
declare class citadel_ability_bull_leap extends Ability {
	/** Whether Abrams is in the leap, from take-off until he lands. */
	public get IsActive(): boolean
	/**
	 * Whether a press of the key now sends Abrams crashing down: the leap of a completed cast
	 * still rises, no crash has begun, and nothing keeps him from casting.
	 */
	public get CanDive(): boolean
	/**
	 * How near the crash a hero in the air is taken hold of and carried down with it, in world
	 * units, measured from Abrams to their hull (`m_flCollideRadius`).
	 */
	public get CollideRadius(): number
	/** The radius the landing hits in, spirit radius bonuses applied. */
	public get AOERadius(): number
	/**
	 * Whether a crash from where Abrams is now lands on `target`: he is at least `ImpactHeight`
	 * above it and it stands within the landing's radius around him.
	 */
	public DiveHits(target: Entity): boolean
	/** Not during the leap: a press then is the crash. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
