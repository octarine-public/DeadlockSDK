// AUTO-GENERATED - do not edit.
/**
 * One entry of the trooper minimap's fog-of-war list, as {@link TrooperMinimap.FOWEntity} holds
 * them.
 */
declare class TrooperFOWEntityData {
	/** The networked entry the getters read. */
	public readonly properties: EntityPropertiesNode
	/** The entity index the entry carries; -1 when it carries none. */
	public get EntIndex(): number
	/** The team the entry carries; `Team.Invalid` when it carries none. */
	public get Team(): Team
	/** The position the entry carries, x and y in one number; -1 when it carries none. */
	public get PositionXY(): number
}
