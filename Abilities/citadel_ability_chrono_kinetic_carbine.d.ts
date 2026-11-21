// AUTO-GENERATED - do not edit.
/**
 * Kinetic Carbine: Paradox loads a charged shot that her next primary fire shoots; it grows in
 * damage and slow for `MaxChargeDuration` after the cast.
 */
declare class citadel_ability_chrono_kinetic_carbine extends Ability {
	/** Whether the shot is loaded and charging, until primary fire shoots it. */
	public get IsActive(): boolean
	/**
	 * Whether the loaded shot has charged for at least `fraction` of `MaxChargeDuration`, counted
	 * from when the current cast completed. The charging modifier's creation time moves while it
	 * charges, so the cast is the clock.
	 */
	public HasCharged(fraction: number): boolean
	/**
	 * How far the loaded shot has charged: 0 to 1 of `MaxChargeDuration` since the current cast
	 * completed, 0 while none is loaded.
	 */
	public get Charge(): number
	/**
	 * What the loaded shot takes off `target` at `charge`, as spirit damage: one bullet of the
	 * gun at the target's distance before falloff (`GetBulletDamageAt` of the primary weapon),
	 * times the base of `MinBonusBulletDamage`, times one plus a percent rising with the charge
	 * from that property's scale to `MaxBonusBulletDamage`'s, and one plus `HeadshotBonus` percent
	 * when `weakPoint`. It lands through the target's spirit resistance, with the owner's item
	 * bursts, less its barrier.
	 */
	public GetShotDamage(target: PlayerPawn, weakPoint?: boolean, charge?: number): number
	/** Not while the shot is loaded: primary fire shoots it then. */
	public CanBeCasted(target?: Nullable<Entity>): boolean
}
