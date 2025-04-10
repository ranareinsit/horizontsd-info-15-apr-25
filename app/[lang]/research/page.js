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
import Footer from "../_components/Footer"
import Work1 from "./_components/Work1"
import Work2 from "./_components/Work2"
import Work3 from "./_components/Work3"

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: `999` }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function PageContent() {
  return (
    <>
      <Navbar />
      <Hero background={"/images/background-4.jpg"} />
      <Work1 />
      <Work2 />
      <Work3 />
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
