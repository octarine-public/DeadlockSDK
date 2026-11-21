// AUTO-GENERATED - do not edit.
/**
 * A neutral's melee as the game's data has it: one `citadel_neutral_light_melee` entry of
 * `modifiers.vdata`, which a neutral's unit data names (`UnitStore.NeutralMelee`). The swing
 * winds up for {@link Windup}, the game playing {@link SwingSound} as it starts, and then throws a
 * ball {@link Offset} ahead of the neutral down its facing that takes a hero within
 * {@link Radius} of its centre. A parry catches the blow and stuns the neutral.
 * @example
 * const melee = NeutralMeleeStore.GetStoreByName(neutral.UnitStore.NeutralMelee)
 * console.log(melee?.Windup, melee?.Radius)
 */
declare class NeutralMeleeStore {
	/** The entry's name in `modifiers.vdata`, the one `UnitStore.NeutralMelee` gives. */
	public readonly Name: string
	/** Every neutral melee entry by {@link Name}, refilled on each `ServerInfo` event. */
	public static readonly globalStorage: Map<string, NeutralMeleeStore>
	/** The melee entry named `name`, or nothing where the data declares none by that name. */
	public static GetStoreByName(name: string): Nullable<NeutralMeleeStore>
	/** How long the swing winds up before its blow lands, in seconds (`m_flCastDelayTime`). */
	public readonly Windup: number
	/** How far ahead of the neutral, down its facing, the blow's ball is centred (`m_flForwardOffset`). */
	public readonly Offset: number
	/** The radius of the blow's ball, in world units (`m_flMeleeRadius`). */
	public readonly Radius: number
	/** The damage one blow deals before resistances (`m_flDamage`). */
	public readonly Damage: number
	/** How long the neutral waits after a swing before it can start the next, in seconds (`m_flCooldownTime`). */
	public readonly Cooldown: number
	/** The sound the wind-up starts with (`m_strCastDelaySound`): the first a client learns of the swing. */
	public readonly SwingSound: string
	/** How long one swing takes to come round again, in seconds: its wind-up and the wait after it. */
	public get Period(): number
	/**
	 * How far a hero standing at `x`, `y` is outside the blow a neutral at `from` throws down
	 * `facing` radians, in world units across the ground: negative by however far inside it they
	 * stand. The ball is centred {@link Offset} down the facing and reaches {@link Radius} and the
	 * hero's own girth past that on every side.
	 */
	public Gap(from: Vector3, facing: number, x: number, y: number): number
}
