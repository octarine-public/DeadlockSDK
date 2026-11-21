// AUTO-GENERATED - do not edit.
/** An observer's pawn (`CCitadelObserverPawn`); {@link Target} is the entity it watches. */
declare class ObserverPawn extends Entity {
	/**
	 * Handle of the entity the observer watches; `EntityManager.INVALID_HANDLE` when it watches
	 * none.
	 */
	public readonly ObserverTarget: number
	/**
	 * The entity {@link ObserverTarget} names, typed as a hero without a check that it is one;
	 * `undefined` when it names none or that entity is not on this client.
	 */
	public get Target(): Nullable<PlayerPawn>
}
