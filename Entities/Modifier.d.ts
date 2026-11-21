// AUTO-GENERATED - do not edit.
/**
 * A modifier a unit wears. One whose wrapper class declares no handlers of its own puts on its
 * wearer, for as long as it lasts, the values its own data gives (`ValueOf`: a rune's, a
 * statue's) and the conditionally applied properties of its ability that its data registers
 * (`ModifierStore.AutoRegistered`: a debuff's resistance cut, an aura's spirit power) at the
 * ability's upgraded value. A barrier's health comes from the barrier tracker alone, which
 * networks it as the barrier drains.
 */
declare class Modifier {
	/**
	 * The modifier's entry in the server's `ActiveModifiers` table, replaced on every update;
	 * its raw fields include those this class does not copy out.
	 */
	public kv: IModifier
	/**
	 * Whether the modifier is still worn; false once it has been removed, and true again once it
	 * lands on another parent.
	 */
	public IsValid: boolean
	/**
	 * The modifier's name, which `Entity.GetBuffByName` matches: its entry's name in the modifier
	 * data, or for one the data does not name, the active, victim or intrinsic modifier name of
	 * its ability.
	 */
	public Name: string
	/** The serial number the server keeps the modifier under for as long as it lasts. */
	public readonly SerialNumber: number
	/**
	 * When the server created the modifier, in seconds on the `GameState.RawGameTime` clock; where
	 * the server leaves that out, when this client read the modifier's latest entry.
	 */
	public CreationTime: number
	/**
	 * When the modifier was last applied or refreshed; its duration runs from the later of this
	 * and {@link CreationTime}.
	 */
	public LastAppliedTime: number
	/** How many stacks the modifier has; 0 when the server sends none. */
	public StackCount: number
	/**
	 * How long the modifier lasts, in seconds from the later of {@link CreationTime} and
	 * {@link LastAppliedTime}; -1 when the server sends none.
	 */
	public Duration: number
	/** The entity wearing the modifier; `undefined` when that entity is not on this client. */
	public Parent: Nullable<Entity>
	/**
	 * The ability that applied the modifier: its entity where this client has it, otherwise the
	 * stand-in its hero keeps for it; `undefined` when neither is known.
	 */
	public Ability: Nullable<Ability>
	/**
	 * The entity that applied the modifier; `undefined` when the server names none or that entity
	 * is not on this client.
	 */
	public Caster: Nullable<Entity>
	/** Flag slot 1 of 4, whose meaning depends on the modifier; false when none is sent. */
	public Bool1: boolean
	/** Flag slot 2 of 4, whose meaning depends on the modifier; false when none is sent. */
	public Bool2: boolean
	/** Flag slot 3 of 4, whose meaning depends on the modifier; false when none is sent. */
	public Bool3: boolean
	/** Flag slot 4 of 4, whose meaning depends on the modifier; false when none is sent. */
	public Bool4: boolean
	/** Integer slot 1 of 4, whose meaning depends on the modifier; 0 when none is sent. */
	public Int1: number
	/** Integer slot 2 of 4, whose meaning depends on the modifier; 0 when none is sent. */
	public Int2: number
	/** Integer slot 3 of 4, whose meaning depends on the modifier; 0 when none is sent. */
	public Int3: number
	/** Integer slot 4 of 4, whose meaning depends on the modifier; 0 when none is sent. */
	public Int4: number
	/** Number slot 1 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float1: number
	/** Number slot 2 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float2: number
	/** Number slot 3 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float3: number
	/** Number slot 4 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float4: number
	/** Number slot 5 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float5: number
	/** Number slot 6 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float6: number
	/** Number slot 7 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float7: number
	/** Number slot 8 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float8: number
	/** Number slot 9 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float9: number
	/** Number slot 10 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float10: number
	/** Number slot 11 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float11: number
	/** Number slot 12 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float12: number
	/** Number slot 13 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float13: number
	/** Number slot 14 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float14: number
	/** Number slot 15 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float15: number
	/** Number slot 16 of 16, whose meaning depends on the modifier; 0 when none is sent. */
	public Float16: number
	/**
	 * When the modifier ends, on the `GameState.RawGameTime` clock: {@link Duration} seconds after
	 * the later of {@link CreationTime} and {@link LastAppliedTime}.
	 */
	public get DieTime(): number
	/** Seconds since {@link CreationTime}, never below 0. */
	public get ElapsedTime(): number
	/** Seconds until {@link DieTime}, never below 0; also 0 while {@link Duration} is -1. */
	public get RemainingTime(): number
	/**
	 * The data entry this modifier is declared by, resolved through the subclass id the
	 * modifier itself networks; the empty store for one the data does not know.
	 */
	public get Store(): ModifierStore
	/**
	 * Whether wearing this buff puts its parent into `state`, as the modifier's data declares
	 * it — the exact link between a unit's live state mask and the buff that carries the state.
	 */
	public EnablesState(state: EModifierState): boolean
	/**
	 * Copies every field out of {@link kv} again and emits `ModifierChanged` when one changed; on a
	 * change of parent it emits `ModifierRemoved` from the old one and `ModifierCreated` on the
	 * new one instead. The SDK calls it on every update of the entry, and again when the
	 * abilities of the hero holding its ability change while {@link Ability} is not found: the
	 * modifier an item keeps on its buyer arrives before the item's entity. What it registers
	 * on its parent by that ability's properties is registered afresh once the ability is found.
	 */
	public Update(): void
	/**
	 * Takes the modifier off its parent on this client: out of its `Buffs` and its
	 * `ModifierManager`, {@link IsValid} false and `ModifierRemoved` emitted. False when it has no
	 * parent. The server is not told.
	 */
	public Remove(): boolean
	/**
	 * `value` as this modifier's own data gives it (`ModifierStore.Values`), at the match minute
	 * the modifier was gained: a rune's spirit power grows with the match and stays what it was
	 * when picked up. 0 for a value the data does not give.
	 */
	public ValueOf(value: EModifierValue): number
	/**
	 * How many percent more each hit of `type` that `attacker` lands on this modifier's parent
	 * deals while the modifier lasts, paid as a damage row of its own beside the hit and counted
	 * on what the hit dealt after resistance - Pulse Grenade's on Paradox's own hits. 0 for a
	 * modifier that adds none; `ModifierManager.GetAmplification` adds up the parent's.
	 */
	public GetAmplification(_attacker: Entity, _type: EDamageType): number
}
