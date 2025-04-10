// components/ScrollGrow.jsx
"use client";
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Grow } from '@mui/material';

const ScrollGrow = ({
  children,
  animationDelay = 200,
  threshold = 0.01,
  timeout = 200,
  transformOrigin = '0 0 0',
  ...growProps
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  const handleIntersection = useCallback(([entry]) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        setIsVisible(true);
      }, animationDelay);
    }
  }, [animationDelay]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold,
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [handleIntersection, threshold]);

  return (
    <div ref={componentRef}>
      <Grow
        in={isVisible}
        timeout={timeout}
        style={{ transformOrigin }}
        {...growProps}
      >
        {children}
      </Grow>
    </div>
  );
};

export default ScrollGrow;