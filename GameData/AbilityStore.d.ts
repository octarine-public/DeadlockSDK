// AUTO-GENERATED - do not edit.
/**
 * One property of an ability's property table (`m_mapAbilityProperties`) at the data's base
 * value, before any upgrade, as `AbilityStore.Properties` holds it.
 */
interface IAbilityProperty {
	/** The value as the data gives it; one the data gives in meters is converted to world units. */
	BaseValue: number
	/**
	 * The stat the value scales with: its scale function's `m_eSpecificStatScaleType`, or the stat
	 * the function's class stands for (`scale_function_tech_damage` is `ETechPower`);
	 * `EStatsInvalid` where neither gives one.
	 */
	ScaleStat: EStatsType
	/**
	 * The factor on {@link ScaleStat} (`m_flStatScale`): ability damage adds the owner's stat
	 * times this to the value. 0 for a property with no scale function.
	 */
	Scale: number
	/**
	 * The modifier value the property counts as on whoever it is applied to
	 * (`m_eProvidedPropertyType`); `MODIFIER_VALUE_INVALID` where the data names none.
	 */
	Provides: EModifierValue
}
/** A property's value, the stat it scales by and its scale, with the upgrades an ability holds. */
interface IUpgradedProperty {
	/** The value with every upgrade's bonus to it added, or multiplied in as a percent. */
	base: number
	/** The stat the value scales with; a scale upgrade that names a stat moves it there. */
	scaleStat: EStatsType
	/** The factor on {@link scaleStat} with every upgrade's scale bonus added or multiplied in. */
	scale: number
}
/**
 * One change an upgrade makes to a property of its ability (`m_vecPropertyUpgrades`): each tier
 * of `AbilityStore.Upgrades` and a corruption hold a list of them.
 */
interface IPropertyUpgrade {
	/** The name of the property it changes, a key of `AbilityStore.Properties`. */
	Property: string
	/**
	 * How much it changes the property by (`m_strBonus`); one the data gives in meters is
	 * converted to world units. {@link AddsToScale} and {@link Multiplies} say how it applies.
	 */
	Bonus: number
	/**
	 * Whether {@link Bonus} adds to the property's scale (`EAddToScale`) rather than to its
	 * value: Scrap Grenade's third tier makes its big blast 300 + 1 x the weapon damage percent.
	 */
	AddsToScale: boolean
	/**
	 * Whether {@link Bonus} multiplies rather than adds (`EMultiplyBase`, `EMultiplyScale`): the
	 * value by that many percent more, the scale by that factor. Baba's Brew's third tier is 33.33
	 * on its value and 1.3333 on its scale - her silence of 2.75 s measured 3.67 s with it.
	 */
	Multiplies: boolean
	/** The stat a scale upgrade moves the property onto; `EStatsInvalid` keeps its own. */
	ScaleStat: EStatsType
}
/**
 * A property the ability gives its owner for as long as it has it, and what the game counts it
 * as: the modifier value it provides and the stat that value adds to, flat or as a percent.
 */
interface IProvidedProperty {
	/** Its name in the ability's property table (`AbilityStore.Properties`). */
	readonly Property: string
	/** The modifier value it provides (`m_eProvidedPropertyType`). */
	readonly Value: EModifierValue
	/** The stat {@link Value} adds to; `EStatsInvalid` for one no stat stands for. */
	readonly Stat: EStatsType
	/** Whether {@link Value} adds to {@link Stat} as a percent rather than flat. */
	readonly Percent: boolean
}
/**
 * How a gun's bullet damage falls off with the distance the bullet flies (`m_flDamageFalloff*`):
 * {@link StartScale} of it up to {@link StartRange}, {@link EndScale} from {@link EndRange} on,
 * and between them the share of the way bent by {@link Bias}, 0.5 leaving it a straight line.
 */
