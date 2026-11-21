// AUTO-GENERATED - do not edit.
/**
 * Card Trick: Wraith throws the cards she builds up by hitting enemies. A card flies at what the
 * crosshair meets first and follows it every command until it lands: an enemy in view within
 * {@link Ability.TargetingConeAngle} of the aim ray, otherwise the solid world (not a veil),
 * otherwise a point far down the ray. Touching the world ends it. The crosshair is the command's,
 * its view angles from the camera position it carries (`PlayerPawn.CommandCameraReach`), so a
 * card can be sent at a surface her own camera does not see.
 */
declare class citadel_ability_card_toss extends SteeredAbility {
	public CanBeCasted(): boolean
	/** The card in flight that left first. */
	public get SteeredProjectile(): Nullable<Projectile>
	/** A card flies at the crosshair's first hit. */
	public get FliesAtFirstHit(): boolean
	/**
	 * The surface the card's line through `point` meets behind it, when what the camera sees
	 * first towards it lies on that line at or past `point`: the crosshair's first hit. Otherwise
	 * along that line's direction from the camera, when that ray meets nothing or first meets
	 * something on nearly the same line past `point`. False when neither holds: cover short of
	 * `point` would take the card. The line starts where the card has turned to on its heading
	 * ({@link JoinPoint}) while `point` lies ahead of that, at the card otherwise.
	 */
	public SteerPoint(projectile: Projectile, point: Vector3, camera: Vector3, out: Vector3): boolean
	/**
	 * The first of a ring of 32 cameras around Wraith, all within the server's reach, from which
	 * the surface behind `point` on the card's line ({@link SteerPoint}) is what the crosshair
	 * meets first, the crosshair passing clear of `target`'s body. The camera that answered last
	 * is traced alone first, the ring in one batch after it.
	 */
	public SteerCamera(projectile: Projectile, point: Vector3, target: Entity, camera: Vector3, out: Vector3): boolean
	/**
	 * A card turns at its new point within a short time, flying on along `heading` meanwhile:
	 * 0.12 s of travel, in which the gap between its heading and the crosshair's hit shrinks by
	 * about two thirds.
	 */
	public JoinPoint(from: Vector3, heading: Vector3, _point: Vector3, _camera: Vector3, out: Vector3): void
}
