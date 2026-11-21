// AUTO-GENERATED - do not edit.
/**
 * Ground Strike: Lash dives down along his aim and slams into the ground, the impact rolling
 * out ahead of him in a widening frustum.
 */
declare class citadel_ability_lash_down_strike extends Ability {
	/** Whether Lash is in the strike's dive. */
	public get IsDiving(): boolean
	/**
	 * How near the dive a hero in the air is taken hold of and carried down with it, in world
	 * units, measured from Lash to their hull (`m_flCollideRadius`).
	 */
	public get CollideRadius(): number
	/** The impact's radius around where the dive lands, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** The full opening angle of the impact's damage frustum, in degrees. */
	public get DamageFrustumAngle(): number
	/** How far each side of the aim the damage frustum already reaches where it starts. */
	public get DamageFrustumHalfWidth(): number
	/**
	 * Whether a strike aimed along `aim` from where Lash is now catches `target` in its damage
	 * frustum: the dive, never shallower than `MinAimAngle`, lands where it meets the target's
	 * height, and the frustum opens ahead of that point along the aim out to `AOERadius`.
	 */
	public FrustumHits(target: Entity, aim: QAngle): boolean
	/** Not during the dive: a press then is no new strike. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/**
	 * Whether a strike from where Lash is now can land on `target`: Lash alive, neither stunned
	 * nor silenced, no more than `StompVerticalThreshold` below it, and it within `AOERadius` of
	 * where a dive at the steepest aim, `MinAimAngle`, lands.
	 */
	public CanHit(target: Entity): boolean
}
