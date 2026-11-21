// AUTO-GENERATED - do not edit.
/**
 * The kind of damage a hit deals, which decides what of the target answers it, by the value
 * `UnitDamage.CitadelType` reports for it.
 */
declare enum EDamageType {
	/**
	 * Guns' bullets and the abilities their data scales by weapon damage; bullet resistance
	 * takes it.
	 */
	Bullet = 1,
	/** Spirit resistance takes it. */
	Spirit = 2,
	/** No resistance takes it: Venator's blessed stakes, his grenade's burn and his execute. */
	Pure = 7
}
