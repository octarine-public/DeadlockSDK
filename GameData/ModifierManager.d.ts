// AUTO-GENERATED - do not edit.
/**
 * A modifier's live amount of one modifier value, read each time `ModifierManager` adds the value
 * up: the amount, and `true` to leave it out.
 */
type ModifierHandlerValue = () => [number, boolean]
/**
 * The modifier values a modifier gives its wearer, each with the handler that reads its amount.
 * A `Modifier` registers it with its parent's `ModifierManager` while it is on the parent.
 */
type ModifierMapFieldHandler = Map<EModifierValue, ModifierHandlerValue>
/**
 * A hero's stats with what its items, boons and the modifiers it wears add, as
 * `PlayerPawn.ModifierManager` holds them: spirit and weapon power, resistances, and any other
 * stat through {@link GetBonusStat}.
 */
declare class ModifierManager {
	/** The hero whose stats it counts. */
	public readonly Owner: PlayerPawn
	/** The hero's spirit power with every bonus: {@link GetBonusStat} of `ETechPower` from 0. */
	public get Spirit(): number
	/** The hero's weapon power with every bonus: {@link GetBonusStat} of `EWeaponPower` from 0. */
	public get WeaponPower(): number
	/** How many boons the hero has: one for each level past the first, at most 35. */
	public get Boons(): number
	/**
	 * The multiplier on every hit the unit takes, whoever lands it and whatever its kind: one plus
	 * the incoming damage increases it wears (`MODIFIER_VALUE_ALL_DAMAGE_TAKEN_INCREASE`) - a
	 * parried attacker's 25 %. The game counts it into the hit's `PreDamage`, before resistance.
	 */
	public get DamageTakenScale(): number
	/**
	 * Bonuses for `stat` applied over `base`, so percent modifiers scale the base too:
	 * {@link GetBonusFlat} times one plus {@link GetBonusPercent}.
	 */
	public GetBonusStat(stat: EStatsType, base?: number): number
	/**
	 * `base` plus every flat bonus to `stat`: the items', the modifiers', the boons' and what the
	 * hero's data grows it by with another stat (`UnitStore.ScalingStats`) - Vindicta's bullet
	 * damage by 0.022 for each point of spirit power. Spirit power counts what the owner's
	 * abilities switch on (`Ability.SpiritBonus`).
	 */
	public GetBonusFlat(stat: EStatsType, base?: number): number
	/**
	 * Every percent bonus to `stat` the items and modifiers give, added together - the weapon
	 * damage percents of items, investment and kills add up, and so do the bullet velocity
	 * percents, with what the owner's abilities add to the next bullet
	 * (`Ability.BulletSpeedBonus`): 60 and 200 make 260 %. Spirit range and radius percents
	 * stack the way the game stacks them instead, each source taking its share of what the others
	 * leave: 30 % and 40 % make 58 %.
	 */
	public GetBonusPercent(stat: EStatsType): number
	/**
	 * The weapon damage percent the owner's items add against a target `distance` world units
	 * away, each by its own reach: Close Quarters' below the distance it reaches, Long Range's and
	 * Sharpshooter's from their minimum on. The game measures this distance between the two
	 * heroes' positions, not along the bullet.
	 */
	public GetRangeBonus(distance: number): number
	/**
	 * The weapon damage percent the owner's abilities and items add against `target` by the
	 * target's state, each one's `Ability.GetWeaponDamageBonus` summed: Opening Rounds' against a
	 * target above its health threshold. It counts for gun bullets, the abilities that deal weapon
	 * damage and Kinetic Carbine's shot.
	 */
	public GetTargetBonus(target: PlayerPawn): number
	/**
	 * The hero's resistance in percent to the damage `stat` stands for, `ETechArmorDamageReduction`
	 * or `EBulletArmorDamageReduction`: its base and boon resistance with what
	 * `UnitStore.ScalingStats` adds from another stat, then each item's and modifier's stacked on
	 * what the others leave (20 % and 40 % make 52 %), less the reductions it wears, stacked among
	 * themselves the same way. Below zero it amplifies the damage.
	 */
	public GetResist(stat: EStatsType): number
	/**
	 * How many percent more `attacker`'s hits of `type` deal the unit, paid as rows of their own
	 * beside each hit on what it dealt after resistance: what every modifier the unit wears adds
	 * for that attacker (`Modifier.GetAmplification`) - the attacker's own debuffs on it, Pulse
	 * Grenade's for Paradox alone.
	 */
	public GetAmplification(attacker: Entity, type: EDamageType): number
	/**
	 * `value` added up over every modifier on the hero that registers it
	 * (`ModifierMapFieldHandler`), leaving out an amount its handler flags; 0 where none does.
	 */
	public GetRegistered(value: EModifierValue): number
	/**
	 * The share `value` leaves the hero with: every modifier that registers it takes its percent
	 * off what the others leave, or adds it on, leaving out an amount its handler flags. -10 and
	 * -40 make 0.54, where added up they would make 0.5; 1 where none registers it. The game
	 * stacks the gravity a hero's gun and its items change this way.
	 */
	public GetRegisteredScale(value: EModifierValue): number
	/**
	 * The most any one source gives the hero of `value`: an ability or item that gives it for
	 * good (`AbilityStore.ProvidedProperties`), under the upgrades it holds, or a modifier on the
	 * hero that registers it, leaving out an amount its handler flags; 0 where none gives it.
	 * The game counts air control this way: Celeste's gun gives 44 percent and Magic Carpet 25,
	 * and with both she has 44.
	 */
	public GetHighest(value: EModifierValue): number
	/**
	 * Registers each handler of `declared` when `isCreate`, and removes them otherwise; nothing
	 * for `undefined`. A `Modifier` calls it as it lands on the hero and as it leaves.
	 */
	public AddOrRemoveInternal(declared: Nullable<ModifierMapFieldHandler>, isCreate: boolean): void
	/**
	 * What the hero's abilities give `stat` for abilities with charges alone
	 * (`AbilityStore.ChargedOnlyStats`), each property at its upgraded value. `Ability` adds it to
	 * the stat its values scale by when it `IsCharged`.
	 */
	public GetChargedAbilityStat(stat: EStatsType): number
	/**
	 * Recounts what the owner's abilities and items give it for good
	 * (`AbilityStore.ProvidedProperties`), each property under the upgrades its ability holds
	 * (`Ability.GetUpgradedProperty`): an item's enhancement and corruption count, as a hero
	 * ability's bought tiers do. Runs whenever the owner's abilities or their upgrades change.
	 */
	public RebuildItemStats(): void
}
