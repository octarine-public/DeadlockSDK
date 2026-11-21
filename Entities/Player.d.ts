// AUTO-GENERATED - do not edit.
/**
 * The controller of one player slot, networked for every player: name, Steam id, scoreboard,
 * level and respawn. The hero body it drives is {@link Hero}, a {@link PlayerPawn}.
 */
declare class Player extends Entity {
	/** The hero's maximum health from the controller; {@link PlayerPawn.MaxHP} reads it. */
	public readonly BaseMaxHP: number
	/**
	 * How the player's client stands with the server. `Connecting` lasts until the client has
	 * loaded the map and joined, so it is also the loading screen of a match starting.
	 */
	public readonly Connected: EPlayerConnectedState
	/** The player's tick base, as the controller networks it. */
	public readonly TickBase: number
	/** The tick the controller is next due to think on. */
	public readonly NextThinkTick: bigint
	/** The player's 64-bit Steam id, `0n` for a bot. {@link AccountID} is its low half. */
	public readonly SteamID: bigint
	/** Whether the player is playing or still choosing, or waiting to be given, a hero. */
	public readonly PlayState: EPlayerPlayState
	/** The lane the player is assigned to, by number. */
	public readonly AssignedLane: number
	/**
	 * The lane the player was first assigned to, by number; {@link AssignedLane} is the one they
	 * hold now.
	 */
	public readonly OriginalLaneAssignment = 0
	/** The player's name, `"Unknown"` until the controller sends it. */
	public readonly PlayerName: string
	/** How many times the player has died. */
	public readonly Deaths: number
	/** Whether the controller flags the player as in team chat. */
	public readonly InTeamChat: boolean
	/** Whether the controller flags the player as in party chat. */
	public readonly InPartyChat: boolean
	/**
	 * The hero's level; each level past the first is a boon (`ModifierManager.Boons`), up to 35.
	 */
	public readonly Level: number
	/** The hero's maximum ammo, as the controller networks it. */
	public readonly MaxAmmo: number
	/** The hero's health regeneration per second, networked on the controller. */
	public readonly HPRegen: number
	/**
	 * The game time this player is put back on their feet at, on the same clock as
	 * {@link GameState.RawGameTime}. Only meaningful while they are down; a Rejuvenator taken by
	 * their team rewrites it, which is how a resurrection is seen coming.
	 */
	public readonly RespawnTime: number
	/** The player's last-hit count. */
	public readonly LastHits: number
	/** The player's deny count. */
	public readonly Denies: number
	/** How many hero kills the player has assisted. */
	public readonly PlayerAssists: number
	/** How many heroes the player has killed. */
	public readonly PlayerKills: number
	/** The player's net worth in souls. */
	public readonly GoldNetWorth: number
	/** The player's net worth in ability points. */
	public readonly APNetWorth: number
	/** Souls the player has earned from creeps. */
	public readonly CreepGold: number
	/** Souls the player has earned from creeps' air orbs. */
	public readonly CreepGoldAirOrb: number
	/** Souls the player has earned killing creeps. */
	public readonly CreepGoldKill: number
	/** Souls the player has earned denying creeps. */
	public readonly CreepGoldDeny: number
	/** Souls the player has earned as the solo bonus on creeps. */
	public readonly CreepGoldSoloBonus: number
	/** Damage the player has dealt to heroes. */
	public readonly HeroDamage: number
	/** Damage the player has dealt to objectives. */
	public readonly ObjectiveDamage: number
	/** The player's slot in the match lobby. */
	public readonly LobbyPlayerSlot: bigint
	/** Healing the player has done to heroes. */
	public readonly HeroHealing: number
	/** Healing the player has done to themselves. */
	public readonly SelfHealing: number
	/**
	 * The game time the player's ultimate last went on cooldown, on the same clock as
	 * {@link GameState.RawGameTime}. The controller networks it for every player, so an enemy
	 * ultimate's stand-in takes its cooldown from here.
	 */
	public readonly UltimateCooldownStart: number
	/** The game time the player's ultimate comes off cooldown, on the same clock as the start. */
	public readonly UltimateCooldownEnd: number
	/** Whether the player carries the Rejuvenator. */
	public readonly HasRejuvenator: boolean
	/** Whether the controller flags the player as having a rebirth. */
	public readonly HasRebirth: boolean
	/** Whether the server has flagged the player as a cheater. */
	public readonly FlaggedAsCheater: boolean
	/** Whether the server has counted the player as having abandoned the match. */
	public readonly Abandoned: boolean
	/** The player's rank, as the controller networks it. */
	public readonly CurrentRank: number
	/**
	 * The id of the hero the player plays (`UnitStore.HeroID`), 0 until the controller sends one.
	 * `PlayerHeroIDChanged` fires when it changes.
	 */
	public HeroID: number
	/**
	 * The packed upgrade state of the player's abilities and items, each by data id (`ItemID`, an
	 * `AbilityStore.SubclassID`). The controller networks it for every player, and an enemy's
	 * stand-ins take their level and upgrades from it.
	 */
	public AbilityUpgradeState: AbilityUpgradeState[]
	/**
	 * The abilities each imbue item the player owns is imbued on, both by data id
	 * (`AbilityStore.SubclassID`). The controller networks it for every player, so it is known for
	 * a hero whose item and ability entities never reach this client.
	 */
	public readonly Imbuements: Map<number, readonly number[]>
	/** The player slots this player has muted, as the server keeps them. */
	public readonly MutedPlayers: number[]
	/** The data id (`AbilityStore.SubclassID`) of every shop item the player owns. */
	public get Upgrades(): readonly number[]
	/**
	 * Whether the player is alive, as the controller networks it. `LifeStateChanged` fires with the
	 * player when it changes.
	 */
	public get IsAlive(): boolean
	/**
	 * How many seconds are left of this player's death, or 0 while they are up. Reads what
	 * {@link RespawnTime} is worth right now, so a Rejuvenator cutting the wait shows up here the
	 * frame it lands.
	 *
	 * @example
	 * const seconds = player.RespawnIn
	 */
	public get RespawnIn(): number
	/**
	 * The Steam account id, the low half of {@link SteamID}: what the Game Coordinator names a
	 * player by. 0 while the controller has no Steam id, as a bot never has.
	 */
	public get AccountID(): number
	/** Whether the player is on no side that plays: team `Spectator`, `Neutral` or `None`. */
	public get IsSpectator(): boolean
	/** The hero the player plays, or `undefined` while this client has no entity for it. */
	public get Hero(): Nullable<PlayerPawn>
	/**
	 * The pawn the controller drives now, or `undefined` while this client has no entity for it.
	 * The engine does not promise a hero here; {@link Hero} is the hero.
	 */
	public get Pawn(): Nullable<PlayerPawn>
	/** Whether this is the player at this client, the one `LocalPlayer` holds. */
	public get IsLocalPlayer(): boolean
}
