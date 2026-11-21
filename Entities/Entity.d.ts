// AUTO-GENERATED - do not edit.
/**
 * The local player's `Player` entity, from its creation until it is destroyed; `undefined`
 * outside a game. Its hero is `LocalPlayer.Hero`.
 */
declare var LocalPlayer: Nullable<Player>
/** The game rules entity, or `undefined` while there is none. */
declare let GameRules: Nullable<CGameRules>
/**
 * Turns the visibility traces off with `true` and back on with `false`. While they are off,
 * {@link Entity.IsVisibleRay} and {@link Entity.IsPointVisible} answer true where they would trace.
 */
declare function SetRayDisabled(state: boolean): void
/**
 * With `true` the visibility traces let smoke through (`ETraceMask.VisibilityThroughSmoke`); with
 * `false` smoke blocks them (`ETraceMask.Visibility`).
 */
declare function SetVisibilityMaskWanted(state: boolean): void
/**
 * A networked entity, and the base of every entity wrapper the SDK hands out through
 * `EntityManager` and the entity events.
 */
declare class Entity {
	/**
	 * Id of the data entry the entity is built from: the hash of the entry's name that
	 * `UnitStore`, `AbilityStore` and `MiscStore` look their entries up by.
	 */
	public SubclassID: number
	/** Current health; 0 until the server sends it. */
	public HP: number
	/**
	 * Maximum health as the entity itself networks it. {@link MaxHP} is the one to read: heroes
	 * and NPCs take theirs from elsewhere.
	 */
	public readonly BaseMaxHP: number
	/** Rate the entity's animation plays at; 1 until the server sends one. */
	public readonly PlaybackRate: number
	/** The shape the entity is solid as (`SOLID_BBOX`, `SOLID_VPHYSICS`, …). */
	public readonly SolidType: ESolidType
	/**
	 * Whether the entity is a platform a player stands on, and if so whether the player turns
	 * with its yaw.
	 */
	public readonly PlatformType: EEntityPlatformTypes
	/**
	 * How the engine works out the bounds surrounding the entity (`USE_HITBOXES`,
	 * `USE_OBB_COLLISION_BOUNDS`, …).
	 */
	public readonly SurroundType: ESurroundingBoundsType
	/** The entity's movement mode (`WALK`, `FLY`, `NOCLIP`, …). */
	public readonly MoveType: EMoveType
	/** How much of the world's gravity (`sv_gravity`) pulls on the entity; 1 for all of it. */
	public readonly GravityScale: number
	/**
	 * The modifier states the entity is in, as a bit vector: `EModifierState` value `n` is bit
	 * `n & 31` of word `n >>> 5`. {@link ModifierStates} lists them by name.
	 */
	public readonly EnabledStateMask: number[]
	/** The modifier states marked disabled on the entity, laid out as {@link EnabledStateMask}. */
	public readonly DisabledStateMask: number[]
	/**
	 * The entity's predicted modifier states, laid out as {@link EnabledStateMask}.
	 * {@link IsPredictedStateFlagSet} reads both masks.
	 */
	public readonly EnabledPredictedStateMask: number[]
	/**
	 * Whether a trace from the camera reaches the entity, as {@link UpdateVisibility} last found.
	 * Outside a pause the SDK refreshes enemy heroes every server tick, allied ones too while the
	 * local hero's weapon acts only on allies, and other enemy units in turn, a dozen a tick;
	 * those 100 m or more from the local hero read false. Nothing else is refreshed.
	 */
	public IsVisibleRay: boolean
	/**
	 * The modifiers the entity wears now. The array is the entity's own and changes as modifiers
	 * come and go: read it, do not modify it.
	 */
	public readonly Buffs: Modifier[]
	/** Whether the entity still exists; false from the moment the server deletes it. */
	public IsValid: boolean
	/** The server's network class name for the entity, such as `CCitadelTeam`. */
	public ClassName: string
	/** Resource path of the entity's model; "" while it has none or the path is unknown. */
	public ModelName: string
	/** The entities attached to this one: those whose {@link ParentEntity} it is. */
	public Children: Entity[]
	/**
	 * Whether the server networks the entity to this client now: false while it is dormant and
	 * after it is destroyed. A dormant entity keeps the values it last received.
	 */
	public IsVisible: boolean
	/** Whether this is the game rules entity, the one `GameRules` holds. */
	public IsGameRules: boolean
	/** A height offset. The SDK leaves it at 0 and reads it nowhere. */
	public DeltaZ: number
	/**
	 * Scale of the entity's model; 1 until the server sends one. It also scales where the
	 * entities attached to this one stand.
	 */
	public ModelScale: number
	/**
	 * Game time in seconds (`GameState.RawGameTime`) when the entity last went dormant or was
	 * destroyed; 0 until then.
	 */
	public BecameDormantTime: number
	/**
	 * Degrees {@link GetAngle} and {@link GetSourceAngleToForward} add to the facing when asked
	 * to. The SDK never sets it, so it stays 0 unless a script does.
	 */
	public RotationDifference: number
	/**
	 * The attachment of {@link ParentEntity} the entity hangs from, as the token the server
	 * sends. The SDK does not resolve it: {@link NetworkedPosition} follows the parent's own
	 * transform.
	 */
	public HierarchyAttachName: number
	/**
	 * The model's bones the SDK knows a type of (`EBoneType`), as `[name, index]` with the index
	 * into {@link TotalBones}. Empty until the model has loaded.
	 */
	public Bones: [string, number][]
	/**
	 * The skeleton's segments as pairs of the model's bone names, from the head down the spine to
	 * the arms and legs, for the bones the model has. Empty until it has loaded with bones the SDK
	 * knows.
	 */
	public BoneLinks: BoneData.BoneLink[]
	/**
	 * Names of every bone of the model, in the model's order; empty until it has loaded. Every
	 * entity of the same model shares the array: do not modify it.
	 */
	public TotalBones: string[]
	/**
	 * Radius of the sphere the model gives a bone, keyed by bone name, for the bones whose radius
	 * is above 0. Empty until the model has loaded, and shared by every entity of the same model.
	 */
	public BoneSpheres: Map<string, number>
	/**
	 * Native data of the entity's model; `undefined` until a model has loaded. After a model
	 * change it holds the previous model's until the new one loads.
	 */
	public ModelData: Nullable<ModelData>
	/**
	 * The entity's team; `Team.None` until the server sends one. A change fires
	 * `EntityTeamChanged`.
	 */
	public Team: Team
	/**
	 * The entity's life state; `LIFE_DEAD` until the server sends one. A change fires
	 * `LifeStateChanged`.
	 */
	public LifeState: LifeState
	/**
	 * Whether the last team fog-of-war list that named the entity marks it shown on the map
	 * (`TeamFOWEntityData.VisibleOnMap`); false until one names it.
	 */
	public IsVisibleOnMap: boolean
	/**
	 * Where the core draws the entity this frame. Every networked move resets it to
	 * {@link NetworkedPosition}; a frame the core sends a position for overwrites it.
	 */
	public readonly VisualPosition: Vector3
	/**
	 * World position from the last network update, carried through the parent's transform for an
	 * entity with a {@link ParentEntity}.
	 */
	public readonly NetworkedPosition: Vector3
	/**
	 * The angles the core draws the entity with this frame. Every networked move resets them to
	 * {@link NetworkedAngles}; a frame the core sends a rotation for overwrites them.
	 */
	public readonly VisualAngles: QAngle
	/** The velocity the core sends with each drawn frame. */
	public readonly VisualVelocity: Vector3
	/**
	 * World angles in degrees from the last network update, combined with the parent's for an
	 * entity with a {@link ParentEntity}.
	 */
	public readonly NetworkedAngles: QAngle
	/**
	 * Velocity in units per second, worked out from how the networked position moves from one
	 * server tick to the next. The SDK keeps it for heroes, NPCs, projectiles and XP orbs and
	 * holds it while the game is paused; for any other entity it stays zero.
	 */
	public readonly NetworkedVelocity: Vector3
	/**
	 * The entity's box as offsets from {@link VisualPosition}: the collision hull's sides and
	 * floor once the hull arrives, with the top raised to the model's where that stands taller,
	 * and the model's own bounds while no hull has come. Before either, a placeholder 100 units
	 * wide and 50 tall from the first model update, and all zero before that.
	 */
	public readonly BoundingBox: AABB
	/**
	 * Height above the unit's position that the game centres its status overlay on, the panel its
	 * health bar is drawn in, with the model's scale already in it. Zero until the core has sent
	 * one. Only the unit's art holds it: nothing networked and nothing in the hero data predicts
	 * it, so a taller hero can carry its bar lower.
	 */
	public UnitStatusOffset: number
	/**
	 * Game time in seconds (`GameState.RawGameTime`) when a particle message last reported where
	 * the entity is, into {@link PredictedPosition}; 0 until one has.
	 */
	public LastPredictedPositionUpdate: number
	/** The same game time as {@link LastPredictedPositionUpdate}: the SDK sets both together. */
	public LastRealPredictedPositionUpdate: number
	/**
	 * The entity's position as the last particle message reporting it gave it; invalid
	 * (`IsValid` false) until one has. {@link LastPredictedPositionUpdate} says when.
	 */
	public readonly PredictedPosition: Vector3
	/**
	 * The entity the server names as this one's owner; `undefined` while it names none or that
	 * entity does not exist on this client, and filled in once it arrives.
	 */
	public OwnerEntity: Nullable<Entity>
	/**
	 * The entity this one is attached to, whose transform its {@link NetworkedPosition} and
	 * {@link NetworkedAngles} follow; `undefined` while it has none on this client.
	 */
	public ParentEntity: Nullable<Entity>
	/** The entity's index: the low bits of its {@link Handle}, its key in `AllEntitiesAsMap`. */
	public get Index(): number
	/**
	 * Maximum health: a hero's from its player, an NPC's from its unit data where that has one,
	 * otherwise {@link BaseMaxHP}.
	 */
	public get MaxHP(): number
	/** Whether the entity wears a modifier named `name`. */
	public HasBuffByName(name: string): boolean
	/** The first modifier in {@link Buffs} named `name`, or `undefined` when it wears none. */
	public GetBuffByName(name: string): Nullable<Modifier>
	/** The live finite buff applied by an ability class, preferring the one ending last. */
	public GetActiveBuffByAbility<T extends Ability>(class_: Constructor<T>): Nullable<Modifier>
	/**
	 * {@link VisualVelocity} while a frame draws (`GameState.IsInDraw`), {@link NetworkedVelocity}
	 * otherwise.
	 */
	public get Velocity(): Vector3
	/** Whether the entity wears a modifier named by any of `names`. */
	public HasAnyBuffByNames(names: string[]): boolean
	/**
	 * The glow the SDK puts on the entity, or `undefined` for none. Changes reach the game one
	 * entity a server tick, and the glow is dropped once the entity is no longer valid.
	 */
	public get CustomGlowColor(): Nullable<Color>
	public set CustomGlowColor(val: Nullable<Color>)
	/**
	 * The colour and render mode the SDK draws the entity's model with, or `undefined` to reset
	 * it to white and `RenderMode.Normal`. A colour is sent 1, 2, 4, 8, … server ticks after it
	 * is set, counting again each time the entity enters or leaves view; a reset at most once.
	 */
	public get CustomDrawColor(): Nullable<[Color, RenderMode]>
	public set CustomDrawColor(val: Nullable<[Color, RenderMode]>)
	/**
	 * The entity's name: from the server's `EntityNames` string table or, for the kinds the SDK
	 * reads from data (NPCs, heroes, pickups, XP orbs), from their data entry; "" while it has
	 * none.
	 */
	public get Name(): string
	/**
	 * The entity that owns this one, such as the hero holding an ability; `undefined` while there
	 * is none on this client.
	 */
	public get Owner(): Nullable<Entity>
	/** The last entity up the chain of {@link Owner}s, or `undefined` when this has no owner. */
	public get RootOwner(): Nullable<Entity>
	/**
	 * {@link VisualPosition} while a frame draws (`GameState.IsInDraw`), {@link NetworkedPosition}
	 * otherwise.
	 */
	public get Position(): Vector3
	/**
	 * {@link VisualAngles} while a frame draws (`GameState.IsInDraw`), {@link NetworkedAngles}
	 * otherwise.
	 */
	public get Angles(): QAngle
	/** The yaw of {@link NetworkedAngles} in degrees, 180 or more taken down by 360. */
	public get NetworkedRotation(): number
	/** The yaw of {@link Angles} in degrees, 180 or more taken down by 360. */
	public get Rotation(): number
	/**
	 * Game time in seconds (`GameState.RawGameTime`) the entity was created at: the server's own
	 * creation time, or when the SDK first saw the entity if the server sends none.
	 */
	public get CreateTime(): number
	/** {@link HP} as a percentage of {@link MaxHP}; 0 when {@link MaxHP} is 0. */
	public get HPPercent(): number
	/** {@link HP} as a fraction of {@link MaxHP}, 1 at full health; 0 when {@link MaxHP} is 0. */
	public get HPPercentDecimal(): number
	/**
	 * Whether {@link LifeState} is `LIFE_ALIVE` or `LIFE_RESPAWNING`. NPCs, players and some other
	 * kinds of entity decide by rules of their own.
	 */
	public get IsAlive(): boolean
	/** {@link Rotation} in radians. */
	public get RotationRad(): number
	/** {@link NetworkedRotation} in radians. */
	public get NetworkedRotationRad(): number
	/** Whether the entity is on the neutral team (`Team.Neutral`). */
	public get IsNeutral(): boolean
	/**
	 * The radius {@link NearestHullDistance} takes off the distance to the entity's position: 0
	 * here, a hero's from its unit data.
	 */
	public get CollisionRadius(): number
	/**
	 * The id native calls name this entity by, its index shifted left one bit: a trace that hit it
	 * has it as `TraceResult.EntityID`, and `Trace` skips it given as `skipEntityID`.
	 */
	public get CustomNativeID(): number
	/**
	 * Whether the entity stands in the view of this frame's camera, widened a little past the
	 * screen's edges. For a player pawn it is a flag the core sets for the pawns it finds on screen
	 * before the frame's draw, so a drawer skips a pawn off screen without projecting it; anything
	 * else, which the core does not list, is projected on access. Always true while the core lists
	 * nothing (`Source2SDK.OnScreenListKnown`), so a drawer that skips what is off screen draws
	 * everything there.
	 * @example
	 * if (!enemy.IsOnScreen) {
	 * 	return
	 * }
	 */
	public get IsOnScreen(): boolean
	public set IsOnScreen(value: boolean)
	/**
	 * The entity's handle: its serial above its {@link Index}, as networked fields name entities
	 * and `EntityManager.EntityByIndex` resolves them.
	 */
	public get Handle(): number
	/** Unit vector of the entity's facing ({@link RotationRad}) on the horizontal plane. */
	public get Forward(): Vector3
	/**
	 * Whether the unit is disarmed (`MODIFIER_STATE_DISARMED`); `Ability.CanBeCasted` refuses its
	 * gun.
	 */
	public get IsDisarmed(): boolean
	/** Whether the unit is sliding down a wall (`MODIFIER_STATE_WALLSLIDE`). */
	public get IsWallSliding(): boolean
	/**
	 * Whether the unit is silenced, shown or hidden: the hidden silence an Abrams charge drag
	 * puts on its victim refuses every ability as well.
	 */
	public get IsSilenced(): boolean
	/**
	 * Whether the unit is stunned (`MODIFIER_STATE_STUNNED`); `Ability.CanBeCasted` refuses all
	 * of its abilities and items.
	 */
	public get IsStunned(): boolean
	/**
	 * Whether the unit is invulnerable (`MODIFIER_STATE_INVULNERABLE`); `Ability.CanBeCasted`
	 * refuses it as a target.
	 */
	public get IsInvulnerable(): boolean
	/** Whether the unit ignores bullets (`MODIFIER_STATE_IGNORE_BULLETS`). */
	public get IsIgnoringBullets(): boolean
	/**
	 * Whether the unit cannot die now, as Cheat Death's immunity keeps a hero alive once a blow
	 * would have killed it: damage still lands, but its health stops short of zero until the state
	 * ends, so nothing dealt before then kills it.
	 */
	public get IsUnkillable(): boolean
	/** Whether the unit is riding a zipline (`MODIFIER_STATE_USING_ZIPLINE`). */
	public get IsUsingZipline(): boolean
	/**
	 * Whether the unit is out of the game (`MODIFIER_STATE_OUT_OF_GAME`); `Ability.CanBeCasted`
	 * refuses it as a target.
	 */
	public get IsOutOfGame(): boolean
	/**
	 * Whether the unit's items are disabled (`MODIFIER_STATE_ITEMS_DISABLED`);
	 * `Ability.CanBeCasted` refuses all of its items.
	 */
	public get ItemsDisabled(): boolean
	/**
	 * Whether the unit is muted (`MODIFIER_STATE_MUTED`); `Ability.CanBeCasted` refuses all of
	 * its items.
	 */
	public get IsMuted(): boolean
	/**
	 * Whether the unit is asleep (`MODIFIER_STATE_IS_ASLEEP`); `Ability.CanBeCasted` refuses all
	 * of its abilities and items.
	 */
	public get IsSleeping(): boolean
	/** Whether `MODIFIER_STATE_AIM_FORWARD` is set on the unit. */
	public get IsAimForward(): boolean
	/**
	 * Whether the unit's shooting is disabled (`MODIFIER_STATE_SHOOTING_DISABLED`);
	 * `Ability.CanBeCasted` refuses its gun.
	 */
	public get IsShootingDisabled(): boolean
	/**
	 * Whether the unit is busy with an action (`MODIFIER_STATE_BUSY_WITH_ACTION`), such as a
	 * wind-up, a channel or a post-cast. `PlayerPawn.TakesAbilityPress` says which presses the
	 * game still takes meanwhile.
	 */
	public get IsBusyWithAction(): boolean
	/** Whether the unit is in a charge melee (`MODIFIER_STATE_IS_IN_CHARGE_MELEE`). */
	public get IsInChargeMelee(): boolean
	/** Whether `MODIFIER_STATE_AIM_FORWARD_WITH_PITCH` is set on the unit. */
	public get IsAimForwardWithPitch(): boolean
	/** Whether the unit is kept off ladders (`MODIFIER_STATE_LADDER_DISABLE`). */
	public get IsLadderDisable(): boolean
	/**
	 * Whether an ability the unit is in disables its zoom
	 * (`MODIFIER_STATE_IN_ABILITY_DISABLE_ZOOM`).
	 */
	public get IsInAbilityDisableZoom(): boolean
	/** Whether the unit cannot dash (`MODIFIER_STATE_DASH_DISABLED`). */
	public get IsDashDisabled(): boolean
	/**
	 * Whether the unit carries the movement-ability restriction an Abrams toss leaves. The game
	 * still takes every ability press under it; `IsMovementSilenced` is what keeps movement
	 * abilities from casting.
	 */
	public get IsMovementAbilityDisabled(): boolean
	/**
	 * Whether the unit is kept from its movement abilities, those whose data gives them the
	 * movement behavior, as Mirage's Dust Devil or Abrams' Shoulder Charge keeps its victim.
	 */
	public get IsMovementSilenced(): boolean
	/** Whether the unit's aim angles are locked (`MODIFIER_STATE_LOCKED_AIM_ANGLES`). */
	public get IsLockedAimAngles(): boolean
	/** Whether `MODIFIER_STATE_BUSY_WITH_ACTION_NON_ITEM` is set on the unit. */
	public get IsBusyWithActionNonItem(): boolean
	/**
	 * Whether NPCs leave the unit out of their targeting
	 * (`MODIFIER_STATE_IGNORED_BY_NPC_TARGETING`).
	 */
	public get IsIgnoredByNpcTargeting(): boolean
	/** Whether `MODIFIER_STATE_FORCE_ALERT_STATE` is set on the unit. */
	public get IsForceAlert(): boolean
	/**
	 * Whether the unit's commands are restricted (`MODIFIER_STATE_COMMAND_RESTRICTED`);
	 * `Ability.CanBeCasted` refuses all of its abilities and items.
	 */
	public get IsCommandRestricted(): boolean
	/** Whether the unit is boosting along a zipline (`MODIFIER_STATE_USING_ZIPLINE_BOOST`). */
	public get IsUsingZiplineBoost(): boolean
	/** Whether the unit is status immune (`MODIFIER_STATE_STATUS_IMMUNE`). */
	public get IsStatusImmune(): boolean
	/** Whether tech damage cannot hurt the unit (`MODIFIER_STATE_TECH_DAMAGE_INVULNERABLE`). */
	public get IsTechDamageInvulnerable(): boolean
	/** Whether the unit is in a burrow channel (`MODIFIER_STATE_DIGGER_BURROW_CHANNEL`). */
	public get IsBurrowed(): boolean
	/** Whether the unit's model is not drawn (`MODIFIER_STATE_DO_NOT_DRAW_MODEL`). */
	public get IsModelHidden(): boolean
	/**
	 * Whether stealth hides the unit from its enemies now: Haze's Smoke Bomb, Shadow Weave, Veil
	 * Walker or Shadow Strike is on it and no enemy has it revealed. An enemy standing within the
	 * source's `SpottedRadius` reveals it to the whole enemy team, and does for
	 * `RevealOnSpottedDuration` after; a hit reveals it for `RevealOnDamageDuration` and ends
	 * Shadow Weave outright. A revealed unit reads false. Its position is networked while hidden.
	 */
	public get IsInvisible(): boolean
	/** Whether the unit's parry is active (`MODIFIER_STATE_PARRY_ACTIVE`). */
	public get IsParryActive(): boolean
	/** Whether the unit cannot jump (`MODIFIER_STATE_JUMP_DISABLED`). */
	public get IsJumpDisabled(): boolean
	/** Whether the unit cannot mantle (`MODIFIER_STATE_MANTLE_DISABLED`). */
	public get IsMantleDisabled(): boolean
	/**
	 * The `EModifierState` names of the states in {@link EnabledStateMask}, in ascending order;
	 * `MODIFIER_STATE_<n>` for a value the enum lacks. A new array on every read.
	 */
	public get ModifierStates(): string[]
	/** As {@link ModifierStates}, for {@link DisabledStateMask}. */
	public get DisabledModifierStates(): string[]
	/** As {@link ModifierStates}, for {@link EnabledPredictedStateMask}. */
	public get PredictedModifierStates(): string[]
	/**
	 * Index of the bone named `name` among {@link Bones}, or -1 when none there has the name. A
	 * bone of the model the SDK knows no type of is not in that list.
	 */
	public GetBoneIndexByName(name: string): number
	/** Whether `serial` is this entity's serial; 0 on either side matches any. */
	public SerialMatches(serial: number): boolean
	/** Whether `handle` names this entity: its index, and a serial that {@link SerialMatches}. */
	public HandleMatches(handle: number): boolean
	/** Whether `ent` is this same object. */
	public EntityMatches(ent: Entity): boolean
	/**
	 * Distance from {@link Position} to `vec`, or to another entity's position; in meters with
	 * `toMeters`, otherwise in game units.
	 */
	public Distance(vec: Vector3 | Entity, toMeters?: boolean): number
	/**
	 * Distance from `from` to the entity's surface: the least of the distance to its position
	 * less {@link CollisionRadius}, and to each bone of {@link Bones} that has a radius in
	 * {@link BoneSpheres}, less that radius. Negative when `from` is inside.
	 */
	public NearestHullDistance(from: Vector3): number
	/** As {@link Distance}, on the horizontal plane: the heights are left out. */
	public Distance2D(vec: Vector3 | Vector2 | Entity, toMeters?: boolean): number
	/** The square of {@link Distance}; in square meters with `toMeters`. */
	public DistanceSqr(vec: Vector3 | Entity, toMeters?: boolean): number
	/** The square of {@link Distance2D}; in square meters with `toMeters`. */
	public DistanceSqr2D(vec: Vector3 | Vector2 | Entity, toMeters?: boolean): number
	/**
	 * Angle in radians, 0 to π, between {@link Forward} and the direction `front`; 0 when `front`
	 * has zero length.
	 */
	public AngleBetweenFaces(front: Vector3): number
	/** The point `distance` units ahead of {@link Position} along {@link Forward}. */
	public InFront(distance: number): Vector3
	/**
	 * The point `distance` units from {@link Position} on the horizontal plane, in the direction
	 * of the facing turned by `angle` radians.
	 */
	public InFrontFromAngle(angle: number, distance: number): Vector3
	/**
	 * Whether `flag` is set in {@link EnabledStateMask} or in {@link EnabledPredictedStateMask}.
	 * Every modifier state getter of the class reads through it.
	 */
	public IsPredictedStateFlagSet(flag: EModifierState): boolean
	/** Whether `flag` is set in {@link DisabledStateMask}. */
	public IsDisabledStateFlagSet(flag: EModifierState): boolean
	/**
	 * Whether `flag` is set in {@link EnabledStateMask} alone, without the predicted mask
	 * {@link IsPredictedStateFlagSet} also reads.
	 */
	public IsEnabledStateFlagSet(flag: EModifierState): boolean
	/**
	 * As {@link FindRotationAngle}, measured from `currPos`. With `rotationDiff` the facing has
	 * {@link RotationDifference} added.
	 */
	public GetAngle(position: Vector3 | Entity, rotationDiff?: boolean, currPos?: Vector3): number
	/**
	 * Angle in radians, 0 to π, on the horizontal plane between the entity's facing and the
	 * direction from {@link Position} to `vec`.
	 */
	public FindRotationAngle(vec: Vector3 | Entity): number
	/**
	 * Cosine of the horizontal angle between the entity's facing and the direction from `currPos`
	 * to `source`: 1 straight ahead, -1 straight behind. With `rotationDiff` the facing has
	 * {@link RotationDifference} added.
	 */
	public GetSourceAngleToForward(source: Vector3 | Entity, rotationDiff?: boolean, currPos?: Vector3): number
	/** Whether `ent` is closer than `range` units on the horizontal plane. */
	public IsInRange(ent: Vector3 | Vector2 | Entity, range: number): boolean
	/**
	 * The entity of `ents` nearest to this one; `undefined`, whatever the return type says, when
	 * `ents` is empty. `toMeters` does not change the answer.
	 */
	public Closest(ents: Entity[], toMeters?: boolean): Entity
	/**
	 * The group of `groups` whose point, as `callback` gives it, lies nearest this entity, with
	 * that point; an empty array and a zero vector when `groups` is empty. `toMeters` does not
	 * change the answer.
	 */
	public ClosestGroup(groups: Entity[][], toMeters: boolean | undefined, callback: (entity: Entity[]) => Vector3): [Entity[], Vector3]
	/**
	 * Whether the entity's team differs from `ent`'s, or from the local player's team when `ent`
	 * is left out. Every other team counts, the neutral one included.
	 */
	public IsEnemy(ent?: Entity): boolean
	/**
	 * Takes a corner of the networked collision hull, as an offset from the entity's position,
	 * into {@link BoundingBox}. Nothing changes until both corners have arrived and make a box of
	 * positive size; from then on the hull gives the box its sides and floor, and the model's
	 * bounds raise its top where they stand taller. The SDK calls it on every hull update.
	 */
	public OnHullChanged(mins?: Vector3, maxs?: Vector3): void
	/**
	 * The entity's hitboxes where they are right now — the shapes the game registers damage
	 * against, rather than one box standing in for all of them.
	 *
	 * Read once per frame and kept: every reader asking the native side again would rebuild the
	 * model's whole hitbox list each time. The array and the hitboxes in it belong to the entity
	 * and are refilled in place, so copy what you mean to hold past this frame.
	 *
	 * Empty until the model has loaded, and for a model that declares none.
	 * @example
	 * for (const box of entity.Hitboxes) { ... }
	 */
	public get Hitboxes(): readonly WorldHitbox[]
	/**
	 * Bounds of the entity's hitboxes in this frame's pose, on the world axes whatever way it
	 * faces, as offsets from {@link VisualPosition}; `undefined` until its skeleton is built.
	 * Read from the game once per frame and kept.
	 * @example
	 * const box = entity.HitboxBounds ?? entity.BoundingBox
	 */
	public get HitboxBounds(): Nullable<AABB>
	/**
	 * Starts loading the model {@link ModelName} names and, once it loads, fills
	 * {@link ModelData}, the bone lists and the model's part of {@link BoundingBox}. Until a hull
	 * or the model's bounds arrive, the box is a placeholder 100 units wide and 50 tall. The SDK
	 * calls it on every model change.
	 */
	public OnModelUpdated(): void
	/**
	 * Reads where every bone of {@link Bones} is this frame, in one native call, as
	 * {@link GetBonePositionNative} does on its first read in a frame. False when the entity has
	 * no such bones or the read returned none.
	 */
	public UpdateBonePositionCache(): boolean
	/**
	 * World position of the bone at `index` in {@link TotalBones} this frame, as a new vector;
	 * {@link Position} when the bone cannot be read. The bones of {@link Bones} are read together,
	 * once per frame; any other bone takes a native call each time.
	 */
	public GetBonePositionNative(index: number): Vector3
	/**
	 * The cached bone links touching `boneType`, resolved to bone indices; `undefined` until the
	 * model has loaded. A link is listed under both of its end types, so a pass over several
	 * types has to deduplicate by link identity.
	 * @example
	 * const links = entity.GetCachedBoneLinks(EBoneType.Head)
	 */
	public GetCachedBoneLinks(boneType: EBoneType): Nullable<readonly BoneData.BoneLinkCached[]>
	/**
	 * Allocation-free bone position: writes x, y, z into `out` starting at `at`, falling back
	 * to the entity position when the bone is unresolved. Prefer this over
	 * {@link GetBonePositionNative} when reading bones every frame.
	 * @example
	 * const point = new Float64Array(3)
	 * entity.GetBonePositionXYZ(link.fromIdx, point)
	 */
	public GetBonePositionXYZ(index: number, out: number[] | Float64Array, at?: number): void
	/**
	 * Position of the first bone of `boneType` in {@link BoneLinks}; `undefined` when no link
	 * touches that type, or until the model has loaded with bones the SDK knows.
	 */
	public GetBonePositionsByType(boneType: EBoneType, isFirst: true): Nullable<Vector3>
	/**
	 * Start and end position of every link in {@link BoneLinks} that touches `boneType`: an empty
	 * array when none does, `undefined` until the model has loaded with bones the SDK knows.
	 */
	public GetBonePositionsByType(boneType: EBoneType): Nullable<[Vector3, Vector3][]>
	/**
	 * Sets {@link IsVisibleRay}: whether a trace from `camera` reaches the entity, aimed at up to
	 * 5 of its hitboxes, else its head bone (the neck for `npc_trooper` kinds), else the middle of
	 * its box. False with no local hero, for the local hero, a dormant entity, a dead one with
	 * bones, one 200 m or more off the local hero and an invalid camera; true untraced while
	 * tracing is off or unavailable.
	 */
	public UpdateVisibility(camera?: Vector3): void
	/**
	 * Whether a trace from the camera to `point` runs clear or stops on this entity, tracing
	 * through the local hero. True without tracing while tracing is off or unavailable, for the
	 * local hero or with none, and when the camera or `point` is zero or invalid.
	 */
	public IsPointVisible(point: Vector3): boolean
	/**
	 * Works out {@link NetworkedPosition} and {@link NetworkedAngles} from the networked values
	 * and the parent's transform, or `parentTransform` when given, does the same down its
	 * children, and resets {@link VisualPosition} and {@link VisualAngles} to them. The SDK calls
	 * it after every networked move.
	 */
	public UpdatePositions(parentTransform?: Matrix3x4): void
	/**
	 * Takes its velocity from its move over the last server tick of `dt` seconds. The first call
	 * only records where it stands and leaves the velocity at zero: with no earlier position, a
	 * delta would read its whole distance from the world origin as one tick's move.
	 */
	public UpdateVelocity(dt: number): void
	/** The entity's {@link Name}. */
	public toString(): string
}
