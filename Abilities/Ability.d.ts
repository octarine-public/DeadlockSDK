// AUTO-GENERATED - do not edit.
/**
 * What `Ability.GetAbilityDamage` and `Ability.GetDamage` take beside a target: the property the
 * damage comes from, a bonus and a multiplier on it, and what the weapon damage bonuses depend on.
 */
interface IDamageOptions {
	/** Which of the ability's properties the damage comes from; `Damage` when left out. */
	propName?: string
	/**
	 * Added to the scaled damage before `multiplier`, when that comes to more than 0; 0 when left
	 * out.
	 */
	flatBonus?: number
	/** What the damage, `flatBonus` included, is multiplied by; 1 when left out. */
	multiplier?: number
	/**
	 * How far the owner stands from the target, in world units, for the weapon damage percents
	 * its items give only within or beyond a range (Close Quarters, Long Range); without it none
	 * of them counts. `Ability.GetDamage` measures it itself.
	 */
	distance?: number
	/**
	 * The target the weapon damage percents its owner adds by a target's state count against
	 * (`ModifierManager.GetTargetBonus`: Opening Rounds' above half its health); without it none
	 * of them counts. `Ability.GetDamage` counts its own target.
	 */
	target?: PlayerPawn
}
/**
 * An ability entity: a hero's signature ability, item, weapon or one of the moves every hero has,
 * and the base every ability and item class extends. Where the server does not send another
 * hero's ability, the SDK puts a stand-in in its place (`IsNetworked`).
 */
