// AUTO-GENERATED - do not edit.
/**
 * Hotel Guest: after a short channel Doorman checks an enemy hero in to his hotel, taking it out
 * of the fight until it checks out; an imposter may stand in where it was.
 */
declare class ability_doorman_hotel extends Ability {
	/**
	 * Whether `target` is checked in at a Doorman's hotel: inside it, or stood in for by its
	 * imposter. The game does not mark a guest out of the game.
	 */
	public static IsGuest(target: Entity): boolean
	/**
	 * The hero this channel is checking in: the one carrying its pre-teleport or hotel modifier;
	 * none outside the channel.
	 */
	public get Guest(): Nullable<PlayerPawn>
	/** Not during the wind-up or the channel: a press then starts no new check-in. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
