// AUTO-GENERATED - do not edit.
/**
 * Healing Needles: Nurse Harrow swaps her gun for a full magazine of syringes that heal the
 * allies they hit (`HealRegen`, `HeadshotHealBonusPercent` more on the head); damage she deals
 * and every leech she picks up refill the charge. A press while the needles are out puts them
 * away for the gun. The swap takes `SwapInDelay` seconds before the first shot.
 */
declare class ability_nurse_healing_needles extends Ability {
	/**
	 * Whether Nurse Harrow holds the needles instead of her gun, from the start of the swap to
	 * them ({@link IsSwapping}).
	 */
	public readonly NeedlesOut: boolean
	/** The time the swap to the needles finishes at. */
	public readonly SwapInFinishTime: number
	/** How far the charge has refilled. */
	public readonly ChargeProgress: number
	/** Whether the needles are out and the swap to them is still on. */
	public get IsSwapping(): boolean
	/** Whether the needles are out and ready to shoot. */
	public get IsArmed(): boolean
	/**
	 * How far a needle carries an ally's heal, in world units: the needles' `AbilityCastRange`
	 * from their weapon data with the owner's spirit range bonus. The weapon itself stands in the
	 * primary slot only while the needles are out.
	 */
	public get WeaponReach(): number
	/**
	 * Degrees off a needle's line an ally still draws it: the needles' `m_flTargetingConeAngle`
	 * from their weapon data.
	 */
	public get WeaponConeAngle(): number
	/** The needles reach as far as a needle carries (`WeaponReach`). */
	public get Reach(): number
	/** What one needle heals an ally, the spirit power's share included. */
	public GetHealPerShot(headshot?: boolean): number
	/** What `target` still lacks of its health, the most a needle can heal it. */
	public GetMissingHealth(target: PlayerPawn): number
	/** Whether a press now takes the needles out: a charge to spend, none out, none winding up. */
	public CanDeploy(): boolean
	/** Whether a press now puts the needles away: they are out, ready, and no press holds. */
	public CanStow(): boolean
	/** Castable to take the needles out with a charge, or, with them out, to put them away. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
