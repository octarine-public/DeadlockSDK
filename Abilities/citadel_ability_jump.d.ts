// AUTO-GENERATED - do not edit.
/**
 * The jump every hero has: off the ground, in the air and off a wall.
 * @example
 * const jump = local.GetAbilityByClass(citadel_ability_jump)
 * if (jump?.ConsecutiveWallJumps === 0) {
 * 	// the next jump off a wall is the full one, free of stamina
 * }
 */
declare class citadel_ability_jump extends Ability {
	/** The server's count of the hero's jumps off a wall since it last stood on the ground. */
	public readonly ConsecutiveWallJumps: number
	/**
	 * Whether a jump still comes out of the hero's ground dash as a dash-jump: set as a dash
	 * starts, cleared by the dash-jump and by a jump pressed before its window opens.
	 */
	public readonly CanDashJump: boolean
}
