// AUTO-GENERATED - do not edit.
/**
 * The gun every hero has, under whatever name the hero's data gives it.
 * `PlayerPawn.PrimaryWeapon` finds the one in the primary weapon slot.
 */
declare class citadel_ability_primary_weapon extends Ability {
	/** The game time, in seconds, the gun's last reload started at. */
	public readonly LastReloadStartTime: number
	/** Share of the magazine still loaded, 0 to 1. */
	public readonly AmmoFrac: number
	/** The gun's shots start on the command's camera ray, at {@link ShotStart}. */
	public get LaunchesFromCamera(): boolean
	/**
	 * Whether the weapon only acts on allies: its data lists friendly heroes among the units it
	 * targets and no enemy hero (Nurse Harrow's needles). Its shots cannot hurt an enemy, so
	 * nothing aims or fires it at one.
	 */
	public get IsAllyOnly(): boolean
	/**
	 * Whether the gun's own state lets it fire now: not reloading, no attack delay reason set
	 * (`NextAttackDelayReason`), and {@link CanAttackByTime}.
	 */
	public get CanAttack(): boolean
	/**
	 * How fast the gun's next bullet flies, in world units a second: the data's `m_flBulletSpeed`
	 * times one plus every bullet velocity percent its owner has from items, buffs and abilities,
	 * added together (`ModifierManager.GetBonusPercent` of `EBulletSpeed`). The game networks no
	 * speed for a gun's shot.
	 */
	public get BulletSpeed(): number
	/**
	 * Seconds after its command's client tick at which the server judges a bullet that meets
	 * something `travel` world units from where it leaves ({@link ShotStart}), flying at `speed`:
	 * whole ticks, as it traces each tick of the flight in a world rewound to that client tick
	 * plus the ticks already flown. A hit within the first tick's flight is judged at the client
	 * tick itself.
	 * @param speed {@link BulletSpeed} by default, the fastest the gun's bullets fly: a gun the
	 * data gives `m_flBulletSpeedRandomFactor` launches each one at a speed drawn between that
	 * share less and its own
	 * @example
	 * const judged = GameState.RawGameTime + weapon.JudgedFlightTime(travel)
	 */
	public JudgedFlightTime(travel: number, speed?: number): number
	/**
	 * Seconds from the client tick of the command that presses the trigger from idle to the
	 * earliest the gun's shot is judged, before its flight ({@link JudgedFlightTime}): as long as
	 * the data holds the bullet back (`AbilityStore.BulletCreationDelay`), 0 for most guns, whose
	 * bullet can leave on the pressing command itself.
	 */
	public get TapShotDelay(): number
	/**
	 * How many commands in a row the trigger has to be down before letting it go fires the gun; 0
	 * for a gun that fires while the trigger is down, which is every gun but a charged one.
	 */
	public get ReleaseHoldCommands(): number
	/**
	 * Degrees above the view a shot of the gun leaves at: twice the data's `m_flVerticalAimBias`,
	 * 0 for a gun the data gives none.
	 */
	public get ShotElevation(): number
	/**
	 * How fast the gun's bullets fall, in world units a second squared: the world's gravity
	 * (`sv_gravity`) times the gun's `BulletGravityScale`.
	 */
	public get BulletGravity(): number
	/**
	 * Where a shot of the gun sets out from, written into `out`: on the camera ray, from `camera`
	 * along the unit `direction` of the view, as far out as the owner's origin lies from the
	 * camera.
	 * @example
	 * const start = weapon.ShotStart(CameraSDK.Position, direction, new Vector3())
	 */
	public ShotStart(camera: Vector3, direction: Vector3, out: Vector3): Vector3
	/** Whether the game time has reached the gun's next allowed shot (`NextPrimaryAttack`). */
	public get CanAttackByTime(): boolean
	/**
	 * How many of one shot's bullets can land on one target: all it fires
	 * (`AbilityStore.BulletsPerShot`), one where the data lets a target take a shot once
	 * (`AbilityStore.HitsOncePerShot`). The game reports the bullets of a shot that hit a target
	 * as one `UnitDamage`, their damage summed and `Hits` counting them.
	 */
	public get HitsPerShot(): number
	/**
	 * What one bullet, or one pellet of a gun that fires several, deals a target `distance` world
	 * units away before falloff, weak point and the target's answer: the gun's damage with its
	 * owner's flat bonuses (`ModifierManager.GetBonusFlat`), times one plus the sum of the owner's
	 * weapon damage percents, its items' range bonus at that distance, what its abilities and
	 * items add against `target`'s state (`ModifierManager.GetTargetBonus`) and `bonus`, a
	 * percent one shot adds on its own.
	 * @example
	 * const bullet = weapon.GetBulletDamageAt(hero.Distance(enemy), enemy)
	 */
	public GetBulletDamageAt(distance: number, target?: PlayerPawn, bonus?: number): number
	/**
	 * The share of its damage a bullet keeps after flying `travel` world units
	 * (`AbilityStore.DamageFalloff`): the start scale up to the start range, the end scale from
	 * the end range on, and between them a curve the data's bias bends, a straight line at 0.5.
	 * The owner's weapon range percents push both ranges out.
	 */
	public GetFalloff(travel: number): number
	/**
	 * How many times a body hit's damage a hit on the weak point, the head, deals `target` after
	 * flying `travel` world units: the gun's weak-point bonus at that range
	 * (`AbilityStore.WeakPointBonus`, 1.65 for most guns), its excess over 1 scaled by the
	 * owner's and the target's starting weak-point stats (`ECritDamageBonusScale`,
	 * `ECritDamageReceivedScale`).
	 */
	public WeakPointMultiplier(target: PlayerPawn, travel: number): number
	/**
	 * What one shot carries into `target` before the target answers - the `PreDamage` of the
	 * `UnitDamage` the game reports for it: {@link GetBulletDamageAt} the distance between the two
	 * heroes against `target` as it stands before the hit, times the falloff over its `travel`
	 * ({@link GetFalloff}), the weak-point multiplier when `weakPoint`
	 * ({@link WeakPointMultiplier}), the owner's outgoing damage multiplier and the incoming damage
	 * increases the target wears (`Ability.GetPreDamage`), for each of its `hits` bullets.
	 * @param travel how far the bullet flies before it hits, in world units. The game counts it
	 * from where the shot leaves - on the camera's line, a little ahead of the shooter - to the
	 * point hit; without it, the distance from the owner to the target's hull, which came within
	 * a third of a metre of the game's at 30 to 60 m.
	 * @param hits how many of the shot's bullets land, the report's `Hits`; every one that can
	 * ({@link HitsPerShot}) by default
	 */
	public GetBulletPreDamage(target: PlayerPawn, weakPoint?: boolean, travel?: number, hits?: number): number
	/**
	 * What one shot takes off `target`'s health: {@link GetBulletPreDamage} through the target's
	 * bullet resistance, plus what the owner's abilities and items add to the shot
	 * (`Ability.GetBulletProcDamage`: Flight's spirit damage, Express Shot's proc), less the
	 * target's barrier.
	 * @param travel how far the bullet flies, as {@link GetBulletPreDamage} takes it
	 * @param hits how many of the shot's bullets land, as {@link GetBulletPreDamage} takes it
	 * @example
	 * const lethal = weapon.GetBulletDamage(enemy, true) >= enemy.HP
	 */
	public GetBulletDamage(target: PlayerPawn, weakPoint?: boolean, travel?: number, hits?: number): number
}
