// AUTO-GENERATED - do not edit.
/**
 * The melee every hero has, under whatever name the hero's data gives it:
 * `GetAbilityByClass(citadel_ability_hold_melee)` finds it on any hero.
 */
declare class citadel_ability_hold_melee extends Ability {
	/** Which way the melee's dash in the air heads; an invalid vector until the game sends one. */
	public readonly AirDashDir: Vector3
	/** When the melee's dash began. */
	public readonly DashStartTime: number
	/** When the attack under way was triggered. */
	public readonly AttackTriggeredTime: number
	/** The time from which the melee lets its owner start another attack. */
	public readonly NextAttackAllowedTime: number
	/** The game time, in seconds, the current {@link CurrentAttackState} began at. */
	public readonly StateStartTime: number
	/** When the melee was last activated. */
	public readonly LastActivateTime: number
	/** Whether the attack under way has hit something. */
	public readonly HitWithThisAttack: boolean
	/** Whether the melee tag is active on the owner. */
	public readonly UsingMeleeTagActive: boolean
	/** Whether the owner is using this melee. */
	public readonly UsingThisMelee: boolean
	/**
	 * Which attack is under way. The server sends this to the attacker themselves, so on another
	 * player's melee it can stay {@link EMeleeHoldAttackType.None} for the whole swing — an enemy
	 * attack is seen through their sounds and modifier states, never by waiting on this.
	 */
	public readonly CurrentAttackType: EMeleeHoldAttackType
	/** How far that attack has got, networked on the same terms as {@link CurrentAttackType}. */
	public readonly CurrentAttackState: EMeleeHoldAttackState
	/**
	 * The game time the swing under way lets its owner go: the end of the action the melee keeps
	 * them busy with. A swing charges, dashes where it is a heavy, then holds its attack state for
	 * the state time its attack declares, or 0.3 s where the data declares none. The end is known
	 * once the attack state begins and is `Infinity` before that; 0 with no swing under way.
	 * Networked on the terms {@link CurrentAttackState} is, so on another player's melee it can
	 * stay 0.
	 */
	public get SwingEndTime(): number
	public CanHit(target: Entity): boolean
}
