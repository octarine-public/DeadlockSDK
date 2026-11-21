// AUTO-GENERATED - do not edit.
/**
 * Wrecked, the debuff Billy's melee hits put on a unit for `BulletDamageAmpDuration` (7 s): while
 * his Blasted is active each of his bullets on the unit deals Blasted's `BulletDamageAmp` percent
 * more (10, 17 from the second tier) of what it dealt after resistance, paid as pure damage of
 * Blasted's own after every second bullet - 3.033 for two bullets that landed 8.92 each. Nothing
 * once Blasted has ended, and nothing on anyone else's bullets. The modifier's C++ class adds it;
 * wrapped under its qualified `ability_punkgoat_blasted/blastedshred`.
 */
declare class modifier_punkgoat_blastedshred extends Modifier {
	public GetAmplification(attacker: Entity, type: EDamageType): number
}
