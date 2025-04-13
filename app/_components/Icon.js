"use client"
import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import Image from 'next/image';

export default function Icon({ size = "m" }) {
    const { mode } = useColorScheme();
    const preset = {
        l: 72,
        m: 48,
        s: 32
    }
    return (
        <Image
            src={mode == "dark" ? "/images/light-logo.svg" : "/images/dark-logo.svg"}
            alt="logo"
            width={preset[size]}
            height={preset[size]}
            unoptimized
            style={{
                userSelect: `none`,
            }}
            href="/"
        />
    );
}
