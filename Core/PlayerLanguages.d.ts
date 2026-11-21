// AUTO-GENERATED - do not edit.
/** The languages recognized from player chat and nicknames. */
type PlayerChatLanguage = "en" | "ru" | "cn"
/**
 * The chat language of each player in the match, told from their chat messages and nickname.
 * Use the `PlayerLanguages` instance.
 */
interface CPlayerLanguages {
	/** The supported codes, matching the built-in chat message lists. */
	readonly Supported: readonly PlayerChatLanguage[]
	/**
	 * Uses the player's latest recognized chat language, then their nickname, then English.
	 * Cyrillic selects Russian, Han selects Chinese, and Latin selects English; messages
	 * containing only numbers or symbols keep the previous choice. History is scoped to
	 * the Steam account within the current match and resets when a match starts or ends.
	 */
	For(player: Nullable<Player>): PlayerChatLanguage
}
/** Shared per-match language history, updated automatically from ChatMessage events. */
declare const PlayerLanguages: CPlayerLanguages
