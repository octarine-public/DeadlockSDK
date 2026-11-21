// AUTO-GENERATED - do not edit.
/** Turns the view toward an aim at a human pace instead of snapping to it. Use `Humanizer`. */
interface CHumanizer {
	/**
	 * Smooths the view angles written on this tick's command: the view moves from `realView`
	 * toward them by at most 64 degrees an axis, and fades back by half a tick once nothing is
	 * written. While it is more than 1.5 degrees short of the aim, the attack buttons are released
	 * and pressed again on the next tick.
	 * @param realView the player's own view angles this tick
	 */
	Process(cmd: UserCmd, realView: Vector3): void
	/** Drops what is left of the smoothing, so the next tick starts from the player's own view. */
	ResetOffset(): void
	/** Keeps the attack buttons held this tick even while the view is short of the aim. */
	SuppressFireRelease(): void
	/**
	 * Leaves the view written this tick as it is. How far it is from the player's own view is
	 * kept, so the ticks after it ease back instead of snapping.
	 */
	SuppressSmoothing(): void
	/**
	 * Leaves the view written this tick as it is and keeps nothing of it, so no easing back
	 * follows. For angles written on the command alone while the camera stays where the player
	 * aimed.
	 * @example
	 * cmd.SetViewAngles(new QAngle(pitch, yaw, 0))
	 * Humanizer.PoseOnly()
	 */
	PoseOnly(): void
	/** Whether {@link SuppressSmoothing} was called this tick. */
	get Suppressed(): boolean
	/**
	 * Turns the camera toward `target` by up to 64 degrees an axis per tick, scaled to the frame
	 * time. With `perTick` every call moves the whole 64 degrees.
	 */
	AimAngles(target: QAngle, perTick?: boolean): void
	/**
	 * Turns the camera toward `target` with an ease: about 30% of the angle left per tick, built
	 * up from a fifth of that over the first three ticks and never more than 64 degrees a tick.
	 * Call it every frame while turning; a frame without a call starts the build-up again.
	 */
	TurnOnto(target: QAngle): void
}
/** The humanizer of the local player's view. */
declare const Humanizer: CHumanizer
