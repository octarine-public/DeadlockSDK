// AUTO-GENERATED - do not edit.
/**
 * Burrow: Mo & Krill dive into the ground and travel under it for the channel, then spin out
 * of it, damaging what stands around them.
 */
declare class ability_burrow extends Ability {
	/** Whether Mo & Krill dive in: the wind-up before they are underground. */
	public get IsDiving(): boolean
	/** Whether Mo & Krill are underground. */
	public get IsUnderground(): boolean
	/** Whether Mo & Krill spin out of the ground. */
	public get IsSpinning(): boolean
	/** The radius the spin hits in, spirit radius bonuses applied. */
	public get AOERadius(): number
	/**
	 * Whether cancelling the channel now ends the burrow in its spin: Mo & Krill are underground
	 * in the burrow's channel and hold no one in Combo, where a cancel ends the grab instead, and
	 * are alive and not stunned, silenced or command-restricted.
	 */
	public get CanEmerge(): boolean
	/** Whether a spin from where Mo & Krill are now hits `target`: its hull within the radius. */
	public SpinHits(target: Entity): boolean
	/** Not while Mo & Krill dive in, are underground or spin out: a press then is no new burrow. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
