// AUTO-GENERATED - do not edit.
/**
 * The HUD minimap: where it sits on screen, the sizes the game draws its icons at, and positions
 * converted between the world and the minimap.
 */
interface CMinimapSDK {
	/** The world rectangle the minimap covers, oriented for the local team. */
	readonly MinimapBounds: Rectangle
	/**
	 * The rectangle world coordinates project onto, or undefined while the HUD does not show
	 * the minimap. Read straight from the Panorama panel, so a moved, rescaled or
	 * aspect-adjusted minimap needs no extra handling. Recomputed once per frame.
	 *
	 * Zooming grows this well past the visible area — use {@link ClipBounds} to decide what
	 * may be drawn.
	 * @example
	 * const bounds = MinimapSDK.ScreenBounds
	 * if (bounds !== undefined) {
	 * 	Renderer.OutlinedRect(bounds.pos1, bounds.Size)
	 * }
	 */
	get ScreenBounds(): Nullable<Rectangle>
	/**
	 * The bounding box of the visible part of the minimap, which is the disc inscribed in it.
	 * Equal to {@link ScreenBounds} until the minimap is zoomed, when the render surface
	 * overflows the container that holds its place in the HUD.
	 */
	get ClipBounds(): Nullable<Rectangle>
	/** Icon radius the game itself draws map objects with. */
	get IconRadius(): number
	/** Icon width the game itself draws other players with. */
	get PlayerWidth(): number
	/** Icon width the game itself draws the local player with. */
	get LocalPlayerWidth(): number
	/** Icon size the game itself draws troopers with. */
	get TrooperSize(): number
	/** True while the zoomed-in minimap is enabled. */
	get IsZoomedIn(): boolean
	/**
	 * Draws an arrow across the minimap from world point `start` to `end`, `width` px thick, with
	 * two strokes `arrowLength` px long at `rotationDeg` degrees off the line at `end`. Nothing is
	 * drawn when either point falls outside the minimap, and the arrow shows for this frame only.
	 */
	DrawLineArrow(start: Vector3, end: Vector3, color?: Color, width?: number, arrowLength?: number, rotationDeg?: number): void
	/**
	 * The screen position of a world point, or undefined when it falls outside the minimap.
	 * The minimap is a disc inscribed in {@link ClipBounds}, so points beyond it are on the
	 * surrounding HUD rather than on the map.
	 */
	WorldToMinimap(pos: Vector3): Nullable<Vector2>
	/**
	 * Sends one point of a line drawn on the team's minimap, in world coordinates. `initial`
	 * starts a new line; the game joins the points that follow with straight segments.
	 */
	SendMapLine(pos: Vector2, initial?: boolean): void
	/**
	 * The world point, at height 0, under the screen position `pos` on the minimap; undefined
	 * while the minimap is not shown, or is zoomed in with no local hero. Unlike
	 * {@link WorldToMinimap} it does not check that `pos` is on the map's disc.
	 */
	MinimapToWorld(pos: Vector2): Nullable<Vector3>
}
/** The HUD minimap: the one {@link CMinimapSDK}. */
declare const MinimapSDK: CMinimapSDK
