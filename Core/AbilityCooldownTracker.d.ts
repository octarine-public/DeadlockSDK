// AUTO-GENERATED - do not edit.
/**
 * A cooldown the tracker estimated, in game time. For an ability with charges, Start and End are
 * the lockout between two charges, and the charge state follows.
 */
interface ICooldownEstimate {
	/** When the cooldown began, on the {@link GameState.RawGameTime} clock. */
	readonly Start: number
	/**
	 * When the cooldown ends, on the {@link GameState.RawGameTime} clock. Without charges, a change
	 * in the hero's cooldown reductions rescales the part still to run and moves {@link Start}.
	 */
	readonly End: number
	/** Charges left; 0 for an ability without charges. */
	readonly Charges: number
	/** When the charge recharging now comes back, or 0 while every charge is in. */
	readonly RechargeEnd: number
}
/** A wind-up and a channel the tracker estimated, in game time; 0 where it saw none. */
interface ICastEstimate {
	/** When the wind-up began, on the {@link GameState.RawGameTime} clock. */
	readonly WindupStart: number
	/**
	 * When the wind-up ends: its start plus the ability's `AbilityCastDelay`, or earlier where its
	 * cooldown or channel is seen starting first or the hero dies.
	 */
	readonly WindupEnd: number
	/** When the channel began, on the {@link GameState.RawGameTime} clock. */
	readonly ChannelStart: number
	/** Infinity while a channel that ends on a signal waits for it. */
	readonly ChannelEnd: number
}
/**
 * Estimates the cooldowns, wind-ups and channels of other heroes' abilities, which reach this
 * client as stand-ins without them, and writes them into the stand-in's own members. A cast shows
 * through its modifier, sound, bullets, damage, particle, selection or animation clip, each a
 * fixed time from its start; the cooldown then runs for the ability's data and upgrades and the
 * hero's cooldown items and buffs. The ultimate's cooldown is not estimated, as the controller
 * networks it, and a cast this client does not see is missed.
 */
interface CAbilityCooldownTracker {
	/**
	 * The cooldown the tracker estimated for another hero's ability from the last cast it saw, or
	 * undefined before it saw one.
	 * @example
	 * const estimate = AbilityCooldownTracker.GetEstimate(ability)
	 * if (estimate !== undefined) {
	 * 	console.log("ready in", estimate.End - GameState.RawGameTime)
	 * }
	 */
	GetEstimate(ability: Ability): Nullable<ICooldownEstimate>
	/**
	 * The wind-up and the channel the tracker estimated for another hero's ability from the last
	 * ones it saw, or undefined before it saw either.
	 */
	GetCastEstimate(ability: Ability): Nullable<ICastEstimate>
}
/**
 * Estimates of other heroes' cooldowns, wind-ups and channels: the one
 * {@link CAbilityCooldownTracker}.
 */
declare const AbilityCooldownTracker: CAbilityCooldownTracker
