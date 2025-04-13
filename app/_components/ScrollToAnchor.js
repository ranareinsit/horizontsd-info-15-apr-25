'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { Box } from '@mui/material';

function ScrollToAnchor() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lastHash = useRef('');

    useEffect(() => {
        const url = `${pathname}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
        const hashIndex = url.indexOf('#');

        if (hashIndex !== -1) {
            lastHash.current = url.slice(hashIndex + 1);
        }

        if (lastHash.current && document.getElementById(lastHash.current)) {
            setTimeout(() => {
                document.getElementById(lastHash.current)?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                lastHash.current = '';
            }, 100);
        }
    }, [pathname, searchParams]);

    return <Box display="none" />;
}

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


export default ScrollToAnchor;