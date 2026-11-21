// AUTO-GENERATED - do not edit.
/** Concussive Combustion: a fuse on Infernus that blasts and stuns what stands around him. */
declare class ability_fire_bomb extends Ability {
	/** How long the fuse runs from activation to the blast, in seconds. */
	public get ExplodeDelay(): number
	/**
	 * The blast radius around the holder, in world units, tier upgrades and spirit radius
	 * bonuses applied.
	 */
	public get AOERadius(): number
	/** The blast reaches as far as its radius around Infernus. */
	public get Reach(): number
	/** A blast without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
