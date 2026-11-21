// AUTO-GENERATED - do not edit.
/**
 * Corner marker of the area the minimap covers. Maps ship exactly two of them, at opposite
 * corners, and their positions are the authoritative world bounds — game rules carry the same
 * numbers but only once the server has sent them.
 */
declare class MinimapBoundary extends Entity {
}
/**
 * The minimap's corner markers that exist now; once there are two, the SDK emits
 * `MinimapSizeChanged` with the box they span. The array is the entity manager's own and changes
 * as markers come and go: read it, do not modify it.
 */
declare const MinimapBoundaries: MinimapBoundary[]
