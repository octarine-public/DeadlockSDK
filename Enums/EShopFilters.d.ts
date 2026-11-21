// AUTO-GENERATED - do not edit.
/** The bits the shop's filters stand for, by the names the game gives them in its item data. */
declare const EShopFilters: {
	/** What `AbilityStore.AdditionalShopFilters` is for an item whose data adds no filter. */
	EShopFilterNone: bigint
	EShopFilterWeaponDamage: bigint
	EShopFilterWeaponAmmo: bigint
	EShopFilterWeaponFireRate: bigint
	EShopFilterWeaponBulletVelocity: bigint
	/** "Range" in the shop, the word it uses for `EShopFilterSpiritRange` as well. */
	EShopFilterWeaponRange: bigint
	EShopFilterMelee: bigint
	EShopFilterPhysicalAdditionalDamage: bigint
	/** "Spirit Power" in the shop; its "Spirit Damage" is `EShopFilterSpiritAdditionalDamage`. */
	EShopFilterSpiritDamage: bigint
	EShopFilterSpiritCooldownAndCharges: bigint
	EShopFilterSpiritDuration: bigint
	/** "Range" in the shop, the word it uses for `EShopFilterWeaponRange` as well. */
	EShopFilterSpiritRange: bigint
	/** "Spirit Damage" in the shop. */
	EShopFilterSpiritAdditionalDamage: bigint
	/** "Health % Damage" in the shop. */
	EShopFilterSpiritAdditionalDamagePct: bigint
	EShopFilterHP: bigint
	EShopFilterRegen: bigint
	EShopFilterOutOfCombatRegen: bigint
	EShopFilterBarrier: bigint
	EShopFilterHealing: bigint
	EShopFilterLifesteal: bigint
	EShopFilterPhysicalResist: bigint
	EShopFilterSpiritResist: bigint
	EShopFilterMeleeResist: bigint
	EShopFilterDebuffResist: bigint
	EShopFilterSlowResist: bigint
	EShopFilterAntiCC: bigint
	EShopFilterInvulnerability: bigint
	EShopFilterMoveSpeed: bigint
	EShopFilterSprint: bigint
	EShopFilterStamina: bigint
	EShopFilterTeleport: bigint
	EShopFilterStealth: bigint
	/** "Physical Vulnerability" in the shop. */
	EShopFilterBulletVuln: bigint
	EShopFilterSpiritVuln: bigint
	EShopFilterAntiHeal: bigint
	EShopFilterBulletDamageReduction: bigint
	EShopFilterFireRateReduction: bigint
	EShopFilterSpiritDamageReduction: bigint
	/** "Slow" in the shop. */
	EShopFilterMobilityReduction: bigint
	EShopFilterStatus_Stun: bigint
	EShopFilterStatus_Disarm: bigint
	EShopFilterStatus_Silence: bigint
	EShopFilterStatus_Curse: bigint
	EShopFilterStatus_Immobilize: bigint
	/** `shopFilterNames` calls it "Grounding". */
	EShopFilterStatus_Grounded: bigint
	/** "Jump/Dash/Slide" in the shop. */
	EShopFilterJumpAndDash: bigint
	EShopFilterActive: bigint
	EShopFilterImbue: bigint
	/** Not in `ShopFilterLabels`, so `shopFilterNames` never names it. */
	EShopFilterPopular: bigint
	EShopFilterItemWeapon: bigint
	EShopFilterItemSpirit: bigint
	EShopFilterItemVitality: bigint
}
type EShopFilters = bigint
/**
 * What the shop calls each filter, in the order the shop lists them. Grounding has no button of
 * its own, yet items are filed under it, so it sits with the other status effects.
 */
declare const ShopFilterLabels: readonly [EShopFilters, string][]
/**
 * The shop's own words for the filters among `filters`, in the order the shop lists them. It
 * calls weapon range and spirit range both "Range": with both among `filters` the name comes
 * twice.
 *
 * @example
 * shopFilterNames(store.AdditionalShopFilters).join(" ")
 */
declare function shopFilterNames(filters: EShopFilters): string[]
