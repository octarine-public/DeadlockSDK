// AUTO-GENERATED - do not edit.
/**
 * What the enemy team sees of a pawn, by the rules the server keeps the enemy's map with: an
 * enemy hero has it in sight ({@link IsInEnemySight}), a unit of the enemy other than a lane
 * trooper spots it ({@link IsSpottedByEnemyUnits}), or a hit reveals it
 * ({@link IsRevealedByDamage}). The server sends neither the map entry nor its time, so the last
 * two and the enemy heroes that see the pawn ({@link SeenBy}) are worked out here; a reveal from
 * an ability, a teleporter or dying is not known.
 * @example
 * const hero = LocalPlayer?.Hero
 * if (hero !== undefined && VisionSDK.IsSeen(hero)) {
 * 	console.log("spotted")
 * }
 */
declare class CVisionSDK {
	/**
	 * Follows network updates and damage messages, and forgets everything when the game ends. Use
	 * the `VisionSDK` instance.
	 */
	constructor()
	/**
	 * Whether the server shows the pawn on the enemy's map now by the time it writes on the pawn
	 * itself; never while the server does not run citadel_player_reveal_notif, which it does not by
	 * default.
	 */
	public IsRevealed(pawn: PlayerPawn): boolean
	/** Whether an enemy hero has the pawn in sight now, by the server's own check. */
	public IsInEnemySight(pawn: PlayerPawn): boolean
	/**
	 * Whether a unit of the enemy other than a lane trooper saw the pawn in the last 0.75 s, so the
	 * pawn shows on the enemy's map: a guardian, walker, base guardian or the patron the client knows
	 * of, with the pawn within the range its data sees heroes at and a clear line from its eyes; an
	 * invisible pawn goes unseen. Worked out at most once per network update, and only when asked:
	 * ask on every update for the hold to see every sighting.
	 */
	public IsSpottedByEnemyUnits(pawn: PlayerPawn): boolean
	/**
	 * Whether a hit puts the pawn on the enemy's map now: bullet damage it dealt an enemy hero in the
	 * last second or an enemy unit in the last two, or any a trooper of the enemy dealt it in the last
	 * two; spirit and pure damage reveal no attacker. Known only from the damage messages this client
	 * gets, which tell of the local hero's own hits.
	 */
	public IsRevealedByDamage(pawn: PlayerPawn): boolean
	/** Whether the enemy sees the pawn on their map now, by any of the reveals known here. */
	public IsOnEnemyMap(pawn: PlayerPawn): boolean
	/** Whether the enemy sees the pawn now: an enemy hero has it in sight, or it is on their map. */
	public IsSeen(pawn: PlayerPawn): boolean
	/**
	 * The enemy heroes the client knows of that have the pawn in sight by the server's rule:
	 * within 2500 units, inside the cone around their aim or right beside it, with a clear line from
	 * their eyes. An enemy the server does not send is missing here. Worked out when asked, at most
	 * once per network update.
	 */
	public SeenBy(pawn: PlayerPawn): readonly PlayerPawn[]
}
/** What the enemy team sees of each pawn: the {@link CVisionSDK} scripts ask. */
declare const VisionSDK: CVisionSDK
