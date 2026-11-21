// AUTO-GENERATED - do not edit.
/**
 * Solomon's alternate fire: moves the piece the crosshair last settled on to the tile under the
 * crosshair. A single alt-fire press sends it; the selection itself happens without a press,
 * from where the crosshair rests.
 */
declare class ability_chessmaster_movechesspiece extends Ability {
	/** Handle of the piece an alt-fire press would move, or INVALID_HANDLE when there is none. */
	public readonly SelectedPieceHandle: number
	/** How far the selected piece may be moved, in world units. */
	public readonly CachedMoveDistance: number
	/** The piece an alt-fire press would move. */
	public get SelectedPiece(): Nullable<npc_chess_piece>
	/**
	 * Whether `piece` is a piece on the board that a move can send now: idle on its tile, not on
	 * its way to another, and off its move cooldown.
	 */
	public CanMove(piece: Nullable<Entity>): piece is npc_chess_piece
}
