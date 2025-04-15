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
import Script from "next/script";

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
    title: "Horizon – Временные ряды и прогнозы",
    description: "Инструмент для анализа и прогнозирования временных рядов. Time series forecasting and analysis tool.",
    keywords: [
        // Английские ключевые слова
        "time series analysis",
        "time series forecasting",
        "forecasting time series",
        "seasonal decomposition of time series",
        "trend analysis in time series",
        "seasonality detection in time series",
        "temporal patterns detection",
        "LSTM for time series",
        "ARIMA time series models",
        "SARIMA models",
        "Prophet time series",
        "predictive models for time series",
        "demand forecasting models",
        "time series visualization",
        "multivariate time series analysis",
        "univariate time series models",
        "time series clustering",
        "feature engineering for time series",
        "stationarity testing",
        "time series components analysis",
        "predictive analytics",
        "demand forecasting",
        "business forecasting",
        "sales forecasting",
        "inventory forecasting",
        "financial time series forecasting",
        "capacity planning",
        "revenue forecasting",
        "forecasting in supply chain",

        // Русские ключевые слова
        "анализ временных рядов",
        "прогнозирование временных рядов",
        "модели временных рядов",
        "сезонная декомпозиция временных рядов",
        "трендовый анализ временных рядов",
        "выявление сезонности во временных рядах",
        "выявление закономерностей во временных рядах",
        "LSTM для временных рядов",
        "модели ARIMA",
        "SARIMA модели",
        "Prophet для временных рядов",
        "предиктивные модели временных рядов",
        "прогнозирование спроса по временным рядам",
        "визуализация временных рядов",
        "многомерные временные ряды",
        "одномерные временные ряды",
        "кластеризация временных рядов",
        "инженерия признаков для временных рядов",
        "тестирование стационарности",
        "анализ компонент временных рядов",
        "предиктивная аналитика",
        "прогнозирование спроса",
        "бизнес-прогнозирование",
        "прогнозирование продаж",
        "прогнозирование запасов",
        "финансовое прогнозирование",
        "планирование мощностей",
        "прогнозирование выручки",
        "прогнозирование в цепочке поставок"
    ],
    authors: [{ name: "Horizon Team", url: "https://example.com" }],
    openGraph: {
        title: "Horizon — Прогнозирование временных рядов",
        description: "Аналитика и прогноз временных рядов с помощью машинного обучения. Time series forecasting made easy.",
        url: "https://yourdomain.com",
        siteName: "Horizon",
        locale: "ru_RU",
        type: "website",
    },
    robots: "index, follow",
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
    <head>
    {/* Yandex.Metrika Script */}
    <Script
    id="yandex-metrika"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
        __html: `
                            (function(m,e,t,r,i,k,a){
                                m[i]=m[i]||function(){
                                    (m[i].a=m[i].a||[]).push(arguments)
                                };
                                m[i].l=1*new Date();
                                for (var j = 0; j < document.scripts.length; j++) {
                                    if (document.scripts[j].src === r) { return; }
                                }
                                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
                            })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                            ym(101065655, "init", {
                                clickmap:true,
                                trackLinks:true,
                                accurateTrackBounce:true,
                                webvisor:true
                            });
                        `
    }}
    />
    </head>
    <body>
    {/* Yandex noscript fallback */}
    <noscript>
    <div>
    <img src="https://mc.yandex.ru/watch/101065655" style={{ position: 'absolute', left: '-9999px' }} alt="" />
    </div>
    </noscript>

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
