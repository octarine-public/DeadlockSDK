// AUTO-GENERATED - do not edit.
/**
 * Borrowed Decree: Graves channels a gravestone into the ground where her camera's aim meets it,
 * busy and her aim locked through the channel. The stone stands there the moment the channel
 * ends, knocks the enemies it lands among up and aside, and raises Ghouls a few metres off that
 * stand for their spawn time, then chase the enemy heroes in sight and explode beside them.
 */
declare class ability_necro_gravestone extends Ability {
	/** Seconds from the cast until the stone stands: its channel, which nothing ends early. */
	public get LandingDelay(): number
	/** Not during the channel: a press then is no new gravestone. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
