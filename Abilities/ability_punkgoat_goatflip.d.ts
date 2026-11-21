// AUTO-GENERATED - do not edit.
/** Rising Ram: Billy charges ahead and flips up with the first enemy he rams into the air. */
declare class ability_punkgoat_goatflip extends Ability {
	/** Native Rising Ram phase: inactive, charging, ascending, or hovering. */
	public readonly RamState: number
	/** Game-time start of the current Rising Ram phase. */
	public readonly StateStartTime: number
	/** Seconds after the flip before Billy regains control of himself. */
	public get RecoveryDelay(): number
	/**
	 * Whether the ram holds Billy: its wind-up, the charge, and the flip until he regains
	 * control (`RecoveryDelay`).
	 */
	public get IsRamming(): boolean
	/**
	 * How far the ram carries Billy into a hit: its charge speed over its duration, spirit
	 * duration applied, and the distance it strikes ahead of him.
	 */
	public get Reach(): number
	/** Only while no ram runs: a press during one is no new ram. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A ram that travels nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
