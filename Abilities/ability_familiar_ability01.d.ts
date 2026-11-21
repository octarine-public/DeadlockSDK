// AUTO-GENERATED - do not edit.
/** Naptime: Rem channels a lullaby and puts the enemies around her to sleep. */
declare class ability_familiar_ability01 extends Ability {
	/** Native targets in cone. */
	public readonly TargetsInCone: readonly number[]
	/**
	 * Not while Rem channels it, where a press is no new lullaby, nor while she rides a host,
	 * where the game takes none from her.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
