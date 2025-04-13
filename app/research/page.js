"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Toolbar from '@mui/material/Toolbar';
import Navbar from "../_components/Navbar"
import Hero from "../_components/Hero"
import CallToAction from "../_components/CallToAction"
import Footer from "../_components/Footer"
import ScrollTop from "../_components/ScrollTop"
import PaperWork from './_components/PaperWork';
import { useI18n } from '../i18n-context';

function PageContent() {
  const { dict } = useI18n()
  const content = dict?.Research.Content
  return (
    <>
      <Navbar />
      <Hero background={"/images/background-4.webp"} fullsize={false} />
      {content.map((e, i) => (<PaperWork item={e} key={i} />))}
      <CallToAction />
      <Footer />
    </>
  )
}

export default function Page({ params }) {
  return (
    <Box sx={{
      overflowX: `hidden`,
      minWidth: `320px`,
      margin: `0 auto`,
    }}>
      <Toolbar id="back-to-top-anchor" sx={{ position: `absolute` }} />
      <PageContent />
      <ScrollTop>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  )
}
