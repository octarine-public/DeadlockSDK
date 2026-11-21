// AUTO-GENERATED - do not edit.
/**
 * Feed The Birds: after a wind-up Baba channels, dropping bread on the enemies in front of her;
 * pigeons strike each one by the bread it carries once the channel ends. A press of the key
 * during the channel ends it early.
 */
declare class ability_baba_ultimate_2 extends Ability {
	/** Whether the ultimate winds up or channels. */
	public get IsActive(): boolean
	/** Whether the channel has run for `TimeToMaxStacks`, the bread on its targets at full count. */
	public get IsFullBread(): boolean
	/** Whether `target` carries bread from the current cast. */
	public HasBread(target: Entity): boolean
	/** Not during the wind-up or the channel: a press then ends the channel. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
