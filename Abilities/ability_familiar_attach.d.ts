// AUTO-GENERATED - do not edit.
/**
 * Tag Along: Rem flies onto an ally and rides them, healing them; while she rides, its key is
 * the hop to another ally (`ability_familiar_attach_trigger`).
 */
declare class ability_familiar_attach extends Ability {
	/** Native visited allies. */
	public readonly VisitedAllies: readonly number[]
	/** Native last attached handle. */
	public readonly LastAttachedHandle: number
	/** Whether Rem rides a host. */
	public get IsAttached(): boolean
	/**
	 * Whether Rem is on her way onto a host or off one: flying to it, tossed off it, or in the
	 * lockout after.
	 */
	public get IsTravelling(): boolean
	/** Not while Rem travels onto or off a host, nor while the cast winds up. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
