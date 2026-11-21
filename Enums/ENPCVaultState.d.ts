// AUTO-GENERATED - do not edit.
/** Where a Sinner's Sacrifice stands, as its `m_iVaultState` networks it. */
declare enum ENPCVaultState {
	/** Untouched since it spawned. */
	Idle = 0,
	/** Hit at least once, with more than its last block left. */
	Active = 1,
	/** Down to its last block: the jackpot cycle runs until a finishing hit lands. */
	Critical = 2,
	/** Finished by a light melee inside the hit window: one buff. */
	DestroySuccessLight = 3,
	/** Finished by a heavy melee inside the hit window: four buffs. */
	DestroySuccessHeavy = 4,
	/** Finished outside the hit window: the souls alone. */
	DestroyFailure = 5,
	/** Broken and waiting to respawn. */
	DestroyDead = 6
}
