// AUTO-GENERATED - do not edit.
/** Petrifying Bola: Vyper throws a bola that turns the enemies it catches to stone. */
declare class ability_viper_petrifybola extends Ability {
	/** Petrifying Bola starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** How far the bola flies: its speed over its lifetime; 0, unlimited, for no lifetime. */
	public get Reach(): number
	/** Whether `target` stands petrified by a Petrifying Bola, any Vyper's. */
	public IsPetrified(target: Entity): boolean
}
