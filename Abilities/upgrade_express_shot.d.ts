// AUTO-GENERATED - do not edit.
/**
 * The Express Shot item. The game counts its `BonusBulletSpeedPercent` twice, and off cooldown
 * its owner's next shot fires twice with `ProcBaseAttackDamagePercent` more weapon damage, the
 * first firing `ProcBulletVelocity` percent faster still.
 */
declare class upgrade_express_shot extends citadel_item_empty {
	/**
	 * The item's bullet velocity percent the game counts a second time, and while it is off
	 * cooldown the proc's `ProcBulletVelocity` on top.
	 */
	public get BulletSpeedBonus(): number
	/**
	 * What the proc adds to its owner's shot at `target`, as it lands through the target's bullet
	 * resistance: the gun fires the shot twice with `ProcBaseAttackDamagePercent` added to its
	 * weapon damage percents, falling off over `travel` and no more on a weak point, and this is
	 * the two firings less the plain shot `citadel_ability_primary_weapon.GetBulletDamage` counts
	 * already. 0 while the item recharges.
	 * @param hits how many of each firing's bullets land; every one that can
	 * (`citadel_ability_primary_weapon.HitsPerShot`) when left out
	 */
	public GetBulletProcDamage(target: PlayerPawn, travel: number, weakPoint: boolean, hits?: number): number
}
