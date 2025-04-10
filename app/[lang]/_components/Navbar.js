"use client"
import { useMediaQuery } from '@mui/material'
import { useColorScheme } from '@mui/material/styles';
import { useI18n } from '../../i18n-context';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import Icon from "./Icon"
import IconButton from '@mui/material/IconButton';
import LanguageSwitcher from "./LanguageSwitcher"
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeSwitcher from "./ThemeSwitcher"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';
import Stack from '@mui/material/Stack';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Link from 'next/link';
import Slide from '@mui/material/Slide';

const NavButton = ({ href, children }) => {
    return (
        <Link href={href} >
            {children}
        </Link>
    );
};

function Mobile() {
    const theme = useTheme();
    const { mode, setMode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = (newOpen) => () => setOpen(newOpen);
    const toggleMode = () => { setMode(isDark ? 'light' : 'dark') };
    const { dict } = useI18n()
    const content = dict.Navbar
    const isSmall = useMediaQuery('(min-width:400px)');
    return (
        <Container maxWidth="lg">
            <Toolbar sx={{
                borderRadius: `4rem`,
                backdropFilter: 'blur(24px)',
                flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: "space-between",
                backgroundColor: backgroundColor
            }} >
                <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="top"
                    open={open}
                    onClose={toggleDrawer(false)}
                >
                    <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <IconButton onClick={toggleDrawer(false)}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>
                        <List
                            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                            component="nav"
                            aria-labelledby="nested-list-subheader"
                            subheader={
                                <ListSubheader component="div" id="nested-list-subheader" sx={{
                                    display: `flex`,
                                    alignContent: `center`,
                                    justifyContent: `start`,

                                }}>
                                    <Icon size='s' />
                                    <Typography variant="button" sx={{ marginLeft: `1rem`, lineHeight: `2.1rem` }}  >Horizon</Typography>
                                </ListSubheader>
                            }
                        >
                            <ListItemButton component="a" href={`/`} >
                                <ListItemText primary={content.home} sx={{ textTransform: "uppercase" }} />
                            </ListItemButton>
                            <ListItemButton component="a" href={`/features`} >
                                <ListItemText primary={content.features} sx={{ textTransform: "uppercase" }} />
                            </ListItemButton>
                            <ListItemButton component="a" href={`/research`} >
                                <ListItemText primary={content.research} sx={{ textTransform: "uppercase" }} />
                            </ListItemButton>
                        </List>
                    </Box>
                </Drawer>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "start", width: `30%` }}>
                    <Icon size='s' color="primary" />
                    {isSmall &&
                        <Typography color="primary" variant="button" sx={{ marginLeft: `1rem`, lineHeight: `2.1rem` }}  >Horizon</Typography>
                    }
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: "start", width: `30%` }}>
                </Box>
                <LanguageSwitcher />
                <ThemeSwitcher
                    checked={isDark}
                    onChange={toggleMode}
                />
            </Toolbar>
        </Container>
    )
}

function Desktop() {
    const theme = useTheme();
    const { mode, setMode } = useColorScheme();
    const isDark = mode == 'dark'
    const backgroundColor = isDark ? theme.palette.primary.dark : theme.palette.secondary.light
    const toggleMode = () => { setMode(mode === 'dark' ? 'light' : 'dark') };
    const { dict } = useI18n()
    const content = dict.Navbar
    return (
        <Container maxWidth="lg">
            <Toolbar disableGutters variant="dense" sx={{
                borderRadius: `4rem`,
                backdropFilter: 'blur(36px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                padding: `0 0.6rem`,
                backgroundColor: backgroundColor
            }} >
                <Icon size='s' />
                <Stack spacing={1} direction={"row"} justifyContent={"start"} sx={{ marginLeft: `1rem` }}>
                    <NavButton href={"/"}>
                        <Button variant="text" sx={{
                            width: `7rem`,
                            borderBottom: `2px solid ${isDark ? theme.palette.primary.contrastText : theme.palette.primary.dark}`,
                            borderRadius: `0`,
                        }}>{content.home}</Button>
                    </NavButton>
                    <NavButton href={"/features"}>
                        <Button variant="text" sx={{
                            width: `7rem`,
                            borderRadius: `0`,
                        }}>{content.features}</Button>
                    </NavButton>
                    <NavButton href={"/research"}>
                        <Button variant="text" sx={{
                            width: `7rem`,
                            borderRadius: `0`,
                        }}>{content.research}</Button>
                    </NavButton>
                </Stack>
                <Stack spacing={1} direction={"row"} justifySelf={"end"} sx={{ width: `100%`, justifyContent: `end`, alignItems: `center` }}>
                    <LanguageSwitcher />
                    <ThemeSwitcher
                        checked={mode == 'dark'}
                        onChange={toggleMode}
                    />
                </Stack>
            </Toolbar>
        </Container >
    )
}


function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children ?? <div />}
        </Slide>
    );
}

export default function Navbar() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    useColorScheme();

    return (
        <HideOnScroll >
            <AppBar
                position="fixed"
                enableColorOnDark
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: '2rem',
                }}
            >
                {isMobile ? <Mobile /> : <Desktop />}
            </AppBar>
        </HideOnScroll>
    )
}
