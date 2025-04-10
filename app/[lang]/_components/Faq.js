import { useI18n } from '../../i18n-context';
import * as React from 'react';
import {
    Box, Container, Typography
    } from '@mui/material'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionHeader from "./SectionHeader"
import Section from "./Section"

function FAQ() {
    const [expanded, setExpanded] = React.useState([]);
    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(
            isExpanded ? [...expanded, panel] : expanded.filter((item) => item !== panel),
        );
    };
    const { dict } = useI18n()
    const h2 = dict.Home.Faq.h2
    const content = dict.Home.Faq.Content
    return (
        <Container
            id="faq"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 16 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Typography
                component="h2"
                variant="h4"
                sx={{
                    color: 'text.primary',
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'left', md: 'center' },
                }}
            >{h2}</Typography>
            <Box sx={{ width: '100%' }}>
                {
                    content.map((item, i) => {
                        return (
                            <Accordion key={i}
                                expanded={expanded.includes(`panel${i + 1}`)}
                                onChange={handleChange(`panel${i + 1}`)}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${i + 1}d-content`}
                                    id={`panel${i + 1}d-header`}
                                >
                                    <Typography component="span" variant="subtitle2">
                                        {item.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    {item.answer.map((answer, j) => {
                                        return (
                                            <Typography key={j}
                                                variant="body2"
                                                gutterBottom
                                                sx={{ maxWidth: { sm: '100%', md: '70%' } }}
                                            >{answer}</Typography>
                                        )
                                    })}

                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }
            </Box>
        </Container>
    );
}

export default function Faq() {
    const { dict } = useI18n()
    const content = dict.Home.Faq.SectionHeader
    return (
        <Section id="faq" sx={{ minHeight: `50vh` }}>
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
            <FAQ />
        </Section>
    )
}