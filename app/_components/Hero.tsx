import * as React from "react";
import { useColorScheme } from "@mui/material/styles";
import { useI18n } from "../_providers/I18nProvider";
import { useTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Container, Typography, useMediaQuery } from "@mui/material";
import { bebasNeue } from "../../fonts";
import Section from "./Section";

import "./gradient-text.css";

import { WebGLBackground } from "./Wow";

interface HeroProps {
    fullsize?: boolean;
}

interface HeroContent {
    slogan: string;
}

function Mobile() {
    const { dict } = useI18n();
    const { mode } = useColorScheme();

    if (!dict || !dict.Home || !dict.Home.Hero) {
        return null; 
    }

    const content: HeroContent = dict.Home.Hero;
    const isDark = mode === "dark";
    const baseColor = isDark ? "var(--mui-palette-secondary-main)" : "var(--mui-palette-secondary-main)";
    const accentColor = isDark ? "var(--mui-palette-secondary-light)" : "var(--mui-palette-primary-main)";
    return (
        <Stack spacing={1}>
            <Stack spacing={1} direction="column">
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        color: baseColor
                    }}
                >
                    Horizon™
                </Typography>
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        color: accentColor
                    }}
                >
                    Time Series Data
                </Typography>
            </Stack>

            <Typography
                variant="h4"
                sx={{
                    fontFamily: bebasNeue.style.fontFamily,
                    textAlign: "center",
                    color: baseColor
                }}
            >
                {content.slogan}
            </Typography>
        </Stack>
    );
}

function Desktop() {
    const { mode } = useColorScheme();
    const { dict } = useI18n();

    if (!dict || !dict.Home || !dict.Home.Hero) {
        return null; 
    }

    const content: HeroContent = dict.Home.Hero;
    const isDark = mode === "dark";
    const baseColor = isDark ? "var(--mui-palette-secondary-main)" : "var(--mui-palette-secondary-main)";
    const accentColor = isDark ? "var(--mui-palette-secondary-light)" : "var(--mui-palette-primary-main)";

    return (
        <Stack direction="column">
            <Stack spacing={3} direction="row">
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        color: baseColor
                    }}
                >
                    Horizon™
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        color: accentColor
                    }}
                >
                    Time Series Data
                </Typography>
            </Stack>
            <Stack
                direction="column"
                sx={{
                    justifyContent: "center"
                }}
            >
                <Typography
                    variant="h4"
                    className="gradient-text"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        textAlign: "center",
                        color: baseColor
                    }}
                >
                    {content.slogan}
                </Typography>
            </Stack>
        </Stack>
    );
}

function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Container
            sx={{
                position: "relative",
                top: "50%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {isMobile ? <Mobile /> : <Desktop />}
        </Container>
    );
}

export default function Hero({ fullsize = false }: HeroProps) {
    const { mode } = useColorScheme();
    const isDark = mode === "dark";

    return (
        <Section
            id="hero"
            sx={{
                alignItems: "center",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overflow: "hidden",
                position: "relative",
                width: "100vw",
                zIndex: 2,
                userSelect: "none",
                maxHeight: "1080px",
                minHeight: "30vh",
                height: fullsize ? "100vh" : "50vh"
            }}
        >
            <Content />
            <WebGLBackground color={isDark ? [0.1, 0.5, 0.9] : [0.1, 0.3, 1.0]} />
        </Section>
    );
}