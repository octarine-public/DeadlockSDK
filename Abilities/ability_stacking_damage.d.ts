// AUTO-GENERATED - do not edit.
/** Fixation: each bullet Haze lands on a target adds to the damage her next bullets deal it. */
declare class ability_stacking_damage extends Ability {
	/** How many Fixation stacks `target` carries from this ability. */
	public GetStacks(target: PlayerPawn): number
	/**
	 * Fixation's damage on one of Haze's bullets landing on `target` after flying `travel` world
	 * units, as it lands: the target's stacks ({@link GetStacks}) times `DamageBonusFixedPerStack`
	 * - 0.2, from the third tier 0.31 and 0.00035 x the weapon damage percent -, times the gun's
	 * weak-point multiplier on the head and its falloff, through the target's bullet resistance.
	 */
	public GetBulletProcDamage(target: PlayerPawn, travel: number, weakPoint: boolean): number
}
