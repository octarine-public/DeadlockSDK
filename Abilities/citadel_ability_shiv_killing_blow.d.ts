// AUTO-GENERATED - do not edit.
/** Shiv's Killing Blow. */
declare class citadel_ability_shiv_killing_blow extends Ability {
	/**
	 * How close the leap has to carry Shiv for the cut to land while he is still in the air, in
	 * world units, from his chest to the target's.
	 */
	public get SlashRadius(): number
	/**
	 * How much further than {@link SlashRadius} the cut still reaches when the leap runs out
	 * short of its target, in world units: a leap that ends within the two together still lands.
	 */
	public get SlashRange(): number
	/** The pace the leap is built around, in world units a second. */
	public get LeapSpeed(): number
	/**
	 * The health at or under which the blow executes `target` outright:
	 * `EnemyHealthPercent` of its maximum health, where the game marks it with
	 * `modifier_killing_blow_glow`; `EnemyHealthPercentBuffer` does not widen it.
	 */
	public GetExecuteHealth(target: PlayerPawn): number
}
