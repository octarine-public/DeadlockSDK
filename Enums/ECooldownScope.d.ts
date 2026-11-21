// AUTO-GENERATED - do not edit.
/** Which cooldowns an item's cooldown effect changes. */
declare enum ECooldownScope {
	/** Every ability's, by a percentage */
	All = 0,
	/** The imbued ability's, by a percentage */
	Imbued = 1,
	/** The recharge of abilities with charges, by a percentage */
	Charged = 2,
	/** The lockout between two charges, by a percentage */
	BetweenCharges = 3,
	/** The ultimate's, by a percentage */
	Ultimate = 4,
	/** Charges added to every ability that has charges */
	BonusCharges = 5
}
