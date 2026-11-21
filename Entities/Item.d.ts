// AUTO-GENERATED - do not edit.
/** A shop item a hero holds (`CCitadel_Item`), and the base of every item wrapper. */
declare class Item extends Ability {
	/** Always true. */
	public get IsItem(): boolean
	/** The active effect duration after the owner's bonuses and optional target resistance. */
	public GetActiveDuration(target?: Nullable<PlayerPawn>): number
}
