// AUTO-GENERATED - do not edit.
/**
 * One entry of the server's `ActiveModifiers` string table: the raw fields a {@link Modifier} is
 * built from and updated with. A getter is `undefined` where {@link GetProperty} is.
 */
interface IModifier {
	/**
	 * The entry's fields by name, as parsed from its `CModifierTableEntry` message;
	 * `creation_time` is set to the time of reading when the entry has none.
	 */
	readonly kv: RecursiveProtobuf
	/**
	 * When the server created the modifier, on the {@link GameState.RawGameTime} clock; the moment
	 * this client read the entry where the server leaves the time out.
	 */
	get CreationTime(): number
	/**
	 * Whether the entry holds an active modifier (`MODIFIER_ENTRY_TYPE_ACTIVE`, also when it
	 * leaves the field out) or removes one.
	 */
	get EntryType(): Nullable<MODIFIER_ENTRY_TYPE>
	/** The handle of the entity wearing the modifier; `EntityManager.EntityByIndex` resolves it. */
	get Parent(): Nullable<number>
	/** The handle of the modifier's caster, the entity that applied it. */
	get Caster(): Nullable<number>
	/**
	 * The id that names the modifier in the game's modifier data;
	 * `ModifierStore.GetStoreBySubclassID` looks it up.
	 */
	get SubclassID(): number
	/**
	 * The serial number the modifier is known by while it lasts: an entry with a serial already
	 * known updates that modifier, one with a new serial creates a modifier.
	 */
	get SerialNum(): number
	/** How many stacks the modifier has. */
	get StackCount(): Nullable<number>
	/** The most stacks the modifier can have. */
	get MaxStackCount(): Nullable<number>
	/**
	 * When the modifier was last applied or refreshed, on the {@link GameState.RawGameTime}
	 * clock.
	 */
	get LastAppliedTime(): number
	/**
	 * How long the modifier lasts, in seconds from the later of {@link CreationTime} and
	 * {@link LastAppliedTime}; -1 when the entry leaves it out.
	 */
	get Duration(): number
	/** The handle of the ability that applied the modifier. */
	get Ability(): Nullable<number>
	/** The serial number of the modifier's aura provider. */
	get AuraProviderSerialNumber(): Nullable<number>
	/**
	 * The id that names the applying ability in the game's ability data. It travels with the
	 * modifier, so it answers while the ability's entity has not reached the client.
	 */
	get AbilitySubclassID(): Nullable<number>
	/** The handle of the modifier's aura provider. */
	get AuraProviderEHandle(): Nullable<number>
	/** Flag slot 1 of 4, whose meaning depends on the modifier. */
	get Bool1(): Nullable<boolean>
	/** Flag slot 2 of 4, whose meaning depends on the modifier. */
	get Bool2(): Nullable<boolean>
	/** Flag slot 3 of 4, whose meaning depends on the modifier. */
	get Bool3(): Nullable<boolean>
	/** Flag slot 4 of 4, whose meaning depends on the modifier. */
	get Bool4(): Nullable<boolean>
	/** Integer slot 1 of 4, whose meaning depends on the modifier. */
	get Int1(): Nullable<number>
	/** Integer slot 2 of 4, whose meaning depends on the modifier. */
	get Int2(): Nullable<number>
	/** Integer slot 3 of 4, whose meaning depends on the modifier. */
	get Int3(): Nullable<number>
	/** Integer slot 4 of 4, whose meaning depends on the modifier. */
	get Int4(): Nullable<number>
	/** Number slot 1 of 16, whose meaning depends on the modifier. */
	get Float1(): Nullable<number>
	/** Number slot 2 of 16, whose meaning depends on the modifier. */
	get Float2(): Nullable<number>
	/** Number slot 3 of 16, whose meaning depends on the modifier. */
	get Float3(): Nullable<number>
	/** Number slot 4 of 16, whose meaning depends on the modifier. */
	get Float4(): Nullable<number>
	/** Number slot 5 of 16, whose meaning depends on the modifier. */
	get Float5(): Nullable<number>
	/** Number slot 6 of 16, whose meaning depends on the modifier. */
	get Float6(): Nullable<number>
	/** Number slot 7 of 16, whose meaning depends on the modifier. */
	get Float7(): Nullable<number>
	/** Number slot 8 of 16, whose meaning depends on the modifier. */
	get Float8(): Nullable<number>
	/** Number slot 9 of 16, whose meaning depends on the modifier. */
	get Float9(): Nullable<number>
	/** Number slot 10 of 16, whose meaning depends on the modifier. */
	get Float10(): Nullable<number>
	/** Number slot 11 of 16, whose meaning depends on the modifier. */
	get Float11(): Nullable<number>
	/** Number slot 12 of 16, whose meaning depends on the modifier. */
	get Float12(): Nullable<number>
	/** Number slot 13 of 16, whose meaning depends on the modifier. */
	get Float13(): Nullable<number>
	/** Number slot 14 of 16, whose meaning depends on the modifier. */
	get Float14(): Nullable<number>
	/** Number slot 15 of 16, whose meaning depends on the modifier. */
	get Float15(): Nullable<number>
	/** Number slot 16 of 16, whose meaning depends on the modifier. */
	get Float16(): Nullable<number>
	/**
	 * The entry's field `name`, cast to `T` unchecked; `undefined` when the entry leaves it out
	 * or it holds 16777215, the unset handle.
	 */
	GetProperty<T>(name: string): Nullable<T>
}