declare class Ability extends Entity {
	/** The ability's data, found by its name; `AbilityStore.empty` for a name the data lacks. */
	public readonly AbilityStore: AbilityStore
	/** The last press of this ability's key, followed until the game shows it took. */
	public readonly LastPress: AbilityPress
	/** Whether the server has the ability toggled on. */
	public readonly IsToggled = false
	/**
	 * Whether the gun is reloading; it cannot attack meanwhile
	 * (`citadel_ability_primary_weapon.CanAttack`).
	 */
	public readonly InReload = false
	/** Whether the server lets the gun active-reload now. */
	public readonly CanActiveReload = false
	/** Whether the gun is zoomed in. */
	public readonly IsZoomed = false
	/** The gun's zoom-in time. */
	public readonly ZoomTime = 0
	/** The gun's zoom-out time. */
	public readonly ZoomOutTime = 0
	/** The gun's current spread penalty. */
	public readonly SpreadPenalty = 0
	/**
	 * The game time the gun can fire again from, in seconds
	 * (`citadel_ability_primary_weapon.CanAttackByTime`).
	 */
	public readonly NextPrimaryAttack = 0
	/** The slot the ability sits in, which sets its key (`KeyMask`); `ESlot_Invalid` if unknown. */
	public AbilitySlot: EAbilitySlots
	/**
	 * Above 0 while the ability holds its owner's movement, as a dash or a grapple does
	 * (`ability_nano_dash.IsDashing`); 0 otherwise.
	 */
	public readonly MovementControlActiveTime = 0
	/**
	 * Whether the ability channels now; on a stand-in, as `AbilityCooldownTracker` estimates it
	 * (`IsNetworked`). `AbilityChannelingChanged` fires when it changes.
	 */
	public IsChanneling: boolean
	/**
	 * Whether the ability is in its wind-up: networked for the local hero's own, estimated by
	 * `AbilityCooldownTracker` for another hero's stand-in. `AbilityWindupChanged` fires
	 * whenever it or {@link CastDelayStartTime} changes, whichever of the two set it.
	 */
	public InCastDelay: boolean
	/**
	 * A game time, in seconds, a few ability classes network for their own state, as Flame Dash
	 * does for its dash (`ability_flame_dash.IsDashing`); 0 on any other ability.
	 */
	public readonly Time = 0
	/**
	 * How many charges the ability has left, for one with charges (`IsCharged`); on a stand-in,
	 * as `AbilityCooldownTracker` estimates them.
	 */
	public RemainingCharges: number
	/**
	 * The game time the recharge of the ability's next charge began at, in seconds; on a
	 * stand-in, as `AbilityCooldownTracker` estimates it.
	 */
	public ChargeRechargeStart: number
	/**
	 * The game time the ability's next charge is back at, in seconds. With no charge left,
	 * `Cooldown` counts down to it.
	 */
	public ChargeRechargeEnd: number
	/**
	 * The data ids (`AbilityStore.SubclassID`) of the abilities imbued into this item, as one is
	 * into Echo Shard (`upgrade_ability_power_shard.Renews`).
	 */
	public readonly ImbuedAbilities: number[]
	/** When the wind-up {@link InCastDelay} reports began, in game time; 0 outside one. */
	public CastDelayStartTime: number
	/**
	 * The game time the post-cast of the ability's last cast ends at: the
	 * `AbilityPostCastDuration` after the cast completes, through which the data may keep its
	 * owner busy (`PlayerPawn.TakesAbilityPress`). In the past once it ended.
	 */
	public readonly PostCastDelayEndTime = 0
	/** The gun's spread index. */
	public readonly SpreadIndex = 0
	/** The gun's shot recoil index. */
	public readonly ShotRecoilIndex = 0
	/** The time of the gun's next shot recoil recovery. */
	public readonly NextShotRecoilRecoveryTime = 0
	/** The start time of the gun's queued reload. */
	public readonly ReloadQueuedStartTime = 0
	/** The gun's shot number. */
	public readonly ShotNumber = 0
	/** How many shots of the gun's burst are left. */
	public readonly BurstShotsRemaining = 0
	/** Whether the gun's input was pressed while it was selected. */
	public readonly IsInputPressedWhileSelected = false
	/** Which of the gun's fire modes is active: primary, secondary or none. */
	public readonly ActiveFireMode = 0
	/**
	 * What holds the gun's next attack back; `EDelayReasonCount` while nothing does, which
	 * `citadel_ability_primary_weapon.CanAttack` requires.
	 */
	public readonly NextAttackDelayReason = ENextAttackDelayReason.EDelayReasonCount
	/** Whether the gun's single-shot reload is on its first bullet. */
	public readonly SingleShotReloadFirstBullet = false
	/** The time the gun's reload becomes available. */
	public readonly ReloadAvailableTime = 0
	/** The time of the gun's last attack. */
	public readonly LastAttackTime = 0
	/** When the delay `NextAttackDelayReason` names began. */
	public readonly NextAttackDelayStartTime = 0
	/** When the delay `NextAttackDelayReason` names ends. */
	public readonly NextAttackDelayEndTime = 0
	/** How long the gun's attack delay has been paused in all. */
	public readonly AttackDelayPauseTotalTime = 0
	/** When the pause of the gun's attack delay ends. */
	public readonly AttackDelayPauseEndTime = 0
	/** The game time the ability's last cast completed at, in seconds; 0 while it has none. */
	public readonly CastCompletedTime = 0
	/**
	 * The power level the server networks for Yamato's Power Slash and Apollo's Flawless
	 * Advance; 0 on any other ability.
	 */
	public readonly PowerLevel = 0
	/** When the ability was last selected or deselected. */
	public readonly SelectedChangedTime = 0
	/**
	 * Whether this is the server's own entity; `false` for a stand-in. An ability entity reaches
	 * its owner alone, so for every other hero the SDK stands one in, with real name, data, owner,
	 * slot and upgrades. A stand-in ultimate's cooldown is the one the controller networks; other
	 * cooldowns, and the charges, wind-up and channel, are what `AbilityCooldownTracker` estimates
	 * from the casts it sees. Every other networked field keeps its default.
	 */
	public IsNetworked: boolean
	/**
	 * The game time the ability's cooldown ends at, in seconds; on a stand-in, as `IsNetworked`
	 * says. `AbilityCooldownChanged` fires when it changes.
	 */
	public CooldownEnd: number
	/**
	 * The game time the ability's cooldown started at, in seconds; on a stand-in, as `IsNetworked`
	 * says. `AbilityCooldownChanged` fires when it changes.
	 */
	public CooldownStart: number
	/**
	 * 0 until the ability is unlocked, then 1 plus every upgrade tier it holds; an item's
	 * corruption does not count. `AbilityLevelChanged` fires when it changes.
	 */
	public Level: number
	/**
	 * The upgrades the ability holds: bit `i` for tier `i` of `Upgrades`, and bit 6 (64) for a
	 * corrupted item (`IsCorrupted`).
	 */
	public UpgradeBits: number
	/**
	 * The game time the ability's last channel began at, in seconds; it stays after the channel
	 * ends. `AbilityChannelingChanged` fires when it changes.
	 */
	public ChannelStartTime: number
	/** 0 unless a script sets it: nothing in the SDK does. */
	public CooldownRestoreTime: number
	/**
	 * The spread penalty per shot the ability's weapon data declares
	 * (`m_flShootSpreadPenaltyPerShot`); 0 where it declares none.
	 */
	public get ShootSpreadPenaltyPerShot(): number
	/**
	 * The upgrades the ability can hold, one list per tier (`AbilityStore.Upgrades`): a hero
	 * ability's three, an item's one, its enhancement. `UpgradeBits` says which it holds.
	 */
	public get Upgrades(): IPropertyUpgrade[][]
	/** The opposite of `IsInnateHidden`, so `true` for every ability. */
	public get ShouldBeDrawable(): boolean
	/**
	 * How fast the ability's bullet flies, in world units a second, as its weapon data declares
	 * it (`m_flBulletSpeed`); 0 where it declares none. A gun adds its owner's bonuses
	 * (`citadel_ability_primary_weapon.BulletSpeed`).
	 */
	public get BulletSpeed(): number
	/**
	 * The radius of the ability's bullet, as its weapon data declares it (`m_flBulletRadius`); 0
	 * where it declares none.
	 */
	public get BulletRadius(): number
	/** Seconds the bullet lives in flight; 0 where the data leaves the engine default to stand. */
	public get BulletLifetime(): number
	/** How far the primary weapon's shots carry, in world units; 0 where the data declares none. */
	public get BulletRange(): number
	/**
	 * The pace the ability's projectile sets out at, in world units a second, from its own
	 * projectile definition; 0 where the ability declares none.
	 */
	public get ProjectileSpeed(): number
	/**
	 * Whether the ability's projectile starts on the ray of the camera position sent with the
	 * command, not at the hero. A camera moved beside cover, within the owner's
	 * `PlayerPawn.CommandCameraReach`, then sends it past cover the hero stands behind. `false`
	 * for every ability this has not been confirmed for in game.
	 */
	public get LaunchesFromCamera(): boolean
	/**
	 * How far from its centre the ability's projectile touches what it passes, in world units;
	 * 0 where the ability declares none.
	 */
	public get ProjectileTriggerRadius(): number
	/**
	 * How fast the ability's projectile falls, in world units a second squared: the world's
	 * gravity (`sv_gravity`) times the projectile's own `m_flGravityScale`; 0 for one that flies
	 * straight.
	 */
	public get ProjectileGravity(): number
	/**
	 * Degrees off the aim a unit-targeted cast still acquires its target in; 0 where the
	 * ability declares no cone.
	 */
	public get TargetingConeAngle(): number
	/** The traits of the owning hero's gun; none for an ability without a hero owner. */
	public get WeaponAttributes(): ECitadelWeaponAttributes
	/**
	 * How strongly the ability's bullet falls, as a multiple of the world's gravity
	 * (`sv_gravity`), from its weapon data (`m_flBulletGravityScale`); 0 for one that flies
	 * straight.
	 */
	public get BulletGravityScale(): number
	/**
	 * The scale on its shooter's velocity the ability's bullet takes on, as its weapon data
	 * declares it (`m_flBulletInheritShooterVelocityScale`); 0 where it declares none.
	 */
	public get BulletInheritShooterVelocityScale(): number
	/**
	 * Whether the ability channels or its class has a `Time` other than 0;
	 * `PlayerPawn.IsChanneling` counts it unless called with `false`.
	 */
	public get IsChannelingWithTime(): boolean
	/**
	 * The vertical punch the ability's weapon data declares (`m_flVerticalPunch`); 0 where it
	 * declares none.
	 */
	public get VerticalPunch(): number
	/**
	 * The recoil recovery speed the ability's weapon data declares (`m_flRecoilRecoverySpeed`); 0
	 * where it declares none.
	 */
	public get RecoilRecoverySpeed(): number
	/**
	 * The horizontal punch the ability's weapon data declares (`m_flHorizontalPunch`); 0 where it
	 * declares none.
	 */
	public get HorizontalPunch(): number
	/**
	 * The entity that owns the ability, the hero for a hero's ability or item; `undefined` while
	 * this client does not know it.
	 */
	public get Owner(): Nullable<Entity>
	/**
	 * The behaviors the ability's data declares, one bit per `EAbilityBehavior` position;
	 * `HasBehavior` tests one.
	 */
	public get AbilityBehaviorMask(): bigint
	/** The declared cast location, independent of which units the effect may affect. */
	public get TargetingLocation(): EAbilityTargetingLocation
	/** The targeting preview shape; it does not by itself describe the hit volume. */
	public get TargetingShape(): EAbilityTargetingShape
	/** What a cast deals before its target answers: `GetAbilityDamage` with no options. */
	public get AbilityDamage(): number
	/**
	 * The spirit power this ability adds to its owner's right now beyond what its data registers
	 * for good: a bonus its own code switches on, such as Abstract Landscape's while the display
	 * stands. `ModifierManager.GetBonusStat` counts it; 0 for an ability that adds none.
	 */
	public get SpiritBonus(): number
	/**
	 * The bullet velocity percent this ability adds to its owner's next gun bullet right now beyond
	 * what its data registers for good: what its own code adds, such as Express Shot's proc while
	 * it is off cooldown. `ModifierManager.GetBonusPercent` counts it; 0 for an ability that adds
	 * none.
	 */
	public get BulletSpeedBonus(): number
	/**
	 * Whether the ability has charges: its upgraded `AbilityCharges` is above 0. Its damage then
	 * counts the items' charged-ability bonuses (`GetAbilityDamage`).
	 */
	public get IsCharged(): boolean
	/**
	 * The damage a cast deals before its target answers, fractional as the game deals it: the
	 * upgraded `Damage` (or `options.propName`) plus its scale times the owner's value of the
	 * stat the data scales it by, plus `flatBonus`, times `multiplier`; 0 for a missing property
	 * or a sum of 0 or less before `flatBonus`. That value is every weapon damage percent (with
	 * `options.distance` and `options.target`), the boon count, the hero's own melee damage with
	 * every bonus, or another stat with the items' charged-ability bonus if this `IsCharged`.
	 */
	public GetAbilityDamage(options?: IDamageOptions): number
	/**
	 * Whether the item is corrupted (`ABILITY_UPGRADE_BIT_CORRUPTED`): its data's
	 * `AbilityStore.CorruptedUpgrades` are layered on top of it.
	 */
	public get IsCorrupted(): boolean
	/**
	 * The value, scaling stat and scale of the property `name` with every upgrade the ability
	 * holds: a hero ability's bought tiers, an item's enhancement and corruption
	 * (`AbilityStore.GetUpgradedProperty` under `UpgradeBits`). `undefined` for a property the
	 * data lacks.
	 */
	public GetUpgradedProperty(name: string): Nullable<IUpgradedProperty>
	/**
	 * The kind of damage this ability's `propName` deals: bullet damage for a property its data
	 * scales by weapon damage (`EBaseWeaponDamageIncrease`) - Gutshot, Chimera Mk1's blast, Scrap
	 * Grenade -, spirit damage for any other, Kinetic Carbine's charged shot too. A wrapper names
	 * the pure damage its ability deals.
	 */
	public GetDamageType(propName?: string): EDamageType
	/**
	 * What a cast takes off `target`'s health, fractional as the game deals it: `GetAbilityDamage`
	 * at the owner's distance to the target unless `options.distance`, with what the owner adds
	 * by the target's state (`ModifierManager.GetTargetBonus`), dealt as the kind `GetDamageType`
	 * names (`GetDealtDamage`), plus the bursts the owner's items add to a spirit hit
	 * (`GetProcDamage`), less the target's barrier; never below 0. Without a target, the cast's
	 * own damage.
	 */
	public GetDamage(target: Nullable<PlayerPawn>, options?: IDamageOptions): number
	/**
	 * `raw` damage of `type` from this ability as the game reports it reaching `target`, the
	 * `PreDamage` of its `UnitDamage`: under the owner's outgoing multipliers (`OutgoingScale`)
	 * and the incoming damage increases the target wears (`ModifierManager.DamageTakenScale`),
	 * before resistance.
	 */
	public GetPreDamage(raw: number, target: PlayerPawn, type?: EDamageType): number
	/**
	 * `raw` damage of this ability as it lands on `target`, before any barrier: as it reaches the
	 * target (`GetPreDamage`) and through the target's resistance to `type`'s damage
	 * (`ModifierManager.GetResist`), bullet or spirit - nothing resists pure damage -, with the
	 * rows the owner's debuffs on the target add beside the hit (`ModifierManager.GetAmplification`).
	 */
	public GetDealtDamage(raw: number, target: PlayerPawn, type?: EDamageType): number
	/**
	 * The burst this item adds to a spirit hit of another of its owner's abilities that deals
	 * `dealt` to `target`; 0 for an ability that adds none. `GetDamage` adds it for each of the
	 * owner's other abilities and items.
	 */
	public GetProcDamage(_dealt: number, _target: PlayerPawn): number
	/**
	 * What this ability adds to one of its owner's shots landing on `target` after flying
	 * `travel` world units, on a weak point when `weakPoint`, as it lands - through the target's
	 * resistance, before its barrier: Flight's spirit damage on every bullet while Vindicta flies,
	 * the second firing Express Shot's proc makes of the shot. 0 for an ability that adds none.
	 * `citadel_ability_primary_weapon.GetBulletDamage` counts every one of its owner's.
	 * @param hits how many of the shot's bullets land; every one that can
	 * (`citadel_ability_primary_weapon.HitsPerShot`) when left out
	 */
	public GetBulletProcDamage(_target: PlayerPawn, _travel: number, _weakPoint: boolean, _hits?: number): number
	/**
	 * The weapon damage percent this ability adds to its owner's weapon damage against `target`
	 * right now beyond what its data registers for good - gun bullets, the abilities that deal
	 * weapon damage and Kinetic Carbine's shot -: what its own code adds by the target's state,
	 * such as Opening Rounds' against a target above half its health.
	 * `ModifierManager.GetTargetBonus` counts it; 0 for an ability that adds none.
	 */
	public GetWeaponDamageBonus(_target: PlayerPawn): number
	/** `false` for every ability: no ability class overrides it. */
	public get IsInnate(): boolean
	/** `false` for every ability: no ability class overrides it. */
	public get IsInnateHidden(): boolean
	/**
	 * Seconds since `ChannelStartTime`, never below 0. The start stays after the channel ends, so
	 * this keeps growing then: check `IsChanneling`.
	 */
	public get ChannelTime(): number
	/** Whether nothing is left of the cooldown, or of the recharge it waits on (`Cooldown`). */
	public get IsCooldownReady(): boolean
	/**
	 * Whether the ability's cooldown lets it be cast (`IsCooldownReady`). It does not ask whether
	 * the ability is learned (`Level`); `CanBeCasted` builds on it.
	 */
	public get IsReady(): boolean
	/**
	 * Whether this is an item (`Item`): `Use` taps its item key instead of requesting the cast,
	 * and muting or disabled items keep it from casting where silence does not.
	 */
	public get IsItem(): boolean
	/**
	 * The panorama path of the ability's icon: an item's large shop icon (`m_strShopIconLarge`),
	 * any other ability's image (`m_strAbilityImage`), the HUD's roll icon for the dash every hero
	 * has; empty where there is none.
	 */
	public get TexturePath(): string
	/** Always 0: what it counts down from is never set. */
	public get CooldownRestore(): number
	/**
	 * Seconds left of the ability's cooldown, 0 once it is over; with no charge left and one
	 * recharging, of that recharge instead.
	 */
	public get Cooldown(): number
	/**
	 * How much of the cooldown `Cooldown` counts down is left, in percent of its whole length; 0
	 * for one with no length.
	 */
	public get CooldownPercent(): number
	/**
	 * How far the ability can be cast, in world units: its upgraded `AbilityCastRange`, or the
	 * property its class reads instead, with the owner's spirit range bonus; 0 where the data
	 * gives none.
	 */
	public get CastRange(): number
	/**
	 * How far from its owner a cast of this ability reaches what it hits, in world units, the
	 * distance `CanHit` measures against: the cast range, unless the ability carries its effect
	 * further - a dash or charge that travels, an area put down ahead. 0 where nothing limits it.
	 */
	public get Reach(): number
	/**
	 * A property of this ability as the game applies it: its upgraded value with the owner's bonus
	 * to the spirit stat the data scales it by - spirit radius for an area, spirit range for a
	 * length, as `ModifierManager.GetBonusStat` adds it up from items and modifiers, and spirit
	 * duration for a duration. A property the data scales by none of them is its upgraded value,
	 * as `GetSpecialValue` gives.
	 * @example
	 * const aura = ability.GetScaledValue("Radius")
	 */
	public GetScaledValue(propertyName: string): number
	/**
	 * The radius of the area the ability acts in, in world units; 0 here, and given by the class
	 * of each ability that has one.
	 */
	public get AOERadius(): number
	/** 0 for every ability: no ability class overrides it. */
	public get MinAOERadius(): number
	/** `false` for every ability: no ability class overrides it. */
	public get UsesRotation(): boolean
	/** The charges the ability has left, as {@link RemainingCharges} holds them. */
	public get CurrentCharges(): number
	/**
	 * The value of the property `specialName` with every upgrade the ability holds, without its
	 * owner's bonuses (`GetScaledValue` adds the spirit ones); 0 for a property the data lacks.
	 */
	public GetSpecialValue(specialName: string): number
	/**
	 * The duration a property applies for after caster duration bonuses and, when supplied,
	 * the target's debuff resistance.
	 */
	public GetDuration(target?: Nullable<PlayerPawn>, propertyName?: string): number
	/**
	 * Whether a cast of the ability still runs and holds its owner in it: its wind-up or channel,
	 * and in a wrapper whatever else the cast holds its owner in, as Flying Strike's grapple. The
	 * post-cast after it is not part of it (`PostCastDelayEndTime`).
	 */
	public get IsCasting(): boolean
	/** Whether the behavior at this enum bit position is declared by the ability data. */
	public HasBehavior(flag: EAbilityBehavior): boolean
	/**
	 * Whether the last press of this ability's key is on its way to the game: sent, and the game
	 * has yet to show it took or lose it (`AbilityPress.OnItsWay`).
	 */
	public get IsOnItsWay(): boolean
	/**
	 * Whether the last press of this ability's key still holds it: on its way, or sent less than
	 * `AbilityPress.Settle` ago. The key is not pressed for another cast before that.
	 */
	public get IsPressing(): boolean
	/**
	 * Whether the data lets the ability be cast while its owner is busy with an action
	 * (`CASTABLE_WHILE_BUSY`, `CAST_EVEN_IF_BUSY_AND_EXCLUSIVE`): the game casts a press of it at
	 * once, neither queuing nor dropping it.
	 */
	public get CastsWhileBusy(): boolean
	/**
	 * Whether the game takes a press of this ability's key from its owner now, as `Use` and
	 * `PressKey` send it. An item needs an owner that takes another item press
	 * (`PlayerPawn.TakesItemPress`) and, unless it `CastsWhileBusy`, is neither busy with an action
	 * nor has an ability press on its way (`PlayerPawn.IsCastOnItsWay`). Any other ability is held
	 * back only while a post-cast too early for the game to queue the press keeps its owner busy
	 * (`PlayerPawn.DropsAbilityPress`), unless its own post-cast still runs or it `CastsWhileBusy`.
	 */
	public get TakesPress(): boolean
	/**
	 * Whether the ability goes on its own owner held with the alt-cast modifier: it is cast at a
	 * unit and the data lets the caster be that unit.
	 */
	public get SelfCasts(): boolean
	/**
	 * The button of this ability's key: a signature's ability key, an active item's item key;
	 * none for a slot no key casts.
	 */
	public get KeyMask(): bigint
	/**
	 * Casts this ability from a `CreateMove` listener and follows the press: a signature through
	 * the command's ability execution request, any other by its key (`KeyMask`). With `target` the
	 * owner, one that `SelfCasts` goes on its owner; another unit is named as the enemy hero the
	 * command aims at. Refused while the last press holds the key (`IsPressing`), while the owner
	 * does not take the press (`TakesPress`), for a slot no key casts, and while the owner holds it
	 * in targeting (`Confirm` places it), except for a cast on the owner.
	 * @returns whether the press was sent; called again every tick, a refused one goes out on the
	 * first tick the game takes it
	 * @example
	 * const local = LocalPlayer?.Hero
	 * if (local !== undefined && item.CanBeCasted()) {
	 * 	item.Use(cmd, local)
	 * }
	 */
	public Use(cmd: UserCmd, target?: Nullable<Entity>): boolean
	/**
	 * Presses this ability's key alone, from a `CreateMove` listener, the way the player's key
	 * does - without the cast's execution request: what an ability takes in the middle of its own
	 * cast, Seismic Impact's dive or Air Drop's drop, where a repeated cast request does nothing.
	 * The cast it acts on has to have shown: refused while the last press is on its way
	 * (`IsOnItsWay`), and otherwise as `Use` is. Follows the press like `Use`. Whether it pressed.
	 */
	public PressKey(cmd: UserCmd): boolean
	/**
	 * Places the cast its owner holds this ability in targeting for with primary fire, from a
	 * `CreateMove` listener, and follows the press. Refused unless the owner holds it in
	 * targeting now, and while the last press of it still holds the key. Whether it pressed.
	 */
	public Confirm(cmd: UserCmd): boolean
	/**
	 * Whether a cast of this ability can start now, on `target` when given: it `IsReady`, its owner
	 * is alive and neither stunned, asleep, command-restricted nor silenced (for an item: muted or
	 * with items disabled), nor kept from movement abilities when this is one, and the target is
	 * neither invulnerable nor out of the game.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/**
	 * Whether a cast of this ability from where its owner stands reaches `target`: the owner alive,
	 * neither stunned nor silenced, and the target's hull within `Reach`, where one limits it.
	 */
	public CanHit(target: Entity): boolean
}
