// AUTO-GENERATED - do not edit.
/** Chain Gang: Billy chains an enemy to himself and can pull it in. */
declare class ability_punkgoat_tether extends Ability {
	/** Whether the chain holds an enemy and waits for its pull. */
	public get IsWaitingForPull(): boolean
	/** Not while the chain waits for its pull: a press then is no new chain. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
