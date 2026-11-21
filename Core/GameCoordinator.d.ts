// AUTO-GENERATED - do not edit.
/**
 * The client's half of what the post-game screen says to the Game Coordinator: a commend and a
 * report, for any player of a match by account id. Fire-and-forget: the GC's answer travels on a
 * channel nothing here listens to, so a rate limit, a closed reporting window or a repeated
 * report goes unnoticed.
 */
declare const GameCoordinator: {
	/**
	 * Commends `accountID` for their play in `matchID`, as the post-game screen does. False, and
	 * nothing sent, when either id is 0 or the type is Invalid.
	 * @example
	 * GameCoordinator.CommendPlayerFromMatch(
	 * 	GameRules.MatchID,
	 * 	player.AccountID,
	 * 	ECommendType.Teamwork
	 * )
	 */
	CommendPlayerFromMatch(matchID: bigint, accountID: number, type: ECommendType): boolean
	/**
	 * Reports `accountID` for `matchID` with a reason and an optional comment, which is cut at
	 * the 4096 characters the report popup takes. False, and nothing sent, when either id is 0
	 * or the reason is None.
	 * @example
	 * GameCoordinator.ReportPlayerFromMatch(
	 * 	GameRules.MatchID,
	 * 	player.AccountID,
	 * 	EReportType.Griefing,
	 * 	"Fed mid on purpose"
	 * )
	 */
	ReportPlayerFromMatch(matchID: bigint, accountID: number, type: EReportType, text?: string): boolean
}
