// AUTO-GENERATED - do not edit.
/**
 * The events of `Events` the games share: frames, entity updates, the server's messages and
 * string tables, world layers and tasks. A key is the name a listener subscribes under, its tuple
 * the arguments the listener is called with.
 */
interface EventsMap {
	/**
	 * A frame's draw pass, at most one per rendered frame, after `WorldDraw`, `Draw2D` when it is
	 * due and `PreDraw`. The entities' visual positions, the viewport and
	 * `InputManager.CursorOnScreen` are this frame's, and `GameState.IsInDraw` is true.
	 */
	Draw: []
	/** Every draw pass, right before `Draw`, with the same frame state. */
	PreDraw: []
	/**
	 * A draw pass at the server's tick rate rather than the frame rate, on a frame that is not
	 * carrying a server tick, just before `PreDraw`. What an overlay draws here stays on screen
	 * until its next pass: a reading that only changes with the game state costs a tick's worth
	 * of work instead of a frame's, and none of it lands on the frames a tick already makes slow.
	 */
	Draw2D: []
	/**
	 * An entity update from the server begins: no entity of it has been created, changed or
	 * destroyed yet. `PostDataUpdate` ends it.
	 */
	PreDataUpdate: []
	/**
	 * An entity update from the server is applied, its `EntityCreated`, `EntityDestroyed` and
	 * `EntityVisibleChanged` all fired. `dt` is how far the latest server tick since the previous
	 * update moved the game clock, in seconds; 0 when none moved it or `LocalPlayer` is unset.
	 */
	PostDataUpdate: [dt: number]
	/**
	 * `LocalPlayer` was created: the entity at the player slot `ServerInfo` named. It fires while
	 * the update that creates it is still being applied.
	 */
	GameStarted: []
	/**
	 * `LocalPlayer` was destroyed, by the server or by a new connection, which destroys every
	 * entity. It reads `undefined` by the time this fires.
	 */
	GameEnded: []
	/**
	 * The server described itself: on connecting, and again each time the scripts start with the
	 * last description received, an empty one when there was none. `map` is that
	 * `CSVCMsg_ServerInfo` decoded.
	 */
	ServerInfo: [map: RecursiveProtobuf]
	/**
	 * A tick message from the server, `CNETMsg_Tick`: `tick` is the server tick, the rest its
	 * other fields in order, 0 or `""` where the message has none.
	 */
	ServerTick: [
		tick: number,
		hostComputationTime: number,
		hostFrameTimeStdDeviation: number,
		hostComputationTimeStdDeviation: number,
		legacyHostLoss: number,
		hostUnfilteredFrameTime: number,
		hltvReplayFlags: number,
		expectedLongTick: number,
		expectedLongTickReason: string,
		hostFrameDroppedPctX10: number,
		hostFrameIrregularArrivalPctX10: number
	]
	/**
	 * Dota 2 only: whether one of the game's panels, such as the chat, holds the input. It fires
	 * each time one takes or releases it.
	 */
	InputCaptured: [isCaptured: boolean]
	/**
	 * `GameState.LocalTeam` took a new value. It follows the team of `LocalPlayer`; in Dota 2 an
	 * observer takes the team they coach or watch.
	 */
	LocalTeamChanged: []
	/**
	 * The files of the map `ServerInfo` named are read, its entity lumps among them. Fires during
	 * every `ServerInfo`, once `GameState.MapName` is set.
	 */
	MapDataLoaded: []
	/**
	 * `Source2SDK.Renderer.WindowSize` changed, before the draw events of the frame that brought
	 * the new size. It also fires when the user changes the menu scale.
	 */
	WindowSizeChanged: []
	/**
	 * Every string table was dropped: the game cleared them, or the scripts start and every table
	 * is about to arrive again through `UpdateStringTable`.
	 */
	RemoveAllStringTables: []
	/**
	 * Entries of the string table `name` arrived: `update` maps each entry's index to its string
	 * and its data bytes. As the scripts start, every table arrives whole this way.
	 */
	UpdateStringTable: [name: string, update: Map<number, [string, ArrayBuffer]>]
	/**
	 * The map layer `layerName` was shown (`state` true) or hidden: on `PostDataUpdate` when a
	 * `WorldLayer`'s `WorldLayerVisible` changed, when a shown layer's entity is destroyed, and for
	 * `world_layer_base`, shown after `MapDataLoaded` and hidden on a new connection.
	 */
	WorldLayerVisibilityChanged: [layerName: string, state: boolean]
	/**
	 * The shown map layers changed: once after the `WorldLayerVisibilityChanged` events of an
	 * entity update, and after `world_layer_base` is shown on `MapDataLoaded`. A layer hidden by
	 * its entity's destruction or by a new connection does not raise it.
	 */
	WorldLayersVisibilityChanged: []
	/**
	 * `TaskManager.Cancel` took a waiting task off the queue: `handleID` is its handle. The SDK
	 * cancels tasks of its own on every new connection.
	 */
	TaskCancelled: [handleID: bigint]
	/**
	 * A task of `TaskManager` has run, or thrown: `handleID` is its handle. The SDK runs work of
	 * its own there too, so not every handle is a script's.
	 */
	TaskReleased: [handleID: bigint]
}

