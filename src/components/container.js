import { Box, useTheme } from '@chakra-ui/core';

const Container = ({ children, ...props }) => {
  const theme = useTheme();
  return (
    <Box maxW="1400px" w="full" mx="auto" px="8" {...props}>
      {children}
    </Box>
  );
};

export default Container;
