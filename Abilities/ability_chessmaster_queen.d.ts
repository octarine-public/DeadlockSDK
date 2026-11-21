// AUTO-GENERATED - do not edit.
/**
 * Develop Queen: drops a queen on the ground for damage, whose tiles then stun along straight
 * lines. The queen can be moved a limited number of times, repeating the effect where it lands.
 */
declare class ability_chessmaster_queen extends Ability {
	/** Handle of the queen on the board, or INVALID_HANDLE when there is none. */
	public readonly DeployedQueenHandle: number
	/** Moves the queen on the board has left. */
	public readonly RemainingMoves: number
	/** Whether the queen is on the board. */
	public readonly IsActive: boolean
	/** The queen on the board. */
	public get DeployedQueen(): Nullable<npc_chess_piece>
	/** How far one move carries the queen, with the spirit bonus the data scales it by. */
	public get MoveDistance(): number
	/**
	 * Seconds from the queen landing to the first ring of her tiles striking
	 * (`m_flInitialTileDelay`).
	 */
	public get InitialTileDelay(): number
	/** Seconds between one ring of tiles striking and the next one out (`m_flTimeBetweenTiles`). */
	public get TimeBetweenTiles(): number
	/** Not with the queen on the board: a press then recalls her. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
