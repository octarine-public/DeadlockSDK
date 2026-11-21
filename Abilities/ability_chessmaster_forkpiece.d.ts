// AUTO-GENERATED - do not edit.
/**
 * Rook Battery: a pair of rooks that slide forward, reflect off walls, and damage and
 * immobilize what they pass. While they are out, `ability_chessmaster_forkpiece_trigger` takes
 * this slot and splits them.
 */
declare class ability_chessmaster_forkpiece extends Ability {
	/** Whether the rooks are out. */
	public readonly IsActive: boolean
	/** How far the rooks slide before they stop, with the spirit bonus the data scales it by. */
	public get Reach(): number
	/** Whether `target` is still immune from the last rook hit: rooks pass through it then. */
	public IsImmune(target: Entity): boolean
	/** Rooks that slide nowhere reach nothing, and pass through a target still immune to them. */
	public CanHit(target: Entity): boolean
}
