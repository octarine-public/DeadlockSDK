// AUTO-GENERATED - do not edit.
/**
 * Extra filters on the units an ability may target, as the game's
 * `CITADEL_UNIT_TARGET_FLAG_*` flags its vdata `m_nAbilityTargetFlags` combines;
 * `AbilityStore.AbilityTargetFlags` holds them.
 */
declare const CITADEL_UNIT_TARGET_FLAGS: {
	/** What `AbilityStore.AbilityTargetFlags` is for an ability whose data sets no flag. */
	CITADEL_UNIT_TARGET_FLAG_NONE: bigint
	CITADEL_UNIT_TARGET_FLAG_PENETRATE_INVULNERABLE: bigint
	CITADEL_UNIT_TARGET_FLAG_NO_INVIS: bigint
	CITADEL_UNIT_TARGET_FLAG_NO_DORMANT_NEUTRALS: bigint
	CITADEL_UNIT_TARGET_FLAG_ALLOW_BREAKABLES: bigint
	CITADEL_UNIT_TARGET_FLAG_ALLOW_SMALL_DEPLOYABLES: bigint
	CITADEL_UNIT_TARGET_FLAG_NO_OBSCURE: bigint
}
type CITADEL_UNIT_TARGET_FLAGS = bigint
