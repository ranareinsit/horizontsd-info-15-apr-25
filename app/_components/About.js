import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../i18n-context';
import * as React from 'react';
import Stack from '@mui/material/Stack';
import {
    Card, CardContent, CardMedia,
    Box, Container, Typography,
    Grid, Tooltip, Avatar
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
    const { mode } = useColorScheme();
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
                    width: { xs: `99%`, sm: `100%`, md: `80%`, lg: `80%` }
                }}
            >{teamData.map((member, i) => (
                <Grid
                    key={i}
                    size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                    rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                    spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                    justifyContent="center"
                >
                    <Card sx={{height: `100%`, borderRadius: 5, backgroundColor: mode === 'dark' ? '#2a2a2a' : '#ffffff',}}>
                        <ScrollGrow
                            animationDelay={500}
                            threshold={0.01}
                            timeout={500}
                            transformOrigin="0 0 0"
                        >
                            <CardMedia
                            sx={{
                                aspectRatio: '3 / 3',
                                backgroundColor: mode === 'dark' ? '#1e1e1e' : '#f0f0f0',
                            }}
//                            image={member?.photo?.length > 0 ? member?.photo : ""}
                            image={member.photo}
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
                                    <Typography sx={{ textOverflow: `ellipsis`, userSelect: "text", fontWeight: 'bold'}} variant="h5" component="div">{cF(member?.first_name)} {cF(member?.last_name)}</Typography>
                                </Stack>
                                }
                                {member?.education && <Stack direction={"row"} sx={{ alignItems: "center", wordBreak: 'break-word'}}>
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



                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Stack direction="row" spacing={3} alignItems="center">
                                {member?.contacts?.telegram && (
                                <a href={`https://t.me/${member?.contacts?.telegram}`} target="_blank" rel="noopener noreferrer">
                                <TelegramIcon sx={{ cursor: 'pointer', fontSize: 36, color: '#29A9EA' }} />
                                </a>
                                )}

                                {member?.contacts?.email && (
                                <a href={`mailto:${member?.contacts?.email}`} target="_blank" rel="noopener noreferrer">
                                <AlternateEmailIcon sx={{ cursor: 'pointer', fontSize: 36 }} />
                                </a>
                                )}


                                {member?.contacts?.orcid && (
                                <a href={`https://orcid.org/${member?.contacts?.orcid}`} target="_blank" rel="noopener noreferrer">
                                <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '36px',
                                height: '36px',
                                }}>
                                <Image
                                src="/images/orcid_id.svg"
                                alt="ORCID logo"
                                width={36}
                                height={36}
                                unoptimized
                                style={{ userSelect: 'none' }}
                                />
                                </Box>
                                </a>
                                )}
                                </Stack>
                                </Box>









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