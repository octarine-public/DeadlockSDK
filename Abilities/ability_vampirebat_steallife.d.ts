// AUTO-GENERATED - do not edit.
/** Rake: Mina claws the enemies in a cone ahead of her, the more the more health they miss. */
declare class ability_vampirebat_steallife extends Ability {
	public GetDamage(target: Nullable<PlayerPawn>, options?: IDamageOptions): number
	/** Not while Mina channels Nox Nostra: the game refuses Rake during the swarm. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
	public CanHit(target: Entity): boolean
}
