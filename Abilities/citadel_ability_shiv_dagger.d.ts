// AUTO-GENERATED - do not edit.
/**
 * Shiv's Serrated Knives. A knife deals its hit ({@link GetImpactDamage}) and starts a bleed
 * that ticks spirit damage for every knife it holds ({@link GetBleedDamage}).
 */
declare class citadel_ability_shiv_dagger extends Ability {
	/** Serrated Knives start on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/**
	 * How far a knife flies into a hit: the range of the shot the data throws it as
	 * (`BulletRange`), with no cast range of its own.
	 */
	public get Reach(): number
	/** Seconds between two ticks of the bleed. */
	public get BleedTickRate(): number
	/**
	 * What one knife in the bleed deals a tick before its target answers: `BleedDPSPerStack`
	 * (10 + 0.13 x spirit) for each of the `BleedTickRate` seconds - 11.001 at 7.7 spirit.
	 */
	public get BleedTickDamage(): number
	/**
	 * How many times the bleed ticks after a knife lands on `target`: every `BleedTickRate`
	 * seconds from the hit through its `BleedDuration` (`GetDuration`), the last one on its end
	 * and none for part of a tick - 5 s ticked five times, 6.4 s six.
	 */
	public GetBleedTicks(target?: Nullable<PlayerPawn>): number
	/**
	 * The knives of this ability bleeding `target` now: the stack count of its one bleed
	 * debuff, which every knife adds a stack to and starts over.
	 */
	public GetBleedStacks(target: PlayerPawn): number
	/**
	 * How many ticks the bleed of this ability on `target` has left: one every `BleedTickRate`
	 * seconds through the duration the debuff carries, counted from the knife that last started
	 * it over. A bleed the target lost in the latest server update still counts: a hero the bleed
	 * kills loses the debuff one update before the killing tick and the death arrive, its health
	 * untouched in between.
	 */
	public GetBleedTicksLeft(target: PlayerPawn): number
	/**
	 * What the bleed of this ability already on `target` takes off its health from now on
	 * without another knife, less its barrier: every tick it has left (`GetBleedTicksLeft`) for
	 * all of its knives - 57.16 for the four ticks of a 14.29 knife 1.5 s after it landed, and
	 * the killing tick still on its way through the update that took the debuff off.
	 */
	public GetBleedDamage(target: PlayerPawn): number
	/**
	 * What the knife's hit deals `target` before it answers: its `ImpactDamage` and, while Shiv
	 * is frenzied (`MODIFIER_STATE_SHIV_FRENZIED`), `FullRageCurrentHealthDamagePct` (3.5 +
	 * 0.01 x spirit) percent of the health the target has before the hit - 26.291 of 735 at 7.7
	 * spirit.
	 */
	public GetImpactDamage(target: PlayerPawn): number
	/**
	 * What one more knife takes off `target`'s health from its hit to the last tick of the bleed
	 * it starts over, less the target's barrier: the hit (`GetImpactDamage`) and every tick
	 * (`GetBleedTicks`) for the knives already in the bleed (`GetBleedStacks`) and this one, as
	 * spirit damage under Shiv's outgoing multipliers and through the target's spirit resistance.
	 * Without a target, one knife's bleed.
	 */
	public GetDamage(target: Nullable<PlayerPawn>): number
}