interface IDamageFalloff {
	/**
	 * World units of flight up to which the bullet keeps {@link StartScale} of its damage, before
	 * the owner's weapon range percents push it out.
	 */
	readonly StartRange: number
	/**
	 * World units of flight from which on the bullet keeps {@link EndScale} of its damage, before
	 * the owner's weapon range percents push it out.
	 */
	readonly EndRange: number
	/** The share of its damage kept up to {@link StartRange}; 1 where the data declares none. */
	readonly StartScale: number
	/** The share of its damage kept from {@link EndRange} on; 1 where the data declares none. */
	readonly EndScale: number
	/**
	 * How the share bends between the ranges: the fraction of the way across is raised to the
	 * power log(Bias) / log(0.5), a straight line at 0.5, which is also the default.
	 */
	readonly Bias: number
}
/**
 * What a bullet hitting a weak point, the head, deals as a multiple of a body hit
 * (`m_flCritBonus*`): {@link Start} up to {@link StartRange} of flight, {@link End} from
 * {@link EndRange} on, and in a straight line between them.
 */
interface IWeakPointBonus {
	/** The multiple up to {@link StartRange}; 1 where the data declares none. */
	readonly Start: number
	/** The multiple from {@link EndRange} on; 1 where the data declares none. */
	readonly End: number
	/** World units of flight up to which a weak-point hit deals {@link Start}. */
	readonly StartRange: number
	/** World units of flight from which on a weak-point hit deals {@link End}. */
	readonly EndRange: number
}
/** A change an item makes to cooldowns: a percentage, or a charge count for BonusCharges. */
interface ICooldownEffect {
	/** Which cooldowns it changes, by the property's provided type and apply filter. */
	Scope: ECooldownScope
	/**
	 * How much, at the data's base value before any upgrade: a percentage, or the charges added
	 * for `ECooldownScope.BonusCharges`. Never 0.
	 */
	Value: number
}
/**
 * An ability's or item's data from the game's `abilities.vdata`, as `Ability.AbilityStore` holds
 * it: its property table, upgrades, weapon and projectile data, and what it gives its owner.
 */
