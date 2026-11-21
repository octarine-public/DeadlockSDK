// AUTO-GENERATED - do not edit.
/**
 * Foul Vapors: Nurse Harrow breaks a vial over herself or an ally within `AbilityCastRange`. For
 * `AbilityDuration` the unit's actions run `RushTimeScaleBonusPercent` percent faster and
 * `DeferredDamagePercent` of the damage it takes is held back as ghosts instead of landing; then
 * it crashes for `CrashDuration` at `CrashTimeScalePenaltyPercent` percent slower actions while
 * the ghosts deal their held damage and `DeferredDamageBonusPercent` more; healing does not
 * drive them out, though the tooltip says so. Held with the alt-cast it goes on Nurse herself.
 */
declare class ability_nurse_adrenaline_rush extends Ability {
	/** Seconds the rush lasts, with the spirit duration bonus the data scales it by. */
	public get RushDuration(): number
	/**
	 * Percent the rush speeds the unit's actions up by: `RushTimeScaleBonusPercent` with the spirit
	 * power it scales by. It applies to the gun's rate of fire, its reload and a cast's wind-up
	 * that starts while the rush is on; a channel and the ability's own duration are not sped up.
	 */
	public get RushSpeedPercent(): number
	/**
	 * Percent the crash slows the unit's actions by for `CrashDuration`:
	 * `CrashTimeScalePenaltyPercent`. The gun's rate of fire, its reload and a cast's wind-up slow
	 * by it.
	 */
	public get CrashSlowPercent(): number
	/**
	 * What the ghosts of `damage` that landed during the rush deal in all: `DeferredDamagePercent`
	 * of it held back while the rush lasts, then paid with `DeferredDamageBonusPercent` more as
	 * pure damage in two equal pulses, two seconds into the crash and as it ends. Neither
	 * regeneration nor a heal spares it.
	 */
	public GetGhostDamage(damage: number): number
	/** Whether `unit` runs a rush now. */
	public IsRushing(unit: Entity): boolean
	/** Whether `unit` is crashing from a rush now. */
	public IsCrashing(unit: Entity): boolean
	/** Only on a living hero of Nurse's team that neither rushes nor crashes. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
