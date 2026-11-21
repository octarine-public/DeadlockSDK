// AUTO-GENERATED - do not edit.
declare namespace MenuSDK {
	/**
	 * The frame load panel: a card the host draws with a line per source of delay, the bars of the
	 * game frames of the window and the window's averages beside them, set up from Settings, Frame
	 * Load. The page only says whether it is shown, what it shows and how.
	 */
	interface CFrameLoad {
		/**
		 * Adds the menu page once. A release build, and a host that draws no such panel, get none.
		 */
		Setup(): void
	}
	/** The menu's frame load page, which the menu sets up at startup on a debug host. */
	const FrameLoad: CFrameLoad
}
