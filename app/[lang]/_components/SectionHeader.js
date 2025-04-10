// components/Header.jsx
"use client";
import { useColorScheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Box, Container, Grid } from '@mui/material';
import ScrollGrow from './ScrollGrow';

export default function Header(props) {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark';
    const backgroundColor = isDark ? theme.palette.primary.background : theme.palette.secondary.light;

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
        }}>
            <ScrollGrow
                animationDelay={500}
                threshold={0.01}
                timeout={500}
                transformOrigin="0 0 0"
            >
                <Container maxWidth="xl" sx={{
                    display: `flex`,
                    justifyContent: `center`,
                }}>
                    <Grid
                        container
                        direction="column"
                        spacing={1}
                        alignContent={"center"}
                        justifyContent="center"
                        sx={{ display: "flex" }}
                    >
                        {props.children}
                    </Grid>
                </Container>
            </ScrollGrow>
        </Box>
    );
}