/**
 * The emitter the SDK raises its events on: frames, key and mouse input, server ticks, entities
 * created and destroyed. `EventsMap` lists every event with the arguments its listeners get.
 */
declare const Events: EventEmitter<EventsMap>

/**
 * The events of `Events` for the connection, the client, Panorama, and key and mouse input. A key
 * is the name a listener subscribes under, its tuple the arguments the listener is called with.
 */
interface EventsMap {
	/**
	 * The frame's world-shape stage, right after the interpolated positions are applied and before
	 * `PreDraw`: what `WorldDraw` is given here is drawn with the camera of the frame on screen.
	 */
	WorldDraw: []
	/**
	 * A connection to a game server began, or the scripts started. Every entity is destroyed by
	 * the time it fires.
	 */
	NewConnection: []
	/** The client reported that the stored configs changed; the menu reads its config back in. */
	ConfigsChanged: []
	/**
	 * The game's Panorama UI changed: in Deadlock and Dota 2 at most once a frame, after a panel
	 * was created or destroyed or, in Dota 2, the game's UI state changed. It also fires once as
	 * the scripts start, in CS2 only then.
	 */
	PanoramaFrame: []
	/**
	 * A Panorama window came up: `windowName` is the name `Source2SDK.Panorama.Root` takes for it.
	 * In CS2 a window is a top-level panel, and it comes up when the panel is shown.
	 */
	PanoramaWindowCreate: [windowName: string]
	/** The Panorama window `windowName` went away; in CS2, its top-level panel was hidden. */
	PanoramaWindowDestroy: [windowName: string]
	/**
	 * A new build of the scripts reached the host while these run. These keep running until the
	 * scripts are reloaded.
	 */
	ScriptsUpdated: []
	/** The client's language, each time the client sends it and once as the scripts start. */
	SetLanguage: [language: MenuLanguageID]
	/**
	 * A key went down in the game window: `keyMask` is its virtual-key code, below 256, and
	 * `InputManager.IsKeyDown` is true for it until it comes up. An `on` listener returning `false`
	 * keeps the key from the game.
	 */
	KeyDown: [keyMask: VKeys]
	/**
	 * A key came up: `keyMask` is its virtual-key code. An `on` listener returning `false` keeps it
	 * from the game, unless the game saw the key go down.
	 */
	KeyUp: [keyMask: VKeys]
	/**
	 * A character was typed in the game window: `char` is it, as one UTF-16 unit. An `on` listener
	 * returning `false` keeps it from the game.
	 */
	CharInput: [char: string]
	/**
	 * A mouse button went down, a double click included: `key` is the button. An `on` listener
	 * returning `false` keeps the click from the game.
	 */
	MouseKeyDown: [key: VMouseKeys]
	/**
	 * A mouse button came up: `key` is the button. An `on` listener returning `false` keeps it from
	 * the game, unless the game saw the button go down.
	 */
	MouseKeyUp: [key: VMouseKeys]
	/**
	 * The mouse wheel turned: `up` is true for a turn up, a positive wheel delta. An `on` listener
	 * returning `false` keeps it from the game.
	 */
	MouseWheel: [up: boolean]
}

