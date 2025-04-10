'use client';

import { ParallaxProvider } from 'react-scroll-parallax';

export default function parallaxProvider({ children }) {
    return <ParallaxProvider>{children}</ParallaxProvider>;
}