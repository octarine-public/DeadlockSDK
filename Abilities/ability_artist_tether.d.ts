// AUTO-GENERATED - do not edit.
/**
 * Still Life: picks a hero as the subject and sketches them, dealing spirit damage over time for
 * as long as Violet looks at them. A completed sketch deals more damage, stuns, and drops a sketch
 * whose pickup permanently grants stats chosen by the subject's hero.
 */
declare class ability_artist_tether extends Ability {
	/** Whether the current sketch was completed. */
	public readonly IsCompleted: boolean
	/** Game time Violet last had the subject in view. */
	public readonly LastLookTime: number
	/** Handle of the subject, or INVALID_HANDLE when there is none. */
	public readonly SubjectHandle: number
	/** Sketches collected, each a permanent stat bonus. */
	public readonly SketchesCollected: number
	/** The hero being sketched. */
	public get Subject(): Nullable<PlayerPawn>
	/**
	 * How far from Violet the subject can get before the tether breaks and the sketch ends, with
	 * the spirit bonus the data scales it by.
	 */
	public get TetherBreakRange(): number
	/**
	 * Whether the sketch running now still holds `target`: it is the subject, its hull within
	 * `TetherBreakRange` of Violet.
	 */
	public HoldsSubject(target: Entity): boolean
	/** Not during the sketch: a press then cancels it. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
