// AUTO-GENERATED - do not edit.
/**
 * A named layer of the map that the server shows and hides. `WorldLayerVisibilityChanged` fires
 * with {@link LayerName} and the new state when {@link WorldLayerVisible} changes, and with
 * `false` when a shown layer's entity goes away; `world_layer_base` is reported shown once the
 * map data has loaded.
 */
declare class WorldLayer extends Entity {
	/** The name of the world the layer belongs to. */
	public WorldName: string
	/** The layer's name, the one `WorldLayerVisibilityChanged` passes. */
	public LayerName: string
	/** Whether the server shows the layer now. */
	public WorldLayerVisible: boolean
	/** Whether the layer's entities have been spawned. */
	public EntitiesSpawned: boolean
}
/**
 * Every map layer on this client. The array is the entity manager's own and changes as layers
 * come and go: read it, do not modify it.
 */
declare const WorldLayers: WorldLayer[]
