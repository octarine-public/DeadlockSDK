// AUTO-GENERATED - do not edit.
/** A model's skeleton read as body parts, and the links between those parts. */
declare namespace BoneData {
	/** A segment of a skeleton between two bones, each by the name the model gives it. */
	interface BoneLink {
		/** The bone the link starts at. */
		from: string
		/** The bone the link ends at. */
		to: string
	}
	/**
	 * A {@link BoneLink} of one entity's model, resolved to bone indices and body parts, as
	 * {@link Entity.GetCachedBoneLinks} lists them.
	 */
	interface BoneLinkCached {
		/** The index of the start bone, as {@link Entity.GetBonePositionXYZ} takes it. */
		fromIdx: number
		/** The index of the end bone. */
		toIdx: number
		/** The start bone's body part, an `EBoneType` value. */
		fromType: number
		/** The end bone's body part, an `EBoneType` value. */
		toType: number
	}
	/**
	 * The body part a bone stands for, or `undefined` for a name the SDK does not know. Leading
	 * `_`-separated parts are dropped until a known name remains, so `rig_hand_R` is a right hand.
	 */
	function GetBoneTypeByName(name: string): Nullable<EBoneType>
	/**
	 * The links of a humanoid skeleton, head to feet and arms, between bones of `totalBones`. Names
	 * are matched by the rule of {@link GetBoneTypeByName}, the first bone to match one wins, and a
	 * link missing either end is left out.
	 */
	function ResolveBaseLinks(totalBones: string[]): BoneLink[]
}
