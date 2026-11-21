// AUTO-GENERATED - do not edit.
/** Return to Shadows: Calico rises hidden and invulnerable, pulsing damage around her. */
declare class ability_nano_shadow_pulse extends Ability {
	/** Whether Nano currently carries Shadow Pulse's hidden invulnerability states. */
	public get IsInvulnerableActive(): boolean
	/** Maximum time Nano remains hidden and invulnerable during Shadow Pulse. */
	public GetInvulnerableDuration(): number
	/** The radius the pulses hit in, spirit range bonuses applied: the data scales it by range. */
	public get AOERadius(): number
	/** The pulses reach as far as their radius around Calico. */
	public get Reach(): number
	/** A pulse without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