/**
 * The events the host fires into `Source2SDK.NativeEvents`, with the arguments as the host passes
 * them. The SDK makes most of the events of `Events` out of these.
 */
interface NativeEventsMap {
	/**
	 * The client reported that the stored configs changed. `ConfigsChanged` of `Events` follows
	 * every listener here.
	 */
	ConfigsChanged: []
	/**
	 * The game's Panorama UI changed: in Deadlock and Dota 2 at most once a frame, after a panel
	 * was created or destroyed or, in Dota 2, the game's UI state changed; and in every game once
	 * as the scripts start. `PanoramaFrame` of `Events` follows every listener here.
	 */
	PanoramaFrame: []
	/**
	 * A Panorama window came up: `windowName` is the name `Source2SDK.Panorama.Root` takes for it.
	 * In CS2 a window is a top-level panel, and it comes up when the panel is shown.
	 * `PanoramaWindowCreate` of `Events` follows every listener here.
	 */
	PanoramaWindowCreate: [windowName: string]
	/**
	 * The Panorama window `windowName` went away. `PanoramaWindowDestroy` of `Events` follows
	 * every listener here.
	 */
	PanoramaWindowDestroy: [windowName: string]
	/** A custom game event from the server: `eventName` names it, `data` holds its fields. */
	CustomGameEvent: [eventName: string, data: RecursiveMap]
	/**
	 * Raised only when a recorded Dota 2 game is replayed, never in the game itself: one per
	 * recorded unit order. `isUserInput` is whether the user gave it, `wasCancelled` whether the
	 * scripts cancelled it then.
	 */
	DebuggerPrepareUnitOrders: [isUserInput: boolean, wasCancelled: boolean]
	/** onScreen: the uint32 entity indices of the units on screen, undefined from a core that does not list them */
	Draw: [
		visualData: ArrayBuffer,
		w: number,
		h: number,
		x: number,
		y: number,
		onScreen?: ArrayBuffer
	]
	/**
	 * The client is about to answer the Game Coordinator's ping. An `on` listener returning
	 * `false` keeps the answer from being sent. In Dota 2 it also fires before two natives of the
	 * host send the Game Coordinator a message, and `false` stops those as well.
	 */
	GCPingResponse: []
	/**
	 * A game event from the server: `eventName` names it, and `obj` holds its fields by name plus
	 * `server_tick`. `GameEvent` of `Events` follows with the same arguments on the next run of
	 * `TaskManager`.
	 */
	GameEvent: [eventName: string, obj: unknown]
	/**
	 * Dota 2 only: one of the game's panels took (`true`) or released (`false`) the input. More
	 * than one can hold it at once.
	 */
	InputCaptured: [isCaptured: boolean]
	/**
	 * A connection to a game server began, or the scripts started. The SDK destroys every entity
	 * first, and `NewConnection` of `Events` follows every listener here.
	 */
	NewConnection: []
	/**
	 * Dota 2 only: the user gave a unit order, which the SDK reads and raises as
	 * `PrepareUnitOrders` of `Events`. An `on` listener returning `false` keeps the order from the
	 * game. With `taken` the game was already kept from sending it (`SetUserOrdersTaken`): the
	 * order is the listeners' to give and what they return goes nowhere.
	 */
	PrepareUnitOrders: [taken: boolean]
	/**
	 * A new build of the scripts reached the host while these run. `ScriptsUpdated` of `Events`
	 * follows every listener here.
	 */
	ScriptsUpdated: []
	/**
	 * A message from the server that the host passes on, which is not every one: `msgID` is its
	 * id, `buf` its bytes. Most hold the message's protobuf; entity (55) and string-table (45)
	 * updates come in the host's own encoding. Some are sent again as the scripts start.
	 */
	ServerMessage: [msgID: number, buf: ArrayBuffer]
	/**
	 * The client's language, each time the client sends it and once as the scripts start.
	 * `SetLanguage` of `Events` follows every listener here.
	 */
	SetLanguage: [language: MenuLanguageID]
	/**
	 * Deadlock and Dota 2: an object the Game Coordinator keeps for the account, such as a lobby
	 * or a party, arrived or changed. `typeID` is its type, `msg` its protobuf bytes, `reason` 0
	 * for an object new to the client and 1 for a change; Dota 2 passes on any other value the
	 * game gives, and sends every object it holds again as the scripts start.
	 */
	SharedObjectChanged: [typeID: number, reason: number, msg: ArrayBuffer]
	/**
	 * A key, character, mouse-button or wheel message of the game window: `messageType` is its
	 * `WM_*` code, `wParam` and `lParam` its parameters, `x` and `y` the cursor in screen pixels.
	 * An `on` listener returning `false` keeps it from the game, unless it releases a key or a
	 * button the game saw go down.
	 */
	WndProc: [messageType: number, wParam: bigint, lParam: bigint, x: number, y: number]
}

