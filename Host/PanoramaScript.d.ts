// AUTO-GENERATED - do not edit.
/**
 * JavaScript that runs in the game's own Panorama and stays in every layout context it is called
 * in, so a call sends the payload and not the code again.
 *
 * `source` is an expression giving a function without arguments that returns the handler of a
 * call. It runs once in a layout context: the handler and what it closes over stay there between
 * calls. A script made from another `source` under the same `name` runs its own there on its
 * first call, and its handler takes the place of the one before.
 * @example
 * const badge = new PanoramaScript<{ text: string }>(
 * 	"my-script/badge",
 * 	`(function () {
 * 		var label = $.CreatePanel("Label", $.GetContextPanel(), "")
 * 		return function (payload) { label.text = payload.text }
 * 	})`
 * )
 * await MainThread.Queue(() => badge.Call(page, { text: "ready" }))
 */
declare class PanoramaScript<TPayload> {
	/**
	 * A hash of `source`, the same for the same text. A handler that marks the panels it makes
	 * with it, given in the payload, can tell the ones another source left behind.
	 */
	public readonly Version: string
	/** @param name what the script is kept under in a layout context; unique among all scripts */
	constructor(name: string, source: string)
	/**
	 * Calls the handler with `payload` in the layout context of `panel`, where
	 * `$.GetContextPanel()` is the panel loaded from a layout file nearest to it. The payload goes
	 * as JSON, and an `undefined` one is left out. The call runs on the game's next frame. Answers
	 * false when the game has destroyed the panel. Main thread only.
	 */
	public Call(panel: Panel, payload: TPayload): boolean
}
