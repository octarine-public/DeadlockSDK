// AUTO-GENERATED - do not edit.
/**
 * A view angle change the server sends for a pawn, as
 * {@link PlayerPawn.ServerViewAngleChanges} lists them.
 */
interface ViewAngleServer {
	/** The number the server gives the change; -1 when the entry has none. */
	get Index(): number
	/**
	 * Whether {@link Angle} is absolute or relative, by `FixAngleSet`; `FixAngleSet.None` when
	 * the entry has none.
	 */
	get Type(): FixAngleSet
	/** The angle the server sets; a zero vector when the entry has none. */
	get Angle(): Vector3
}
