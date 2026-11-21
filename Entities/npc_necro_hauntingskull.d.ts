// AUTO-GENERATED - do not edit.
/**
 * One of Graves' Deadheads, the skulls her Jar of Dead lets out where it breaks; weapon fire and
 * melee kill one. The game runs a skull outside the NPC classes and gives it no life state, so
 * {@link IsAlive} goes by its health. Its model has no hitboxes and no bones, only a sphere hull
 * 30 units around its position.
 */
declare class npc_necro_hauntingskull extends Entity {
	/** Handle of the Jar of Dead that let the skull out. */
	public readonly AbilityHandle: number
	/** What the skull is doing. */
	public readonly State: EHauntingSkullState
	/** The Jar of Dead that let the skull out. */
	public get Ability(): Nullable<ability_necro_hauntingskull>
	/** A skull lives while it has health: the game networks it no life state. */
	public get IsAlive(): boolean
	/**
	 * How fast the skull flies, in units per second, from its networked moves in either phase:
	 * the draw stream carries zero for it, as it does for an NPC.
	 */
	public get Velocity(): Vector3
}
