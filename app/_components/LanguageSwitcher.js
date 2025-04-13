import { usePathname, useRouter } from "next/navigation";
import * as React from 'react';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'
import { useI18n } from "../i18n-context"
import { useTheme } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';

export default function LanguageSwitcher() {
  const theme = useTheme();
  const { mode } = useColorScheme();
  const isDark = mode == 'dark'
  const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
  const { lang } = useI18n()
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = () => {
    const newLang = lang === 'en-US' ? 'ru-RU' : 'en-US';
    Cookies.set('language', newLang, { path: '/' });
    window.location.reload();
  };

  return (
    <Button
      variant="contained"
      onClick={handleLanguageChange}
      sx={{
        borderRadius: `20px`,
        fontSize: `0.7rem`,
        color: backgroundColor
      }}
    >{lang.split(`-`)[0].trim()}</Button>
  );
}