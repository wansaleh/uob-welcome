import { Box } from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal';

export default function MyFade({ children, triggerOnce, ...props }) {
  return (
    <Fade triggerOnce {...props}>
      {children}
    </Fade>
  );
}
