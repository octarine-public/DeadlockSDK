// AUTO-GENERATED - do not edit.
/**
 * The hero body a {@link Player} drives, with its abilities and items ({@link Spells}), stats and
 * melee. The scoreboard and the respawn timer are the controller's.
 */
declare class PlayerPawn extends Entity {
	/** The hero's data from the game files, by {@link HeroID}; `UnitStore.empty` until known. */
	public UnitStore: UnitStore
	/**
	 * The hero's stats with what its items, modifiers and boons add: spirit and weapon power,
	 * resists, and `GetBonusStat` for any other.
	 */
	public readonly ModifierManager: ModifierManager
	/**
	 * The hero's eye angles as the pawn networks them; zero for the hero at this client, whose aim
	 * the pawn carries in {@link AngClientCamera}. {@link AimAngles} answers whichever is set.
	 */
	public readonly AngEyeAngles: QAngle
	/**
	 * The angles of the hero's camera as the pawn networks them, the only aim it fills in for the
	 * hero at this client. {@link CameraAngles} answers whichever is set.
	 */
	public readonly AngClientCamera: QAngle
	/**
	 * The handle of the ability the hero has selected; {@link SelectedSpell} resolves it, stand-in
	 * included. `AbilitySelected` fires when it changes.
	 */
	public readonly SelectedAbility: number
	/** The handle of the ability the hero had selected before {@link SelectedAbility}. */
	public readonly PreviouslySelectedAbility: number
	/** Truthy while the server flags the hero's player as disconnected from the network. */
	public readonly NetworkDisconnected: number
	/** The punch on the hero's view angles, as the pawn networks it. */
	public readonly NetworkedPunchAngle: Vector3
	/** How fast {@link NetworkedPunchAngle} changes, as the pawn networks it. */
	public readonly NetworkedPunchAngleVel: Vector3
	/**
	 * Stamina at {@link StaminaLatchTime}; the pawn networks the latch, not the value. The pawn
	 * latches its ability resource under the same field names, each under the node of its own.
	 */
	public readonly StaminaLatchValue: number
	/**
	 * The game time {@link StaminaLatchValue} was taken at, on the same clock as
	 * `GameState.RawGameTime`; {@link Stamina} regenerates from there.
	 */
	public readonly StaminaLatchTime: number
	/** The hero's amount of each currency, as the pawn networks them. */
	public readonly Currencies: number[]
	/** How much of each currency the hero has spent, as the pawn networks it. */
	public readonly SpentCurrencies: number[]
	/**
	 * The items the hero has queued for quick buy, in the order they are bought, each by its data
	 * id (`AbilityStore.SubclassID`).
	 */
	public readonly QuickbuyQueue: number[]
	/**
	 * The hero's items marked to be sold when a queued item needs their slot, each by its data id
	 * (`AbilityStore.SubclassID`).
	 */
	public readonly QuickbuySellQueue: number[]
	/**
	 * The hero's items that still sell for all that was paid for them, each by its data id
	 * (`AbilityStore.SubclassID`); any other sells for `citadel_item_sell_price_ratio` of its price.
	 */
	public readonly FullSellPriceItems: number[]
	/**
	 * Game time the server shows the hero on the enemy's map until, through walls, 0.75 s past the
	 * last look of a unit of the enemy that is not a hero and saw it. Written only while the server
	 * runs citadel_player_reveal_notif, which it does not by default; 0 otherwise.
	 */
	public readonly LastRevealTime: number
	/**
	 * Game time of the last check that found the hero in an enemy hero's sight, refreshed on every
	 * check that finds it there; 0 before the first.
	 */
	public readonly LastPlayerRevealTime: number
	/**
	 * The hero's abilities and items in the order the pawn lists them. An entry this client has no
	 * entity for holds a stand-in (`Ability.IsNetworked` false) for one the controller or the
	 * hero's data names and no entity covers, its slot a guess until a modifier or damage names
	 * it, or `undefined` when none is left; the hero at this client gets no stand-ins.
	 * `EntityAbilitiesChanged` fires when an entry changes.
	 */
	public readonly Spells: Nullable<Ability>[]
	/** The hero's id (`UnitStore.HeroID`), copied from the {@link Player} owning it; -1 before. */
	public HeroID: number
	/**
	 * The view angle changes the server makes to the hero, as the pawn networks them: each an angle
	 * set absolute or relative (`ViewAngleServer.Type`).
	 */
	public ServerViewAngleChanges: ViewAngleServer[]
	/**
	 * The items built into the hero's items, each by its data id (`AbilityStore.SubclassID`): the
	 * shop sells none of them to the hero while the item it went into is there.
	 */
	public ConsumedComponents: number[]
	/**
	 * Those of {@link ConsumedComponents} the hero had bought before the item they went into.
	 * Selling that item for all that was paid gives them back and takes their price off the sale.
	 */
	public PurchasedComponents: number[]
	/** The hero's level, read from the {@link Player} that owns it; 0 while there is none. */
	public get Level(): number
	/**
	 * The hero's maximum health, read from the {@link Player} that owns it
	 * ({@link Player.BaseMaxHP}); the pawn's own while there is none.
	 */
	public get MaxHP(): number
	/**
	 * The hero's health regeneration per second, read from the {@link Player} that owns it; 0 while
	 * there is none.
	 */
	public get HPRegen(): number
	/** The controller driving this pawn, or `undefined` while this client has no entity for it. */
	public get Controller(): Nullable<Entity>
	/** The game path of the hero's small icon (`UnitStore.IconImageSmall`); empty until known. */
	public get TexturePath(): string
	/** The hero's collision radius in world units, from its data; 0 until the hero is known. */
	public get CollisionRadius(): number
	/**
	 * Whether the hero stands on the ground (`FL_ONGROUND`), as of the last server tick this
	 * client received: a jump just sent still reads as standing until the server has run it.
	 */
	public get IsOnGround(): boolean
	/**
	 * The most {@link Stamina} the hero holds: its data's starting stamina with what its items,
	 * modifiers and boons add.
	 */
	public get MaxStamina(): number
	/**
	 * How much stamina the hero regains a second: its data's starting rate with what its items,
	 * modifiers and boons add, a worn buff's percent among them. 0 while a modifier pauses the
	 * regain (`MODIFIER_STATE_STAMINA_REGEN_PAUSED`: Net Shot's net, Arctic Blast's slow).
	 */
	public get StaminaRegenPerSecond(): number
	/**
	 * The share of the world's gravity (`sv_gravity`) the hero falls with: its
	 * {@link GravityScale} times the share each modifier on it leaves
	 * (`MODIFIER_VALUE_GRAVITY_SCALE`, `ModifierManager.GetRegisteredScale`). 0.75 for Celeste,
	 * whose gun keeps a `modifier_hero_gravity` of a quarter off on her, and 0.54 for Ivy with
	 * Magic Carpet, a tenth off and four tenths off; never below 0.
	 */
	public get EffectiveGravityScale(): number
	/** Dashes available right now: the latched value plus what has regenerated since. */
	public get Stamina(): number
	/**
	 * Where the hero looks. The pawn networks the eye angles of every player but the one at this
	 * client, whose own aim rides the camera instead, so whichever of the two is filled in is the
	 * one that answers.
	 */
	public get AimAngles(): QAngle
	/**
	 * Where the camera this hero aims with looks. The pawn networks `m_angClientCamera` beside the
	 * eye angles: for the local hero only the camera is filled in, and for the others the two have
	 * read the same, so whichever is filled in answers.
	 */
	public get CameraAngles(): QAngle
	/**
	 * How far from the hero's origin the server takes the camera position a command carries as
	 * it is, in world units. One further out it pulls straight back towards
	 * {@link CommandCameraEye}, and one the world hides from that eye it stops at the first
	 * surface between them.
	 */
	public get CommandCameraReach(): number
	/**
	 * The eye the server measures a command's camera position from, written to `out`: 85 units
	 * above the origin. A camera out of {@link CommandCameraReach} is pulled towards it, and one
	 * the world hides from it is stopped where the world stands in between.
	 */
	public CommandCameraEye(out: Vector3): Vector3
	/**
	 * Room, in world units, to keep around a command's camera position so that the server takes
	 * it where it is: one standing too close to the world is moved. A margin known to be enough,
	 * not the server's exact limit.
	 */
	public get CommandCameraRoom(): number
	/**
	 * How far the melee carries, in world units, after this hero own melee range bonuses: how far
	 * down its own aim the swing reaches.
	 */
	public get MeleeReach(): number
	/**
	 * How far the charged melee's dash carries this hero, in world units: the farthest heavy
	 * attack's movement curve, stretched by the travel percents its items add up to - Melee
	 * Charge's 50, Crushing Fists' 60, Runed Gauntlets' 150. The dash keeps its length in time
	 * and covers the extra ground faster: measured 242 units bare, 380 with Crushing Fists, 600
	 * with Runed Gauntlets and 749 with both.
	 */
	public get MeleeDashDistance(): number
	/**
	 * How far the charged melee's dash carries this hero between `from` and `to` seconds into it,
	 * in world units: the stretch of its movement curve that span covers, by the same items as
	 * {@link MeleeDashDistance}. Where the dash has got to matters - it starts at 470 units a
	 * second and reaches 800 a fifth of a second in, before any item.
	 */
	public MeleeDashTravel(from: number, to: number): number
	/**
	 * How long the charged melee's dash takes this hero to cover `distance` world units from
	 * `from` seconds into it, by the same items as {@link MeleeDashTravel}: the inverse of that,
	 * `Infinity` where the dash runs out first.
	 * @example
	 * const swingsIn = enemy.MeleeDashTime(0, enemy.MeleeDashStop(hero))
	 */
	public MeleeDashTime(from: number, distance: number): number
	/**
	 * How far across the ground the charged melee's dash runs down `direction` from `origin`
	 * before it stops at `target`, in world units: the dash halts once its hull comes within half
	 * the melee's collision distance of the target's hull, and swings from there. 0 where they
	 * start that close, `Infinity` where its line never brings them there and the dash runs its
	 * whole length. The blow lands on the tick the dash stops.
	 *
	 * @param origin where the dash starts from; this hero's own position by default
	 * @param direction where the dash heads across the ground; where their camera looks by default
	 * @example
	 * const run = Math.min(enemy.MeleeDashStop(hero), enemy.MeleeDashDistance)
	 */
	public MeleeDashStop(target: Entity, origin?: Vector3, direction?: Vector3): number
	/**
	 * How wide the swing is where it leaves the hero, in world units: the radius of the ball the
	 * game drags down the aim, and so of the narrow end of the swing. The data gives the distance
	 * at which two of them collide, so one side of it is half that, and the ball stays inside the
	 * hero it swings from.
	 */
	public get MeleeWidth(): number
	/**
	 * Half the angle the data gives the melee, in degrees: the `MeleeHalfAngle` its tooltip
	 * shows. The swing does not open that far — {@link MeleeOpening} is how far it does.
	 */
	public get MeleeHalfAngle(): number
	/**
	 * Half the angle the swing opens at, in degrees: the ball is dragged down a cone this wide, so
	 * the swing is {@link MeleeWidth} across where it starts and grows by the tangent of this for
	 * every unit down the aim. A fixed 20, not the data's wider {@link MeleeHalfAngle}.
	 */
	public get MeleeOpening(): number
	/**
	 * How wide the swing is `along` units down its aim, in world units: the ball of
	 * {@link MeleeWidth} laid across the slant of the cone where it starts, opening by the tangent
	 * of {@link MeleeOpening} for every unit down the aim, and no wider than it starts behind
	 * where it starts. This is the swing's own body; {@link MeleeGap} widens it by each hitbox's
	 * own radius the same way and catches the hitbox inside that.
	 * @example
	 * const bell = enemy.MeleeSpread(enemy.MeleeReach) // the wide end
	 */
	public MeleeSpread(along: number): number
	/**
	 * Where the swing starts: the middle of the hero rather than the ground they stand on, since
	 * the horn opens off the body.
	 * @param at where the hero stands; their own position by default
	 */
	public MeleeOrigin(at?: Vector3): Vector3
	/**
	 * How far outside the sides of the swing `target` sits, in world units: the distance from
	 * the swing's own line to the nearest of the target's hitboxes, less how wide the swing is at
	 * that depth and how thick that hitbox is. It is `0` while a hitbox stands inside the horn,
	 * however far down it, and above zero by however far the swing passes the target by.
	 *
	 * @param origin where the hero stands as the swing lands; their own position by default
	 * @param direction where the swing is aimed; where their camera looks by default
	 * @example
	 * const past = enemy.MeleeSideGap(hero) // above zero while the swing goes by
	 */
	public MeleeSideGap(target: Entity, origin?: Vector3, direction?: Vector3): number
	/**
	 * Whether a melee swing thrown from here lands on `target`: {@link MeleeGap} at or below zero.
	 * The swing is sized from the game's ability data, so it answers for an enemy whose ability
	 * entity never reaches this client. The attacker keeps moving until the swing connects, so a
	 * caller predicting a hit passes where they will be standing by then.
	 *
	 * @param origin where the hero stands as the swing lands; their own position by default
	 * @param direction where the swing is aimed; where their camera looks by default
	 * @example
	 * const incoming = enemy.MeleeWouldHit(hero)
	 */
	public MeleeWouldHit(target: Entity, origin?: Vector3, direction?: Vector3): boolean
	/**
	 * How far the swing falls short of `target`, in world units: `Infinity` while none of its
	 * bone spheres ({@link Entity.BoneSpheres}) stands inside the horn, which leaves
	 * {@link MeleeOrigin} {@link MeleeWidth} across, opens at {@link MeleeOpening} and widens by
	 * each sphere's radius, half the hull's width standing in for a target with none. Inside, how
	 * much further the target's middle stands from the swing's start than {@link MeleeReach} and
	 * half its hull's width; negative by however far the swing reaches past it.
	 *
	 * @param origin where the hero stands as the swing lands; their own position by default
	 * @param direction where the swing is aimed; where their camera looks by default
	 * @example
	 * const safe = enemy.MeleeGap(hero) > -64 // inside the swing, but only just
	 */
	public MeleeGap(target: Entity, origin?: Vector3, direction?: Vector3): number
	/** The first of {@link Spells} that is a `class_`, stand-ins included, or `undefined`. */
	public GetAbilityByClass<T extends Ability>(class_: Constructor<T>): Nullable<T>
	/** The first of {@link Spells} whose data name (`Ability.Name`) is `name`, or `undefined`. */
	public GetAbilityByName(name: string): Nullable<Ability>
	/**
	 * The gun the hero fires: the weapon in the primary weapon slot. Yamato, Shiv, Viscous and
	 * Skyrunner carry a second weapon of the same class, which may come first among the spells.
	 */
	public get PrimaryWeapon(): Nullable<citadel_ability_primary_weapon>
	/**
	 * Whether a press of one of the hero's items still holds its key (`Ability.IsPressing`): the
	 * game takes one item at a time, so `Ability.Use` holds the next item back until then
	 * (`TakesItemPress`).
	 */
	public get IsPressingItem(): boolean
	/**
	 * Whether the hero takes a press of another of its items, one at a time: no press of its items
	 * holds its key (`IsPressingItem`), and none of its items winds up, channels or waits selected
	 * in its targeting - a press then would cancel the targeting, or wait and open its own.
	 * `Ability.TakesPress` adds what each item asks of the hero being busy.
	 */
	public get TakesItemPress(): boolean
	/**
	 * Whether a press of one of the hero's abilities, not its items, is on its way
	 * (`Ability.IsOnItsWay`): the game may already be running that cast, and the hero be busy with
	 * it, before this client sees it.
	 */
	public get IsCastOnItsWay(): boolean
	/**
	 * Whether a cast of one of the hero's abilities or items holds the hero in it
	 * (`Ability.IsCasting`): a wind-up, a channel such as Riposte's guard, or what a wrapper adds,
	 * as Flying Strike's grapple. Another hero's cast is the tracker's estimate
	 * (`AbilityCooldownTracker.GetCastEstimate`).
	 */
	public get IsCasting(): boolean
	/**
	 * Whether the game takes a press of one of the hero's abilities now: the hero is not busy with
	 * an action (`IsBusyWithAction`), or what keeps it busy is a post-cast the game queues the
	 * press behind (`AbilityPressQueuedUntil`), winding the ability up the moment the post-cast
	 * ends. A press made earlier in the post-cast comes too early for the queue and is dropped
	 * (`DropsAbilityPress`); a wind-up, a channel or another action that keeps the hero busy leaves
	 * this false until it ends.
	 * @example
	 * if (local.TakesAbilityPress && ability.CanBeCasted(target)) {
	 * 	ability.Use(cmd)
	 * }
	 */
	public get TakesAbilityPress(): boolean
	/**
	 * The game time the post-cast that keeps the hero busy ends: while it is busy with an action
	 * (`IsBusyWithAction`) and no cast of its abilities or items runs (`Ability.IsCasting`), the
	 * latest `Ability.PostCastDelayEndTime` among them - in the past once that post-cast is over
	 * and something else keeps the hero busy. 0 while the hero is free or held in a cast: Flying
	 * Strike's post-cast starts with its grapple, which keeps the hero busy past it.
	 */
	public get BusyPostCastEnd(): number
	/**
	 * The game time a press of one of the hero's abilities made now waits for: the end of the
	 * post-cast that keeps the hero busy (`BusyPostCastEnd`), when it ends within
	 * `AbilityPress.QueueTime`. 0 outside that window: while the hero is free or held in a cast,
	 * and while a press made now comes too early for the queue (`DropsAbilityPress`).
	 */
	public get AbilityPressQueuedUntil(): number
	/**
	 * Whether the game drops a press of one of the hero's abilities made now: what keeps the hero
	 * busy is a post-cast (`BusyPostCastEnd`) that ends more than `AbilityPress.QueueTime` from
	 * now, too early for the game to queue the press behind it. `Ability.Use` and
	 * `Ability.PressKey` hold such a press back until the queue opens (`Ability.TakesPress`).
	 * False in a wind-up, a channel or a grapple: the game may drop a press there as well, but
	 * that is the caller's to judge.
	 */
	public get DropsAbilityPress(): boolean
	/** The ability the hero has selected; its stand-in where this client has no entity for it. */
	public get SelectedSpell(): Nullable<Ability>
	/**
	 * Whether one of the hero's abilities or items channels (`Ability.IsChanneling`). With
	 * `withTime`, on by default, one whose `Ability.Time` is not 0 counts as well.
	 */
	public IsChanneling(withTime?: boolean): boolean
}
