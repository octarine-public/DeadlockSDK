// AUTO-GENERATED - do not edit.
/**
 * A burst of bullets the server reports, from a gun or from an ability, as the `FireBullets`
 * event hands it over.
 */
declare class FireBullets {
	/** Where the bullets leave from; a bullet's damage falloff counts its flight from here. */
	public readonly Origin: Vector3
	/** The direction the bullets are fired in. */
	public readonly Angles: QAngle
	/** The direction the message gives as the original one, beside {@link Angles}. */
	public readonly AnglesOriginal: QAngle
	/** The random seed the message carries for the burst; 0 when it carries none. */
	public readonly Seed: number
	/** The penetration percent the message carries; 0 when it carries none. */
	public readonly PenetrationPercent: number
	/** The spread the message gives the burst; 0 when it gives none. */
	public readonly Spread: number
	/**
	 * Whether the bullets left the shooter's gun; `true` when the message does not say. A bullet
	 * that Celeste's gun fires again off a bounce did not.
	 */
	public readonly FiredFromGun: boolean
	/** A bullet count in place of the weapon's; 0 when the message carries none. */
	public readonly BulletsOverride: number
	/**
	 * The data id (`AbilityStore.SubclassID`) of the weapon or ability that fired; 0 when the
	 * message carries none.
	 */
	public readonly WeaponSubclassID: number
	/** The number the message gives the shot; 0 when it gives none. */
	public readonly ShotNumber: number
	/** How far the bullets reach, in world units; 0 when the message does not say. */
	public readonly MaxRange: number
	/** An id the message gives the shot; 0 when it gives none. */
	public readonly ShotID: number
	/** Whether hits on units are to be predicted; `true` when the message does not say. */
	public readonly PredictHitsAgainstUnits: boolean
	/** A bullet radius in place of the weapon's; 0 when there is none. */
	public readonly BulletRadiusOverride: number
	/** A bullet speed in place of the weapon's; 0 when there is none, as for a gun's shot. */
	public readonly BulletSpeedOverride: number
	/** A bullet gravity in place of the weapon's; 0 when there is none. */
	public readonly BulletGravityOverride: number
	/** Which muzzle of the weapon the bullets leave from; 0 when the message does not say. */
	public readonly MuzzleNumber: number
	/** Whether the burst is an ability fired as bullets; `false` when the message does not say. */
	public readonly AbilityAsBullet: boolean
	/** The shooter's entity index; -1 when the message names none. */
	public readonly ShooterIndex: number
	/**
	 * The entity index of the ability that fired; -1 when the message names none.
	 * {@link FireBullets.Ability} resolves it.
	 */
	public readonly AbilityIndex: number
	/** The index of the entity the bullets ignore; -1 when there is none. */
	public readonly IgnoreEntityIndex: number
	/** The entity that fired, or `undefined` when this client has none at {@link ShooterIndex}. */
	public get Shooter(): Nullable<Entity>
	/** The ability the burst names by entity, its stand-in where this client has no entity for it. */
	public get Ability(): Nullable<Ability>
	/**
	 * The ability that fired the burst: {@link FireBullets.Ability} when that finds one, else
	 * the shooter's ability for {@link WeaponSubclassID}, matched on `SubclassID` and then on
	 * the ability name that id stands for. An ability built on the gun, such as Grey Talon's
	 * Charged Shot, comes with no ability entity and is found only the second way, which needs
	 * the shooter to be a hero.
	 */
	public get SourceAbility(): Nullable<Ability>
	/** The entity the bullets ignore, or `undefined` when this client has none at that index. */
	public get IgnoreEntity(): Nullable<Entity>
}
