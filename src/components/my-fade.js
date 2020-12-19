import { Box } from '@chakra-ui/react';

export default function MyFade({ children, triggerOnce, ...props }) {
  return <Box {...props}>{children}</Box>;
}