declare class AbilityStore {
	/**
	 * The ability's data id, hashed from {@link Name}: the one damage and bullet events,
	 * modifiers and a player's upgrade list carry, and what
	 * {@link GetAilityStoreBySubclassID} finds it by. -1 on {@link empty}.
	 */
	public readonly SubclassID: number
	/** The ability's entry name in `abilities.vdata`, such as `upgrade_glitch`. */
	public readonly Name: string
	/** The {@link AbilityImage} of every ability, by its name. */
	public static readonly AbilityPaths: Map<string, string>
	/**
	 * The store of no ability: empty names, zeros and no properties. `Ability.AbilityStore` holds
	 * it for a name the data lacks.
	 */
	public static readonly empty: AbilityStore
	/** Every ability's and item's data by {@link Name}, refilled on each `ServerInfo` event. */
	public static readonly globalStorage: Map<string, AbilityStore>
	/** The data of the ability or item named `name`; `undefined` where the data has none. */
	public static GetAilityStoreByName(name: string): Nullable<AbilityStore>
	/** The data of the ability whose {@link SubclassID} is `subclassID`; `undefined` for none. */
	public static GetAilityStoreBySubclassID(subclassID: number): Nullable<AbilityStore>
	/**
	 * The spread penalty per shot of the ability's weapon data (`m_flShootSpreadPenaltyPerShot`);
	 * 0 where it declares none.
	 */
	public readonly ShootSpreadPenaltyPerShot: number
	/**
	 * The entity class the ability is built as, its data's `_class`: `ability_melee_viscous` is a
	 * `citadel_ability_hold_melee`, every shop item a `citadel_item`.
	 */
	public readonly ClassName: string
	/**
	 * The panorama path of the ability's icon: an `upgrade_` entry's large shop icon
	 * (`m_strShopIconLarge`), any other's `m_strAbilityImage`, the HUD's roll icon for the dash
	 * every hero has; empty where there is none.
	 */
	public readonly AbilityImage: string
	/**
	 * What kind of ability it is (`m_eAbilityType`), such as weapon, signature, ultimate or item;
	 * `EAbilityType_Invalid` where the data declares none.
	 */
	public readonly AbilityType: EAbilityType
	/**
	 * The shop category an item is sold in (`m_eItemSlotType`): `EItemSlotType_WeaponMod`,
	 * `EItemSlotType_Armor` or `EItemSlotType_Tech`. `EItemSlotType_Invalid` for an ability that
	 * is not bought.
	 */
	public readonly ItemSlotType: EItemSlotType
	/** Which shop tier an item is sold at, and Invalid for an ability that is not bought at all. */
	public readonly ItemTier: EModTier
	/**
	 * The names of the items this one is built from (`m_vecComponentItems`): buying it uses up the
	 * one the hero has, and that one's price comes off. Empty for an item built from none.
	 */
	public readonly ComponentItems: readonly string[]
	/**
	 * The shop filters an item's data files it under on top of the ones the game works out from
	 * its properties. The game's own share never reaches the data, so most items carry none.
	 */
	public readonly AdditionalShopFilters: EShopFilters
	/** Whether the data turns this off: an item taken out of the shop, or never put in it. */
	public readonly Disabled: boolean
	/** Whether the data has this in development, which keeps it out of the shop as well. */
	public readonly InDevelopment: boolean
	/** Behavior bit vector, with bit positions defined by `EAbilityBehavior`. */
	public readonly AbilityBehavior: bigint
	/** Modifier-state bit vector that interrupts this ability. Empty when undeclared. */
	public readonly InterruptingStates: bigint
	/**
	 * The kinds of unit the ability targets, the flags of `m_nAbilityTargetTypes` combined;
	 * `CITADEL_UNIT_TARGET_NONE` where the data declares none.
	 */
	public readonly AbilityTargetTypes: CITADEL_UNIT_TARGET_TYPE
	/** Additional filters applied to the units eligible for this ability. */
	public readonly AbilityTargetFlags: CITADEL_UNIT_TARGET_FLAGS
	/** Cast location selected by the engine, distinct from the effect's allowed unit types. */
	public readonly TargetingLocation: EAbilityTargetingLocation
	/** Targeting preview shape; only cone targeting also supplies engine target selection. */
	public readonly TargetingShape: EAbilityTargetingShape
	/** The declared visibility check for unit targeting. */
	public readonly TargetingLOSCheck: ELOSCheck
	/**
	 * The activation the data declares (`m_eAbilityActivation`), such as passive, instant cast,
	 * press or hold toggle; `CITADEL_ABILITY_ACTIVATION_NONE` where it declares none.
	 */
	public readonly AbilityActivation: EAbilityActivation
	/** Modifier-state bit vector declared by this ability's debuff modifier. */
	public readonly EnabledStateMask: bigint
	/** Modifier states applied to the caster during windup. */
	public readonly PreCastEnabledStateMask: bigint
	/** Modifier states applied to the caster during channeling. */
	public readonly ChannelEnabledStateMask: bigint
	/** Modifier states applied to the caster during recovery. */
	public readonly PostCastEnabledStateMask: bigint
	/** Flags from the separate projectile definition. Empty when undeclared. */
	public readonly ProjectileBehavior: ProjectileBehaviorFlag
	/**
	 * The vertical punch of the ability's weapon data (`m_flVerticalPunch`); 0 where it declares
	 * none.
	 */
	public readonly VerticalPunch: number
	/**
	 * The horizontal punch of the ability's weapon data (`m_flHorizontalPunch`); 0 where it
	 * declares none.
	 */
	public readonly HorizontalPunch: number
	/**
	 * The recoil recovery speed of the ability's weapon data (`m_flRecoilRecoverySpeed`); 0 where
	 * it declares none.
	 */
	public readonly RecoilRecoverySpeed: number
	/**
	 * The `_class` of the modifier the ability's data names in `m_ParryActiveModifier`, the
	 * parry's `modifier_citadel_parry`; empty where it names none. `Modifier.Name` falls back to
	 * this, then {@link VictimModifierName}, then {@link IntrinsicModifierName}, for a modifier of
	 * the ability that `ModifierStore` does not name.
	 */
	public readonly ActiveModifierName: string
	/**
	 * The `_class` of the modifier the ability's data names in `m_ParryVictimModifier`: for the
	 * parry, `modifier_citadel_parried_stun`, the stun it puts on the attacker it caught. Empty
	 * where it names none.
	 */
	public readonly VictimModifierName: string
	/**
	 * The `_class` of the ability's intrinsic modifier (`m_AutoIntrinsicModifiers`), the last
	 * where the data lists several; empty where it lists none.
	 */
	public readonly IntrinsicModifierName: string
	/**
	 * How fast the ability's bullet flies, in world units a second (`m_flBulletSpeed` of its
	 * weapon data); 0 where it declares none.
	 */
	public readonly BulletSpeed: number
	/** Launch-angle bias declared by the weapon data, in degrees. */
	public readonly BulletVerticalAimBias: number
	/** Speed from the separate projectile definition; zero when it is not declared. */
	public readonly ProjectileSpeed: number
	/**
	 * How far from its centre the projectile touches what it passes, from the separate projectile
	 * definition; zero when it is not declared.
	 */
	public readonly ProjectileTriggerRadius: number
	/**
	 * The radius of the ability's bullet (`m_flBulletRadius` of its weapon data); 0 where it
	 * declares none.
	 */
	public readonly BulletRadius: number
	/**
	 * How far from its centre the primary weapon's bullet meets the world
	 * (`m_flBulletRadiusVsWorld`), where the data gives it one apart from `BulletRadius`; 0
	 * where it declares none.
	 */
	public readonly BulletRadiusVsWorld: number
	/** Seconds the bullet lives in flight; 0 where the data leaves the engine default to stand. */
	public readonly BulletLifetime: number
	/** How far the primary weapon's shots carry, in world units; 0 where the data declares none. */
	public readonly BulletRange: number
	/** Seconds between two of the primary weapon's shots, before fire rate (`m_flCycleTime`). */
	public readonly CycleTime: number
	/**
	 * Seconds the primary weapon holds a bullet back after the shot that fires it
	 * (`m_flBulletCreationDelay`): 0.09 for Drifter's gun, 0.1 for Violet's, 0 for the rest.
	 */
	public readonly BulletCreationDelay: number
	/**
	 * What one bullet of the primary weapon deals before its owner's boons, spirit and bonuses
	 * (`m_flBulletDamage`), a pellet's for a gun firing several; 0 for an ability with no gun.
	 */
	public readonly BulletDamage: number
	/**
	 * How many bullets one shot of the primary weapon fires (`m_iBullets`), the pellets of a gun
	 * firing several - 2 from Rat King's two barrels; 0 for an ability with no gun.
	 */
	public readonly BulletsPerShot: number
	/**
	 * Whether a target takes only one of a shot's bullets however many reach it
	 * (`m_bHitOnceAcrossAllBullets`), as the data has Drifter's three.
	 */
	public readonly HitsOncePerShot: boolean
	/** How the primary weapon's bullet damage falls off with distance; none for no gun. */
	public readonly DamageFalloff: IDamageFalloff
	/** What a weak-point hit of the primary weapon deals over a body hit; 1 for no gun. */
	public readonly WeakPointBonus: IWeakPointBonus
	/**
	 * Degrees off the aim a unit-targeted cast still acquires its target in, for an ability
	 * whose targeting shape is a cone — Yamato's Flying Strike locks whoever stands within it.
	 * 0 where the ability declares none.
	 */
	public readonly TargetingConeAngle: number
	/**
	 * How strongly the ability's bullet falls, as a multiple of `sv_gravity`
	 * (`m_flBulletGravityScale` of its weapon data); 0 where it declares none.
	 */
	public readonly BulletGravityScale: number
	/**
	 * The scale on its shooter's velocity the ability's bullet takes on
	 * (`m_flBulletInheritShooterVelocityScale` of its weapon data); 0 where it declares none.
	 */
	public readonly BulletInheritShooterVelocityScale: number
	/**
	 * Every property of the ability's property table (`m_mapAbilityProperties`) by name, at the
	 * data's base values. {@link GetUpgradedProperty} applies the upgrades.
	 */
	public readonly Properties: Map<string, IAbilityProperty>
	/**
	 * Every property the ability gives its owner for as long as it has it, as the game counts
	 * them: the ones its intrinsic modifiers register, and an item's own properties - not one of
	 * the template properties every item carries (`TechPower`, `WeaponPower`) unless registered,
	 * not one only a debuff, an aura or a proc puts on its wearer (`ConditionalValues`). Each is
	 * worth what `Ability.GetUpgradedProperty` makes of it, with the upgrades the ability holds:
	 * an enhanced Express Shot's `BonusBulletSpeedPercent` is 60 + 45.
	 */
	public readonly ProvidedProperties: IProvidedProperty[]
	/**
	 * The flat stats {@link ProvidedProperties} add up to at the data's base values, before any
	 * upgrade, enhancement or corruption.
	 */
	public readonly ProvidedStats: Map<EStatsType, number>
	/** The percent stats {@link ProvidedProperties} add up to at the data's base values. */
	public readonly ProvidedStatsPercent: Map<EStatsType, number>
	/**
	 * Every value {@link ProvidedProperties} add up to at the data's base values, by the modifier
	 * value they provide: the ones {@link ProvidedStats} and {@link ProvidedStatsPercent} keep by
	 * stat, and those no stat stands for - a close-range weapon bonus beside the distance it
	 * reaches.
	 * @example
	 * const bonus = store.ProvidedValues.get(EModifierValue.MODIFIER_VALUE_CLOSE_RANGE_WEAPON_DAMAGE_INCREASE)
	 */
	public readonly ProvidedValues: Map<EModifierValue, number>
	/**
	 * The upgrades the ability can hold, one list per tier (`m_vecAbilityUpgrades`): a hero
	 * ability's three, an item's one - its enhancement.
	 */
	public readonly Upgrades: IPropertyUpgrade[][]
	/**
	 * What corrupting an item layers on top of it (`m_CorruptedItemInfo`), as authored - what the
	 * sandbox deals. A match rolls every bonus not authored fixed up to
	 * `citadel_corrupted_item_bonus_variance_better` / `_worse` percent (15) either way, and
	 * nothing networks the roll, so there the item's real value can stray from these that far:
	 * with the roll forced, Express Shot's 22 weapon damage dealt as 24.1.
	 */
	public readonly CorruptedUpgrades: IPropertyUpgrade[]
	/**
	 * The base values of the ability's conditionally applied properties, added up by the modifier
	 * value they provide: what a debuff, aura or proc of it puts on its wearer, before any
	 * upgrade. {@link ConditionalValues} maps each property to its value.
	 */
	public readonly ConditionalStats: Map<EModifierValue, number>
	/**
	 * The value each conditionally applied property provides, by the property's name: what a
	 * modifier of this ability that registers the property (`ModifierStore.AutoRegistered`) puts
	 * on its wearer, a debuff's resistance reduction or a buff's spirit power, while it lasts.
	 */
	public readonly ConditionalValues: Map<string, EModifierValue>
	/**
	 * The properties the ability gives only to abilities with charges
	 * (`EApplyFilter_OnlyIfHasCharges`), each with the flat stat it adds to.
	 * `ModifierManager.GetChargedAbilityStat` adds them up for the owner.
	 */
	public readonly ChargedOnlyStats: {
		prop: string
		stat: EStatsType
	}[]
	/** The cooldowns an item changes and by how much, as its properties provide. */
	public readonly CooldownEffects: ICooldownEffect[]
	/** The panorama path of the large shop icon (`m_strShopIconLarge`); empty for none. */
	public readonly ShopIconLarge: string
	/** The ability's `m_flParryWindow`; 0 where its data declares none. */
	public readonly ParryWindow: number
	/**
	 * The ability's `m_flParryStunTime`; 0 where its data declares none. The parry gives its
	 * stun's length as the property `ParriedStunTime`.
	 */
	public readonly ParryStunTime: number
	/**
	 * The ability's `m_flCollisionDistance`, in world units; 0 where its data declares none. Half
	 * of the hero melee's is the radius of the ball its swing drags down the aim
	 * (`PlayerPawn.MeleeWidth`), and the gap a charged dash stops at from its target's hull.
	 */
	public readonly CollisionDistance: number
	/** The ability's `m_flActiveTime`; 0 where its data declares none. */
	public readonly ParryActiveTime: number
	/**
	 * Sound event the game raises the moment this ability is cast, as `m_strCastSound` names it.
	 * Empty for an ability that raises none.
	 *
	 * A cast is often heard before anything else of it is networked, such as a projectile that
	 * has not spawned or a debuff that has not landed, so this is the earliest a script can know
	 * of it.
	 */
	public readonly CastSound: string
	/**
	 * The sound event the ability's data names for the start of a hold (`m_strHoldBegin`); empty
	 * where it names none.
	 */
	public readonly HoldBeginSound: string
	/**
	 * The sounds a charged melee commits with, one per heavy attack that has one: the ground
	 * heavy's dash and the air heavy's dive sound differ.
	 */
	public readonly MeleeDashSounds: readonly string[]
	/**
	 * How far the furthest of the ability's heavy-attack dashes carries, in world units: its
	 * movement curve's speed (`m_MovementSpeedCurve`) integrated over the dash, before any item
	 * stretches it. 0 for an ability with no heavy attack.
	 */
	public readonly MeleeDashDistance: number
	/**
	 * How long the longest of the ability's heavy-attack dashes lasts, in seconds: the latest knot
	 * of its movement curve. 0 for an ability with no heavy attack.
	 */
	public readonly MeleeDashDuration: number
	/** How long a swing itself is out, in seconds: the longest of the ability's attacks. */
	public readonly MeleeAttackTime: number
	/**
	 * The ground the furthest charged dash covers between `from` and `to` seconds into it, in
	 * world units, before any item stretches it: its movement curve's speed integrated over the
	 * span. Over the whole dash it is {@link MeleeDashDistance}; the dash speeds up over its first
	 * fifth of a second, so an early span covers less than a late one as long.
	 */
	public MeleeDashTravel(from: number, to: number): number
	/**
	 * How long the furthest charged dash takes to cover `distance` world units from `from` seconds
	 * into it, before any item stretches it: the inverse of {@link MeleeDashTravel}, `Infinity`
	 * where the dash runs out first.
	 * @example
	 * const swingsIn = store.MeleeDashTime(0, 185)
	 */
	public MeleeDashTime(from: number, distance: number): number
	/**
	 * The base value of the property `specialName`, before any upgrade; 0 where the data has no
	 * such property. `Ability.GetSpecialValue` counts the upgrades the ability holds.
	 */
	public GetSpecialValue(specialName: string): number
	/**
	 * The base value, scaling stat and scale of the property `name`, before any upgrade;
	 * `undefined` where the data has no such property.
	 */
	public GetPropertyData(name: string): Nullable<IAbilityProperty>
	/**
	 * `name`'s value, scaling stat and scale with the upgrades `upgradeBits` holds, packed as
	 * `Ability.UpgradeBits`: bit `i` applies tier `i` of {@link Upgrades}, and the corrupted bit
	 * {@link CorruptedUpgrades} after them. `undefined` where the data has no such property.
	 * @example
	 * const enhanced = store.GetUpgradedProperty("BonusBulletSpeedPercent", 1)?.base
	 */
	public GetUpgradedProperty(name: string, upgradeBits: number): Nullable<IUpgradedProperty>
	/**
	 * A number field at the top level of the ability's data, such as `m_flSlashRadius`; 0 where it
	 * has none. One the data writes as a string is read by {@link GetClassString} instead, and
	 * {@link GetSpecialValue} reads the property table.
	 */
	public GetClassValue(field: string): number
	/**
	 * A string field at the top level of the ability's data, such as the sound event
	 * `m_strLightKickBeginSound`; empty where it has none.
	 */
	public GetClassString(field: string): string
	/**
	 * A number one of the ability's melee attacks declares in `m_mapAttacks`, by the attack's key
	 * there, or 0 where the attack or the field is absent.
	 * @example
	 * const windup = store.GetAttackValue("EBabaBenchMeleeAttack_Heavy", "m_flChargeTime")
	 */
	public GetAttackValue(attack: string, field: string): number
	/**
	 * A number field of the ability's projectile data (`m_mapProjectileInfos.primary`), such as
	 * `m_flUpSpeed`, one the data writes as a string included; 0 where it has none.
	 * {@link ProjectileSpeed} and {@link ProjectileTriggerRadius} read two of them.
	 */
	public GetProjectileValue(field: string): number
}
