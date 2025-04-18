import * as React from "react";
import Button from "@mui/material/Button";
import Cookies from "js-cookie"
import { useI18n } from "../_providers/I18nProvider"

export default function LanguageSwitcher() {
  const { lang } = useI18n()

  const handleLanguageChange = () => {
    const newLang = lang === "en-US" ? "ru-RU" : "en-US";
    Cookies.set("language", newLang, { path: "/" });
    window.location.reload();
  };

  return (
    <Button
      variant="contained"
      onClick={handleLanguageChange}
      sx={{
        borderRadius: `20px`,
        fontSize: `0.7rem`,
        color: `var(--mui-palette-primary-light)`,
        background: `linear-gradient(90deg, var(--mui-palette-secondary-dark), var(--mui-palette-primary-contrastText))`
      }}
    >{lang.split(`-`)[0].trim()}</Button>
  );
}