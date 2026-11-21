// AUTO-GENERATED - do not edit.
/**
 * A piece Solomon has on the board; {@link PieceType} says which. Solomon's Move Piece
 * (`ability_chessmaster_movechesspiece`) sends it to a tile of the board's grid.
 */
declare class npc_chess_piece extends npc_base {
	/** Handle of the ability that put the piece on the board. */
	public readonly AbilityHandle: number
	/**
	 * The game's own pickup state of the piece. A move sent with one alt-fire press leaves it
	 * Idle throughout; {@link IsMoving} is what tells a piece on its way.
	 */
	public readonly PieceState: EChessPieceState
	/** Which piece this is. */
	public readonly PieceType: EChessPieceType
	/** The ability that put the piece on the board. */
	public get Ability(): Nullable<Ability>
	/**
	 * Whether the piece is black. A black piece only ever stands on tiles whose grid coordinates
	 * sum to an even number, a white one on the odd ones.
	 */
	public get IsBlack(): boolean
	/** Whether the piece is on its way to the tile it was sent to. */
	public get IsMoving(): boolean
	/**
	 * Whether the piece is resting, after its last move or the queen after her drop, and cannot
	 * be moved yet.
	 */
	public get IsOnMoveCooldown(): boolean
}
