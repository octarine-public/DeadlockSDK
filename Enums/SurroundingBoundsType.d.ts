// AUTO-GENERATED - do not edit.
/**
 * How the engine works out the bounds surrounding an entity (`USE_HITBOXES`, …);
 * `Entity.SurroundType` holds one, networked as `m_nSurroundType`.
 */
type ESurroundingBoundsType = ESurroundingBoundsType.USE_OBB_COLLISION_BOUNDS | ESurroundingBoundsType.USE_BEST_COLLISION_BOUNDS | ESurroundingBoundsType.USE_HITBOXES | ESurroundingBoundsType.USE_SPECIFIED_BOUNDS | ESurroundingBoundsType.USE_GAME_CODE | ESurroundingBoundsType.USE_ROTATION_EXPANDED_BOUNDS | ESurroundingBoundsType.USE_ROTATION_EXPANDED_ORIENTED_BOUNDS | ESurroundingBoundsType.USE_COLLISION_BOUNDS_NEVER_VPHYSICS | ESurroundingBoundsType.USE_ROTATION_EXPANDED_SEQUENCE_BOUNDS | ESurroundingBoundsType.SURROUNDING_TYPE_BIT_COUNT
declare namespace ESurroundingBoundsType {
	type USE_OBB_COLLISION_BOUNDS = 0
	type USE_BEST_COLLISION_BOUNDS = 1
	type USE_HITBOXES = 2
	type USE_SPECIFIED_BOUNDS = 3
	type USE_GAME_CODE = 4
	type USE_ROTATION_EXPANDED_BOUNDS = 5
	type USE_ROTATION_EXPANDED_ORIENTED_BOUNDS = 6
	type USE_COLLISION_BOUNDS_NEVER_VPHYSICS = 7
	type USE_ROTATION_EXPANDED_SEQUENCE_BOUNDS = 8
	type SURROUNDING_TYPE_BIT_COUNT = 3
}
