
import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
    Card, CardContent,
    Typography,
    useMediaQuery, Grid
} from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './swiper.css'
import SectionHeader from "./SectionHeader"
import Section from "./Section"
import LabelIcon from '@mui/icons-material/Label';

function Desktop() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.background : theme.palette.secondary.light
    const { dict } = useI18n()
    const content = dict.Home.Features.Content
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={1} sx={{
                display: { xs: 'none', sm: "none", md: "flex" },
                width: { lg: `80%`, md: `100%` },
                height: `80vh`
            }}
        >
            <Swiper
                loop={true}
                modules={[Pagination, Navigation, EffectCoverflow]}
                navigation={{ enabled: true }}
                pagination={{ clickable: true }}
                spaceBetween={10}
                slidesPerView={3}
                effect={'coverflow'}
                grabCursor={true}
                className="swiper-slider"
                coverflowEffect={{
                    rotate: 45,
                    stretch: 50,
                    depth: 50,
                    modifier: 0.7,
                    slideShadows: true,
                }}
                style={{
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    display: "flex",
                    height: `100%`,
                    width: `100%`,
                    maxHeight: `540px`,
                    maxWidth: `80%`,
                    padding: `20px 0`
                }}>
                {content.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card sx={{
                            width: `100%`,
                            height: `100%`,
                            borderRadius: `1rem`,
                            background: backgroundColor
                        }}>
                            <CardContent sx={{
                                backgroundSize: `fill`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPosition: `center`,
                                borderRadius: `1rem`,
                                height: `100%`,
                            }}>

                                <Stack direction={"row"} alignItems={"center"}>
                                    <LabelIcon sx={{ marginRight: `1rem` }} />
                                    <Typography variant="button" component="div" >
                                        {item.title}
                                    </Typography>
                                </Stack>
                                {item.description.map((e, i) => {
                                    return <Typography key={i} gutterBottom variant="subtitle2" >
                                        {e}
                                    </Typography>
                                })}
                                {item.more.map((e, i) => {
                                    return <Typography key={i} gutterBottom variant="body2" >
                                        {e}
                                    </Typography>
                                })}
                            </CardContent>
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Grid>
    )
}

function Mobile() {
    const theme = useTheme();
    const { dict } = useI18n()
    const content = dict.Home.Features.Content
    return (
        <Grid
            container direction="column" sx={{
                display: { xs: 'flex', sm: "flex", md: "none" },
                width: `100%`,
            }}
        >
            <Swiper
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    enabled: true
                }}
                loop={true}
                modules={[Pagination, Navigation]}
                className="swiper-slider"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundPosition: `center`,
                    backgroundSize: `cover`,
                    width: `100%`,
                    height: `80vh`,
                    margin: `2rem 0`,
                }}>
                {content.map((item, i) => (
                    <SwiperSlide key={i}>
                        <Card sx={{
                            width: `80%`,
                            height: `80%`,
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: `1rem`,
                            display: "flex",
                            justifySelf: `center`,
                        }}>
                            <CardContent sx={{
                                borderRadius: `1rem`,
                            }}>
                                <div>
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                                        {item.description[0]}
                                    </Typography>

                                    {item.more.map((e, i) => {
                                        return <Typography key={i} gutterBottom variant="body2" >
                                            {e}
                                        </Typography>
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
function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return (
        isMobile ? <Mobile /> : <Desktop />
    )
}

export default function Features() {
    const { dict } = useI18n()
    const content = dict.Home.Features.SectionHeader
    return (
        <Section id="features" sx={{
            alignItems: `center`,
            backgroundImage: `url("/images/background-2.webp")`
        }}>
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: `0px 1px 1px gray`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{content.h4}</Typography>
                < Typography variant="body2" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                    textAlign: `center`,
                }}>{content.body2}</Typography>
            </SectionHeader>
            <Content />
        </Section>
    )
}
