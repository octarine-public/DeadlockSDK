// AUTO-GENERATED - do not edit.
/**
 * Arctic Beam: Kelvin fires a freezing beam where he looks, slowing and damaging what it
 * hits.
 */
declare class ability_icebeam extends Ability {
	/** Whether the beam fires. */
	public get IsActive(): boolean
	/** How far the beam carries from Kelvin, spirit range bonuses applied. */
	public get Reach(): number
	/** Not while the beam fires: a press then ends it. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A beam that carries nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
