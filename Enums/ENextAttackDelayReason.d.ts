// AUTO-GENERATED - do not edit.
/**
 * What holds a gun's next attack back (reload, the time between shots, disarm, stun, …);
 * `Ability.NextAttackDelayReason` holds one, networked as `m_eNextAttackDelayReason`.
 */
declare const enum ENextAttackDelayReason {
	EDelayReason_Reload = 0,
	EDelayReason_BetweenShots = 1,
	EDelayReason_Disarmed = 2,
	EDelayReason_Stunned = 3,
	EDelayReason_BebopSpinUp = 4,
	EDelayReason_WeaponSwap = 5,
	EDelayReasonCount = 6
}
