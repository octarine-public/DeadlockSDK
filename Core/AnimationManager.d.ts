// AUTO-GENERATED - do not edit.
/** An animation clip, one object shared by every entity that plays it. */
declare class AnimationClip {
	/** The id the clip is reported under, shared by every {@link Animation} of this clip. */
	public readonly ID: number
	/** The clip's resource path, e.g. `models/npc/…/clips/melee_close_range_01.vnmclip`. */
	public readonly Name: string
	/** Length in seconds at rate 1. */
	public readonly Duration: number
	/** A layer over the pose (aim, lean, flinch) rather than a motion of its own. */
	public readonly IsAdditive: boolean
	/** A single frame: its time means nothing, it never restarts and has no rate. */
	public readonly IsPose: boolean
	/** Made by {@link AnimationManager} the first time a clip is reported. */
	constructor(
	/** The id the clip is reported under, shared by every {@link Animation} of this clip. */
	ID: number, 
	/** The clip's resource path, e.g. `models/npc/…/clips/melee_close_range_01.vnmclip`. */
	Name: string, 
	/** Length in seconds at rate 1. */
	Duration: number, 
	/** A layer over the pose (aim, lean, flinch) rather than a motion of its own. */
	IsAdditive: boolean, 
	/** A single frame: its time means nothing, it never restarts and has no rate. */
	IsPose: boolean)
	/**
	 * Seconds into the clip at rate 1, ascending, at which it raises the legacy animation event
	 * `name`; empty where it raises none. A guardian's melee blow lands on its `AE_MELEE_ATTACK`.
	 * The times are read from the clip's resource on the first call for any name.
	 * @example
	 * const blow = guardianSwing.Clip.GetLegacyEventTimes("AE_MELEE_ATTACK")[0]
	 */
	public GetLegacyEventTimes(name: string): readonly number[]
}
/** A clip one entity plays right now, as the server last reported it. */
declare class Animation {
	/** The entity playing the clip. */
	public readonly Owner: Entity
	/** The clip being played; one object for every entity that plays it. */
	public readonly Clip: AnimationClip
	/** Normalised time, 0..1, at {@link Tick}. */
	public Time: number
	/** Server tick of the last report. */
	public Tick: number
	/** Playback rate: 1 until measured otherwise, 0 while the clip is held at one time. */
	public Rate: number
	/** Whether the clip was already playing when the entity started being watched. */
	public IsSnapshot: boolean
	/** Made by {@link AnimationManager} for each clip a watched entity starts. */
	constructor(
	/** The entity playing the clip. */
	Owner: Entity, 
	/** The clip being played; one object for every entity that plays it. */
	Clip: AnimationClip)
	/**
	 * Server tick the clip started on, fractional; undefined while it is held at one time or is
	 * a single-frame pose. Exact for a clip played at a steady rate, whenever it was first seen.
	 */
	public get StartTick(): Nullable<number>
	/** Seconds into the clip by the current server tick, extrapolated at its rate. */
	public get Elapsed(): number
	/**
	 * Server tick, fractional, this playthrough raises the clip's first legacy event `name` on
	 * (see {@link AnimationClip.GetLegacyEventTimes}); undefined while the clip is held, or
	 * where it raises no such event.
	 * @example
	 * Events.on("AnimationStarted", anim => {
	 * 	const blow = anim.GetLegacyEventTick("AE_MELEE_ATTACK")
	 * 	if (blow !== undefined) {
	 * 		console.log("blow lands in", (blow - GameState.CurrentServerTick) * GameState.TickInterval)
	 * 	}
	 * })
	 */
	public GetLegacyEventTick(name: string): Nullable<number>
}
/**
 * Reports the animation clips and graph events of the entities a script watches. Clips come from
 * the server, with the entity's network updates, and only while it is networked. Graph events
 * (state entry and exit, ID events) come only for the local hero, whose graph the client runs
 * itself.
 * @example
 * AnimationManager.Watch(guardian)
 * Events.on("AnimationStarted", anim => {
 * 	if (anim.Owner === guardian && anim.Clip.Name.endsWith("melee_close_range_01.vnmclip")) {
 * 		console.log("swing started on tick", anim.StartTick)
 * 	}
 * })
 */
interface CAnimationManager {
	/**
	 * Starts reporting the entity's animations. Watches are counted, so each call needs its own
	 * {@link Unwatch}; the first one reports what the entity already plays as snapshots.
	 */
	Watch(ent: Entity): void
	/** Drops one {@link Watch}; the entity stops reporting once none is left. */
	Unwatch(ent: Entity): void
	/**
	 * Watches every entity of the class, those that exist now and those created later, until
	 * {@link UnwatchClass}. Counted like {@link Watch}, and the two add up: an entity watched
	 * both ways keeps reporting until both are dropped.
	 * @example
	 * AnimationManager.WatchClass(npc_trooper_boss)
	 * Events.on("AnimationStarted", anim => {
	 * 	if (anim.Owner instanceof npc_trooper_boss && !anim.IsSnapshot) {
	 * 		console.log(anim.Clip.Name, anim.StartTick)
	 * 	}
	 * })
	 */
	WatchClass(class_: Constructor<Entity>): void
	/** Drops one {@link WatchClass}; the class's entities stop reporting once none is left. */
	UnwatchClass(class_: Constructor<Entity>): void
	/**
	 * Drops every {@link Watch} and {@link WatchClass}, whoever made them: every script shares
	 * this manager, so this also silences entities another script watches.
	 */
	UnwatchAll(): void
	/** Whether `ent` is watched, by {@link Watch} or through {@link WatchClass}. */
	IsWatched(ent: Entity): boolean
	/** The clips the entity plays right now; empty when it is not watched. */
	GetAnimations(ent: Entity): readonly Animation[]
}
/** The one {@link CAnimationManager}, shared by every script. */
declare const AnimationManager: CAnimationManager
