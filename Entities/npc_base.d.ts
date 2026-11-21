// AUTO-GENERATED - do not edit.
/**
 * A unit the game runs as an NPC (`CAI_BaseNPC`), with its entry in the unit data in
 * {@link UnitStore}. Troopers, bosses, jungle neutrals and units some heroes summon are NPCs.
 */
declare class npc_base extends Entity {
	/** The NPC's entry in the unit data, by {@link SubclassID}; `UnitStore.empty` until known. */
	public UnitStore: UnitStore
	/**
	 * The NPC's AI state; `NPC_STATE_INVALID` until the server sends one. A change emits
	 * `LifeStateChanged`.
	 */
	public State: NPC_STATE
	/** The id naming the NPC's entry in the unit data (`UnitStore.SubclassID`); 0 until sent. */
	public SubclassID: number
	/** The `EntityNames` name, or the unit data's name (`UnitStore.Name`) while it has none. */
	public get Name(): string
	/** The entity the NPC is looking at; `undefined` while there is none on this client. */
	public get Target(): Nullable<Entity>
	/** `UnitStore.MaxHealth` where the unit data gives one, otherwise `BaseMaxHP`. */
	public get MaxHP(): number
	/** Alive by its life state and not in `NPC_STATE_DEAD`. */
	public get IsAlive(): boolean
	/**
	 * How fast the NPC moves, in units per second, from its networked moves in either phase. The
	 * client keeps no velocity for an NPC: the draw stream carries zero for every one of them,
	 * walking or not, so a drawn frame answers with the last server tick's move instead.
	 */
	public get Velocity(): Vector3
}
