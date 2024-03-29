// import { keyframes } from '@emotion/react';
import { Box } from '@chakra-ui/react';
import React from 'react';
// import Reveal from 'react-awesome-reveal';

export default function SlideIn({ children, delay, triggerOnce, ...props }) {
  return <Box {...props}>{children}</Box>;
}

// const customAnimation = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(50px);
//   }

//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// export default function SlideIn({ children, ...props }) {
//   return (
//     <Reveal
//       keyframes={customAnimation}
//       duration={500}
//       css={{
//         animationTimingFunction: 'cubic-bezier(0.77, 0, 0.175, 1) !important'
//       }}
//       {...props}
//     >
//       {children}
//     </Reveal>
//   );
// }
