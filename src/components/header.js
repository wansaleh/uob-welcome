/* eslint-disable no-sparse-arrays */
import { Box, Flex } from '@chakra-ui/core';
// import NextLink from 'next/link';

import Logo from '../images/logo-blue';
import Seal from '../images/sealmark-blue';
import mq from '../styles/mq';
import Container from './container';

const Header = ({ basic = false, ...props }) => {
  return (
    <Box
      as="header"
      // pos={['relative', , 'absolute']}
      pos="fixed"
      w="100%"
      h={['4rem', '5rem', '6rem']}
      px="4"
      py={[5, 6, 8]}
      zIndex="1000"
      // bg={['white', , 'transparent']}
      {...props}
    >
      <Container h="100%" px="0">
        <Flex alignItems="center" position="relative" zIndex="10" h="100%">
          <Box h="100%">
            <span className="invisible">UOB</span>
            <Logo
              css={mq({
                height: '100%',
                '.uob-blue': {
                  fill: basic ? '#00377b' : '#fff'
                }
              })}
            />
          </Box>
          <Box flex="1" />
          <Box h="100%">
            <span className="invisible">Right By You</span>
            <Seal
              css={mq({
                height: '100%',
                '.uob-blue': { fill: basic ? '#00377b' : '#fff' }
              })}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
