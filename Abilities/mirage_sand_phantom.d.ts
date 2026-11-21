// AUTO-GENERATED - do not edit.
/**
 * Djinn's Mark: Mirage's shots mark the enemies they hit, and the active consumes the marks for
 * damage that multiplies with every stack.
 */
declare class mirage_sand_phantom extends Ability {
	/** How far from Mirage his shots still mark an enemy, in world units. */
	public get ProcMaxRange(): number
	/** The stacks of this ability's mark that last on `target`; 0 where none does. */
	public MarkStacks(target: Entity): number
	/**
	 * The damage consuming the mark on `target` deals now: `ProcDamageBase`, multiplied by
	 * `DMarkMultiplierPerStack` for every stack past the first, after the target's resistances;
	 * 0 without a mark.
	 */
	public GetMarkDamage(target: PlayerPawn): number
}
