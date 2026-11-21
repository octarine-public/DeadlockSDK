// AUTO-GENERATED - do not edit.
/**
 * Mystic Shot: the first bullet its owner lands once it is off cooldown carries
 * `ProcBonusMagicDamage` spirit damage on top - whatever the distance, and no more on the head.
 */
declare class upgrade_crackshot extends citadel_item_empty {
	/**
	 * The spirit damage the next bullet carries into `target` while the item is off cooldown, as
	 * it lands - through the target's spirit resistance; 0 while it recharges.
	 */
	public GetBulletProcDamage(target: PlayerPawn, _travel: number, _weakPoint: boolean): number
}
