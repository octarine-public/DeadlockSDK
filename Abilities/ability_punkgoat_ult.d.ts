// AUTO-GENERATED - do not edit.
/**
 * Bashdown: Billy winds up a slam while the key is held and brings it down ahead of him when it
 * is let go.
 */
declare class ability_punkgoat_ult extends Ability {
	/** Whether the server is still holding Bashdown's ability input. */
	public readonly IsHoldingButton: boolean
	/**
	 * Whether letting go of the key now brings the slam down at full charge: the key holds the
	 * channel and it has run its full `AbilityChannelTime`.
	 */
	public get IsFullyCharged(): boolean
	/**
	 * Seconds Billy rises for once the cast starts, before he comes down on the slam
	 * (`m_flGoUpDuration`): when whoever is in the air before him is pulled to the ground.
	 */
	public get GoUpDuration(): number
	/**
	 * How far ahead of Billy the slam reaches: it lands `PlaceDistanceInFrontOfCaster` before him
	 * and hits within its cast range of that point.
	 */
	public get Reach(): number
	/** Not during the wind-up or the held channel: a press then is no new slam. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
