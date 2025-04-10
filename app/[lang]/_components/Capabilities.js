import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import {
    Card, CardContent, Box, Container, Typography, useMediaQuery, Grid, Link, Button, Stack} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './swiper.css'
import SectionHeader from "./SectionHeader"
import Section from "./Section"
import LabelIcon from '@mui/icons-material/Label';

function SliderMobile() {
    const theme = useTheme();
    const { dict } = useI18n()
    const content = dict.Home.Capabilities.Content
    return (
        <Grid
            container direction="column" sx={{
                display: { xs: 'flex', sm: "flex", md: "none" },
                width: `100%`,
            }}
        >
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    enabled: true
                }}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="swiper-slider"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    width: `100%`,
                    height: `80vh`,
                    margin: `2rem 0`,
                }}>
                {content.map((item, i) => (
                    <SwiperSlide key={i} sx={{}}>
                        <Card sx={{
                            width: `80%`,
                            height: `80%`,
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: `1rem`,
                            display: `grid`,
                            justifySelf: `center`,
                            alignSelf: `center`
                        }}>
                            <CardContent sx={{
                                borderRadius: `1rem`,
                            }}>
                                <div>
                                    <Stack direction={"row"} alignItems={"center"}>
                                        <LabelIcon sx={{ marginRight: `1rem` }} />
                                        <Typography variant="button" component="div" >
                                            {item.title}
                                        </Typography>
                                    </Stack>
                                    {item.description.map((e, i) => {
                                        return (
                                            <Typography key={i} variant="body2" gutterBottom >
                                                {e}
                                            </Typography>
                                        )
                                    })}
                                </div>
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    )
}

function Desktop() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const { dict } = useI18n()
    const content = dict.Home.Capabilities.Content
    return (
        <Grid container padding={2}>
            {content.map((item, index) => (
                <Grid size={6} key={index} padding={2}>
                    <Stack
                        direction="column"
                        component={Card}
                        useFlexGap
                        sx={{
                            color: 'inherit',
                            p: 3,
                            height: `100%`,
                            background: backgroundColor
                        }}
                    >
                        <div>
                            <Stack direction={"row"} alignItems={"center"}>
                                <LabelIcon sx={{ marginRight: `1rem` }} />
                                <Typography variant="button" component="div" >
                                    {item.title}
                                </Typography>
                            </Stack>
                            {item.description.map((e, i) => {
                                return (
                                    <Typography key={i} variant="body2" gutterBottom >
                                        {e}
                                    </Typography>
                                )
                            })}
                        </div>
                    </Stack>
                </Grid>
            ))}
        </Grid>
    );
}
function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        isMobile ? <SliderMobile /> : <Desktop />
    )
}

function Footer() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const { dict } = useI18n()
    const content = dict.Home.Capabilities.Footer
    return (
        <Box sx={{
            display: `flex`,
            width: `100%`,
            minHeight: `180px`,
            background: `linear-gradient(0deg, ${backgroundColor}, transparent)`,
            justifyContent: `end`,
            alignItems: `center`,
            flexDirection: `column`,
            paddingBottom: `20px`,
            flex: `auto`

        }}>
            <Container maxWidth="xl" sx={{
                display: `flex`,
                justifyContent: `center`,
                flexDirection: `column`,
            }}>
                <Grid container direction="column" spacing={1} alignContent={"center"}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: `center`
                    }}>
                    < Typography variant="body2" gutterBottom sx={{
                        textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                        textAlign: `center`,
                    }}>{content.header}</Typography>
                    < Typography variant="body2" gutterBottom sx={{
                        textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                        textAlign: `center`,
                    }}>{content.description}</Typography>
                    <Stack direction={"row"} sx={{ width: { sx: `60%`, md: "80%" }, justifyContent: `space-between` }}>
                        {content.content.map((e, i) => {
                            return (
                                <Typography key={i} variant="body2" gutterBottom sx={{
                                    textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                                    textAlign: `center`,
                                }}>{e}</Typography>
                            )
                        })}
                    </Stack>
                    <Link href={"/research"}>
                        <Button variant="contained">{content.Button}</Button>
                    </Link>
                </Grid>

            </Container >
        </Box>
    )
}

export default function Capabilities() {
    const { dict } = useI18n()
    const content = dict.Home.Capabilities.SectionHeader
    return (
        <Section id="capabilities" sx={{ justifyContent: `space-between` }}>
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: `0px 1px 1px gray`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{content.h4}</Typography>
                <Typography variant="body2" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                    textAlign: `center`,
                }}>{content.body2}</Typography>
            </SectionHeader>
            <Content />
            <Footer />
        </Section>

    )
}
