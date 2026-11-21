// AUTO-GENERATED - do not edit.
/**
 * What a particle attachment needs from whatever it is attached to. Dota also hangs particles off
 * units it cannot see, which are stand-ins rather than networked entities, so this is deliberately
 * narrower than {@link INativeEntity}.
 */
interface INativePredictionTarget {
	/** The index the server numbers the entity by: a handle's low 14 bits. */
	readonly Index: number
	/**
	 * Game time in seconds (`GameState.RawGameTime`) when {@link PredictedPosition} was last set;
	 * 0 until it has been. In Dota 2 some of the SDK's own updates, a respawn among them, leave it
	 * as it was.
	 */
	LastPredictedPositionUpdate: number
	/**
	 * Game time in seconds when {@link PredictedPosition} was last set from a particle message, and
	 * in Dota 2 from some of the SDK's own updates; 0 until then. Outside Dota 2 the SDK sets it
	 * together with {@link LastPredictedPositionUpdate}.
	 */
	LastRealPredictedPositionUpdate: number
	/**
	 * Where the entity was last reported to be: by a particle message, and in Dota 2 also by the
	 * SDK's own updates. NaN in every axis (`IsValid` false) until the first report.
	 */
	readonly PredictedPosition: Vector3
	/**
	 * Whether `other` is the entity this target stands for: the same object for an entity; for a
	 * Dota 2 stand-in, the entity of the same handle.
	 */
	EntityMatches(other: INativeEntity): boolean
}

/**
 * An entity as the shared layers handle it. Each game's entity class implements it, and the SDK
 * sets most of it as the server's updates arrive.
 */
interface INativeEntity extends INativePredictionTarget {
	/** The server's network class name for the entity, set when the SDK creates it. */
	ClassName: string
	/**
	 * Whether the entity exists: false while its first update is read, true from
	 * `PreEntityCreated` on, and false again once the server deletes it, before `EntityDestroyed`.
	 */
	IsValid: boolean
	/**
	 * Whether the server sends the entity to this client now: false while it is dormant and once it
	 * is destroyed. `EntityVisibleChanged` fires when it goes dormant or comes back, and once after
	 * `EntityCreated`.
	 */
	IsVisible: boolean
	/**
	 * Whether this is the game rules entity. The game's class sets it, and the SDK takes an entity
	 * created with it as `GameRules`.
	 */
	IsGameRules: boolean
	/**
	 * Game time in seconds (`GameState.RawGameTime`) when the entity last went dormant or was
	 * destroyed; 0 until then.
	 */
	BecameDormantTime: number
	/**
	 * Where the frame draws the entity: the host's position for it, written before the frame's
	 * draw events. Each networked move resets it to the networked position.
	 */
	readonly VisualPosition: Vector3
	/**
	 * The angles the frame draws the entity with, written like {@link VisualPosition}; a frame
	 * that carries no rotation for the entity leaves them as they were.
	 */
	readonly VisualAngles: QAngle
	/**
	 * The velocity the host sends with the entity's position each frame. Dota 2's frames carry
	 * none, so there the frame leaves it alone.
	 */
	readonly VisualVelocity: Vector3
	/** On screen this frame, by the core's list; meaningful while OnScreenListKnown */
	IsOnScreen?: boolean
	/**
	 * Whether `serial` is the entity's serial, the bits of a handle above the index; 0 on either
	 * side matches any.
	 */
	SerialMatches(serial: number): boolean
}

/**
 * The game rules entity as the shared game clock reads it: the SDK works `GameState.RawGameTime`
 * out of these fields on every server tick.
 */
interface INativeGameRules extends INativeEntity {
	/**
	 * Whether the game is paused. The game clock stands still while it is, at the tick
	 * {@link PauseStartTick} less {@link TotalPausedTicks}.
	 */
	readonly IsPaused: boolean
	/** The server tick the current pause began at; the SDK reads it only while {@link IsPaused}. */
	readonly PauseStartTick: number
	/** Server ticks the game has spent paused, which the game clock leaves out. */
	readonly TotalPausedTicks: number
	/**
	 * Game time in seconds: `GameState.RawGameTime`, copied here each time the SDK works it out,
	 * on server ticks and when this entity is created.
	 */
	RawGameTime: number
}

/**
 * One level of an entity's networked fields: under each symbol id a value, an array, or another
 * node for a field that has fields of its own.
 */
interface IEntityPropertiesNode {
	/**
	 * The entries by symbol id: the position of the field's name in the symbol list of the
	 * server's serializer message.
	 */
	map: Map<number, EntityPropertyType>
}

/**
 * A networked field's value as the SDK stores it: a number, a `bigint` for 64-bit integers, a
 * boolean, text, a vector, a transform as six floats, an array of these, or a node of fields.
 */
type EntityPropertyType =
	| IEntityPropertiesNode
	| EntityPropertyType[]
	| string
	| Float32Array
	| Vector4
	| Vector3
	| Vector2
	| bigint
	| number
	| boolean

/**
 * Called when an entity update changes the field it is registered for, with the entity and the
 * value the update left there: the node itself for a field that has fields of its own. It runs
 * once an update, after the entity's whole update is read. What it returns is ignored; a throw
 * is logged and the other handlers still run.
 */
type FieldHandler = (entity: INativeEntity, newValue: EntityPropertyType) => unknown
