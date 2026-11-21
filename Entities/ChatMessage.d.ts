// AUTO-GENERATED - do not edit.
/** A chat line the server relayed, as the `ChatMessage` event hands it over. */
declare class ChatMessage {
	/** The sender's player slot, or -1 for a line the server wrote itself. */
	public readonly PlayerSlot: number
	/** What the line says; an empty string when the message carries no text. */
	public readonly Text: string
	/** Whether the line went to everyone; `false` for one sent to the team. */
	public readonly AllChat: boolean
	/** The lane tag the line carries; `ELaneColor.Invalid` when it has none. */
	public readonly LaneColor: ELaneColor
	/** The sender's controller, or undefined while it is not known. */
	public get Player(): Nullable<Player>
}
