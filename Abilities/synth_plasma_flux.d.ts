// AUTO-GENERATED - do not edit.
/**
 * Flying Cloak: a slow cloak that flies where Pocket aims, damaging what it passes. While it
 * flies, `synth_plasma_flux_trigger` takes this key and teleports Pocket to the cloak.
 */
declare class synth_plasma_flux extends Ability {
	/** Flying Cloak starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** The radius around the cloak it damages in, spirit radius bonuses applied. */
	public get AOERadius(): number
	/**
	 * How far the cloak flies before it ends: its projectile's speed over its lifetime, spirit
	 * duration applied.
	 */
	public get Reach(): number
	/** A cloak that flies nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
