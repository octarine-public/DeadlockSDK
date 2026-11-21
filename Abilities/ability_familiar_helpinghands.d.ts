// AUTO-GENERATED - do not edit.
/** Lil Helpers: Rem sends one of her helpers onto an ally, where it rides and heals them. */
declare class ability_familiar_helpinghands extends Ability {
	/** Native helper handles. */
	public readonly HelperHandles: readonly number[]
	/** Number of owned helpers whose native availability flag permits assignment. */
	public get AvailableHelperCount(): number
	/** Native chore cooldown end time. */
	public readonly ChoreCooldownEndTime: number
	/** Native soonest helper cooldown end time. */
	public readonly SoonestHelperCooldownEndTime: number
	/** Whether a helper rides `unit` or is on its way to it. */
	public IsInfested(unit: Entity): boolean
	/** Only with a helper free to send. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
