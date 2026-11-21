// AUTO-GENERATED - do not edit.
/**
 * Soul Exchange: Lady Geist swaps her health percentage with an enemy's, each side left with no
 * less than a floor the ability sets.
 */
declare class ability_health_swap extends Ability {
	/** The health percentage Lady Geist is left with after swapping with `target`. */
	public OwnerHealthAfterSwap(target: Entity): number
	/** The health percentage the enemy she swaps with is left with. */
	public get TargetHealthAfterSwap(): number
}
