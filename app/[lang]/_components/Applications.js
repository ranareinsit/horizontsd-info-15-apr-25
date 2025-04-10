import * as React from 'react';
import { useI18n } from '../../i18n-context';
import { useColorScheme, useTheme } from '@mui/material/styles';
import {
    Card, CardContent, CardMedia,
    Box, Container, Typography, Button, Link as MuiLink,
    useMediaQuery, Grid, Link, Stack,
    CardActions
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import SectionHeader from "./SectionHeader"
import Section from "./Section"

function Desktop() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.background : theme.palette.secondary.light
    const backgroundColor2 = isDark ? theme.palette.primary.main : theme.palette.primary.light
    const hoverBackground = isDark ? theme.palette.secondary.dark : theme.palette.primary.main
    const { dict } = useI18n()
    const dictionary = dict.Home.Applications
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };
    const selected = dictionary.Content[selectedItemIndex].block;
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 8, sm: 12 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: `100%`
                }}
            >
                <Stack direction={"column"}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: `space-between`,
                            alignItems: `center`,
                            margin: `0 0 1rem 0`,
                            width: `100%`,
                        }}
                    >
                        {dictionary.Content.map(({ button: item }, index) => (
                            <Box
                                key={index}
                                onClick={() => handleItemClick(index)}
                                sx={[
                                    () => ({
                                        cursor: `pointer`,
                                        borderRadius: `0.3rem`,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: `start`,
                                        alignItems: `center`,
                                        padding: 2,
                                        height: '10rem',
                                        backgroundColor: backgroundColor,
                                        width: 'auto',
                                        marginLeft: index == 0 ? 0 : `1rem`,
                                        '&:hover': {
                                            backgroundColor: hoverBackground,
                                        },
                                    }),
                                    selectedItemIndex === index && {
                                        backgroundColor: backgroundColor2
                                    },
                                ]}
                            >
                                <Box
                                    sx={[
                                        {
                                            width: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'left',
                                            textAlign: 'left',
                                            textTransform: 'none',
                                            color: 'text.secondary',
                                        },
                                        selectedItemIndex === index && { color: 'text.secondary', },
                                    ]}
                                >
                                    <Stack>
                                        <Stack direction={"row"} alignItems={"center"}>
                                            <FormatListBulletedIcon sx={{ marginRight: "1rem" }} />
                                            <Typography variant="h6">{item.title}</Typography>
                                        </Stack>
                                        <Typography variant="body2">{item.description}</Typography>
                                    </Stack>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Stack>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    overflow: `hidden`,
                    zIndex: 33
                }}>
                    <Card variant="outlined" sx={{
                        width: `100%`,
                        height: `100%`
                    }}>
                        <Box sx={{
                            position: `relative`,
                            top: `0`,
                            left: `0`,
                            width: `100%`,
                            height: `30vh`,
                            background: `linear-gradient(180deg, ${backgroundColor}, transparent), url(/images/background-${selectedItemIndex + 1}.webp)`,
                            backgroundPosition: `70% 30%`,
                            zIndex: 3
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
                                    <Typography gutterBottom variant="h6">{selected.title}</Typography>
                                    {selected.description.map((e, i) => (<Typography key={i} gutterBottom variant="body2">{e}</Typography>))}
                                </Stack>
                                <Stack>
                                    <Link href={`/features#${selectedItemIndex}`}>
                                        <Button variant="contained">{dictionary.Button}</Button>
                                    </Link>
                                </Stack>
                            </Box>
                        </Box>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}

function Mobile() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const { dict } = useI18n()
    const dictionary = dict.Home.Applications
    return (
        <Grid
            container direction="column" sx={{
                display: { xs: 'flex', sm: "flex", md: "none" },
                width: `100%`,
            }}
        >
            <Swiper
                spaceBetween={10}
                loop={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    enabled: true
                }}
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
                {dictionary.Content.map(({ block: item }, i) => (
                    <SwiperSlide key={i}>
                        <Card sx={{
                            width: `80%`,
                            height: `80%`,
                            border: `1px solid ${theme.palette.primary.main}`,
                            borderRadius: `1rem`,
                            display: "flex",
                            justifySelf: `center`,
                            display: `flex`,
                            flexDirection: `column`,
                            justifyContent: `start`,
                            alignItems: `center`
                        }}>
                            <CardContent sx={{
                                borderRadius: `1rem`,
                                display: `flex`,
                                flexDirection: `column`,
                                justifyContent: `space-between`,
                                alignItems: `center`,
                                height: `100%`
                            }}>
                                <div>
                                    <Typography variant="h6" sx={{ color: 'text.secondary' }}>
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                        {item.description[0]}
                                    </Typography>
                                </div>

                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    sx={{
                                        display: `flex`,
                                        justifyContent: `center`,
                                        alignItems: `center`,
                                        filter: `invert(${mode == 'dark' ? 1 : 0})`,
                                        backgroundColor: `white`,
                                        height: `33%`
                                    }}
                                />
                                <CardActions sx={{
                                    display: `flex`,
                                    justifyContent: `center`,
                                    alignItems: `center`,
                                    padding: 0,
                                    margin: 0,
                                    height: `20%`
                                }}>
                                    <MuiLink href={`/features#${i}`}>
                                        <Button variant="contained" color={mode == "dark" ? "secondary" : "primary"} size="small">
                                            {dictionary.Button}
                                        </Button>
                                    </MuiLink>
                                </CardActions>
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
    const { mode } = useColorScheme();
    return (
        isMobile ? <Mobile /> : <Desktop />
    )
}

export default function Applications() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const { dict } = useI18n()
    const dictionary = dict.Home.Applications
    return (
        <Section id="applications">
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(0, 0, 0, 0.3)`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{dictionary.SectionHeader.h4}</Typography>
                < Typography variant="body1" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(0, 0, 0, 0.3)`,
                    textAlign: `center`,
                }}>{dictionary.SectionHeader.body2}</Typography>
            </SectionHeader>
            <Content />
        </Section>
    )
}
