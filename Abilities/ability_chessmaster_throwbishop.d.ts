// AUTO-GENERATED - do not edit.
/**
 * Setup Bishop: throws a bishop that stays on the board until recalled. Moving it through
 * enemies damages and slows them, and the tiles diagonal to where it lands arm after its move
 * cooldown.
 */
declare class ability_chessmaster_throwbishop extends Ability {
	/**
	 * Handles of the bishops thrown. A recall leaves a recalled bishop's handle in place, so
	 * resolve each and check the piece is still valid, or count with {@link DeployedPieceCount}.
	 */
	public readonly DeployedPieceHandles: readonly number[]
	/** Whether a bishop is on the board, which turns the button into a recall. */
	public readonly IsActive: boolean
	/** How many bishops stand on the board. */
	public get DeployedPieceCount(): number
	/** How far one move carries a bishop, with the spirit bonus the data scales it by. */
	public get MoveDistance(): number
	/**
	 * How far from its path a moving bishop hits what it passes, with the spirit bonus the data
	 * scales it by.
	 */
	public get ImpactRadius(): number
	/**
	 * Not with every bishop (`MaxPieces`) already out, nor once the recast window has closed and
	 * the recall trigger holds the key: a press then recalls them.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
