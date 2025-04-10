import { styled } from '@mui/material/styles';
import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Stack from '@mui/material/Stack';
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
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: theme.shadows[6]
    }
}));

const GradientCard = styled(Card)(({ theme }) => ({
    background: 'linear-gradient(135deg, rgba(78, 155, 158, 0.9) 0%, rgba(27, 85, 95, 0.8) 100%)',
    backdropFilter: 'blur(8px)',
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: theme.shadows[10],
    border: `1px solid ${theme.palette.divider}`
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
            <GradientCard>
                <Grid container alignItems="center" spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <CardContent sx={{ p: 6 }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                color={theme.palette.text.primary}
                                gutterBottom
                                sx={{ fontWeight: 800 }}
                            >
                                {content.h3}
                            </Typography>
                            <Typography
                                variant="body1"
                                color={theme.palette.text.secprimaryondary}
                                sx={{ mb: 4, fontSize: '1.1rem' }}
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
                                ? '/images/short_logo_black.png'
                                : '/images/short_logo_white.png'}
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
        </Container>
    );
}

export default function CallToAction(props) {
    return (
        <Section id="call-to-action" sx={{ minHeight: '50vh' }}>
            <CTA />
        </Section>
    );
}