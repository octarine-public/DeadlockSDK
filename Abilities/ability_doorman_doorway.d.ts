// AUTO-GENERATED - do not edit.
/** Doorway: Doorman places a pair of linked doors that carry whoever walks through one to the other. */
declare class ability_doorman_doorway extends Ability {
	/** Handle of the first door in the current placement or pair. */
	public readonly FirstDoorHandle: number
	/**
	 * Whether Doorman is placing doors: holding the doorway in targeting, or with the first door
	 * standing and its pair still to come.
	 */
	public get IsPlacing(): boolean
}
