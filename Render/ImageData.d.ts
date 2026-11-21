// AUTO-GENERATED - do not edit.
/** Paths to the game's Panorama images and to the images this SDK ships. */
declare namespace ImageData {
	/**
	 * Paths to the game's Panorama images and to the images this SDK ships; {@link Paths} is the one
	 * instance.
	 */
	class BaseImageData {
		/** This SDK's package path; the images it ships sit under {@link WrapperImages}. */
		public readonly Wrapper: string
		/** The folder of the images this SDK ships: {@link Wrapper}`/scripts_files/images`. */
		public readonly WrapperImages: string
		/** The game's Panorama image folder, `panorama/images`. */
		public readonly Images = "panorama/images"
		/** The folder `panorama/images/heroes` of the game's images. */
		public readonly Hero: string
		/** The folder `panorama/images/heroes/icons` of the game's images. */
		public readonly HeroIcons: string
		/** The folder `panorama/images/items` of the game's images. */
		public readonly ItemIcons: string
		/** The folder `panorama/images/spellicons` of the game's images. */
		public readonly AbilityIcons: string
		/** Paths of images this SDK ships under {@link WrapperImages}, by name. */
		public readonly Icons: {
			ult_ready_blind: string
			arrow_gold_dif_blind: string
			bg_deathsummary: string
			icon_svg_creep: string
			icon_svg_tower: string
			icon_svg_courier: string
			icon_svg_lock: string
			icon_svg_roashan: string
			icon_svg_weather_effects: string
			icon_svg_health: string
			icon_svg_level: string
			icon_svg_charges: string
			icon_svg_duration: string
			icon_svg_hamburger: string
			icon_svg_format_time: string
			icon_svg_fow_time: string
			icon_svg_keyboard: string
			icon_svg_other: string
			icon_close_cross_eye_hidden: string
			chat_arrow_grow: string
			chat_arrow_down: string
			icon_svg_alien: string
			icon_svg_time_fast: string
			icon_svg_tree_alt: string
			icon_svg_teddy_bear: string
		}
		/**
		 * The game's HUD icon of a powerup, by the name of its pickup: `gun_powerup_pickup`,
		 * `survival_powerup_pickup`, `movement_powerup_pickup` or `casting_powerup_pickup`. Any other
		 * name gives a path with an empty file name.
		 */
		public GetRuneImagePath(name: string): string
	}
	/** The image paths: the one {@link BaseImageData}. */
	const Paths: BaseImageData
}
