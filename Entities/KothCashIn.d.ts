// AUTO-GENERATED - do not edit.
/** The Unstable Rift: the point a team holds to cash it in. */
declare class KothCashIn extends Entity {
	/** The stage the Rift is at; it stands open to be captured at 2. */
	public readonly EnableState: number
	/** Whether the server has switched the Rift off; {@link IsCapturable} is false while it is. */
	public readonly IsDisabled: boolean
	/** Whether the Rift is open right now: at its capturable stage and not switched off. */
	public get IsCapturable(): boolean
}
