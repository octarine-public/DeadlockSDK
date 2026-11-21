// AUTO-GENERATED - do not edit.
/** Rejuvenating Aurora: an aura around Dynamo that heals him and the allies near him. */
declare class citadel_ability_nikuman extends Ability {
	/** Whether the aurora heals. */
	public get IsActive(): boolean
	/**
	 * Whether the aurora holds Dynamo in a channel while it heals; the upgrade that frees him
	 * to move, shoot and cast through it ends that.
	 */
	public get Channels(): boolean
	/** Not while the aurora heals: a press then is no new cast. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
