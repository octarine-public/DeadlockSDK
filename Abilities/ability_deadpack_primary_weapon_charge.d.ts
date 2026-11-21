// AUTO-GENERATED - do not edit.
/**
 * The charged gun of `hero_deadpack`: it charges while the trigger is down and fires when the
 * trigger is let go, or by itself 52 ticks into the hold.
 */
declare class ability_deadpack_primary_weapon_charge extends citadel_ability_primary_weapon {
	/** Two: the shortest hold whose release fired. */
	public get ReleaseHoldCommands(): number
	/**
	 * A tick: the release that fires comes two commands after the press, and two commands in a
	 * row can carry one client tick.
	 */
	public get TapShotDelay(): number
}
