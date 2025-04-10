import { useColorScheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import Divider from '@mui/material/Divider';
import {
    Avatar, Card, CardContent,
    Box, Container, Typography,
    Grid
} from '@mui/material'

function Content() {
    return (
        <Container maxWidth="xl" sx={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            height: `auto`,
            alignItems: `center`,
            margin: `auto`,
            padding: `2rem 0`
        }}>
            <Grid container spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} justifyContent="center" sx={{
                width: { xs: `100%`, sm: `80%`, md: `60%`, lg: `50%` }
            }} >
                {[0].map((member, i) => (
                    <Grid container key={i} size={{ xs: 12, sm: 6, md: 6, lg: 4 }} spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }} justifyContent="center" sx={{
                    }}>
                        <Card>
                            <CardContent style={{ textAlign: "center" }} >
                                <Avatar style={{ height: 64, width: 64, margin: "16px auto" }} />
                                <Typography color="primary" variant="h6" >Typography</Typography>
                                <Typography color="textSecondary">Typography</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

function Header({ mode }) {
    const theme = useTheme();
    return (
        <Box sx={{
            display: `flex`,
            width: `100%`,
            height: `180px`,
            background: `linear-gradient(0deg, transparent, ${mode == 'dark' ? theme.palette.primary.main : theme.palette.secondary.main})`,
            justifyContent: `start`,
            alignItems: `center`,
            flexDirection: `column`,
            paddingTop: `20px`
        }}>
            <Container maxWidth="xl" sx={{
                display: `flex`,
                justifyContent: `center`,
                height: `100%`
            }}>
                <Grid container direction="column" spacing={1} alignContent={"center"}
                    justifyContent="center" sx={{
                        display: "flex",
                    }}>
                    <Typography variant="h4" gutterBottom sx={{
                        textShadow: `0px 1px 1px gray`,
                        userSelect: `none`,
                        textAlign: `center`,
                    }}>PaperWork</Typography>
                    < Typography variant="body2" gutterBottom sx={{
                        textShadow: `0px 1px 1px rgba(255, 255, 255, 0.5)`,
                        textAlign: `center`,
                    }}>PaperWork description</Typography>
                </Grid>
            </Container >
        </Box>
    )
}

export default function PaperWork(props) {
    const { background } = props
    const { mode } = useColorScheme();
    const isDark = mode == 'dark'
    const gradient = isDark
        ? `linear-gradient(0deg, rgba(255, 255, 255, 0), rgb(0, 0, 0))`
        : `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgb(255, 255, 255))`
    return (<>
        <Box
            id="PaperWork1"
            sx={{
                alignItems: `center`,
                backgroundImage: `${gradient}, url("${background}")`,
                backgroundPosition: `center`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
                display: `flex`,
                flexDirection: `column`,
                minHeight: `100vh`,
                justifyContent: `start`,
                overflow: 'hidden',
                position: 'relative',
                width: `100vw`,
                zIndex: `2`,
                userSelect: `none`,
            }}>
            <Header />
            <Content />
        </Box>
        <Divider />
    </>)
}