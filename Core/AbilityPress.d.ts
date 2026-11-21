// AUTO-GENERATED - do not edit.
/**
 * The last press of one ability's key, on its way until the game shows it (`Started`) or `Settle`
 * and an input lag pass without a sign of it (`Lost`), counted from when it went out or from the
 * end of the post-cast the game queues it behind (`PlayerPawn.AbilityPressQueuedUntil`). It holds
 * the key while on its way and for `Settle` at least, and every press of the ability goes through
 * it (`Ability.Use`, `Ability.PressKey`, `Ability.Confirm`): two scripts never press it twice for
 * one cast.
 * @example
 * if (!ability.IsPressing && ability.CanBeCasted(target)) {
 * 	ability.Use(cmd)
 * }
 */
declare class AbilityPress {
	/** How long a press holds its ability's key at least, in seconds. */
	public static readonly Settle = 0.25
	/**
	 * How long, in seconds, the game holds a press of an ability its owner is too busy to take:
	 * `citadel_ability_busy_queue_time`, 0.25 when the convar is not found. A press at most this
	 * long before the action ends is cast the moment it ends, an earlier one is dropped; the game
	 * judges a press about an input lag after it goes out, so the queue reaches that much further
	 * back. `Ability.Use` holds a press in a post-cast back until this long before its end
	 * (`PlayerPawn.DropsAbilityPress`).
	 */
	public static get QueueTime(): number
	/**
	 * Follows the presses of `ability`. Only the one the ability keeps, `Ability.LastPress`, is
	 * told of them.
	 */
	constructor(ability: Ability)
	/** Where the last press stands. */
	public get Stage(): EPressStage
	/** The game time the last press went out at; 0 before the first. */
	public get SentAt(): number
	/** Whether the last press went out and the game has yet to show it took or lose it. */
	public get OnItsWay(): boolean
	/**
	 * Whether the last press still holds the key: it is on its way, or it went out less than
	 * `Settle` ago.
	 */
	public get Holds(): boolean
}
