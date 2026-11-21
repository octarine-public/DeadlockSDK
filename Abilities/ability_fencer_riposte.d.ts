// AUTO-GENERATED - do not edit.
/**
 * Riposte: Apollo takes a guard that deflects an attack; after a deflection its key picks the
 * victim of the counterattack (`ability_fencer_riposte_target_select`) and he dashes to them.
 */
declare class ability_fencer_riposte extends Ability {
	/** Native riposte state. */
	public readonly RiposteState: number
	/** Native state start time. */
	public readonly StateStartTime: number
	/** Native successful riposte time. */
	public readonly SuccessfulRiposteTime: number
	/** Native target handle. */
	public readonly TargetHandle: number
	/**
	 * Whether a deflection landed and its counterattack waits for a victim. The success time
	 * has cleared by then, so it does not tell this.
	 */
	public get IsCounterReady(): boolean
	/** Whether Apollo dashes to the victim of his counterattack. */
	public get IsDashing(): boolean
	/** How far the counterattack's dash carries Apollo, spirit range bonuses applied. */
	public get Reach(): number
	/** Only from its own slot: after a deflection the key picks the counterattack's victim. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A dash that carries nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
