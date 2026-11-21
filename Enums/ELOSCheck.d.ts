// AUTO-GENERATED - do not edit.
/**
 * What of a target an ability checks line of sight to (head, body centre, bounds, …), by
 * the names its vdata `m_eTargettingLOSCheck` gives; `AbilityStore.TargetingLOSCheck`
 * holds one.
 */
declare enum ELOSCheck {
	None = 0,
	Head = 1,
	Head_IgnoreObscureBlockers = 2,
	BodyCenter = 3,
	BodyCenter_IgnoreObscureBlockers = 4,
	Bounds = 5,
	Bounds_IgnoreObscureBlockers = 6,
	FibonacciSphere = 7
}
