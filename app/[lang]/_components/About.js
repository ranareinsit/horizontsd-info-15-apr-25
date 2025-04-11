import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
    Card, CardContent, CardMedia,
    Box, Container, Typography,
    Grid, Tooltip
} from '@mui/material'
import SectionHeader from "./SectionHeader"
import Section from "./Section"
import Image from 'next/image';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import SchoolIcon from '@mui/icons-material/School';
import BadgeIcon from '@mui/icons-material/Badge';
import LabelIcon from '@mui/icons-material/Label';
import ScrollGrow from './ScrollGrow';
function cF(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Content() {
    const { dict } = useI18n()
    const teamData = dict.Team
    return (
        <Container maxWidth="xl" sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            height: `auto`,
            alignItems: `center`,
            margin: `auto`,
            padding: `2rem 0`,
        }}>
            <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                justifyContent="center"
                sx={{
                    width: { xs: `100%`, sm: `100%`, md: `80%`, lg: `80%` }
                }}
            >{teamData.map((member, i) => (
                <Grid
                    key={i}
                    size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                    rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                    spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                    justifyContent="center"
                >
                    <Card sx={{height: `100%`}}>
                        <ScrollGrow
                            animationDelay={500}
                            threshold={0.01}
                            timeout={500}
                            transformOrigin="0 0 0"
                        >
                            <CardMedia
                                sx={{ height: 240, backgroundColor: `rgba(18,18,18,0.9)` }}
                                image={member?.photo?.length > 0 ? member?.photo : ""}
                            />
                        </ScrollGrow>

                        <ScrollGrow
                            animationDelay={500}
                            threshold={0.01}
                            timeout={500}
                            transformOrigin="0 0 0"
                        >
                            <CardContent>
                                {member?.first_name && member?.first_name && member?.last_name && <Stack direction={"row"} sx={{ alignItems: "center", overflow: `hidden`, whiteSpace: `nowrap` }} >
                                    <BadgeIcon sx={{ marginRight: `1rem` }} />
                                    <Typography sx={{ textOverflow: `ellipsis`, userSelect: "text" }} variant="body2" component="div">{cF(member?.first_name)} {cF(member?.last_name)}</Typography>
                                </Stack>
                                }
                                {member?.education && <Stack direction={"row"} sx={{ alignItems: "center", overflow: `hidden`, whiteSpace: `nowrap` }}>
                                    <SchoolIcon sx={{ marginRight: `1rem` }} />
                                    <Tooltip title={member?.education}>
                                        <Typography sx={{ userSelect: "text" }} variant="caption" component="div">{(member?.education)}</Typography>
                                    </Tooltip>
                                </Stack>
                                }
                                {member?.job_title && <Stack direction={"row"} sx={{ alignItems: "center" }}>
                                    <LabelIcon sx={{ marginRight: `1rem` }} />
                                    <Typography sx={{ userSelect: "text" }} variant="caption" component="div">{(member?.job_title)}</Typography>
                                </Stack>
                                }
                                {member?.contacts?.telegram && <Stack direction={"row"} sx={{ alignItems: "center" }}>
                                    <TelegramIcon sx={{ marginRight: `1rem` }} />
                                    <Tooltip title={member?.contacts?.telegram}>
                                        <Typography sx={{ userSelect: "text" }} variant="caption" component="div">{(member?.contacts?.telegram)}</Typography>
                                    </Tooltip>
                                </Stack>
                                }
                                {member?.contacts?.email && <Stack direction={"row"} sx={{ alignItems: "center" }}>
                                    <AlternateEmailIcon sx={{ marginRight: `1rem` }} />
                                    <Tooltip title={member?.contacts?.email}>
                                        <Typography sx={{ textOverflow: `ellipsis`, userSelect: "text" }} variant="caption" component="div">{(member?.contacts?.email)}</Typography>
                                    </Tooltip>
                                </Stack>
                                }
                                {member?.contacts?.orcid &&
                                    <Stack direction={"row"} sx={{ alignItems: "center" }}>
                                        <Box sx={{
                                            display: `flex`,
                                            justifyContent: `center`,
                                            alignItems: `center`,
                                            marginRight: `1rem`,
                                            width: `24px`,
                                            height: `24px`,
                                        }}>
                                            <Image
                                                src={"/images/orcid_id.svg"}
                                                alt="logo"
                                                width={24}
                                                height={24}
                                                unoptimized
                                                style={{ userSelect: `none` }}
                                                href="/"
                                            />
                                        </Box>
                                        <Tooltip title={member?.contacts?.orcid}>
                                            <Typography sx={{ userSelect: "text" }} variant="caption" component="div">{(member?.contacts?.orcid)}</Typography>
                                        </Tooltip>
                                    </Stack>
                                }
                            </CardContent>
                        </ScrollGrow>
                    </Card>
                </Grid>
            ))}
            </Grid>
        </Container >
    )
}

export default function About() {
    const { dict } = useI18n()
    const { Home } = dict
    const { mode } = useColorScheme();
    return (
        <Section id="about" sx={{
            backgroundImage: `url("/images/background-3.webp")`,
        }}>
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: `0px 1px 1px gray`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{Home.About.SectionHeader.h4}</Typography>
                < Typography variant="body2" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                    textAlign: `center`,
                }}>{Home.About.SectionHeader.body2}</Typography>
            </SectionHeader>
            <Content />
        </Section>
    )
}