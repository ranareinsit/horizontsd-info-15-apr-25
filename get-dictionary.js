const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    ru: () => import("./dictionaries/ru.json").then((module) => module.default)
};

export function getDictionary(locale) {
  return dictionaries[locale]?.() ?? dictionaries.en();
  
}
