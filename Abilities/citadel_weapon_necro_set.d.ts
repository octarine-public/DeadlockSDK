// AUTO-GENERATED - do not edit.
/** Graves' weapon, The Teacher. */
declare class citadel_weapon_necro_set extends citadel_ability_primary_weapon {
	/**
	 * A cycle (`AbilityStore.CycleTime`): Graves' gun fires at what its cone search tethers - soul
	 * orbs among its targets -, a press's first shot a cycle after the press, and the server judges
	 * its hit at its own time rather than rewound to the command. The search tethers nothing that
	 * is not attackable yet and waits for it a few ticks, so a shot due a little early lands late
	 * instead.
	 */
	public get TapShotDelay(): number
}
