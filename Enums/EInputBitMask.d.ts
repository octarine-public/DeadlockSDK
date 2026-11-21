// AUTO-GENERATED - do not edit.
/**
 * The game's `IN_*` button bits of a user command: what `UserCmd.Button1` holds and
 * `UserCmd.HoldButton` and `TapButton` take, and what `Ability.KeyMask` gives for an
 * ability's key.
 */
declare const EInputBitMask: {
	/** What `Ability.KeyMask` gives for a slot no key casts. */
	IN_NONE: bigint
	/**
	 * -1n, every bit set: a mask, and not a value `UserCmd.Button1` ever equals, since that
	 * reads unsigned.
	 */
	IN_ALL: bigint
	/**
	 * Primary fire. `Ability.Confirm` taps it to place a cast held in targeting, and
	 * `Humanizer.Process` lets it go while the view is short of the aim.
	 */
	IN_ATTACK: bigint
	/**
	 * Not the bit the SDK jumps with: it taps `IN_MANTLE` for a jump and reads the player's own
	 * by that bit.
	 */
	IN_JUMP: bigint
	/** Crouch, and the slide's key, which `citadel_ability_slide.KeyMask` does not give. */
	IN_DUCK: bigint
	/** The key of a positive `UserCmd.ForwardMove`, as the SDK pairs them. */
	IN_FORWARD: bigint
	/** The key of a negative `UserCmd.ForwardMove`, as the SDK pairs them. */
	IN_BACK: bigint
	IN_USE: bigint
	IN_TURNLEFT: bigint
	IN_TURNRIGHT: bigint
	/** The key of a positive `UserCmd.LeftMove`, as the SDK pairs them. */
	IN_MOVELEFT: bigint
	/** The key of a negative `UserCmd.LeftMove`, as the SDK pairs them. */
	IN_MOVERIGHT: bigint
	/** Secondary fire. `Humanizer.Process` lets it go together with `IN_ATTACK`. */
	IN_ATTACK2: bigint
	/** Tapped partway through a reload, it is the press that uses `upgrade_active_reload`. */
	IN_RELOAD: bigint
	IN_SPEED: bigint
	IN_JOYAUTOSPRINT: bigint
	/** The same bit as `IN_WEAPON1`, not a button of its own. */
	IN_FIRST_MOD_SPECIFIC_BIT: bigint
	/**
	 * The melee button. A short press makes a light melee; held until the attack commits, the
	 * press makes a heavy one.
	 */
	IN_WEAPON1: bigint
	/**
	 * The key of the signature ability in `ESlot_Signature_1`; `IN_ABILITY2` to `IN_ABILITY4` are
	 * the next three bits and slots (`Ability.KeyMask`).
	 */
	IN_ABILITY1: bigint
	IN_ABILITY2: bigint
	IN_ABILITY3: bigint
	IN_ABILITY4: bigint
	/**
	 * The key of the active item in `ESlot_ActiveItem_1`; `IN_ITEM2` to `IN_ITEM4` are the next
	 * three bits and slots (`Ability.KeyMask`).
	 */
	IN_ITEM1: bigint
	IN_ITEM2: bigint
	IN_ITEM3: bigint
	IN_ITEM4: bigint
	/** No ability's `KeyMask` is it: active item slots end at `ESlot_ActiveItem_4`. */
	IN_ITEM5: bigint
	/** The parry key (`citadel_ability_melee_parry.KeyMask`); a tap of it is a parry press. */
	IN_ABILITY_HELD: bigint
	/** The dash key (`citadel_ability_dash.KeyMask`). */
	IN_INNATE_1: bigint
	IN_INNATE_2: bigint
	IN_INNATE_3: bigint
	/**
	 * The jump button: a tap of it jumps in the command it is in, whether or not the player has
	 * the key down.
	 */
	IN_MANTLE: bigint
	IN_SPEC_NEXT: bigint
	IN_SPEC_PREV: bigint
	IN_SPEC_MODE: bigint
	IN_SPEC_TOGGLE_TEAM: bigint
	/**
	 * The alt-cast modifier. Held with the press, it puts an ability that `SelfCasts` on its own
	 * caster: `Ability.Use` holds it when `target` is the owner.
	 */
	IN_ALT_CAST: bigint
	IN_REPLAY_DEATH: bigint
	IN_TELEPORT: bigint
	IN_ZIPLINE: bigint
	/** The key of a positive `UserCmd.UpMove`, as the SDK pairs them. */
	IN_MOVE_UP: bigint
	/** The key of a negative `UserCmd.UpMove`, as the SDK pairs them. */
	IN_MOVE_DOWN: bigint
	IN_DUCK_TOGGLE: bigint
	IN_CANCEL_ABILITY: bigint
	IN_COSMETIC_1: bigint
	IN_DOWN_DASH: bigint
}
type EInputBitMask = bigint