/**
 * Deadlock's own events of `Events`. A key is the name a script subscribes under, its tuple the
 * arguments a listener is called with.
 */
interface EventsMap {
	/**
	 * Fires on every `ServerInfo`, after the SDK has reloaded the game's unit, ability, modifier
	 * and misc data and the localized names of abilities, items and heroes.
	 */
	UnitAbilityDataUpdated: []
	/**
	 * Fires when an ability's `IsChanneling` or `ChannelStartTime` changes, once where both
	 * change together, with both already holding their new values.
	 */
	AbilityChannelingChanged: [ability: Ability]
	/**
	 * Fires when an ability's `InCastDelay` or `CastDelayStartTime` changes, once where both
	 * change together, with both already holding their new values.
	 */
	AbilityWindupChanged: [ability: Ability]
	/**
	 * Fires when an ability's `CooldownStart` or `CooldownEnd` changes, once where both change
	 * together, with both already holding their new values. On a stand-in (`IsNetworked` false)
	 * it also fires when its estimated charges or their recharge times change.
	 */
	AbilityCooldownChanged: [ability: Ability]
	/** Fires when an ability's `Level` changes; `UpgradeBits` already holds the new upgrades. */
	AbilityLevelChanged: [abil: Ability]
	/**
	 * Fires when the server sends the ability a hero has selected. `pawn.SelectedAbility`
	 * already holds its handle, and `pawn.SelectedSpell` resolves it.
	 */
	AbilitySelected: [pawn: PlayerPawn]
	/**
	 * Fires when an entity watched through `AnimationManager` stops playing a clip. `animation`
	 * is already out of `AnimationManager.GetAnimations`; its `Time` is the last one the clip
	 * was seen at.
	 */
	AnimationEnded: [animation: Animation]
	/**
	 * Fires when an ID event begins in the animation graph of an entity watched through
	 * `AnimationManager`: `id` is the event's ID, `weight` its weight. Graph events come only
	 * for the local hero.
	 */
	AnimationIDEvent: [ent: Entity, id: string, weight: number]
	/**
	 * Fires when the playback rate of a clip a watched entity plays is found to have changed.
	 * `animation.Rate` holds the new rate; `Time` and `Tick` are updated with it.
	 */
	AnimationRateChanged: [animation: Animation]
	/**
	 * Fires when a clip a watched entity plays starts over, looped or played again. `animation`
	 * is the object `AnimationStarted` handed over, with `Time`, `Tick` and `Rate` updated and
	 * `IsSnapshot` cleared.
	 */
	AnimationRestarted: [animation: Animation]
	/**
	 * Fires when an entity watched through `AnimationManager` starts a clip it was not playing.
	 * The clips it already plays when first watched arrive the same way, with `IsSnapshot` set.
	 */
	AnimationStarted: [animation: Animation]
	/**
	 * Fires when a state event begins in the animation graph of a watched entity: `id` is the
	 * event's ID, `type` the point of the state it marks, `weight` its weight. Graph events come
	 * only for the local hero.
	 */
	AnimationStateEvent: [ent: Entity, id: string, type: EAnimationStateEvent, weight: number]
	/**
	 * Fires for every chat line the server relays. An `on` listener returning `false` keeps the
	 * listeners after it from getting the line; the game shows it all the same.
	 */
	ChatMessage: [message: ChatMessage]
	/**
	 * Fires before the game builds the local player's next command. `cmd` is reused from call
	 * to call and still holds the last command: queue changes for the new one with its
	 * `HoldButton`, `TapButton`, `ExecuteAbility` and `Set` methods.
	 */
	CreateMove: [cmd: UserCmd]
	/**
	 * Fires when an entry of a hero's `Spells` changes: an ability or item came, left or took
	 * another's place. `ent` is that hero's `PlayerPawn`.
	 */
	EntityAbilitiesChanged: [ent: Entity]
	/**
	 * Fires for a new entity once the whole server update that created it has been read, so the
	 * entities created with it exist too. Also fires for each `NeutralTrooperCamp` the SDK
	 * builds from the map's data.
	 */
	EntityCreated: [ent: Entity]
	/**
	 * Fires when an entity is gone, with its `IsValid` already false: the server deleted it, a
	 * new connection began, or the SDK dropped a `NeutralTrooperCamp` of its own.
	 */
	EntityDestroyed: [ent: Entity]
	/**
	 * Fires when an entity's `Team` changes. It also fires with no change of team for a hero
	 * whose controller changed, and for `LocalPlayer` right after the SDK sets it.
	 */
	EntityTeamChanged: [ent: Entity]
	/**
	 * Fires when the server stops or resumes sending an entity, with `entity.IsVisible` already
	 * holding the new state, and once for each entity the server creates, right after its
	 * `EntityCreated`.
	 */
	EntityVisibleChanged: [entity: Entity]
	/**
	 * Fires for each burst of bullets the server reports, from a gun or from an ability;
	 * `bullets` is the report.
	 */
	FireBullets: [bullets: FireBullets]
	/**
	 * Fires for each game event the server sends. `event_name` is the event's name; `obj` holds
	 * its fields under their names, and the event's `server_tick`.
	 * @example
	 * Events.on("GameEvent", (name, obj) => {
	 * 	if (name === "entity_killed") {
	 * 		console.log(obj.entindex_killed)
	 * 	}
	 * })
	 */
	GameEvent: [event_name: string, obj: any]
	/**
	 * Fires when the client is about to ask the Game Coordinator to find a match. `buf` is the
	 * request, a serialized `CMsgClientToGCStartMatchmaking`. What a listener returns is ignored
	 * here: the event of the same name on `Source2SDK.NativeEvents` is the one that cancels.
	 */
	GCStartMatchmaking: [buf: ArrayBuffer]
	/**
	 * Fires when an entity's `LifeState` changes: by the server's field, or by the
	 * `entity_killed` game event, which sets it dead with `HP` 0. Also fires when an NPC's
	 * `State` or a player's `IsAlive` changes.
	 */
	LifeStateChanged: [ent: Entity]
	/**
	 * Fires after every write of the menu's config. `obj` is the whole config as written, shared
	 * with the menu's next write: read it, do not change it.
	 */
	MenuConfigChanged: [obj: { [key: string]: any }]
	/**
	 * Fires when the area the minimap covers is learned or changes: from the game rules' bounds,
	 * or from the map's two corner markers once both exist, and from those again on
	 * `LocalTeamChanged`. `bounds` holds the area's minimum corner, then its maximum.
	 */
	MinimapSizeChanged: [bounds: Vector3[]]
	/**
	 * Fires when a modifier on a unit changes its caster, ability, duration, stack count,
	 * creation or last-applied time, or one of its `Bool`, `Int` and `Float` slots.
	 */
	ModifierChanged: [mod: Modifier]
	/**
	 * Fires when a modifier lands on a unit, already in the unit's `Buffs`. A modifier that
	 * moves to another parent fires `ModifierRemoved` and then this.
	 */
	ModifierCreated: [mod: Modifier]
	/**
	 * Fires when a modifier leaves its parent: the server removed it, it moved to another
	 * parent, or a script called `Modifier.Remove`. It is already out of the parent's `Buffs`,
	 * with `IsValid` false.
	 */
	ModifierRemoved: [mod: Modifier]
	/**
	 * Fires when the server creates a particle effect whose particle file the client knows.
	 * `particle.AttachedTo` is `undefined` while the client lacks that entity; `ParticleUpdated`
	 * fires when it arrives.
	 */
	ParticleCreated: [particle: NetworkedParticle]
	/**
	 * Fires when the SDK stops tracking a particle: the server cut it, a released one ran out,
	 * the entity it is attached to was destroyed, or a new connection began. It is already out
	 * of `Source2SDK.NetworkedParticle.Instances`; `Released` tells a played-out one from a cut.
	 */
	ParticleDestroyed: [particle: NetworkedParticle]
	/**
	 * Fires when the server lets a particle with a known `EndTime` play out instead of cutting
	 * it: `Released` is set and it stays tracked until that time, when `ParticleDestroyed`
	 * fires. One with no known end goes straight to `ParticleDestroyed`.
	 */
	ParticleReleased: [particle: NetworkedParticle]
	/**
	 * Fires when a particle message carries a position for an entity, already copied to
	 * `ent.PredictedPosition`. `ent` is always set; `particle` is the tracked particle the
	 * message was for, `undefined` when the SDK tracks none under its index.
	 */
	ParticleUnitPositionUpdated: [ent: Nullable<Entity>, particle: Nullable<NetworkedParticle>]
	/**
	 * Fires when a server message changes a tracked particle: a control point, its text, its
	 * frozen state and the like. Also fires when an entity the particle names arrives and is
	 * resolved into it, and when one bound to a control point is destroyed.
	 */
	ParticleUpdated: [particle: NetworkedParticle]
	/** Fires when the server sends a player's hero id; `player.HeroID` already holds it. */
	PlayerHeroIDChanged: [player: Player]
	/**
	 * Fires after the game has built the local player's command, with what `CreateMove`
	 * listeners queued already applied to `cmd`. A field written here replaces the game's
	 * value; view angles written by then still pass through `Humanizer` before the game takes
	 * the command.
	 */
	PostMove: [cmd: UserCmd]
	/**
	 * Fires for a new entity as soon as its own first fields are applied, before the rest of
	 * the server update is read: an entity created later in that update does not exist yet.
	 * `EntityCreated` follows.
	 */
	PreEntityCreated: [ent: Entity]
	/**
	 * Fires when the Game Coordinator creates or changes one of the account's shared objects of
	 * an `ESOType` type. `typeID` is that type, `reason` 0 for an object this client had not
	 * seen and 1 for a change, `msg` the object decoded.
	 */
	SharedObjectChanged: [typeID: ESOType, reason: number, msg: ArrayBuffer | RecursiveMap | RecursiveProtobuf]
	/**
	 * Fires when the server starts a sound event whose name the SDK can resolve. `source_ent`
	 * is the entity it plays from, `undefined` when it names none the client has; `position` is
	 * where the message places it, all zeros when it places none; `start_time` is -1 when the
	 * message gives none.
	 */
	StartSound: [name: string, source_ent: Nullable<Entity>, position: Vector3, seed: number, start_time: number]
	/** Fires for each damage report the server sends this client; `damage` is the report. */
	UnitDamage: [damage: UnitDamage]
}

