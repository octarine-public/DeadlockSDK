// AUTO-GENERATED - do not edit.
/**
 * A jungle neutral. Most camps swing a melee at a hero who comes close ({@link Melee}): the
 * wind-up starts with its swing sound, and the blow lands as it ends, wherever the ball the
 * neutral throws ahead of itself catches the hero ({@link MeleeGap}).
 * @example
 * Events.on("StartSound", (name, source) => {
 * 	if (source instanceof npc_trooper_neutral && name === source.Melee?.SwingSound) {
 * 		console.log(source.MeleeGap(LocalPlayer.Hero.Position) <= 0)
 * 	}
 * })
 */
declare class npc_trooper_neutral extends npc_trooper {
	/** Always `true`, whatever its team. */
	public get IsNeutral(): boolean
	/**
	 * The melee this neutral swings, as its data has it; nothing for one that swings none - a
	 * Sinner's Sacrifice, or a camp whose data forbids melee.
	 */
	public get Melee(): Nullable<NeutralMeleeStore>
	/**
	 * How far a hero standing at `target` is outside the blow this neutral throws from where it
	 * stands, down the way it faces, in world units across the ground: negative inside, and
	 * `Infinity` for a neutral that swings no melee. A neutral turns to its target as it winds up,
	 * at once to within about 45 degrees of it and on from there at about 90 degrees a second, so
	 * the later in the wind-up the facing is read, the nearer it is to the one the blow goes down.
	 */
	public MeleeGap(target: Vector3): number
}
