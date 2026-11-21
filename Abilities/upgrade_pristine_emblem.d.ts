// AUTO-GENERATED - do not edit.
/**
 * The Opening Rounds item. Against a target whose health before the hit is above
 * `EnemyLifeThreshold` percent of its maximum, its `BaseAttackDamagePercentBonus` joins its
 * owner's weapon damage percents, for gun bullets and the abilities that deal weapon damage alike.
 */
declare class upgrade_pristine_emblem extends citadel_item_empty {
	/** `BaseAttackDamagePercentBonus` while `target` is above the threshold, 0 below it. */
	public GetWeaponDamageBonus(target: PlayerPawn): number
}
