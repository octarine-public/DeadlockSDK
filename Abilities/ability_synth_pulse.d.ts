// AUTO-GENERATED - do not edit.
/**
 * Enchanter's Satchel: Pocket hides in his satchel, untouchable, and bursts out damaging the
 * enemies around him.
 */
declare class synth_pulse extends Ability {
	/** Whether Synth currently carries Enchanter's Satchel invulnerability states. */
	public get IsInvulnerableActive(): boolean
	/** Maximum time Synth can remain inside Enchanter's Satchel. */
	public GetInvulnerableDuration(): number
	/** The radius around Pocket the burst damages in, spirit range bonuses applied. */
	public get AOERadius(): number
	/** The burst reaches as far as its radius around Pocket. */
	public get Reach(): number
	/** A burst without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
