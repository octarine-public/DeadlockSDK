// AUTO-GENERATED - do not edit.
/**
 * The lane guardian. Its melee is nothing but the clip it plays, and the clip says when the blow
 * lands: the server deals it on the clip's own `AE_MELEE_ATTACK` event. The swing readings below
 * come from the guardian's clips, which are reported only while something has the
 * {@link AnimationManager} watching it; the parry readings come from its modifiers and need
 * nothing.
 * @example
 * AnimationManager.WatchClass(npc_trooper_boss)
 * for (const guardian of EntityManager.GetEntitiesByClass(npc_trooper_boss)) {
 * 	console.log(guardian.BlowTime, guardian.MeleeCooldown, guardian.StunTime)
 * }
 */
declare class npc_trooper_boss extends npc_trooper {
	/**
	 * The swing the guardian is playing — the latest-started clip that raises `AE_MELEE_ATTACK`;
	 * undefined while it swings none, or while its clips are not watched.
	 */
	public get Swing(): Nullable<Animation>
	/**
	 * Seconds until the blow of the swing it is playing lands; zero while no blow is on its way.
	 * Measured against the server, a blow lands on its event's tick or up to two after it.
	 */
	public get BlowTime(): number
	/**
	 * Seconds until it can start its next swing; zero once it can. The next swing starts 0.1875 s
	 * before the clip of the current one runs out. A parried swing bans its melee while
	 * `boss_victim_no_melee` lasts on it, and with no swing watched only that ban counts.
	 */
	public get MeleeCooldown(): number
	/** Seconds it still stands stunned in the calm a parried swing leaves on it, 2.25 s in all. */
	public get StunTime(): number
}
