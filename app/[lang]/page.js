"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Fade from '@mui/material/Fade';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Navbar from "./_components/Navbar"
import Hero from "./_components/Hero"
import Features from "./_components/Features"
import Applications from "./_components/Applications"
import Works from "./_components/Works"
import Capabilities from "./_components/Capabilities"
import CallToAction from "./_components/CallToAction"
import About from "./_components/About"
import Faq from "./_components/Faq"
import Footer from "./_components/Footer"

function ScrollTop() {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 100 });
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
  };
  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: `999` }}
      >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon color="second" fontSize="large" />
        </Fab>
      </Box>
    </Fade>
  );
}

function PageContent() {
  return (
    <>
      <Navbar />
      <Hero background={"/images/background-1.webp"} />
      <Applications background={"/images/background-1.webp"} />
      <Features />
      <Works />
      <CallToAction />
      <Capabilities />
      <About background={"/images/background-3.png"} />
      <Faq />
      <Footer />
    </>
  )
}

export default function Page() {
  return (
    <Box sx={{
      overflowX: `hidden`,
      minWidth: `320px`,
      margin: `0 auto`,
    }}>
      <Toolbar id="back-to-top-anchor" sx={{ position: `absolute` }} />
      <PageContent />
      <ScrollTop />
    </Box>
  )
}
