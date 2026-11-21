// AUTO-GENERATED - do not edit.
/**
 * Last Stand: after a wind-up Warden drains the health of the enemies in front of him, within a
 * radius, while resisting damage.
 */
declare class ability_warden_riot_protocol extends Ability {
	/** Whether the drain runs, from the end of the wind-up until it expires. */
	public get IsActive(): boolean
	/** The radius around Warden the drain reaches, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** The drain reaches as far as its radius around Warden. */
	public get Reach(): number
	/** A drain without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
