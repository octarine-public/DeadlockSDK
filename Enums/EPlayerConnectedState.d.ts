// AUTO-GENERATED - do not edit.
/**
 * How a player's client stands with the server (connected, connecting, reconnecting, …);
 * `Player.Connected` holds one, networked as `m_iConnected`.
 */
declare const enum EPlayerConnectedState {
	NeverConnected = -1,
	Connected = 0,
	Connecting = 1,
	Reconnecting = 2,
	Disconnecting = 3,
	Disconnected = 4,
	Reserved = 5
}
