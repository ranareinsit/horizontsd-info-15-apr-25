import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import {
    Card, CardMedia, CardContent,
    Typography, Button, Box,
    useMediaQuery, Grid, CardActions, Stack
} from '@mui/material'

// 
import SectionHeader from "../../_components/SectionHeader"
import Section from "../../_components/Section"
import ScrollGrow from '../../_components/ScrollGrow';
// 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../../_components/swiper.css'
// 

function Background({ direction }) {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const maskOpacity = mode == 'dark' ? '0.1' : '0.7'
    const background = direction
        ? `linear-gradient(90deg, transparent, transparent, ${isDark ? theme.palette.secondary.contrastText : theme.palette.secondary.dark})`
        : `linear-gradient(90deg, ${isDark ? theme.palette.secondary.contrastText : theme.palette.secondary.dark}, transparent, transparent)`

    return (
        <Box
            sx={{
                borderRadius: `1rem`,
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: background,
                maskImage: `url(/images/mask.webp), ${background}`,
                maskRepeat: 'no-repeat',
                maskSize: '100% 200%',
                maskComposite: 'revert',
                maskPosition: '0% 0%',
                zIndex: 1,
                opacity: maskOpacity
            }}
        />
    )
}


function Mobile() {
    const theme = useTheme();
    const { dict } = useI18n()
    const content = dict.Features.Prediction.Content
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
                            height: `90%`,
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: `1rem`,
                            display: "flex",
                            justifySelf: `center`,
                        }}>
                            <CardContent sx={{
                                borderRadius: `1rem`,
                                height: `100%`,
                                display: `flex`,
                                flexDirection: `column`,
                                justifyContent: `space-between`
                            }}>
                                <Stack>
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                        {item.title}
                                    </Typography>
                                    {item.description.map((e, i) => {
                                        return <Typography key={i} gutterBottom variant="body2" >
                                            {e}
                                        </Typography>
                                    })}
                                </Stack>
                                <CardMedia
                                    sx={{
                                        width: `100%`,
                                        backgroundColor: `transparent`,
                                        height: `30vh`,
                                        backgroundSize: `contain`
                                    }}
                                    image={item.image}
                                />
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
    const { dict } = useI18n()
    const content = dict?.Features?.Prediction?.Content
    return (
        <Grid
            container
            sx={{
                display: `flex`,
                flexDirection: `column`,
                padding: `2rem`,
                borderRadius: `1rem`,
                width: `100%`
            }}>
            {content?.map((item, i) => {
                return (
                    <Stack direction={"column"} key={i} sx={{
                        width: `100%`,
                        padding: `2rem`
                    }}>
                        <ScrollGrow>
                            <Stack direction={i % 2 == 0 ? "row" : `row-reverse`} sx={{
                                justifyContent: `space-between`,
                                width: `100%`,
                                height: `50vh`,
                                zIndex: `2`,
                                position: `relative`,
                                display: `flex`,
                                justifyContent: `space-around`,
                                alignItems: `center`,
                            }}>

                                <Box sx={{
                                    zIndex: `10`,
                                    borderRadius: `0.5rem`,
                                    border: `1px solid black`,
                                    position: `relative`,
                                    display: `flex`,
                                    justifyContent: `center`,
                                    alignItems: `center`,
                                    backgroundColor: `transparent`,
                                    maxHeight: `45vh`,
                                    width: `40%`,
                                    transition: `transform 0.3s linear`,
                                    '&:hover': {
                                        transform: `scale(1.4) translateX(${i % 2 == 0 ? `10%` : `-10%`})`
                                    },
                                }}>
                                    <img style={{
                                        maxHeight: `45vh`,
                                        width: `100%`,
                                    }} src={item.image} />
                                </Box>
                                <Box sx={{
                                    display: `flex`,
                                    flexDirection: `column`,
                                    justifyContent: `start`,
                                    width: `30%`,
                                }} >
                                    <Box sx={{
                                        display: `flex`,
                                        flexDirection: `column`,
                                        justifyContent: `space-between`,
                                        alignItems: `start`,
                                        position: `relative`,
                                        top: `0`,
                                        left: `0`,
                                        width: `100%`,
                                        height: `30vh`,
                                        padding: `1rem`,
                                        zIndex: 4
                                    }} >
                                        <Stack>
                                            <Typography gutterBottom variant="h6">{item.title}</Typography>
                                            {item.description.map((e, i) => (<Typography key={i} gutterBottom variant="body2">{e}</Typography>))}
                                        </Stack>
                                    </Box>
                                </Box>
                                <Background direction={i % 2 == 0} />
                            </Stack>
                        </ScrollGrow>
                    </Stack >
                )
            })}
        </Grid >
    )
}

function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return isMobile ? <Mobile /> : <Desktop />
}




export default function Prediction(props) {
    const { dict } = useI18n()
    const content = dict?.Features?.Prediction?.SectionHeader
    return (
        <Section id="prediction">
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: `0px 1px 1px gray`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{content?.h4}</Typography>
                < Typography variant="subtitle1" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                    textAlign: `center`,
                }}>{content?.body2}</Typography>
            </SectionHeader>
            <Content />
        </Section>
    )
}