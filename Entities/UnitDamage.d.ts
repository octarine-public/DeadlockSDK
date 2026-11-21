// AUTO-GENERATED - do not edit.
/**
 * A hit the server reports, as the `UnitDamage` event hands it over. The bullets of one gun shot
 * that hit the same target come as one report, summed, with {@link Hits} counting them.
 */
declare class UnitDamage {
	/** The damage the hit dealt, as a whole number. */
	public readonly Damage: number
	/**
	 * The damage as it reaches the victim, before resistance: under the attacker's outgoing
	 * multipliers and the incoming damage increases the victim wears. `Ability.GetPreDamage`
	 * works it out ahead of a hit.
	 */
	public readonly PreDamage: number
	/** The damage the message counts as absorbed; 0 when it counts none. */
	public readonly DamageAbsorbed: number
	/** The health the hit took off the victim. */
	public readonly HealthLost: number
	/** How many bullets of one shot the report sums. */
	public readonly Hits: number
	/** A damage type number the message carries beside {@link CitadelType}. */
	public readonly Type: number
	/** The kind of damage, an {@link EDamageType} value: 1 bullet, 2 spirit, 7 pure. */
	public readonly CitadelType: number
	/** The hit group the hit landed in, 1 for the head; 0 when the message gives none. */
	public readonly HitgroupID: number
	/** The damage flags the message carries, as raw bits. */
	public readonly Flags: bigint
	/**
	 * The data id (`AbilityStore.SubclassID`) of the ability that dealt the damage; 0 when the
	 * message names none.
	 */
	public readonly AbilityID: number
	/** The attacker's server class (`Class_T`); a lane trooper's is 4. */
	public readonly AttackerClass: number
	/** The victim's server class, as {@link AttackerClass} gives the attacker's. */
	public readonly VictimClass: number
	/** The victim's maximum health at the hit. */
	public readonly VictimHealthMax: number
	/** The victim's health after the hit. */
	public readonly VictimHealthNew: number
	/** The victim's maximum shield at the hit. */
	public readonly VictimShieldMax: number
	/** The victim's shield after the hit. */
	public readonly VictimShieldNew: number
	/** Whether the message marks the hit as a secondary stat. */
	public readonly IsSecondaryStat: boolean
	/** The effectiveness the message gives the hit; 0 when it gives none. */
	public readonly Effectiveness: number
	/** The critical damage the hit carries: above 0 on a weak-point hit, 0 on any other. */
	public readonly CritDamage: number
	/** The server tick the hit happened on; 0 when the message does not say. */
	public readonly ServerTick: number
	/**
	 * Where the hit landed; a bullet's damage falloff counts its flight from
	 * {@link FireBullets.Origin} to here.
	 */
	public readonly Origin: Vector3
	/** The direction of the hit, as the message gives it. */
	public readonly Direction: Vector3
	/** The victim's entity index; -1 when the message names none. */
	public readonly VictimIndex: number
	/** The inflictor's entity index; -1 when the message names none. */
	public readonly InflictorIndex: number
	/** The attacker's entity index; -1 when the message names none. */
	public readonly AttackerIndex: number
	/**
	 * The entity index of the ability that dealt the damage; -1 when the message names none.
	 * {@link UnitDamage.Ability} resolves it.
	 */
	public readonly AbilityIndex: number
	/** The attacking object's entity index; -1 when the message names none. */
	public readonly AttackingObjectIndex: number
	/** The entity hit, or `undefined` when this client has none at {@link VictimIndex}. */
	public get Victim(): Nullable<Entity>
	/**
	 * The entity the message names as the inflictor, or `undefined` when this client has none
	 * at {@link InflictorIndex}.
	 */
	public get Inflictor(): Nullable<Entity>
	/** The entity that dealt the hit, or `undefined` when this client has none at that index. */
	public get Attacker(): Nullable<Entity>
	/** The ability that dealt the damage, its stand-in where this client has no entity for it. */
	public get Ability(): Nullable<Ability>
	/**
	 * The entity the message names as the attacking object, or `undefined` when this client has
	 * none at {@link AttackingObjectIndex}.
	 */
	public get AttackingObject(): Nullable<Entity>
}
