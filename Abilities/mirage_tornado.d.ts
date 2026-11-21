// AUTO-GENERATED - do not edit.
/** Dust Devil: Mirage turns into a tornado that travels ahead, lifting the enemies it meets. */
declare class mirage_tornado extends Ability {
	/** Whether Mirage travels as the tornado. */
	public get IsMoving(): boolean
	/** Not while Mirage travels as the tornado: a press then is no new Dust Devil. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
