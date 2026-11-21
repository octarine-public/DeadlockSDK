// AUTO-GENERATED - do not edit.
/** What shows another hero's cast to this client. */
declare enum ECastSignal {
	/** A modifier the ability applies, matched by its name and the ability it names */
	Modifier = 0,
	/** The removal of such a modifier */
	ModifierEnd = 1,
	/** A sound event the hero plays */
	Sound = 2,
	/** Bullets the ability fires */
	Bullet = 3,
	/** Damage the ability deals */
	Damage = 4,
	/** A particle system created on the hero, matched by its path */
	Particle = 5,
	/** The hero selecting the ability, for one that is selected the moment it is cast */
	Selected = 6,
	/**
	 * An animation clip the hero starts playing, matched by its file name: the cast clip a wind-up
	 * opens with, for a wind-up neither a sound nor a particle marks the start of
	 */
	Clip = 7
}
