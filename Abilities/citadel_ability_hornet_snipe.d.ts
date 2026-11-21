// AUTO-GENERATED - do not edit.
/**
 * Assassinate: Vindicta scopes in and fires a long-range shot whose damage grows with the time
 * spent in scope, bonus damage against a low-health enemy and more on a headshot.
 */
declare class citadel_ability_hornet_snipe extends Ability {
	/** Assassinate's shot starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** The game time, in seconds, Vindicta scoped in at; 0 while she is out of scope. */
	public readonly ScopeStartTime = 0
	/**
	 * The game time, in seconds, the recharge of a spent charge began at; `CooldownPercent`
	 * measures from it while no charge is left.
	 */
	public readonly ChargeRechargeStart = 0
	/**
	 * The game time, in seconds, that recharge ends at; `Cooldown` counts down to it while no
	 * charge is left.
	 */
	public readonly ChargeRechargeEnd = 0
	/** Whether Vindicta is scoped in: {@link ScopeStartTime} is set. */
	public get IsInScope(): boolean
	/** Seconds Vindicta has spent in scope; 0 out of it. */
	public get ScopeTime(): number
	/**
	 * The share of its damage a shot fired after `scopeTime` seconds in scope carries: the
	 * minimum charge at once, rising evenly to all of it at the time to full charge.
	 * @example
	 * const charge = snipe.ChargeScaleAt(snipe.ScopeTime)
	 */
	public ChargeScaleAt(scopeTime: number): number
	/**
	 * The damage a shot with `charge` ({@link ChargeScaleAt}) deals `target`, with the headshot
	 * bonus when `headshot` and the low-health bonus when `health` is at most
	 * `LowHealthEnemyThresholdPct` percent of the target's maximum. `health` is the target's
	 * current health unless given.
	 */
	public GetShotDamage(target: PlayerPawn, charge: number, headshot: boolean, health?: number): number
}
