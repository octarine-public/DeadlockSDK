// AUTO-GENERATED - do not edit.
/** Flight: Vindicta lifts off and hovers, and while she flies her bullets deal spirit damage too. */
declare class citadel_ability_hornet_leap extends Ability {
	/** Whether Vindicta flies now, her bullets carrying Flight's spirit damage. */
	public get IsFlying(): boolean
	/**
	 * Flight's spirit damage on one of Vindicta's bullets while she flies, as it lands on
	 * `target`: `MagicDamagePerBullet` with her spirit power, falling off over the bullet's
	 * `travel` exactly as the bullet does (`citadel_ability_primary_weapon.GetFalloff`), through
	 * the target's spirit resistance. 0 while she does not fly.
	 */
	public GetBulletProcDamage(target: PlayerPawn, travel: number, _weakPoint: boolean): number
}
