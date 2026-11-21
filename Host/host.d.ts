// AUTO-GENERATED - do not edit.
/**
 * One HTTP request as the client reports it, which `SharedSDK.fetch` turns into a `Response`: the
 * response when one arrived, otherwise only `error` and `errorCode`.
 */
interface NetHttpResult {
	/** The HTTP status code, or 0 when no response arrived. */
	status: number
	/** The text after the status code, such as `"Not Found"`; empty when no response arrived. */
	statusText: string
	/** The URL that finally answered, which is not the requested one after a redirect. */
	url: string
	/**
	 * The response headers as `[name, value]` pairs, a header sent twice as two pairs, in no fixed
	 * order. At most 32 pairs, each value cut to 4096 bytes; empty when no response arrived.
	 */
	headers: [string, string][]
	/**
	 * The whole response body; empty when no response arrived. A body over the request's size
	 * limit, 8 MiB at most, fails the request with `SharedSDK.NetErrorCode.TooLarge` instead.
	 */
	body: ArrayBuffer
	/** Empty when the request reached a server; otherwise why it did not. */
	error: string
	/**
	 * 0 when a response arrived, whatever its status; otherwise why none did, as a
	 * `SharedSDK.NetErrorCode` value.
	 */
	errorCode: number
}
