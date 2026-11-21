// AUTO-GENERATED - do not edit.
/**
 * The local player's command for one tick, handed to `CreateMove` and `PostMove` listeners.
 * `CreateMove` runs before the game builds the command and its fields still hold the last one:
 * queue changes there with {@link HoldButton}, {@link TapButton}, {@link ExecuteAbility} and the
 * `Set` methods. `PostMove` runs on the built command, and a field written there replaces the
 * game's value.
 * @example
 * Events.on("CreateMove", cmd => cmd.TapButton(EInputBitMask.IN_RELOAD))
 */
declare class UserCmd {
	/**
	 * A command over `buffer`, the native `LatestUserCmd` by default. The one `CreateMove` and
	 * `PostMove` listeners get is made by the SDK.
	 */
	constructor(buffer?: ArrayBufferLike)
	/**
	 * The buttons held down in the command, as `EInputBitMask` bits. {@link PressButtons} and
	 * {@link ReleaseButtons} write it in step with {@link Button2} and {@link Button3}.
	 */
	public get Button1(): bigint
	public set Button1(value: bigint)
	/**
	 * The buttons whose held state changes with the command, as `EInputBitMask` bits: pressed
	 * where {@link Button1} has them down, let go where it does not.
	 */
	public get Button2(): bigint
	public set Button2(value: bigint)
	/**
	 * The buttons pressed and let go again within the command's tick, as `EInputBitMask` bits:
	 * a tap, which the game takes as a fresh press and which leaves {@link Button1} as it was.
	 */
	public get Button3(): bigint
	public set Button3(value: bigint)
	/** The command's forward move. */
	public get ForwardMove(): number
	public set ForwardMove(value: number)
	/** The command's move sideways. */
	public get LeftMove(): number
	public set LeftMove(value: number)
	/** The command's vertical move. */
	public get UpMove(): number
	public set UpMove(value: number)
	/** The impulse number the command carries, as the game encodes it. */
	public get Impulse(): number
	public set Impulse(value: number)
	/** The weapon switch the command asks for, as the game encodes it. */
	public get WeaponSelect(): number
	public set WeaponSelect(value: number)
	/** The horizontal mouse movement the command carries. */
	public get MouseDx(): number
	public set MouseDx(value: number)
	/** The vertical mouse movement the command carries. */
	public get MouseDy(): number
	public set MouseDy(value: number)
	/** The count of view angle changes from the server the command reports as taken on. */
	public get ConsumedServerAngleChanges(): number
	public set ConsumedServerAngleChanges(value: number)
	/**
	 * The signature abilities the command asks the game to cast, one bit each: bit 0 for
	 * `ESlot_Signature_1` up to bit 3 for `ESlot_Signature_4`.
	 */
	public get ExecuteAbilityIndices(): number
	public set ExecuteAbilityIndices(value: number)
	/** The roaming camera speed the command carries. */
	public get CameraRoamingSpeed(): number
	public set CameraRoamingSpeed(value: number)
	/** The entity index of the enemy hero the command aims at; -1 for none. */
	public get EnemyHeroAimedAt(): number
	public set EnemyHeroAimedAt(value: number)
	/** The command's flag bits, as the game encodes them. */
	public get CmdFlags(): number
	public set CmdFlags(value: number)
	/** Whether the command is marked as made with the free cursor in use. */
	public get FreeCursor(): boolean
	public set FreeCursor(value: boolean)
	/**
	 * The angles the command aims along: pitch, yaw and roll in degrees. A read is a copy. Angles
	 * written as all zeros or with a value that is not finite leave the game's own in place.
	 */
	public get ViewAngles(): QAngle
	public set ViewAngles(value: QAngle)
	/**
	 * The camera's angles the command carries: pitch, yaw and roll in degrees. A read is a copy.
	 * Angles written as all zeros or with a value that is not finite leave the game's own in place.
	 */
	public get CameraAngles(): QAngle
	public set CameraAngles(value: QAngle)
	/**
	 * The camera's position the command carries. A read is a copy. A position written as all
	 * zeros or with a value that is not finite leaves the game's own in place.
	 */
	public get CameraPosition(): Vector3
	public set CameraPosition(value: Vector3)
	/** The client tick the command was built for. */
	public get TickCount(): number
	/** The handle of the pawn the command is for; `EntityManager.EntityByIndex` resolves it. */
	public get Pawn(): number
	/** The command's sequence number, as the game numbers its commands. */
	public get CommandNumber(): number
	/**
	 * The server tick this command runs on, from the server's command-queue report: the server
	 * queues a player's commands and runs them a few ticks after their own tick. 0 until the
	 * server has reported the queue.
	 */
	public get RunTick(): number
	/** The seed the game's prediction draws random numbers from for this command. */
	public get RandomSeed(): number
	/** Whether the player has the shop open; the SDK copies it to `GameState.IsShopOpen`. */
	public get InShop(): boolean
	/**
	 * Holds the buttons of `mask` down in the command about to be built, from a `CreateMove`
	 * listener. Call it every tick they stay down: the first tick presses them, and the first
	 * without a call lets go of those the player does not hold.
	 */
	public HoldButton(mask: bigint): void
	/**
	 * Presses the buttons of `mask` in the command about to be built, from a `CreateMove`
	 * listener, anew even where they are held already: a button the command before held is
	 * tapped within the tick ({@link Button3}), any other is held down for this command. Unless
	 * pressed again or held by the player, they are let go on the next tick. An ability's cast
	 * takes its key held, which a tap within the tick alone is not.
	 */
	public TapButton(mask: bigint): void
	/** The buttons {@link HoldButton} and {@link TapButton} have queued for the next command. */
	public get PendingButtons(): bigint
	/**
	 * The buttons the command presses anew, as `EInputBitMask` bits: the ones it holds down
	 * that the command before did not ({@link Button1} with {@link Button2}), and the ones
	 * tapped within its tick ({@link Button3}).
	 */
	public get PressedButtons(): bigint
	/**
	 * Holds `mask` down in the command being written: as pressed with it where the command
	 * before did not hold the button, as held on where it did. A tap of the same buttons within
	 * the tick is dropped.
	 *
	 * @example
	 * cmd.PressButtons(EInputBitMask.IN_ATTACK)
	 */
	public PressButtons(mask: bigint): void
	/**
	 * Lets `mask` go in the command being written. The release edge lands only where the button
	 * was held by the previous command, and any press or tap the mask carries is dropped, so a
	 * button suppressed before the server ever saw it leaves no edge behind at all.
	 *
	 * @example
	 * cmd.ReleaseButtons(EInputBitMask.IN_ATTACK)
	 */
	public ReleaseButtons(mask: bigint): void
	/**
	 * Asks the command about to be built to cast the signature ability in `slot`, 0 to 3 for
	 * `ESlot_Signature_1` to `ESlot_Signature_4`, and taps its key with it. From a `CreateMove`
	 * listener; `Ability.Use` calls it and follows the press.
	 */
	public ExecuteAbility(slot: number): void
	/**
	 * Drops everything queued for the command about to be built: buttons, ability casts, angles,
	 * camera position and the aimed-at hero. The SDK calls it before each `CreateMove` event.
	 */
	public Reset(): void
	/**
	 * Queues a copy of `position` as the {@link CameraPosition} of the command about to be built,
	 * from a `CreateMove` listener.
	 */
	public SetCameraPosition(position: Vector3): void
	/**
	 * Queues a copy of `angles` as the {@link ViewAngles} of the command about to be built, from a
	 * `CreateMove` listener.
	 */
	public SetViewAngles(angles: QAngle): void
	/**
	 * Queues a copy of `angles` as the {@link CameraAngles} of the command about to be built, from
	 * a `CreateMove` listener.
	 */
	public SetCameraAngles(angles: QAngle): void
	/** Queues the selected hero identity so it survives the native PostMove command read. */
	public SetEnemyHeroAimedAt(index: number): void
	/**
	 * Loads the command the game has just built, with no field marked as written; a write made
	 * before it is lost. The SDK calls it before each `PostMove` event.
	 */
	public Read(): void
	/**
	 * Writes the queue onto the loaded command: the buttons of {@link HoldButton} and
	 * {@link TapButton}, the release of any it held last tick and holds no more, the ability casts
	 * and what the `Set` methods queued. The SDK calls it after {@link Read}, before `PostMove`.
	 */
	public ApplyDelta(): void
	/**
	 * Hands the command back to the game, which takes every field written since {@link Read} in
	 * place of its own. The SDK calls it after each `PostMove` event.
	 */
	public Commit(): void
}
