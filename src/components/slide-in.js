import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from '@emotion/core';

const customAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(50px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default function SlideIn({ children, ...props }) {
  return (
    <Reveal
      keyframes={customAnimation}
      duration={500}
      css={{
        animationTimingFunction: 'var(--ease-out-quart) !important'
      }}
      {...props}
    >
      {children}
    </Reveal>
  );
}
