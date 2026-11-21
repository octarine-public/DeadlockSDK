// AUTO-GENERATED - do not edit.
/**
 * Jettison Fuel: sprays fuel that shreds bullet resist, building up to a backblast that knocks
 * Deadman Danny backwards.
 */
declare class ability_deadpack_flamethrower extends Ability {
	/** Whether fuel is being sprayed. */
	public readonly IsSpraying: boolean
	/** Game time at which the spray was turned on. */
	public readonly ActivationTime: number
	/** Game time at which the spray was paused. */
	public readonly PauseStartTime: number
	/** Game time of the spray's last damage. */
	public readonly LastDamageTime: number
	/** Not during the spray: a press then cuts it short. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
