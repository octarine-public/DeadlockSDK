// AUTO-GENERATED - do not edit.
/**
 * Sanguine Retreat: Mina disperses into bats and blinks to a spot. Within its recast window,
 * `ability_vampirebat_batblink_trigger` takes this key and blinks her again.
 */
declare class ability_vampirebat_batblink extends Ability {
	/** Number of additional Sanguine Retreat casts still available. */
	public readonly RemainingCasts: number
	/** Whether Mina is still dispersed in the current blink. */
	public readonly IsBlinking: boolean
	/** Server game-time deadline for the current recast window. */
	public readonly RecastEndTime: number
	/** Server game-time deadline for the current blink movement. */
	public readonly BlinkEndTime: number
	/** How many recasts a blink grants, upgrades applied. */
	public get MaxRecasts(): number
	/** Whether a recast is left: casts remain and the recast window is still open. */
	public get CanRecast(): boolean
	/**
	 * Only while it holds its ability slot, which its recast takes over within the recast window,
	 * and not while Mina winds up, channels or is still dispersed in a blink: a press then starts
	 * no new blink.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
