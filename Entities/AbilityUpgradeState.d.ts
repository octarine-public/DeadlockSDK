// AUTO-GENERATED - do not edit.
/**
 * An ability or item a player holds, with its upgrade state, as
 * {@link Player.AbilityUpgradeState} lists them.
 */
interface AbilityUpgradeState {
	/** The data id (`AbilityStore.SubclassID`) of the ability or item; -1 when there is none. */
	get ItemID(): number
	/**
	 * The packed upgrade state, laid out as an ability's own: bit 16 set once it is unlocked, one
	 * bit from 17 up per upgrade bought, bit 23 on a corrupted item. 1 when the entry has none.
	 */
	get UpgradeInfo(): bigint
}
