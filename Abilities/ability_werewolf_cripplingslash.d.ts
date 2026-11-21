// AUTO-GENERATED - do not edit.
/** Tail Whack: the wolf whips its tail around, damaging, slowing and disarming what it hits. */
declare class ability_werewolf_cripplingslash extends Ability {
	/** The radius around the wolf the whip hits in, spirit bonuses applied as the data scales it. */
	public get AOERadius(): number
	/** The whip reaches as far as its radius around the wolf. */
	public get Reach(): number
	/** Only in wolf form: the wolf kit sits out of its slot otherwise. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	/** A whip without a radius reaches nothing. */
	public CanHit(target: Entity): boolean
}
