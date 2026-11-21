// AUTO-GENERATED - do not edit.
/** Where the last press of an ability's key stands (`AbilityPress.Stage`). */
declare enum EPressStage {
	/** The key has not been pressed since the ability arrived. */
	None = 0,
	/** Pressed; the game has yet to show the press took. */
	Sent = 1,
	/**
	 * The game showed the press took: a wind-up, a channel or its end, a cooldown, a charge spent,
	 * a toggle flipped, the targeting the ability enters or leaves, or the ability gone from its slot.
	 */
	Started = 2,
	/** The game never showed the press by its time: refused, or eaten by something else. */
	Lost = 3
}
