// AUTO-GENERATED - do not edit.
/**
 * Venator's crossbow while Ira Domini runs: every bolt is a stake of the ultimate's weapon damage,
 * and a blessed one adds its pure damage and executes a target it leaves on low health.
 */
declare class citadel_weapon_priest_crossbow extends citadel_ability_primary_weapon {
	/** The stakes left to shoot: Ira Domini's `StakeCount` as it starts, none outside it. */
	public get StakesLeft(): number
	/**
	 * Whether the next stake is blessed: every one with Ira Domini's third upgrade, the last one
	 * without it.
	 */
	public get IsNextStakeBlessed(): boolean
	/**
	 * The health at or under which a blessed stake's hit executes `target`: Ira Domini's
	 * `ExecuteThreshold` percent of its maximum health. The game then adds that much and one more
	 * as pure damage.
	 */
	public GetExecuteHealth(target: PlayerPawn): number
	/**
	 * What one stake carries into `target` before it answers - its two `UnitDamage` rows'
	 * `PreDamage` together: Ira Domini's `Damage`, 120 and 1.5 x the owner's weapon damage percent
	 * against `target` (Opening Rounds' 25 above half its health counts: 187.5 at 20 %), and when
	 * `blessed` its `BonusDamage`, both times the crossbow's weak-point multiplier on the head
	 * (1.3), the owner's outgoing multiplier and the incoming damage increases the target wears
	 * (`Ability.GetPreDamage`). A stake does not fall off.
	 * @param blessed whether the stake is blessed, the next one's ({@link IsNextStakeBlessed}) by
	 * default
	 */
	public GetBulletPreDamage(target: PlayerPawn, weakPoint?: boolean, _travel?: number, _hits?: number, blessed?: boolean): number
	/**
	 * What one stake takes off `target`'s health: its `Damage` through the target's bullet
	 * resistance and, when `blessed`, its `BonusDamage` as pure damage, less the target's barrier;
	 * a blessed stake that leaves the target alive at or under {@link GetExecuteHealth} takes all
	 * of its health, unless the target cannot die (`Entity.IsUnkillable`).
	 * @param blessed whether the stake is blessed, the next one's ({@link IsNextStakeBlessed}) by
	 * default
	 * @example
	 * const lethal = crossbow.GetBulletDamage(enemy, true) >= enemy.HP
	 */
	public GetBulletDamage(target: PlayerPawn, weakPoint?: boolean, _travel?: number, _hits?: number, blessed?: boolean): number
}
