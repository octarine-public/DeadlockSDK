// AUTO-GENERATED - do not edit.
/**
 * An item that answers a hit of its owner's abilities with a burst of spirit damage of its own -
 * Mystic Burst, Tankbuster: once its cooldown is ready and the hit deals at least
 * `MinimumDamage`, `Damage` plus `CurrentHealthDamage` percent of the health the hit leaves the
 * target. The burst ignores the target's spirit resistance.
 */
declare abstract class BurstItem extends Item {
	/**
	 * The burst, once the cooldown is ready and `dealt` reaches `MinimumDamage`: `Damage` plus
	 * `CurrentHealthDamage` percent of the health `dealt` leaves `target`; 0 otherwise.
	 */
	public GetProcDamage(dealt: number, target: PlayerPawn): number
}
