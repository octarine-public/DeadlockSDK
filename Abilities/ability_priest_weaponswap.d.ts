// AUTO-GENERATED - do not edit.
/** Ira Domini: Venator trades his gun for a crossbow of blessed stakes for a while. */
declare class ability_priest_weaponswap extends Ability {
	/**
	 * Whether Venator holds the crossbow: the ultimate is toggled on, or the crossbow sits in his
	 * primary weapon slot.
	 */
	public get IsActive(): boolean
	/** How far the crossbow's stakes carry, in world units, from its weapon data. */
	public get CrossbowRange(): number
	/** The crossbow reaches as far as its stakes carry. */
	public get Reach(): number
	/** Pure for a blessed stake's `BonusDamage`, which no resistance reduces. */
	public GetDamageType(propName?: string): EDamageType
	/**
	 * Not while Venator holds the crossbow or winds the swap up: a press then is no new Ira
	 * Domini.
	 */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
