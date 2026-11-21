// AUTO-GENERATED - do not edit.
/**
 * The throw of Baba's Brew: while she brews, it holds the brew's slot (`IsTaken`), and primary
 * fire throws the pot (`Throw`). The pot is a bullet under gravity that passes through heroes
 * and bursts where its ball meets the world (`WorldRadius`). It sets out on the camera ray where
 * the ray passes nearest Baba's hand (`ThrowStart`) and flies `Elevation` degrees above the view
 * at `Speed`, falling at `Gravity`. Thrown at herself with the alt-cast, it bursts at once at her
 * feet, `ability_baba_hexing_brew.SelfCastOffset` ahead.
 */
declare class ability_baba_hexing_brew_throw extends Ability {
	/** The view of a throw that lands on the point `SolveThrow` was last asked for. */
	public readonly ThrowAngles: QAngle
	/** Seconds that throw flies before it bursts. */
	public get ThrowTime(): number
	/** Whether the throw stands in the brew's slot: Baba brews and the pot is ready. */
	public get IsTaken(): boolean
	/** How fast the pot leaves Baba's hand, in world units a second. */
	public get Speed(): number
	/** The pull on the pot in flight, in world units a second squared. */
	public get Gravity(): number
	/** Degrees above the view the pot leaves at. */
	public get Elevation(): number
	/** How far from its centre the pot's ball meets the world, which bursts it. */
	public get WorldRadius(): number
	/**
	 * Where a throw along `angles` from `camera` sets out, written into `out`: the camera ray's
	 * point nearest Baba's hand.
	 */
	public ThrowStart(camera: Vector3, angles: QAngle, out: Vector3): Vector3
	/**
	 * Where a throw along `angles` from `camera` bursts on flat ground at `height`, written into
	 * `out`; the seconds it flies there, `NaN` where it never comes down to it.
	 */
	public Landing(camera: Vector3, angles: QAngle, height: number, out: Vector3): number
	/**
	 * Where a throw along `angles` from `camera` meets the solid world, written into `out`: its
	 * arc traced chord by chord from where it sets out to the first wall or floor in its way -
	 * the ball meets it up to `WorldRadius` sooner. The seconds it flies there; `NaN` where
	 * nothing stops it within three seconds, or without the tracer, which answers only inside
	 * `CreateMove`. A chord the tracer answers with nothing is clear, as the game's tracer
	 * answers a ray that hits nothing.
	 */
	public Burst(camera: Vector3, angles: QAngle, out: Vector3): number
	/**
	 * Works out the throw from `camera` that bursts the pot on flat ground at `to`, along its low
	 * arc, into `ThrowAngles` and `ThrowTime`. The view's yaw is the camera's toward `to`: the pot
	 * sets out on the camera ray and keeps its heading. Whether any throw reaches it.
	 */
	public SolveThrow(camera: Vector3, to: Vector3): boolean
	/**
	 * Throws the brewed pot with primary fire along the view, or at Baba's own feet with alt-cast
	 * held when `atSelf`, and follows the press; call it from a `CreateMove` listener. Refused
	 * unless the pot is ready (`IsTaken`) and while the last press still holds the button. Returns
	 * whether it pressed.
	 */
	public Throw(cmd: UserCmd, atSelf?: boolean): boolean
}
