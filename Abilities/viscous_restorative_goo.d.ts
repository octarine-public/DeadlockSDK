// AUTO-GENERATED - do not edit.
/** The Cube: Viscous encases himself or an ally in a healing cube that shrugs off damage. */
declare class viscous_restorative_goo extends Ability {
	/** Whether Viscous himself sits in a cube. */
	public get IsActive(): boolean
	/** Not while Viscous sits in a cube: a press then casts no new one. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
