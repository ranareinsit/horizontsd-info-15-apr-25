import { usePathname } from "next/navigation";
import * as React from 'react';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'
import { Link as NextLink } from "next/link";
import { useI18n } from "../../i18n-context"
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material'
import { useColorScheme } from '@mui/material/styles';

export default function LanguageSwitcher() {
  const theme = useTheme();
  const content = useI18n()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { mode, setMode } = useColorScheme();
  const isDark = mode == 'dark'
  const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light

  const { lang } = useI18n()
  const pathname = usePathname();
  const redirectedPathname = (locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    let server_lang = Cookies.get('language');
    if (server_lang != lang) { Cookies.set('language', lang) }
    return segments.join("/");
  };
  return (
    <Button
      variant="contained"
      component={NextLink}
      href={redirectedPathname(lang == 'en' ? 'ru' : 'en')}
      sx={{
        borderRadius: `20px`,
        fontSize: `0.7rem`,
        color: backgroundColor
      }}
    >{lang}</Button>
  );
}