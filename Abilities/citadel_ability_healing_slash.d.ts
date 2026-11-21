// AUTO-GENERATED - do not edit.
/** Crimson Slash: Yamato slashes in front of her, damaging the enemies hit and healing off them. */
declare class citadel_ability_healing_slash extends Ability {
	/** The radius around Yamato the slash hits in, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** Degrees either side of Yamato's look the slash takes anyone in (`m_flMaxAttackAngle`). */
	public get MaxAttackAngle(): number
	/** The slash reaches as far as its radius from Yamato. */
	public get Reach(): number
	/** A slash without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
