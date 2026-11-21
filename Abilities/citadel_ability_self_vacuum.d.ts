// AUTO-GENERATED - do not edit.
/**
 * Singularity: Dynamo rises and channels a vortex around himself that pulls in and damages the
 * enemies inside it.
 */
declare class citadel_ability_self_vacuum extends Ability {
	/** Whether the vortex pulls. */
	public get IsActive(): boolean
	/** The radius the vortex pulls in, spirit radius bonuses applied. */
	public get AOERadius(): number
	/** The vortex reaches as far as its radius around Dynamo. */
	public get Reach(): number
	/** Not while the vortex pulls: a press then is no new cast. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A vortex without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
