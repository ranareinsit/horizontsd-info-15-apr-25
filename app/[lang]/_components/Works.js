import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import {
    Card, CardMedia,
    Typography, Button, 
    useMediaQuery, Grid, CardActions
} from '@mui/material'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SectionHeader from "./SectionHeader"
import Section from "./Section"

function CustomizedTimeline() {
    return (
        <Timeline position="alternate" sx={{
            height: `100%`,
            width: `100%`,
        }}>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <Stack>
                        <Typography variant='caption' color='textPrimary'>
                            historical data
                        </Typography>
                        <Typography variant='caption' color='textPrimary'>
                            external parameters
                        </Typography>
                    </Stack>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='button' color='textPrimary'>
                        Data extraction
                    </Typography>
                </TimelineContent>
            </TimelineItem>


            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <Stack>
                        <Typography variant='caption' color='textPrimary'>
                            <b>SKNN</b> & <b>HDIRT</b>
                        </Typography>
                        <Typography variant='caption' color='textPrimary'>
                            Distance Correlation
                        </Typography>
                    </Stack>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='button'>
                        Data preprocessing
                    </Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <Stack>
                        <Typography variant='button' color='warning'>
                            Realtime
                        </Typography>
                        <Typography variant='caption' color='textPrimary'>
                            By <b>LSTM</b> utilizing <b>Time2Vec</b>
                        </Typography>
                        <Typography variant='caption' color='textPrimary'>
                            Temporal Encoding
                        </Typography>
                    </Stack>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography variant='button'>
                        Data prediction
                    </Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

function Mobile() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const { dict } = useI18n()
    const content = dict.Home.Works.Content
    return (
        <Grid container sx={{ display: `flex`, flexDirection: `column`, background: backgroundColor, padding: `0.9rem`, margin: `0.1rem`, borderRadius: `0.9rem` }}>
            <Stack direction={"column"}>
                <Typography variant='h6' gutterBottom>{content[0]}</Typography>
            </Stack>

            <Stack direction={"column"} padding={"2rem"}>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1'>{content[1]}</Typography>
                    <CustomizedTimeline />
                    <Typography variant='caption' sx={{ display: `flex`, justifyContent: "center" }} gutterBottom>{content[2]}</Typography>
                </Stack>
            </Stack>

            <Divider />

            <Stack direction={"column"} padding={"2rem"}>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1' gutterBottom>{content[3]}</Typography>
                    <Typography variant='body1'>{content[4]}</Typography>
                    <ul>
                        <li> <b>{content[5]}</b> {content[6]}</li>
                        <li> <b>{content[7]}</b> {content[8]}</li>
                        <li> <b>{content[9]}</b> {content[10]}</li>
                    </ul>
                </Stack>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1' gutterBottom>{content[11]}</Typography>
                    <ul>
                        <li> <b>{content[12]}</b> {content[13]}</li>
                        <li> <b>{content[14]}</b> {content[15]}</li>
                        <li> <b>{content[16]}</b> {content[17]}</li>
                    </ul>
                </Stack>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1' gutterBottom>{content[18]}</Typography>
                    <ul>
                        <li> <b>{content[19]}</b> {content[20]}</li>
                        <li> <b>{content[21]}</b> {content[22]}</li>
                        <li> <b>{content[23]}</b> {content[24]}</li>
                    </ul>
                </Stack>

            </Stack>

            <Stack direction={"column"} sx={{ justifyContent: `center` }}>
                <Card sx={{ maxWidth: 512, width: `90%`, padding: `1rem` }} >
                    <CardMedia
                        sx={{ height: 256 }}
                        image={`/images/${isDark ? "dashboard-dark.png" : "dashboard-light.png"}`}
                    />
                    <CardActions sx={{ justifyContent: `center` }}>
                        <Link href={`/images/${isDark ? "dashboard-dark.png" : "dashboard-light.png"}`}>
                            <Button size="small">{content[25]}</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Stack>
        </Grid>
    )
}

function Desktop() {
    const theme = useTheme();
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const { dict } = useI18n()
    const content = dict.Home.Works.Content

    return (
        <Grid container sx={{ display: `flex`, flexDirection: `column`, background: backgroundColor, padding: `2rem`, margin: `1rem`, borderRadius: `1rem` }}>
            <Stack direction={"column"}>
                <Typography variant='h6' gutterBottom>{content[0]}</Typography>
            </Stack>

            <Stack direction={"column"} padding={"2rem"}>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1'>{content[1]}</Typography>
                    <CustomizedTimeline />
                    <Typography variant='caption' sx={{ display: `flex`, justifyContent: "center" }} gutterBottom>{content[2]}</Typography>
                </Stack>
            </Stack>

            <Divider />

            <Stack direction={"column"} padding={"2rem"}>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1' gutterBottom>{content[3]}</Typography>
                    <Typography variant='body1'>{content[4]}</Typography>
                    <ul>
                        <li> <b>{content[5]}</b> {content[6]}</li>
                        <li> <b>{content[7]}</b> {content[8]}</li>
                        <li> <b>{content[9]}</b> {content[10]}</li>
                    </ul>
                </Stack>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1' gutterBottom>{content[11]}</Typography>
                    <ul>
                        <li> <b>{content[12]}</b> {content[13]}</li>
                        <li> <b>{content[14]}</b> {content[15]}</li>
                        <li> <b>{content[16]}</b> {content[17]}</li>
                    </ul>
                </Stack>

                <Stack direction={"column"}>
                    <Typography variant='subtitle1' gutterBottom>{content[18]}</Typography>
                    <ul>
                        <li> <b>{content[19]}</b> {content[20]}</li>
                        <li> <b>{content[21]}</b> {content[22]}</li>
                        <li> <b>{content[23]}</b> {content[24]}</li>
                    </ul>
                </Stack>

            </Stack>

            <Stack direction={"row"} sx={{ justifyContent: `center` }}>
                <Card sx={{ maxWidth: 512, width: `100%`, padding: `2rem` }} >
                    <CardMedia
                        sx={{ height: 256 }}
                        image={`/images/${isDark ? "dashboard-dark.png" : "dashboard-light.png"}`}
                    />
                    <CardActions sx={{ justifyContent: `center` }}>
                        <Link href={`/images/${isDark ? "dashboard-dark.png" : "dashboard-light.png"}`}>
                            <Button size="small">{content[25]}</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Stack>
        </Grid>
    )
}

function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return isMobile ? <Mobile /> : <Desktop />
}

export default function Works() {
    const { dict } = useI18n()
    const content = dict.Home.Works.SectionHeader
    return (
        <Section id="works" sx={{ backgroundImage: `url("/images/hero.webp")` }}>
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: `0px 1px 1px gray`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{content.h4}</Typography>
                < Typography variant="subtitle1" gutterBottom sx={{
                    textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                    textAlign: `center`,
                }}>{content.body2}</Typography>
            </SectionHeader>
            <Content />
        </Section>
    )
}
