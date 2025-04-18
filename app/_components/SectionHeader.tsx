"use client";
import React, { ReactNode } from "react";
import { Box, Container, Grid, SxProps } from "@mui/material";
import ScrollGrow from "./ScrollGrow";
import "./card-gradient.css";

interface HeaderProps {
    children: ReactNode;
    sx?: SxProps;
}

export default function Header({ children, sx }: HeaderProps) {
    return (
        <Box
            className="section-header"
            sx={{
                display: 'flex',
                width: '100%',
                minHeight: '10rem',
                background: 'linear-gradient(45deg, var(--mui-palette-secondary-main), var(--mui-palette-primary-main))',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                textTransform: 'uppercase',
                ...sx
            }}
        >
            <ScrollGrow
                animationDelay={200}
                threshold={0.01}
                timeout={200}
                transformOrigin="0 0 0"
            >
                <Container 
                    maxWidth="xl" 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Grid
                        container
                        direction="column"
                        spacing={1}
                        alignContent="center"
                        justifyContent="center"
                        sx={{ display: "flex" }}
                        color="primary.light"
                    >
                        {children}
                    </Grid>
                </Container>
            </ScrollGrow>
        </Box>
    );
}
