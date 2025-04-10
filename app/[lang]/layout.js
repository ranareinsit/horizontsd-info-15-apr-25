import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Roboto } from 'next/font/google';
import { theme } from "./theme";
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { I18nProvider } from '../i18n-context'
import ParallaxProvider from '../ParallaxProvider';

const i18n = {
    defaultLocale: "en",
    locales: ["en", "ru"],
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

export default async function RootLayout({ params, children }) {
    const { lang } = await params;
    return (
        <html lang={lang} className={roboto.variable} suppressHydrationWarning>
            <body>
                <InitColorSchemeScript attribute="class" />
                <AppRouterCacheProvider options={{ enableCssLayer: true, key: 'css' }}>
                    <ThemeProvider defaultMode="light" theme={theme}>
                        <CssBaseline />
                        <I18nProvider lang={lang}>
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
