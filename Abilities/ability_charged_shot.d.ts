// AUTO-GENERATED - do not edit.
/** Charged Shot: Grey Talon draws a piercing arrow that grows stronger the longer it is held. */
declare class ability_charged_shot extends Ability {
	/** Charged Shot starts on the command's camera ray. */
	public get LaunchesFromCamera(): boolean
	/** Whether the game has Charged Shot marked to go off. */
	public readonly ShouldBeExecuted = false
	/** When the ability was last selected or deselected. */
	public readonly SelectedChangedTime = 0
	/** Whether Grey Talon holds the shot drawn: the channel that charges it until he lets go. */
	public get IsCharging(): boolean
}
