// AUTO-GENERATED - do not edit.
/** The slide every hero has; Billy's is `ability_punkgoat_slide`, of the same class. */
declare class citadel_ability_slide extends Ability {
	/** How many times the hero has jumped in the current slide. */
	public readonly JumpsThisSlideSession: number
	/** When the hero began sliding on flat ground. */
	public readonly SlidingOnFlatStartTime: number
	/** When the hero's current stretch on the ground began. */
	public readonly OnGroundStartTime: number
	/** When the current slide out of a dash began. */
	public readonly DashSlideStartTime: number
	/** When the hero last started or stopped sliding. */
	public readonly SlideChangeTime: number
	/** When crouch was last pressed. */
	public readonly DuckPressedTime: number
	/** An adjustment the slide makes to the hero's speed. */
	public readonly SpeedAdjust: number
	/** Whether the hero was in the air when crouch was pressed. */
	public readonly AirborneWhenDuckPressed: number
	/** Whether the hero is sliding. */
	public readonly IsSliding: boolean
}
