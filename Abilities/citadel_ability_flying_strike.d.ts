// AUTO-GENERATED - do not edit.
/** Yamato's Flying Slash. */
declare class citadel_ability_flying_strike extends Ability {
	/** Game time at which the current grapple began. */
	public readonly GrappleStartTime = 0
	/** Game time recorded for the grapple's arrival. */
	public readonly GrappleArriveTime = 0
	/** Handle of the unit currently held by the grapple. */
	public readonly GrappleTargetHandle = 16777215
	/** How fast the grapple flies to its target, in world units a second (`m_flGrappleSpeed`). */
	public get GrappleSpeed(): number
	/** Whether the hook is travelling, holding its target, or pulling Yamato toward it. */
	public get IsGrappling(): boolean
	/**
	 * Whether the cast still holds Yamato: its grapple as well, which keeps him busy past the
	 * post-cast the cast starts with until he lands and the next one runs out.
	 */
	public get IsCasting(): boolean
}
