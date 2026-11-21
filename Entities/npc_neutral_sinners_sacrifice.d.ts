// AUTO-GENERATED - do not edit.
/**
 * A Sinner's Sacrifice. Down to its last block it runs a jackpot cycle on the match clock: every
 * cycle opens with a hit window, and a finishing melee that lands inside one pays buffs on top of
 * the souls — four for a heavy melee, one for a light. The cycle is shifted by
 * {@link RandomTimePhase} and stretched by {@link MiniGameTimeScale}, both rolled when the machine
 * spawns, and those two with the clock are all the server reads to judge a finishing hit.
 *
 * @example
 * for (const vault of EntityManager.GetEntitiesByClass(npc_neutral_sinners_sacrifice)) {
 * 	if (vault.IsInHitWindow) {
 * 		console.log("jackpot open for", vault.HitWindow - vault.MiniGameTime, "s")
 * 	}
 * }
 */
declare class npc_neutral_sinners_sacrifice extends npc_trooper_neutral {
	/** Where the machine stands: untouched, hit, down to its last block, or how it was finished. */
	public readonly VaultState: ENPCVaultState
	/** Seconds the jackpot cycle is shifted by on the match clock, rolled when the machine spawns. */
	public readonly RandomTimePhase: number
	/**
	 * What the jackpot cycle and its hit window are stretched by: 1 on a slow machine, under 1 on a
	 * fast one, which runs the same cycle 1.65 times as quickly.
	 */
	public readonly MiniGameTimeScale: number
	/** Whether the jackpot cycle runs: the machine stands on its last block. */
	public get IsMiniGameRunning(): boolean
	/** Whether this machine rolled the fast cycle. */
	public get IsFastMiniGame(): boolean
	/** How long one jackpot cycle lasts, in seconds. */
	public get MiniGamePeriod(): number
	/** How long the hit window at the start of every cycle stays open, in seconds. */
	public get HitWindow(): number
	/** Seconds since the current cycle began, which is when its hit window opened. */
	public get MiniGameTime(): number
	/** Whether a finishing hit landing now would be a jackpot. */
	public get IsInHitWindow(): boolean
	/**
	 * Where the cycle stands at a moment of the match clock ({@link CGameRules.GameTime}), in
	 * seconds since that cycle began. The server reads a finishing hit as a jackpot when this is
	 * within {@link HitWindow} on the tick the hit lands.
	 *
	 * @example
	 * const landing = (GameRules?.GameTime ?? 0) + windup
	 * const jackpot = vault.MiniGameTimeAt(landing) <= vault.HitWindow
	 */
	public MiniGameTimeAt(clock: number): number
}
