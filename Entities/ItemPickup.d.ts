// AUTO-GENERATED - do not edit.
/** A pickup lying in the world (`CCitadelItemPickup`); {@link LootType} says which kind. */
declare class ItemPickup extends Entity {
	/** Which kind of pickup this is; `Invalid` until the server sends it. */
	public readonly LootType: EItemPickupLootType
	/** The pickup's currency value. */
	public readonly CurrencyValue = 0
	/**
	 * Handle of the player the server names as the pickup's target;
	 * `EntityManager.INVALID_HANDLE` when it names none.
	 */
	public readonly TargetPlayer = 16777215
	/** How fast the pickup falls. */
	public readonly FallRate = 0
}
