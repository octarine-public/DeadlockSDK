// AUTO-GENERATED - do not edit.
/** A wearable item entity, named by the game's item definition it was made from. */
declare class Wearable extends Entity {
	/**
	 * The id of the game's item definition behind this wearable; {@link ItemName} and
	 * {@link HealthBarOffset} are read from it.
	 */
	public ItemDefinitionIndex: number
	/** The name the item definition gives this wearable; empty until the definition id arrives. */
	public ItemName: string
	/** The health bar offset the item definition gives this wearable; `undefined` for none. */
	public HealthBarOffset: Nullable<number>
	/**
	 * The wearable linked to this one as an additional piece. It stays `undefined`: nothing sets
	 * the handle the SDK matches it by.
	 */
	public AdditionalWearable: Nullable<Wearable>
	/** The wearable's item name ({@link ItemName}) in place of its entity name. */
	public get Name(): string
}
