import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import {
    Typography, Button, Box,
    useMediaQuery, Grid, Stack
} from '@mui/material'
import SectionHeader from "../../_components/SectionHeader"
import Section from "../../_components/Section"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '../../_components/swiper.css'
import NextLink from 'next/link'

function Mobile({ content }) {
    const { mode } = useColorScheme();

    const { dict } = useI18n()
    const buttonContent = dict?.Research.Button

    return (
        <Grid
            container
            sx={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
                padding: `1rem`,
                width: `100%`
            }}>
            <Box sx={{
                position: `relative`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                backgroundColor: `transparent`,
                maxHeight: `45vh`,
                width: `100%`,
                paddingBottom: `2rem`
            }}>
                <img style={{
                    maxHeight: `45vh`,
                    width: `100%`,
                }} src={content?.image} />
            </Box>
            <Stack sx={{
                width: `100%`,
                marginBottom: `2rem`
            }}>
                {content?.description.map((item, i) => {
                    return (<Typography key={i} gutterBottom variant="body1">{item}</Typography>)
                })}
            </Stack>
            <Stack>
                <NextLink href={`#`}>
                    <Button variant="contained">{buttonContent}</Button>
                </NextLink>
            </Stack>
        </Grid >
    )
}

function Desktop({ content }) {
    const { dict } = useI18n()
    const buttonContent = dict?.Research.Button
    return (
        <Grid
            container
            sx={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`,
                padding: `1rem`,
                width: `80%`
            }}>
            <Box sx={{
                position: `relative`,
                display: `flex`,
                justifyContent: `center`,
                alignItems: `center`,
                backgroundColor: `transparent`,
                maxHeight: `45vh`,
                width: `50%`,
                paddingBottom: `2rem`
            }}>
                <img style={{
                    maxHeight: `45vh`,
                    width: `100%`,
                }} src={content?.image} />
            </Box>
            <Stack sx={{
                width: `100%`,
                marginBottom: `2rem`
            }}>
                {content?.description.map((item, i) => {
                    return (<Typography key={i} gutterBottom variant="body1">{item}</Typography>)
                })}
            </Stack>
            <Stack>
                <NextLink href={`#`}>
                    <Button variant="contained">{buttonContent}</Button>
                </NextLink>
            </Stack>
        </Grid >
    )
}

function Content({ content }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    return isMobile ? <Mobile content={content} /> : <Desktop content={content} />
}

export default function Optimization({ item }) {
    const content = item.title
    return (
        <Section id="optimization" sx={{
            minHeight: `auto`
        }}>
            <SectionHeader sx={{
                height: `fit-content`
            }}>
                <Typography variant="h6" gutterBottom sx={{
                    textShadow: `0px 1px 1px gray`,
                    userSelect: `none`,
                    textAlign: `center`,
                }}>{content}</Typography>
            </SectionHeader>
            <Content content={item} />
        </Section>
    )
}