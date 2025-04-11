import { styled } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import ScrollGrow from './ScrollGrow';

import {
    Card, CardContent, CardMedia,
    Container, Typography, Button,
    useMediaQuery, Grid
} from '@mui/material';
import Section from "./Section";

const StyledButton = styled(Button)(({ theme }) => ({
    fontWeight: 700,
    textTransform: 'none',
    padding: theme.spacing(1.5, 4),
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    color: `textPrimary`,
    background: `linear-gradient(0deg, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[6],
    }
}));

const GradientCard = styled(Card)(({ theme }) => ({
    background: `linear-gradient(100deg, ${theme.palette.secondary.contrastText} 0%,  ${theme.palette.primary.background} 100% )`,
    backdropFilter: 'blur(8px)',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: theme.shadows[10],
}));

function CTA() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const { dict } = useI18n();
    const content = dict.Home.CallToAction
    return (
        <Container maxWidth="lg" sx={{
            padding: `2rem`,
            display: `flex`,
            justifyContent: `center`,
            alignItems: `center`
        }}>
            <ScrollGrow
                animationDelay={500}
                threshold={0.01}
                timeout={500}
                transformOrigin="0 0 0"
            >
                <GradientCard>
                    <Grid container alignItems="center" spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <CardContent sx={{ p: 6 }}>
                                <Typography
                                    variant="h3"
                                    component="h2"
                                    color={theme.palette.text.primary}
                                    gutterBottom
                                    sx={{
                                        fontWeight: 800,
                                        backgroundImage: `linear-gradient(0deg,${theme.palette.primary.dark}, ${theme.palette.secondary.background})`,
                                        color: `transparent`,
                                        backgroundClip: `text`,
                                    }}
                                >
                                    {content.h3}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    color={theme.palette.text.secprimaryondary}
                                    sx={{
                                        mb: 4, fontSize: '1.1rem',
                                        backgroundImage: `linear-gradient(0deg,${theme.palette.primary.dark}, ${theme.palette.secondary.background})`,
                                        color: `transparent`,
                                        backgroundClip: `text`,

                                    }}
                                >
                                    {content.body1}
                                </Typography>
                                <Stack
                                    direction={isMobile ? 'column' : 'row'}
                                    spacing={2}
                                >
                                    <StyledButton
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        {content.StyledButton[0]}
                                    </StyledButton>
                                    <StyledButton
                                        variant="outlined"
                                        color={theme.palette.text.primary}
                                        size="large"
                                    >
                                        {content.StyledButton[1]}
                                    </StyledButton>
                                </Stack>
                            </CardContent>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }} >
                            <CardMedia
                                component="img"
                                image={mode === 'dark'
                                    ? '/images/short_logo_black.webp'
                                    : '/images/short_logo_white.webp'}
                                alt="CTA Illustration"
                                sx={{
                                    width: `100%`,
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                        </Grid>
                    </Grid>
                </GradientCard>
            </ScrollGrow>
        </Container>
    );
}

export default function CallToAction(props) {
    return (
        <Section id="call-to-action" sx={{
            backgroundImage: `url(/images/background-3.webp)`,
            minHeight: '50vh'
        }}>
            <CTA />
        </Section>
    );
}