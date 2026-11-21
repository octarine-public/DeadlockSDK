// AUTO-GENERATED - do not edit.
/** Contents masks the game's own sight checks trace against. */
declare const enum ETraceMask {
	/** Everything that blocks sight. */
	Visibility = 65,
	/** The same, but letting smoke through. */
	VisibilityThroughSmoke = 1839107,
	/**
	 * The solid world, what stops a projectile in flight: walls and blocks carry it, veils and
	 * the `0x900a0000` volumes do not.
	 */
	World = 1,
	/**
	 * What a hero's hull stops on, as far as contents tell: the player clip, the unseen walls a
	 * map stands in front of its own some units out, and the solid that blocks sight, which
	 * those walls and the floors are. A solid that carries neither is missed, whether a hero
	 * walks through it, as a prop that stops a bullet and nothing else, or is stopped by it,
	 * as a railing along a ledge: their contents are the same.
	 */
	Movement = 80
}
/**
 * What the game's own tracer answered.
 *
 * One instance is reused for every trace, so read what you need before tracing again — holding on
 * to it hands you the next trace's answer. Tracing runs per target per tick, and an object per
 * call would be an allocation on the aim engine's hot path.
 */
declare class TraceResult {
	/** Where the trace stopped, or its end point when it hit nothing. */
	public readonly Position: Vector3
	/** Surface normal at the hit, zero when nothing was hit. */
	public readonly Normal: Vector3
	/** How far along the ray the trace got: 1 means it reached the end unobstructed. */
	public Fraction: number
	/** Custom id of what was hit, 0 for the world or for nothing. */
	public EntityID: number
	/** Index of the hitbox that stopped the trace, -1 when it stopped on something without one. */
	public HitboxID: number
	/**
	 * Which damage group the hit landed in — the model's hitbox registration, not its physics
	 * hull. This is what decides the damage multiplier, so a shot worth taking is chosen by this
	 * and not by distance to a bone. -1 when nothing with hitboxes was hit.
	 */
	public HitGroup: number
	/** Contents mask of what was hit. */
	public Contents: number
	/** Whether anything stopped the trace before its end point. */
	public get Hit(): boolean
}
/**
 * Traces from `start` to `end` through the tracer the running game installed, the one it fires
 * bullets through, so the answer is what a shot would do. Returns the result only when something
 * stopped the ray: `undefined` is a clear ray, or a game without a tracer
 * ({@link IsTracerAvailable}) or one that refused to trace. Ask from `CreateMove` where the
 * answer allows it: the game thread stands still for that event, and tracing from a listener
 * that runs alongside it, `Draw` among them, races the creation and destruction of entities.
 *
 * @param skipEntityID custom id to trace through, 0 to trace against everything
 * @param mask contents to trace against
 * @example
 * const hit = Trace(camera, target, localHero.CustomNativeID)
 * if (hit !== undefined && hit.EntityID === pawn.CustomNativeID) {
 * 	// the shot lands on pawn, in hit.HitGroup
 * }
 */
declare function Trace(start: Vector3, end: Vector3, skipEntityID?: number, mask?: number, layer?: number, flags?: number): Nullable<TraceResult>
/**
 * Several rays, traced in one crossing into the game.
 *
 * Rays queued together cross into the game once instead of once each. Reuse a single instance: it
 * allocates on construction and never again, and the results it hands back are reused the same way
 * {@link Trace}'s is.
 *
 * @example
 * const batch = new TraceBatch()
 * // per frame:
 * batch.Reset()
 * for (const target of targets) batch.Add(camera, target.Position, localHero.CustomNativeID)
 * batch.Run()
 * for (let i = 0; i < targets.length; i++) {
 * 	const hit = batch.Get(i)
 * 	if (hit === undefined || hit.EntityID === targets[i].CustomNativeID) {
 * 		// this one is in the open
 * 	}
 * }
 */
declare class TraceBatch {
	/** The most rays one batch carries. */
	public static get MaxRays(): number
	/** How many rays are queued for the next {@link Run}. */
	public get Count(): number
	/**
	 * Queues one ray. False when the batch is full — run it and start another.
	 *
	 * @param skipEntityID custom id to trace through, 0 to trace against everything
	 * @param mask contents to trace against
	 */
	public Add(start: Vector3, end: Vector3, skipEntityID?: number, mask?: number, layer?: number, flags?: number): boolean
	/**
	 * Traces every queued ray and answers a bitmask of the ones something stopped — bit `i` for
	 * the `i`th {@link Add}. A clear ray leaves its bit unset, as an untraced one does, so 0 is
	 * every ray running clear as much as the game tracing none. Read the answers with {@link Get}.
	 */
	public Run(): number
	/**
	 * What stopped the `i`th queued ray, or `undefined` when nothing did — which the game does not
	 * tell apart from not tracing it, so from an available tracer read it as a clear ray, as
	 * {@link Trace}'s. Valid until the next {@link Run}, which writes the answers over these same
	 * objects.
	 */
	public Get(index: number): Nullable<TraceResult>
	/** Drops the queued rays and their answers, ready to be filled again. */
	public Reset(): void
}
/** Whether the running game installed a tracer for {@link Trace} and {@link TraceBatch} to use. */
declare function IsTracerAvailable(): boolean
