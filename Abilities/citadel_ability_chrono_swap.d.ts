// AUTO-GENERATED - do not edit.
/**
 * Paradoxical Swap: Paradox fires a bubble that, on a hero, swaps the two of them; both travel
 * in the bubble to the other's place.
 */
declare class citadel_ability_chrono_swap extends Ability {
	/** Paradoxical Swap starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/**
	 * Whether Paradox travels in the swap's bubble. The game rejects her other casts and gunfire
	 * until she arrives.
	 */
	public get IsSwapping(): boolean
}
