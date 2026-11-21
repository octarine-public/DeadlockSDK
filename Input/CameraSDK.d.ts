// AUTO-GENERATED - do not edit.
/**
 * The game's camera, asked of the engine anew on every read of a property. Use the game's
 * `CameraSDK` instance.
 */
declare class CCameraManager {
	/**
	 * The manager the SDK's own projection reads the camera through. A game may put its own
	 * manager here in place of the base one.
	 */
	public static Current: CCameraManager
	/** The camera's field of view in degrees, as the game reports it. */
	public get FoV(): number
	/**
	 * The camera distance the game reports. What it measures is the game's own; the SDK only
	 * hands it to the engine's projection along with the position and the angles.
	 */
	public get Distance(): number
	/**
	 * The camera's view angles in degrees: pitch in `x`, yaw in `y`, roll in `z`. A new object on
	 * every read.
	 */
	public get Angles(): QAngle
	/** Where the camera is in the world. A new vector on every read. */
	public get Position(): Vector3
}

/** The game's camera, with {@link SetAngles} to turn it. */
interface CDeadlockCameraManager extends CCameraManager {
	/**
	 * Turns the camera to `angles`: pitch clamped to -89..89, yaw brought into 0..360, roll 0.
	 * `angles` itself is left as it is; a pitch or yaw that is not finite turns nothing.
	 */
	SetAngles(angles: QAngle): void
}
/** The game's camera: the one {@link CDeadlockCameraManager}. */
declare const CameraSDK: CDeadlockCameraManager
