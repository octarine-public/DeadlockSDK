// AUTO-GENERATED - do not edit.
/**
 * Storm Cloud: Seven channels a storm that grows around him and shocks the enemies under it;
 * primary fire during the channel calls down a lightning strike.
 */
declare class citadel_ability_storm_cloud extends Ability {
	/** The radius the storm grows to, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** The storm reaches as far as its full radius around Seven. */
	public get Reach(): number
	/** A storm without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
