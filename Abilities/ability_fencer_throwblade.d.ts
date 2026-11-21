// AUTO-GENERATED - do not edit.
/**
 * Disengaging Sigil: Apollo springs away and leaves a sigil behind that strikes the enemies
 * in it.
 */
declare class ability_fencer_throwblade extends Ability {
	/** Native recast end time. */
	public readonly RecastEndTime: number
	/** The radius of the sigil, spirit range bonuses applied, as the data scales it. */
	public get AOERadius(): number
	/** The sigil reaches as far as its radius around where Apollo casts it. */
	public get Reach(): number
	/** A sigil without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
