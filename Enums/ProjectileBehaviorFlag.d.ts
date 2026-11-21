// AUTO-GENERATED - do not edit.
/**
 * How an ability's projectile behaves (bounces, sticks, detonates on a hit, …), as the
 * game's `PBF_*` flags its primary projectile's vdata `m_nBehaviors` combines;
 * `AbilityStore.ProjectileBehavior` holds them.
 */
declare const ProjectileBehaviorFlag: {
	/**
	 * What `AbilityStore.ProjectileBehavior` is for an ability without a primary projectile, or
	 * with one that declares no behaviors.
	 */
	PBF_None: bigint
	PBF_BounceOffWall: bigint
	PBF_StickToTarget: bigint
	PBF_StickToWorld: bigint
	PBF_NotTurnTowardVelocity: bigint
	PBF_DetonateOnHitTarget: bigint
	PBF_DetonateOnHitWorld: bigint
	PBF_DetonateOnHitIgnoreArmingTime: bigint
	PBF_StartDetonateTimeOnHitTarget: bigint
	PBF_StartDetonateTimeOnHitWorld: bigint
	PBF_DisableTouchOnHit: bigint
	PBF_DisableRemoveOnTouchTrackedTarget: bigint
	PBF_DisableTriggerProjectileImpactBehavior: bigint
	PBF_DetonateOnLifetimeExpire: bigint
	PBF_ValidateTargetLineOfSight: bigint
	PBF_AllowHitOnNonTrackedTargets: bigint
	PBF_OnlyTouchWorld: bigint
	PBF_DisableRemoveOnDoneTracking: bigint
	PBF_DontTravelThroughPortals: bigint
	PBF_LocationTrackingOnTargetDeath: bigint
	PBF_HitWhenReachingTrackedPosition: bigint
	PBF_TouchAllEntitiesEachTick: bigint
	PBF_StopTrackingOnDetonateStart: bigint
	PBF_DetonateWhenReachingTrackedPosition: bigint
}
type ProjectileBehaviorFlag = bigint
