// AUTO-GENERATED - do not edit.
/** One of a hero's stats growing with another of its stats (`m_mapScalingStats`). */
interface IStatScaling {
	/** The stat the growth follows, its spirit power for every hero so far. */
	readonly Stat: EStatsType
	/** How much the scaled stat gains for each point of {@link Stat}. */
	readonly Scale: number
}
/**
 * One hero's or NPC's entry in the game's unit data (`scripts/heroes.vdata_c` and
 * `scripts/npc_units.vdata_c`), all of which is reloaded on every `ServerInfo` event. Image paths
 * are game paths: a `file://{images}/` one comes as `panorama/images/` with its compiled extension.
 */
declare class UnitStore {
	/** The id a unit networks to name this entry: a hash of {@link Name}. */
	public readonly SubclassID: number
	/** The entry's key in the unit data, such as `trooper_normal_ag2`. */
	public readonly Name: string
	/** Every unit's {@link IconImageSmall}, keyed by its {@link Name}. */
	public static readonly HeroImagePaths: Map<string, string>
	/**
	 * The hero behind every signature ability, keyed by the ability's data name: the hero's
	 * own data name and the number of the button that casts it, 1 to 4 — straight from
	 * `m_mapBoundAbilities`. An ability two heroes both bind keeps the first.
	 */
	public static readonly SignatureOwners: Map<string, [string, number]>
	/** Every unit's entry, keyed by its {@link SubclassID}. */
	public static globalStorage: Map<number, UnitStore>
	/**
	 * The entry of no unit: {@link Name} empty, {@link SubclassID} and {@link HeroID} -1.
	 * {@link GetStoreBySubclassID} and {@link GetUintStoreByHeroID} answer with it for an id they
	 * do not find, and a unit holds it until its data is known.
	 */
	public static empty: UnitStore
	/** Always empty: nothing in the SDK fills it. */
	public static unitNamesSorted: string[]
	/** The hero's id, the one `Player.HeroID` carries; -1 when the data gives none. */
	public readonly HeroID: number
	/**
	 * The unit's model path (`m_strModelName`, else `m_sModelName`); `models/dev/error.vmdl` when
	 * the data gives neither.
	 */
	public readonly ModelName: string
	/**
	 * The model path the data gives as `m_strPublicModelName`; `models/dev/error.vmdl` when it
	 * gives none.
	 */
	public readonly PublicModelName: string
	/** The hero's top bar image (`m_strTopBarImage`); empty when the data gives none. */
	public readonly TopBarImage: string
	/** The unit's minimap image (`m_strMinimapImage`); empty when the data gives none. */
	public readonly MinimapImage: string
	/** The unit's small icon (`m_strIconImageSmall`); empty when the data gives none. */
	public readonly IconImageSmall: string
	/** The hero's card icon (`m_strIconHeroCard`); empty when the data gives none. */
	public readonly IconHeroCard: string
	/** The hero's selection image (`m_strSelectionImage`); empty when the data gives none. */
	public readonly SelectionImage: string
	/** How far the hero is through development; only a released hero is picked in a normal match. */
	public readonly DevelopmentState: EHeroDevState
	/**
	 * Whether the hero is released: {@link DevelopmentState} is `EHeroDevState_Release`.
	 * {@link IsSelectable} also rules out {@link IsDisabled}.
	 */
	public readonly IsPlayerSelectable: boolean
	/** The traits of the hero's gun, as its shop stat display lists them. */
	public readonly WeaponAttributes: ECitadelWeaponAttributes
	/**
	 * Whether the hero's data sets `m_bDisabled`; a disabled hero is not picked in a normal match
	 * ({@link IsSelectable}).
	 */
	public readonly IsDisabled: boolean
	/**
	 * Whether the hero's data sets the older `m_bInDevelopment` flag, which a released hero can
	 * still carry; {@link DevelopmentState} is what the game goes by.
	 */
	public readonly IsInDevelopment: boolean
	/** Whether the hero's data sets `m_bNeedsTesting`. */
	public readonly NeedsTesting: boolean
	/** Whether the hero's data sets `m_bAssignedPlayersOnly`. */
	public readonly AssignedPlayersOnly: boolean
	/** Whether the hero's data sets `m_bLimitedTesting`. */
	public readonly LimitedTesting: boolean
	/** Whether {@link DevelopmentState} is `EHeroDevState_PreRelease`. */
	public readonly PrereleaseOnly: boolean
	/** The hero's role, Marksman to Healer; `EHeroType.None` when the data names none of these. */
	public readonly HeroType: EHeroType
	/** The unit's maximum health from its data; `undefined` when the data gives none. */
	public readonly MaxHealth: Nullable<number>
	/** The unit's collision radius in world units; 0 when the data gives none. */
	public readonly CollisionRadius: number
	/** How long one jackpot cycle of a Sinner's Sacrifice runs at its slow speed, in seconds. */
	public readonly VaultMiniGameTime: number
	/** How long the hit window at the start of each of those cycles stays open, in seconds. */
	public readonly VaultMiniGameHitWindow: number
	/**
	 * How far the unit's melee blow reaches in its data, in world units; zero for a unit with no
	 * melee. A blow already thrown lands on a target still inside it when it falls.
	 */
	public readonly MeleeHitRange: number
	/**
	 * How far the unit sees heroes, in world units (`m_flSightRangePlayers`): a trooper 1000, a
	 * guardian about 1339, a walker 944. Zero for a unit that does not look for them.
	 */
	public readonly SightRangePlayers: number
	/**
	 * The melee a neutral swings, by the name of its `modifiers.vdata` entry
	 * (`m_sNeutralMelee`, read through `NeutralMeleeStore`); empty for a unit that swings none,
	 * a camp whose data forbids melee (`m_bNoMelee`) included.
	 */
	public readonly NeutralMelee: string
	/** What the hero gains on each boon, keyed by stat (`m_mapStandardLevelUpUpgrades`). */
	public readonly LevelUpStats: Map<EStatsType, number>
	/** The hero's base stats from `m_mapStartingStats`, keyed by the EStatsType they name. */
	public readonly StartingStats: Map<EStatsType, number>
	/**
	 * The hero's stats that grow with another of its stats, keyed by the stat that grows, from
	 * `m_mapScalingStats`: Vindicta's bullet damage gains 0.022 for each point of spirit power.
	 */
	public readonly ScalingStats: Map<EStatsType, IStatScaling>
	/**
	 * Every ability the hero is built with, keyed by the slot it is bound to
	 * (`ESlot_Signature_1`, `ESlot_Weapon_Melee`, …) — straight from `m_mapBoundAbilities`.
	 */
	public readonly BoundAbilities: Map<string, string>
	/** The slot the hero's data binds each of its abilities to, keyed by the ability's data name. */
	public readonly AbilitySlots: Map<string, EAbilitySlots>
	/** The entry whose {@link SubclassID} is `subClassID`, or {@link empty}. */
	public static GetStoreBySubclassID(subClassID: number): UnitStore
	/**
	 * The {@link Name} of the hero with {@link HeroID} `heroID`; `undefined` when none has it,
	 * and for 0 and below, which name no hero.
	 */
	public static GetNameByHeroID(heroID: number): Nullable<string>
	/** The entry of the hero whose {@link HeroID} is `heroID`; {@link empty} for 0 and below. */
	public static GetUintStoreByHeroID(heroID: number): UnitStore
	/** The entry named `name` (`trooper_normal_ag2`); `undefined` when there is none. */
	public static GetUintStoreByName(name: string): Nullable<UnitStore>
	/**
	 * Whether the hero is picked in a normal match: released and not disabled. The game goes by
	 * {@link DevelopmentState}; a released hero can still carry the older testing flags, such as
	 * {@link IsInDevelopment}.
	 */
	public get IsSelectable(): boolean
}
