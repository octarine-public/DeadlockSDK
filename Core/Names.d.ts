// AUTO-GENERATED - do not edit.
/**
 * A name to show when nothing has a string for it: the class prefix a hero or an item carries
 * is dropped, the underscores become spaces and the first letter is raised.
 */
declare function prettyName(name: string): string
/**
 * `name` as `MenuSDK.Localization.Localize` gives it in the menu's language. Where no string
 * exists for it: `fallback` localized, or without one `name` made readable (`hero_haze` reads
 * `Haze`).
 */
declare function displayName(name: string, fallback?: string): string
/** A hero's name for display: {@link displayName} with no fallback. */
declare function heroDisplayName(name: string): string
