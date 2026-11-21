// AUTO-GENERATED - do not edit.
/**
 * Stalker's Mark: Drifter fires a shot that marks and bleeds the hero it hits. While the marker
 * lasts, `drifter_shadow_mark_teleport` (Ambush) takes this slot and teleports him to that hero.
 */
declare class drifter_shadow_mark extends Ability {
	/** Stalker's Mark starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/**
	 * How far the shot travels: its speed over its lifetime; 0, unlimited, where the data leaves
	 * the lifetime to the engine.
	 */
	public get Reach(): number
	/**
	 * Whether `target` carries the teleport marker of the current cast, from this ability and its
	 * owner, unexpired: what Ambush teleports to. The bleed alone does not count.
	 */
	public HasMarked(target: Entity): boolean
	/** Not during the wind-up: the shot is on its way already. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
