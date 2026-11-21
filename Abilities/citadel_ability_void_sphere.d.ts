// AUTO-GENERATED - do not edit.
/**
 * Quantum Entanglement: Dynamo vanishes into a sphere, untouchable, and reappears where he
 * sent it.
 */
declare class citadel_ability_void_sphere extends Ability {
	/** Whether Dynamo is inside the sphere, from vanishing until he reappears. */
	public get IsActive(): boolean
	/** Not while Dynamo is inside the sphere: a press then is no new teleport. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
