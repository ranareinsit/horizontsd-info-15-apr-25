import * as React from "react";
import { useI18n } from "../_providers/I18nProvider";
import Stack from "@mui/material/Stack";
import { Card, CardContent, Box, Container, Typography, Grid, Divider } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from "@mui/material/styles";
import SectionHeader from "./SectionHeader";
import Section from "./Section";
import Image from "next/image";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TelegramIcon from "@mui/icons-material/Telegram";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import LabelIcon from "@mui/icons-material/Label";
import GithubIcon from "@mui/icons-material/GitHub";
import "./card-gradient.css";

interface ContactInfo {
    telegram?: string;
    github?: string;
    email?: string;
    orcid?: string;
}

interface TeamMember {
    first_name: string;
    last_name: string;
    job_title: string;
    education: string;
    photo: string;
    contacts: ContactInfo;
}

interface MemberFieldProps {
    children: React.ReactNode;
    title: string;
    tooltip?: boolean;
}

const capitalizeFirstLetter = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

function MemberField({ children, title, tooltip = false }: MemberFieldProps) {
    const handleClipboardCopy = (event: React.MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if (target.innerText) {
            navigator.clipboard.writeText(target.innerText);
        }
    };

    return (
        <Tooltip
            disableTouchListener={!tooltip}
            disableInteractive={!tooltip}
            disableHoverListener={!tooltip}
            disableFocusListener={!tooltip}
            placement="auto"
            arrow
            title={title}
        >
            <Stack
                onClick={handleClipboardCopy}
                direction="row"
                sx={{
                    alignItems: "center",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    width: "100%",
                    height: "1.9rem"
                }}
            >
                {children}
            </Stack>
        </Tooltip>
    );
}

function Content() {
    const { mode } = useColorScheme();
    const isDark = mode === "dark";
    const { dict } = useI18n();
    const teamData: TeamMember[] = dict?.Team as TeamMember[];

    return (
        <Container maxWidth="xl" sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "auto",
            alignItems: "center",
            margin: "auto",
            padding: "2rem 0",
        }}>
            <Grid
                container
                spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                justifyContent="center"
                sx={{
                    width: { xs: "99%", sm: "100%", md: "80%", lg: "80%" }
                }}
            >
                {teamData.map((member: TeamMember, i: number) => (
                    <Grid
                        key={i}
                        size={{ xs: 12, sm: 6, md: 6, lg: 4 }}
                        rowSpacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                        spacing={{ xs: 1, sm: 1, md: 1, lg: 1 }}
                    >
                        <Card
                            className="card-background"
                            sx={{
                                height: "100%",
                                border: "1px solid var(--mui-palette-secondary-dark)",
                                background: "linear-gradient(30deg, var(--mui-palette-secondary-dark), var(--mui-palette-primary-dark))"
                            }}>
                            <div style={{
                                width: "100%",
                                height: "420px",
                            }}>
                                {member?.photo?.length && (
                                    <div style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        height: "100%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: `url(${member.photo})`,
                                        backgroundPosition: "0% 100%",
                                        backgroundSize: "contain",
                                        backgroundRepeat: "no-repeat",
                                    }}>
                                    </div>
                                )}
                            </div>

                            <CardContent
                                sx={{
                                    height: "100%",
                                    borderTop: "1px solid var(--mui-palette-secondary-dark)",
                                    background: isDark
                                        ? "linear-gradient(var(--mui-palette-secondary-dark), var(--mui-palette-primary-dark))"
                                        : "linear-gradient(var(--mui-palette-primary-light), var(--mui-palette-common-white))"
                                }}
                            >
                                {member?.first_name && member?.last_name &&
                                    <MemberField title={`${member.first_name} ${member.last_name}`}>
                                        <BadgeIcon color="info" sx={{ marginRight: "1rem" }} />
                                        <Typography
                                            sx={{
                                                color: `var(--mui-palette-text-primary)`,
                                                textOverflow: "ellipsis", userSelect: "text"
                                            }}
                                            variant="h6"
                                        >
                                            {capitalizeFirstLetter(member.first_name)} {capitalizeFirstLetter(member.last_name)}
                                        </Typography>
                                    </MemberField>
                                }
                                {member?.job_title &&
                                    <MemberField title={member.job_title}>
                                        <LabelIcon color="warning" sx={{ marginRight: "1rem" }} />
                                        <Typography color="textPrimary" sx={{ userSelect: "text" }} variant="caption" component="div">
                                            {member.job_title}
                                        </Typography>
                                    </MemberField>
                                }
                                <Divider sx={{ marginBottom: "2rem" }} />
                                {member?.education &&
                                    <MemberField tooltip={true} title={member.education}>
                                        <SchoolIcon sx={{ marginRight: "1rem" }} />
                                        <Typography color="textPrimary" sx={{ userSelect: "text" }} variant="caption" component="div">
                                            {member.education}
                                        </Typography>
                                    </MemberField>
                                }
                                {member?.contacts?.telegram &&
                                    <MemberField tooltip={true} title={member.contacts.telegram}>
                                        <TelegramIcon color="secondary" sx={{ marginRight: "1rem" }} />
                                        <Typography color="textPrimary" sx={{ userSelect: "text" }} variant="caption" component="div">
                                            {member.contacts.telegram}
                                        </Typography>
                                    </MemberField>
                                }
                                {member?.contacts?.github &&
                                    <MemberField tooltip={true} title={member.contacts.github}>
                                        <GithubIcon sx={{ marginRight: "1rem" }} />
                                        <Typography color="textPrimary"
                                            sx={{ textOverflow: "ellipsis", userSelect: "text" }}
                                            variant="caption"
                                            component="div"
                                        >
                                            {member.contacts.github}
                                        </Typography>
                                    </MemberField>
                                }
                                {member?.contacts?.email &&
                                    <MemberField tooltip={true} title={member.contacts.email}>
                                        <AlternateEmailIcon sx={{ marginRight: "1rem" }} />
                                        <Typography color="textPrimary"
                                            sx={{ textOverflow: "ellipsis", userSelect: "text" }}
                                            variant="caption"
                                            component="div"
                                        >
                                            {member.contacts.email}
                                        </Typography>
                                    </MemberField>
                                }
                                {member?.contacts?.orcid &&
                                    <MemberField tooltip={true} title={member.contacts.orcid}>
                                        <Box sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            marginRight: "1rem",
                                            width: "24px",
                                            height: "24px",
                                        }}>
                                            <Image
                                                src="/images/orcid_id.svg"
                                                alt="ORCID logo"
                                                width={24}
                                                height={24}
                                                unoptimized
                                                style={{ userSelect: "none" }}
                                            />
                                        </Box>
                                        <Typography sx={{ userSelect: "text" }} variant="caption" component="div">
                                            {member.contacts.orcid}
                                        </Typography>
                                    </MemberField>
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}


export default function About() {
    const { dict } = useI18n();

    if (!dict || !dict.Home) {
        return <div>Loading...</div>;
    }

    const { Home } = dict;

    return (
        <Section id="about">
            <SectionHeader>
                <Typography variant="h4" gutterBottom sx={{
                    textShadow: "0px 3px 10px var(--mui-palette-primary-main)",
                    userSelect: "none",
                    textAlign: "center",
                }}>
                    {Home.About.SectionHeader.h4}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{
                    textShadow: "0px 3px 3px var(--mui-palette-primary-main)",
                    textAlign: "center",
                }}>
                    {Home.About.SectionHeader.body2}
                </Typography>
            </SectionHeader>
            <Content />
        </Section>
    );
}
