// AUTO-GENERATED - do not edit.
/** A per-key cooldown timer backed by the host's high-resolution clock (`hrtime`, in milliseconds). */
declare class Sleeper {
	/**
	 * Sleeps `key` for `ms` milliseconds and returns the absolute wake time.
	 * @example
	 * sleeper.Sleep(500, "ability")
	 */
	public Sleep(ms: number, key: unknown): number
	/**
	 * Milliseconds left until `key` wakes, or `0` if it is not sleeping (expired keys are pruned on read).
	 * @example
	 * const left = sleeper.RemainingSleepTime("ability")
	 */
	public RemainingSleepTime(key: unknown): number
	/**
	 * Absolute wake time stored for `key`, or `0` if none is set.
	 * @example
	 * const wakeAt = sleeper.StartTime("ability")
	 */
	public StartTime(key: unknown): number
	/**
	 * True while `key` is still sleeping.
	 * @example
	 * if (sleeper.Sleeping("ability")) { return }
	 */
	public Sleeping(key: unknown): boolean
	/**
	 * Clears every key and returns `this`.
	 * @example
	 * sleeper.FullReset()
	 */
	public FullReset(): this
	/**
	 * Clears a single `key`.
	 * @example
	 * sleeper.ResetKey("ability")
	 */
	public ResetKey(key: unknown): void
}

/**
 * A `SharedSDK.Sleeper` on the game clock: keys sleep in milliseconds of
 * {@link GameState.RawGameTime}, which stands still during a pause.
 */
declare class GameSleeper extends Sleeper {
}
/**
 * One timer on the game clock, in milliseconds of {@link GameState.RawGameTime}, which stands
 * still during a pause.
 */
declare class TickSleeper {
	/** The length of the last {@link Sleep}, in milliseconds; 0 before the first. */
	public Duration: number
	/**
	 * When the sleep ends, as {@link GameState.RawGameTime} in milliseconds; 0 before the first
	 * {@link Sleep} and after {@link ResetTimer}.
	 */
	public lastSleepTickCount: number
	/** Whether the last {@link Sleep} has not run out yet. */
	public get Sleeping(): boolean
	/** Milliseconds left of the sleep; 0 once it has run out. */
	public get RemainingSleepTime(): number
	/** Sleeps for `duration` milliseconds of game time from now, replacing a running sleep. */
	public Sleep(duration: number): void
	/** Ends the sleep at once; {@link Duration} keeps its value. */
	public ResetTimer(): void
}
