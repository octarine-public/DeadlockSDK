// AUTO-GENERATED - do not edit.
/**
 * The kinds of unit an ability may target (enemy heroes, friendly troopers, …), as the
 * game's `CITADEL_UNIT_TARGET_*` flags its vdata `m_nAbilityTargetTypes` combines;
 * `AbilityStore.AbilityTargetTypes` holds them.
 */
declare const CITADEL_UNIT_TARGET_TYPE: {
	/** What `AbilityStore.AbilityTargetTypes` is where the data declares no target types. */
	CITADEL_UNIT_TARGET_NONE: bigint
	/**
	 * On a gun without `CITADEL_UNIT_TARGET_HERO_ENEMY`, it makes
	 * `citadel_ability_primary_weapon.IsAllyOnly` true.
	 */
	CITADEL_UNIT_TARGET_HERO_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_TROOPER_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_BOSS_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_BUILDING_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_PROP_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_MINION_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_GOLD_ORBS_FRIENDLY: bigint
	CITADEL_UNIT_TARGET_PICKUP_FRIENDLY: bigint
	/**
	 * A gun whose data has `CITADEL_UNIT_TARGET_HERO_FRIENDLY` without it is
	 * `citadel_ability_primary_weapon.IsAllyOnly`.
	 */
	CITADEL_UNIT_TARGET_HERO_ENEMY: bigint
	CITADEL_UNIT_TARGET_TROOPER_ENEMY: bigint
	CITADEL_UNIT_TARGET_BOSS_ENEMY: bigint
	CITADEL_UNIT_TARGET_BUILDING_ENEMY: bigint
	CITADEL_UNIT_TARGET_PROP_ENEMY: bigint
	CITADEL_UNIT_TARGET_MINION_ENEMY: bigint
	CITADEL_UNIT_TARGET_GOLD_ORBS_ENEMY: bigint
	CITADEL_UNIT_TARGET_PICKUP_ENEMY: bigint
	CITADEL_UNIT_TARGET_NEUTRAL: bigint
	CITADEL_UNIT_TARGET_ZIPLINE: bigint
	/** Shares its bit with `CITADEL_UNIT_TARGET_DYNAMIC_PROP`: no test tells the two apart. */
	CITADEL_UNIT_TARGET_BREAKABLE_PROP: bigint
	/** The same bit as `CITADEL_UNIT_TARGET_BREAKABLE_PROP`. */
	CITADEL_UNIT_TARGET_DYNAMIC_PROP: bigint
	CITADEL_UNIT_TARGET_ABILITY_TRIGGER: bigint
	/** `CITADEL_UNIT_TARGET_HERO_FRIENDLY` and `CITADEL_UNIT_TARGET_HERO_ENEMY` together. */
	CITADEL_UNIT_TARGET_HERO: bigint
	/** `CITADEL_UNIT_TARGET_TROOPER_FRIENDLY` and `CITADEL_UNIT_TARGET_TROOPER_ENEMY` together. */
	CITADEL_UNIT_TARGET_TROOPER: bigint
	/** `CITADEL_UNIT_TARGET_TROOPER_FRIENDLY` and `CITADEL_UNIT_TARGET_BOSS_FRIENDLY` together. */
	CITADEL_UNIT_TARGET_CREEP_FRIENDLY: bigint
	/**
	 * `CITADEL_UNIT_TARGET_TROOPER_ENEMY` and `CITADEL_UNIT_TARGET_BOSS_ENEMY` together with
	 * `CITADEL_UNIT_TARGET_NEUTRAL`.
	 */
	CITADEL_UNIT_TARGET_CREEP_ENEMY: bigint
	/**
	 * `CITADEL_UNIT_TARGET_CREEP_FRIENDLY` and `CITADEL_UNIT_TARGET_CREEP_ENEMY` together: both
	 * teams' troopers and bosses, and neutrals.
	 */
	CITADEL_UNIT_TARGET_CREEP: bigint
	/** `CITADEL_UNIT_TARGET_BOSS_FRIENDLY` and `CITADEL_UNIT_TARGET_BOSS_ENEMY` together. */
	CITADEL_UNIT_TARGET_BOSS: bigint
	/**
	 * `CITADEL_UNIT_TARGET_BUILDING_FRIENDLY` and `CITADEL_UNIT_TARGET_BUILDING_ENEMY` together.
	 */
	CITADEL_UNIT_TARGET_BUILDING: bigint
	/** `CITADEL_UNIT_TARGET_PROP_FRIENDLY` and `CITADEL_UNIT_TARGET_PROP_ENEMY` together. */
	CITADEL_UNIT_TARGET_PROP: bigint
	/** `CITADEL_UNIT_TARGET_MINION_FRIENDLY` and `CITADEL_UNIT_TARGET_MINION_ENEMY` together. */
	CITADEL_UNIT_TARGET_MINION: bigint
	/**
	 * `CITADEL_UNIT_TARGET_GOLD_ORBS_FRIENDLY` and `CITADEL_UNIT_TARGET_GOLD_ORBS_ENEMY` together.
	 */
	CITADEL_UNIT_TARGET_GOLD_ORBS: bigint
	/** `CITADEL_UNIT_TARGET_PICKUP_FRIENDLY` and `CITADEL_UNIT_TARGET_PICKUP_ENEMY` together. */
	CITADEL_UNIT_TARGET_PICKUP: bigint
	/**
	 * Friendly heroes, troopers, bosses, buildings, props and minions; not friendly gold orbs or
	 * pickups.
	 */
	CITADEL_UNIT_TARGET_ALL_FRIENDLY: bigint
	/**
	 * Enemy heroes, troopers, bosses, buildings, props and minions, with neutrals; not the
	 * enemy's gold orbs or pickups.
	 */
	CITADEL_UNIT_TARGET_ALL_ENEMY: bigint
	/**
	 * `CITADEL_UNIT_TARGET_ALL_FRIENDLY` with `CITADEL_UNIT_TARGET_ALL_ENEMY`: gold orbs, pickups,
	 * ziplines, breakable props and ability triggers are not in it.
	 */
	CITADEL_UNIT_TARGET_ALL: bigint
}
type CITADEL_UNIT_TARGET_TYPE = bigint
