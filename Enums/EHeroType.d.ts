// AUTO-GENERATED - do not edit.
/**
 * A hero's role, as its vdata `m_eHeroType` names it (`ECitadelHeroType_Marksman`, …).
 * `UnitStore.HeroType` holds one, `None` where the data names no role listed here.
 */
declare enum EHeroType {
	None = 0,
	Marksman = 1,
	Assassin = 2,
	Brawler = 3,
	Mystic = 4,
	Healer = 5
}
/**
 * The {@link EHeroType} each name in hero vdata `m_eHeroType` stands for
 * (`ECitadelHeroType_Marksman` is `Marksman`).
 */
declare const HeroTypeByName: Map<string, EHeroType>
/** The English name of each hero role; `"Other"` for `None`. */
declare const HeroTypeLabel: Map<EHeroType, string>
/**
 * The icon of each hero role, as a path inside this SDK's `scripts_files/`
 * (`images/icons/scope.svg` for Marksman); `None` has `images/icons/other.svg`.
 */
declare const HeroTypeIcon: Map<EHeroType, string>
