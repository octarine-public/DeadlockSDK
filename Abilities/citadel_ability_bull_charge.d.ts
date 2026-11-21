// AUTO-GENERATED - do not edit.
/** Shoulder Charge: Abrams charges forward, dragging the first hero he meets into a wall. */
declare class citadel_ability_bull_charge extends Ability {
	/** Whether Abrams is charging. */
	public get IsCharging(): boolean
	/**
	 * How far the charge carries Abrams into a hit: its starting speed over its duration, spirit
	 * duration applied, and the radius it grabs in.
	 */
	public get Reach(): number
	/** Not while Abrams charges: a press then is no new charge. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A charge that travels nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
