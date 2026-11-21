// AUTO-GENERATED - do not edit.
/**
 * A value a modifier's data gives its wearer: a fixed one, or one that moves from Min to Max
 * between two match minutes and is taken at the minute the buff is gained.
 */
interface IModifierValueRange {
	/** The value up to {@link FromMinute} (`m_valueMin`, or the fixed `m_value`). */
	readonly Min: number
	/**
	 * The value from {@link ToMinute} on (`m_valueMax`, or the fixed `m_value`); {@link Min} where
	 * the data gives no maximum.
	 */
	readonly Max: number
	/** The match minute the value starts moving from {@link Min} at (`m_flTimeMin`); 0 if fixed. */
	readonly FromMinute: number
	/**
	 * The match minute the value reaches {@link Max} at (`m_flTimeMax`); 0 if fixed. Where it is
	 * not past {@link FromMinute}, the value is {@link Max} at every minute.
	 */
	readonly ToMinute: number
}
/**
 * A modifier's data from the game files: an entry of `modifiers.vdata`, or one declared inside an
 * ability's, unit's or misc entry. `Modifier.Store` holds it.
 */
declare class ModifierStore {
	/**
	 * The modifier's data id, hashed from {@link QualifiedName}: the one a networked modifier
	 * carries, which `Modifier.Store` finds it by. -1 on {@link empty}.
	 */
	public readonly SubclassID: number
	/**
	 * The store of no modifier: empty names, no states and no values. {@link GetStoreBySubclassID}
	 * gives it for an id the data lacks.
	 */
	public static readonly empty: ModifierStore
	/** Every modifier's data by {@link SubclassID}, refilled on each `ServerInfo` event. */
	public static readonly globalStorage: Map<number, ModifierStore>
	/** The modifier whose {@link SubclassID} is `subClassID`, or {@link empty} for none. */
	public static GetStoreBySubclassID(subClassID: number): ModifierStore
	/** The modifier's own name, without the entry that declares it. */
	public readonly Name: string
	/**
	 * The vdata entry the modifier is declared inside, the ability, item, unit or misc entry that
	 * begins its {@link QualifiedName}; empty for one the game ships standalone.
	 */
	public readonly Owner: string
	/**
	 * `<Owner>/<Name>` for an embedded modifier, with the names of the modifiers it is declared
	 * inside in between, the name alone for one the game ships standalone: the name a wrapper
	 * registers under (`WrapperClassModifier`) to wrap one ability's modifier and none of the
	 * others that share its name.
	 */
	public readonly QualifiedName: string
	/**
	 * The states this modifier's data switches on while a unit wears it — the list the game
	 * itself reads to put the wearer into them, so a unit's live state is matched to the buff
	 * that carries it by this. Empty for a modifier whose data declares none: crowd control
	 * classes carry their states in code, and their entries declare nothing here.
	 */
	public readonly EnabledStates: readonly EModifierState[]
	/**
	 * The C++ class the entry is declared as (`_class`): it carries the behavior and the states
	 * the data itself does not spell out. Empty when the data names none.
	 */
	public readonly Class: string
	/**
	 * The values the modifier's own data gives its wearer (`m_vecModifierValues`,
	 * `m_vecScriptValues`): a rune's spirit power that grows with the match, a statue's permanent
	 * spirit or resistance, a cooldown pickup's reduction. Items give theirs through their own
	 * data, not their modifiers'.
	 */
	public readonly Values: ReadonlyMap<EModifierValue, IModifierValueRange>
	/**
	 * The properties of the applying ability whose values the game registers on the wearer while
	 * the modifier lasts (`m_vecAutoRegisterModifierValueFromAbilityPropertyName`): Crow
	 * Familiar's debuff takes resistance away this way, Cheat Death's immunity damage.
	 */
	public readonly AutoRegistered: readonly string[]
	/**
	 * A number field at the top level of the modifier's data, such as a hero gravity
	 * modifier's `m_flGravityChange`; 0 where it has none. {@link ValueAt} reads the values the
	 * data lists for its wearer.
	 */
	public GetClassValue(field: string): number
	/** Whether wearing this modifier sets `state`, as its data declares it. */
	public EnablesState(state: EModifierState): boolean
	/** `value` of this modifier gained at match minute `minute`; 0 for one it does not give. */
	public ValueAt(value: EModifierValue, minute: number): number
}
