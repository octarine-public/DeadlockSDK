// AUTO-GENERATED - do not edit.
/**
 * Leech Therapy: Nurse Harrow throws a jar that breaks on the first unit or ground it meets and
 * lets out `LeechCount` leeches over `Radius`; they cling to the enemies around it and drain
 * spirit damage a second (`DPS`) for `AbilityDuration`, then lie on the ground for Nurse to pick
 * up. Each pickup restores the health the leech drank, adds `RegenPerLeechPickup` health regen and
 * `FireRatePerLeechPickup` percent fire rate, up to `MaxLeechBonusStacks` stacks, and the stacks
 * lengthen her Lurking Terror. The jar is a bullet under gravity, thrown the way Graves' jar is.
 */
declare class ability_nurse_leech_therapy extends Ability {
	/** How many leech pickups Nurse holds: the stacks of her permanent pickup bonus. */
	public get LeechStacks(): number
	/**
	 * The spirit power the pickups give: `SpiritPowerPerLeechStack` (from the second tier) for
	 * every stack she holds.
	 */
	public get SpiritBonus(): number
	/** How far around where the jar breaks the leeches look for an enemy, in world units. */
	public get SearchRadius(): number
	/** Degrees above the view pitch the jar leaves at. */
	public get VerticalAimBias(): number
	/** The pull on the jar in flight, in world units a second squared. */
	public get Gravity(): number
	/** How far the jar carries over flat ground at its best angle, in world units. */
	public get ThrowRange(): number
	/** The jar reaches what stands within the leeches' radius of where it can land. */
	public get Reach(): number
	/** The view pitch, in degrees, of the throw that carries the jar farthest. */
	public get FarthestPitch(): number
	/**
	 * Seconds the leeches drain an enemy for: `AbilityDuration` with the owner's spirit duration
	 * bonus, less `target`'s debuff resistance where one is named (`Ability.GetDuration`).
	 */
	public GetDrainDuration(target?: Nullable<PlayerPawn>): number
	/**
	 * The view pitch, in degrees, that lands a jar thrown now toward `to` on it, along its low arc
	 * from where it leaves Nurse's hand; `NaN` where no throw reaches it. The view yaw is the one
	 * from Nurse to `to`.
	 */
	public ThrowPitch(to: Vector3): number
	/**
	 * What the leeches drain from `target` a second: spirit damage through its resistance and
	 * under the owner's outgoing multipliers, less its barrier (`Ability.GetDamage`).
	 */
	public GetDrainPerSecond(target: PlayerPawn): number
	/** What the leeches drain from `target` over the whole drain (`GetDrainDuration`). */
	public GetDrainDamage(target: PlayerPawn): number
	/** The leeches' damage is spirit damage. */
	public GetDamageType(propName?: string): EDamageType
	/** A jar that flies nowhere reaches nothing. */
	public CanHit(target: Entity): boolean
}
