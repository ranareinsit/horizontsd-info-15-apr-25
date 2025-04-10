import * as React from 'react';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material'
import { styled, useColorScheme, useTheme, Theme } from '@mui/material/styles';

export default function Section(props) {
    const theme = useTheme();
    const { mode, setMode } = useColorScheme();
    const isDark = mode == 'dark'
    const gradient = isDark
        ? `radial-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 1));`
        : `radial-gradient(rgba(255, 255, 255, 0.1),rgba(255, 255, 255, 0.5));`
    return (
        <>
            <Box
                component={"section"}
                id={props?.id}
                ref={props?.ref}
                sx={[
                    {
                        alignItems: `center`,
                        display: `flex`,
                        flexDirection: `column`,
                        justifyContent: `start`,
                        overflow: 'hidden',
                        position: 'relative',
                        width: `100vw`,
                        zIndex: `2`,
                        userSelect: `none`,
                        minHeight: `100vh`,
                        backgroundSize: `cover`
                    },
                    {
                        ...props?.sx
                    }
                ]}>
                <Box sx={{
                    display: `flex`,
                    flexDirection: `column`,
                    width: `100%`,
                    height: `100%`,
                    background: gradient,
                    flex: `auto`,
                    justifyContent: `center`,
                    flexFlow: `wrap`
                }}>{props.children}</Box>
            </Box>
            <Divider />
        </>
    )
}