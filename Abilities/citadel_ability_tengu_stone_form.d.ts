// AUTO-GENERATED - do not edit.
/** Stone Form: Ivy turns to stone, invulnerable, and slams down stunning what stands around her. */
declare class citadel_ability_tengu_stone_form extends Ability {
	/** When the current Stone Form began. */
	public readonly StartTime = 0
	/** When Ivy landed in stone form. */
	public readonly LandedTime = 0
	/** Whether Ivy has landed in stone form. */
	public readonly Landed = false
	/** Whether Ivy is falling in stone form. */
	public readonly Falling = false
	/** Whether Ivy is in stone form; {@link IsActive} adds the wind-up. */
	public readonly InStoneForm = false
	/** The height Stone Form started at. */
	public readonly StartHeight = 0
	/** Whether Tengu currently carries Stone Form's invulnerability states. */
	public get IsInvulnerableActive(): boolean
	/** Whether Ivy turns to stone: from the wind-up until she leaves stone form. */
	public get IsActive(): boolean
	/** Stone Form's cast, lift, fall and landing window, capped by its maximum duration. */
	public GetInvulnerableDuration(): number
	/**
	 * How near the falling stone a hero in the air is taken hold of and dragged down under it, in
	 * world units, measured from Ivy to their hull (`m_flCollideRadius`).
	 */
	public get CollideRadius(): number
	/** The radius around Ivy the slam stuns in, spirit range bonuses applied. */
	public get AOERadius(): number
	/** The slam reaches as far as its radius around Ivy. */
	public get Reach(): number
	/** Not while Ivy turns to stone: a press then starts no new cast. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A slam without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
