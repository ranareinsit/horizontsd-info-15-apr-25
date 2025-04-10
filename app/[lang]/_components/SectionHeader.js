"use client"
import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import { Box, Container, useMediaQuery, Grid } from '@mui/material'

import { useParallax } from "react-scroll-parallax";

export default function Header(props) {
    const theme = useTheme();
    const content = useI18n()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { mode, setMode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const { ref } = useParallax({ scale: [0.8, 1], opacity: [0.3, 1] })

    return (
        <Box sx={{
            display: `flex`,
            width: `100%`,
            minHeight: `180px`,
            background: `linear-gradient(0deg, transparent, ${backgroundColor})`,
            justifyContent: `start`,
            alignItems: `center`,
            flexDirection: `column`,
            paddingTop: `20px`,
            textTransform: `uppercase`,
        }}><Container maxWidth="xl" sx={{
            display: `flex`,
            justifyContent: `center`,
        }}><Grid
            ref={ref}
            container
            direction="column"
            spacing={1}
            alignContent={"center"}
            justifyContent="center"
            sx={{
                display: "flex",
            }}>
                    {props.children}
                </Grid>
            </Container >
        </Box >
    )
}
