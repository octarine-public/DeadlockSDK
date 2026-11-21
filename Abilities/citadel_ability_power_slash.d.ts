// AUTO-GENERATED - do not edit.
/**
 * Power Slash: Yamato charges a long slash ahead of her; a press of the key while it charges
 * releases it early, at the power charged so far.
 */
declare class citadel_ability_power_slash extends Ability {
	/** The slash starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** Whether the slash charges: its wind-up, from the start of the charge until it is released. */
	public get IsCharging(): boolean
	/** Seconds the slash has charged; 0 outside a charge. */
	public get ChargeTime(): number
	/** Seconds a charge takes to full power: its wind-up, shortened in shadow form. */
	public get ChargeDuration(): number
	/** How far ahead of Yamato the slash cuts, spirit range bonuses applied. */
	public get Reach(): number
	/** A slash without a length reaches nothing. */
	public CanHit(target: Entity): boolean
}
