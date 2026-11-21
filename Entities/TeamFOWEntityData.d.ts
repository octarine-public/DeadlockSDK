// AUTO-GENERATED - do not edit.
/** One entity of a team's fog-of-war map list, as the team entity networks it. */
declare class TeamFOWEntityData {
	/** The networked entry the getters read. */
	public readonly properties: EntityPropertiesNode
	/** The index of the entity the entry is for; -1 when the entry has none. */
	public get EntIndex(): number
	/** The game tick the entry records the entity as hidden at; -1 when it has none. */
	public get TickHidden(): bigint
	/** The team the entry gives the entity; `Team.Invalid` when it gives none. */
	public get Team(): Team
	/**
	 * The entity's server class (`Class_T`), by the values {@link UnitDamage.AttackerClass}
	 * uses; -1 when the entry has none.
	 */
	public get Class(): bigint
	/** The lane number the entry gives the entity; -1 when it gives none. */
	public get Lane(): number
	/** The entity's health in percent; -1 when the entry has none. */
	public get HealthPercent(): number
	/** The map height the entry gives the entity (`EMinimapHeight`); -1 when it gives none. */
	public get Height(): number
	/**
	 * Whether the entry marks the entity as shown on the map; the SDK copies it to the entity's
	 * `IsVisibleOnMap`.
	 */
	public get VisibleOnMap(): boolean
	/** Whether the entry marks the entity's backdoor protection as on. */
	public get BackdoorProtectionActive(): boolean
	/** The entity's x and y as the entry gives them; -1 each when it has none. */
	public get Position(): Vector2
}
