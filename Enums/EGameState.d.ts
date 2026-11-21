// AUTO-GENERATED - do not edit.
/**
 * Where a match stands, from waiting for players through hero selection and play to the
 * end. `CGameRules.GameState` holds one, networked as `m_eGameState`.
 */
declare const enum EGameState {
	Invalid = 0,
	Init = 1,
	WaitingForPlayersToJoin = 2,
	HeroSelection = 3,
	MatchIntro = 4,
	WaitForMapToLoad = 5,
	PreGameWait = 6,
	GameInProgress = 7,
	PostGame = 8,
	PostGame_PlayOfTheGame = 9,
	Abandoned = 10,
	End = 11
}