/**
 * The events Deadlock's host fires into `Source2SDK.NativeEvents`, with the arguments the host
 * gives them. The SDK listens to them and emits the matching events on `Events`, where a script
 * normally subscribes.
 */
interface NativeEventsMap {
	/**
	 * Fires once a frame in which the animation of an entity watched through `AnimationManager`
	 * changed. `records` packs the changes; `AnimationManager` decodes them into
	 * `AnimationStarted` and the other animation events of `Events`.
	 */
	AnimGraphChanged: [records: ArrayBuffer]
	/**
	 * Fires before the game builds the local player's next command. `cmd` views the buffer the
	 * command is exchanged in, the same memory on every call; `Events` hands it on as a
	 * `UserCmd`.
	 */
	CreateMove: [cmd: Uint8Array]
	/**
	 * Fires after the game has built the local player's command. `cmd` views the same buffer as
	 * in `CreateMove`; the SDK loads the built command into it and emits `PostMove` on `Events`.
	 */
	PostMove: [cmd: Uint8Array]
	/**
	 * Fires when the client is about to ask the Game Coordinator to find a match. `buf` is the
	 * request, a serialized `CMsgClientToGCStartMatchmaking`. A listener returning `false` keeps
	 * the request from being sent.
	 */
	GCStartMatchmaking: [buf: ArrayBuffer]
}
