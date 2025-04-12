import { bookBookshelf } from "./categoryMapData";
import { CategoryFromBookshelfData } from "./types";

export const CATEGORY_MAP = (
  locale: (key: string) => string
): Record<string, CategoryFromBookshelfData> => ({
  languageLiteratureBooks: {
    title: locale("language_literature_books.title"),
    description: locale("language_literature_books.description"),
    bookshelf: bookBookshelf.languageLiteratureBookshelf,
  },
  fictionBooks: {
    title: locale("fiction_books.title"),
    description: locale("fiction_books.description"),
    bookshelf: bookBookshelf.fictionBookshelf,
  },
  otherBooks: {
    title: locale("other_books.title"),
    description: locale("other_books.description"),
    bookshelf: bookBookshelf.otherBookshelf,
  },
  religionSpiritualityBooks: {
    title: locale("religion_spirituality_books.title"),
    description: locale("religion_spirituality_books.description"),
    bookshelf: bookBookshelf.religionSpiritualityBookshelf,
  },
  biographyMemoirBooks: {
    title: locale("biography_memoir_books.title"),
    description: locale("biography_memoir_books.description"),
    bookshelf: bookBookshelf.biographyMemoirBookshelf,
  },
  politicsSocietyBooks: {
    title: locale("politics_society_books.title"),
    description: locale("politics_society_books.description"),
    bookshelf: bookBookshelf.politicsSocietyBookshelf,
  },
  scienceNatureBooks: {
    title: locale("science_nature_books.title"),
    description: locale("science_nature_books.description"),
    bookshelf: bookBookshelf.scienceNatureBookshelf,
  },
  philosophyBooks: {
    title: locale("philosophy_books.title"),
    description: locale("philosophy_books.description"),
    bookshelf: bookBookshelf.philosophyBookshelf,
  },
  geographyPlacesBooks: {
    title: locale("geography_places_books.title"),
    description: locale("geography_places_books.description"),
    bookshelf: bookBookshelf.geographyPlacesBookshelf,
  },
  historyBooks: {
    title: locale("history_books.title"),
    description: locale("history_books.description"),
    bookshelf: bookBookshelf.historyBookshelf,
  },
  artPhotographyBooks: {
    title: locale("art_photography_books.title"),
    description: locale("art_photography_books.description"),
    bookshelf: bookBookshelf.artPhotographyBookshelf,
  },
  travelBooks: {
    title: locale("travel_books.title"),
    description: locale("travel_books.description"),
    bookshelf: bookBookshelf.travelBookshelf,
  },
  militaryWarBooks: {
    title: locale("military_war_books.title"),
    description: locale("military_war_books.description"),
    bookshelf: bookBookshelf.militaryWarBookshelf,
  },
  mythologyFolkloreBooks: {
    title: locale("mythology_folklore_books.title"),
    description: locale("mythology_folklore_books.description"),
    bookshelf: bookBookshelf.mythologyFolkloreBookshelf,
  },
  computersTechnologyBooks: {
    title: locale("computers_technology_books.title"),
    description: locale("computers_technology_books.description"),
    bookshelf: bookBookshelf.computersTechnologyBookshelf,
  },
  selfHelpPsychologyBooks: {
    title: locale("self_help_psychology_books.title"),
    description: locale("self_help_psychology_books.description"),
    bookshelf: bookBookshelf.selfHelpPsychologyBookshelf,
  },
  childrenTeensBooks: {
    title: locale("children_teens_books.title"),
    description: locale("children_teens_books.description"),
    bookshelf: bookBookshelf.childrenTeensBookshelf,
  },
  educationBooks: {
    title: locale("education_books.title"),
    description: locale("education_books.description"),
    bookshelf: bookBookshelf.educationBookshelf,
  },
  businessEconomicsBooks: {
    title: locale("business_economics_books.title"),
    description: locale("business_economics_books.description"),
    bookshelf: bookBookshelf.businessEconomicsBookshelf,
  },
  lawLegalBooks: {
    title: locale("law_legal_books.title"),
    description: locale("law_legal_books.description"),
    bookshelf: bookBookshelf.lawLegalBookshelf,
  },
  medicalHealthBooks: {
    title: locale("medical_health_books.title"),
    description: locale("medical_health_books.description"),
    bookshelf: bookBookshelf.medicalHealthBookshelf,
  },
  mathematicsBooks: {
    title: locale("mathematics_books.title"),
    description: locale("mathematics_books.description"),
    bookshelf: bookBookshelf.mathematicsBookshelf,
  },
});
