// AUTO-GENERATED - do not edit.
/**
 * Light Eater: Celeste blasts a wide cone ahead of her, and the flare marks the enemies it hits so
 * her bullets deal them more. Live at a standstill it reached a hero whose origin stood 10.7 m
 * from hers (cast range 10 m, the hero's box 20 u to each side) and missed one at 10.8 m; across,
 * it still hit 60 degrees off the view at 6 m and 50 degrees at 9 m.
 */
declare class ability_unicorn_radiantblast extends Ability {
	/**
	 * Degrees across the blast's cone (`TargetingConeAngle`): an enemy within half of it of the
	 * view is hit with room to spare.
	 */
	public get ConeAngle(): number
	/**
	 * Whether the blast reaches `target` from where Celeste stands: as `Ability.CanHit` judges a
	 * cast, and the target's origin no farther from hers than the cast range and half the diagonal
	 * of the target's box across. The hull distance `Ability.CanHit` measures runs from the
	 * target's hitboxes, which let a hero about 11.8 m away count while the blast missed one at
	 * 10.8 m.
	 */
	public CanHit(target: Entity): boolean
}
