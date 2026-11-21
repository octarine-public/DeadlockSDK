// AUTO-GENERATED - do not edit.
/** Barrage: Pocket rises into the air and channels a volley of projectiles where he aims. */
declare class synth_barrage extends Ability {
	/** Barrage starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** How far a projectile of the volley flies: its speed over its lifetime. */
	public get Reach(): number
	/** A volley that flies nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
