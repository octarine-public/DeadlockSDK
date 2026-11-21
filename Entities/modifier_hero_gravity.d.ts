// AUTO-GENERATED - do not edit.
/**
 * A hero's own gravity, which its gun or an item keeps on it: it changes the share of the
 * world's gravity the hero falls with by {@link GravityChange} percent, as
 * `MODIFIER_VALUE_GRAVITY_SCALE`. The pawn's own `GravityScale` stays what it was;
 * `PlayerPawn.EffectiveGravityScale` counts both.
 * @example
 * const lighter = hero.Buffs.some(buff => buff instanceof modifier_hero_gravity && buff.GravityChange < 0)
 */
declare class modifier_hero_gravity extends Modifier {
	/**
	 * The percent the modifier's data changes its wearer's gravity by (`m_flGravityChange`):
	 * -25 on Celeste, who falls with three quarters of the world's.
	 */
	public get GravityChange(): number
}
