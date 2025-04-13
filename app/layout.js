import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { I18nProvider } from './i18n-context'
import ParallaxProvider from './ParallaxProvider';
import Negotiator from "negotiator";
import { cookies } from 'next/headers'
import { headers } from 'next/headers'
import { dictionaries } from '../get-dictionary'

const i18n = {
    defaultLocale: "ru",
    locales: Object.keys(dictionaries),
};

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
});

export const metadata = {
    title: "Horizon",
    description: "Time Series Data",
};

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

async function getPreferredLanguages() {
    const headersList = await headers();
    if (!headersList.has('accept-language')) { return i18n.defaultLocale; }
    const acceptLanguage = headersList.get('accept-language');
    const negotiator = new Negotiator({ headers: { 'accept-language': acceptLanguage, } });
    return negotiator.languages();
}

async function getPreferredLanguage() {
    let lang = i18n.defaultLocale
    const headersList = await headers();
    if (!headersList.has('accept-language')) { return i18n.defaultLocale; }
    const acceptLanguage = headersList.get('accept-language');
    const preferredLanguages = await getPreferredLanguages();
    let shouldAssertLocale = i18n.locales.some(locale => preferredLanguages.includes(locale))
    if (shouldAssertLocale) {
        lang = new Negotiator({
            headers: { 'accept-language': acceptLanguage },
        }).language(i18n.locales);
    }
    return lang
}


export default async function RootLayout(props) {
    const { children } = props
    const cookieStore = await cookies()
    let preferredLanguage = await getPreferredLanguage();
    if (cookieStore.has('language')) {
        let next = cookieStore.get('language').value
        preferredLanguage = next
    }
    return (
        <html lang={preferredLanguage} className={roboto.variable} suppressHydrationWarning>
            <body>
                <InitColorSchemeScript attribute="class" />
                <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
                    <ThemeProvider defaultMode="light" theme={theme}>
                        <CssBaseline />
                        <I18nProvider lang={preferredLanguage}>
                            <ParallaxProvider>
                                {children}
                            </ParallaxProvider>
                        </I18nProvider>
                    </ThemeProvider>
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}