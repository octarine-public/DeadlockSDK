// AUTO-GENERATED - do not edit.
/**
 * The dash every hero has, on its own key: it spends a stamina charge and throws the hero along
 * the way the move keys point. Pressed with the duck key held after it, the dash runs into a slide.
 * @example
 * const dash = local.GetAbilityByClass(citadel_ability_dash)
 * dash?.PressKey(cmd)
 */
declare class citadel_ability_dash extends Ability {
	/** Whether the server marks the air dash as a down dash. */
	public readonly DownAirDash: boolean
	/** The server's count of the hero's down dashes in a row. */
	public readonly ConsecutiveDownDashes: number
	/** The server's count of the hero's air dashes in a row. */
	public readonly ConsecutiveAirDashes: number
	/** When the drag of an air dash started; 0 until the server sends it. */
	public readonly AirDashDragStartTime: number
	/** When an air dash was cast; 0 until the server sends it. */
	public readonly AirDashCastTime: number
	/**
	 * The last ground dash's tick: its start tick negated while it runs, its end tick once it is
	 * over.
	 */
	public readonly LastGroundDashTick: number
	/** The dash's angle; 0 until the server sends it. */
	public readonly DashAngle: number
	/**
	 * When the last ground dash went off, in seconds on the `GameState.RawGameTime` clock; the
	 * jump ability's dash-jump window counts from it.
	 */
	public readonly GroundDashExecuteTime: number
	/** The dash key (`IN_INNATE_1`), which `PressKey` taps. */
	public get KeyMask(): bigint
}
