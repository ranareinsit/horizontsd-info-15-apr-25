export const dictionaries = {
  [`en-US`]: () => import("./dictionaries/en.json").then((module) => module.default),
  [`ru-RU`]: () => import("./dictionaries/ru.json").then((module) => module.default)
};

export function getDictionary(locale) {
  return dictionaries[locale]?.() ?? dictionaries[`ru-RU`]();
}
