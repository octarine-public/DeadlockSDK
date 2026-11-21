// AUTO-GENERATED - do not edit.
/**
 * The game's `ABILITY_UPGRADE_BIT_*` flags of an ability's upgrade state.
 * `AbilityUpgradeState.UpgradeInfo` holds them from bit 16 up, and `Ability.UpgradeBits`
 * shifted one bit right, without `ABILITY_UPGRADE_BIT_TRAINED`.
 */
declare const AbilityUpgradeBits: {
	/** Not a flag: -1n, which has every bit set. Nothing in the SDK returns it. */
	INVALID_ABILITY_UPGRADE_BITS: bigint
	/**
	 * 0, so no mask finds it. An ability is not trained while `ABILITY_UPGRADE_BIT_TRAINED` is
	 * clear.
	 */
	ABILITY_UPGRADE_BIT_NOT_TRAINED: bigint
	/** Set once the ability is unlocked; `Ability.Level` is 0 without it. */
	ABILITY_UPGRADE_BIT_TRAINED: bigint
	/**
	 * Applies tier 0 of `AbilityStore.Upgrades`. An item has that tier alone, and with it set the
	 * item is enhanced.
	 */
	ABILITY_UPGRADE_BIT_TIER_1: bigint
	/** Applies tier 1 of `AbilityStore.Upgrades`. */
	ABILITY_UPGRADE_BIT_TIER_2: bigint
	/** Applies tier 2 of `AbilityStore.Upgrades`. */
	ABILITY_UPGRADE_BIT_TIER_3: bigint
	/**
	 * An upgrade bit past the three tiers, outside `ABILITY_UPGRADE_BIT_FULLY_UPGRADED`. Set, it
	 * adds to `Ability.Level` and applies a fourth tier of `AbilityStore.Upgrades` where the data
	 * has one.
	 */
	ABILITY_UPGRADE_BIT_4: bigint
	/**
	 * Set on a corrupted item: bit 6 (64) of `Ability.UpgradeBits`, read by `Ability.IsCorrupted`.
	 * It applies `AbilityStore.CorruptedUpgrades` and adds nothing to `Ability.Level`.
	 */
	ABILITY_UPGRADE_BIT_CORRUPTED: bigint
	/** A mask, not one bit: `ABILITY_UPGRADE_BIT_TRAINED` with the three tiers. */
	ABILITY_UPGRADE_BIT_FULLY_UPGRADED: bigint
	/** A mask, not one bit: the three tiers without `ABILITY_UPGRADE_BIT_TRAINED`. */
	ABILITY_UPGRADE_BIT_CAN_DOWNGRADE: bigint
	/** The low 15 bits: every flag of the table and the bits between them it does not name. */
	ABILITY_UPGRADE_ALL_BITS: bigint
}
type AbilityUpgradeBits = bigint
