// AUTO-GENERATED - do not edit.
/**
 * The match's game rules (`CCitadelGameRulesProxy`): its stage, mode, clock and pauses, the
 * minimap bounds and the Rift's timings. `GameRules` holds the one that exists.
 */
declare class CGameRules extends Entity {
	/**
	 * `GameState.RawGameTime`, copied here on every server tick: the game clock in seconds, which
	 * stands still during a pause.
	 */
	public RawGameTime: number
	/**
	 * The match's id, as `GameCoordinator.CommendPlayerFromMatch` and `ReportPlayerFromMatch`
	 * take it; 0n until the server sends it.
	 */
	public readonly MatchID: bigint
	/** Whether the match is paused; `GameState.RawGameTime` stands still while it is. */
	public readonly IsPaused: boolean
	/** Server ticks the match has spent paused; `GameState.CurrentGameTick` leaves them out. */
	public readonly TotalPausedTicks: number
	/**
	 * The server tick the pause began at. While {@link IsPaused}, `GameState.CurrentGameTick`
	 * stands at this tick less {@link TotalPausedTicks}.
	 */
	public readonly PauseStartTick: number
	/**
	 * The kind of match: unranked, ranked, a private lobby, a bot match and others; `Invalid`
	 * until the server sends it.
	 */
	public readonly MatchMode: ECitadelMatchMode
	/**
	 * The stage the match is at, such as `HeroSelection`, `GameInProgress` or `PostGame`;
	 * `Invalid` until the server sends it.
	 */
	public readonly GameState: EGameState
	/** The game mode, such as `Normal` or `StreetBrawl`; `Invalid` until the server sends it. */
	public readonly GameMode: ECitadelGameMode
	/** The number of spectators the server counts for the match. */
	public readonly SpectatorCount: number
	/**
	 * When the match clock started, in seconds on the `GameState.RawGameTime` clock;
	 * {@link GameTime} counts from it.
	 */
	public readonly GameStartTime: number
	/** The team the server names for the pause; `Team.None` until it sends one. */
	public readonly PauseTeam: Team
	/** Whether the server flags the match as safe to abandon. */
	public readonly MatchSafeToAbandon: boolean
	/** How many Rejuvenators Amber has taken this match; {@link RejuvCount} reads either side. */
	public readonly AmberRejuvCount: number
	/** How many Rejuvenators Sapphire has taken this match. */
	public readonly SapphireRejuvCount: number
	/**
	 * Raw game time the open Rift gives itself up at, or the engine's largest float while it has
	 * no deadline.
	 */
	public readonly KothGiveUpTime: number
	/** Raw game time the Rift that stands now opened at; 0 between Rifts. */
	public readonly KothCashInStartedTime: number
	/** Raw game time the last Rift was cashed in at; 0 while none has been. */
	public readonly KothScoringTime: number
	/**
	 * The low corner of the area the minimap covers, as the game rules network it; invalid until
	 * they do. A change emits `MinimapSizeChanged`.
	 */
	public readonly MinimapMins: Vector3
	/**
	 * The high corner of the area the minimap covers, as the game rules network it; invalid until
	 * they do. A change emits `MinimapSizeChanged`.
	 */
	public readonly MinimapMaxs: Vector3
	/**
	 * The entity the game rules name as Amber's tower; `undefined` when they name none or that
	 * entity is not on this client.
	 */
	public get TowerAmber(): Nullable<Entity>
	/**
	 * The entity the game rules name as Sapphire's tower; `undefined` when they name none or that
	 * entity is not on this client.
	 */
	public get TowerSapphire(): Nullable<Entity>
	/** Always true; {@link IsGameInProgress} tells whether the match is running. */
	public get IsInGame(): boolean
	/**
	 * How many Rejuvenators a side has taken this match. The count moves the moment the drop is
	 * picked up, which is the same moment that side's dead are put back on their feet.
	 *
	 * @example
	 * const taken = GameRules?.RejuvCount(Team.Amber) ?? 0
	 */
	public RejuvCount(team: Team): number
	/**
	 * Whether the match itself is running, as opposed to a hero select, an intro or a scoreboard.
	 * Read it here rather than comparing {@link GameState} outside: EGameState is a const enum and
	 * leaves nothing behind for a consumer bundle to compare against.
	 */
	public get IsGameInProgress(): boolean
	/**
	 * Seconds on the match clock: {@link RawGameTime} less {@link GameStartTime}, standing still
	 * during a pause.
	 */
	public get GameTime(): number
}
