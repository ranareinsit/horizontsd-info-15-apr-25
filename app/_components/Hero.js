import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { useState, useCallback } from 'react';
import Stack from '@mui/material/Stack';
import { Container, Typography, useMediaQuery } from '@mui/material'
import { bebasNeue } from "../../fonts"
import Section from "./Section"
import { Parallax, useParallax } from "react-scroll-parallax";

function Mobile() {
    const { dict } = useI18n()
    const content = dict.Home.Hero
    return (
        <Stack spacing={1}>
            <Stack spacing={1} direction={"row"} >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                    }}
                >Horizon</Typography>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                    }}
                >Time Series Data
                </Typography>
            </Stack>

            <Typography
                variant="body1"
                sx={{ fontFamily: bebasNeue.style.fontFamily, }}
            >{content.slogan}
            </Typography>
        </Stack>
    )
}

function Desktop() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const baseColor = isDark ? theme.palette.primary.light : theme.palette.primary.dark
    const accentColor = isDark ? theme.palette.primary.dark : theme.palette.primary.light
    const { dict } = useI18n()
    const content = dict.Home.Hero
    return (
        <Stack direction={"column"}>
            <Stack spacing={3} direction={"row"}>
                <Typography variant="h1"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        color: baseColor
                    }}
                >Horizon</Typography>
                <Typography variant="h1"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        color: accentColor
                    }}
                >Time Series Data</Typography>
            </Stack>
            <Stack direction={"column"} position={"center"}>
                <Typography variant="h4"
                    sx={{
                        fontFamily: bebasNeue.style.fontFamily,
                        textAlign: 'center',
                        color: baseColor
                    }}>{content.slogan}</Typography>
            </Stack>
        </Stack>
    )
}

function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: `center`,
            }}
        >{isMobile ? <Mobile /> : <Desktop />}
        </Container>
    )
}

export default function Hero(props) {
    const { background } = props;
    const { mode } = useColorScheme();
    const isDark = mode === 'dark';
    const [bgAlpha, setBgAlpha] = useState(1);
    const handleProgressChange = useCallback(({ progress }) => { setBgAlpha(parseFloat(progress) - 0.3); }, []);
    const { ref } = useParallax({ onChange: handleProgressChange });
    const baseColor = isDark ? `18,18,18` : `255,255,255`
    return (
        <Section id="hero" ref={ref} sx={{
            alignItems: 'center',
            backgroundImage: `linear-gradient(rgba(${baseColor}, ${bgAlpha}), rgba(${baseColor}, ${bgAlpha})), url("${background}")`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            width: '100vw',
            zIndex: 2,
            userSelect: 'none',
            maxHeight: '1080px',
            minHeight: `30vh`,
            height: props?.fullsize ? '100vh' : `30vh`
        }}>
            <Content />
        </Section>
    );
};
