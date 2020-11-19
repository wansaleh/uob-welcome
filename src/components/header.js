/* eslint-disable no-sparse-arrays */
import { Box, Flex } from '@chakra-ui/react';
// import NextLink from 'next/link';

import Logo from '../images/logo-blue';
import Seal from '../images/rby-bottom';
import mq from '../styles/mq';
import Container from './container';

const Header = ({ basic = false, ...props }) => {
  return (
    <Box
      as="header"
      // pos={['relative', , 'absolute']}
      pos="absolute"
      w="100%"
      // h={['4rem', '5rem', '6rem']}
      py="8"
      zIndex="1000"
      // bg={['white', , 'transparent']}
      // className="rellax"
      // data-rellax-speed="-10"
      {...props}
    >
      <Container>
        <Flex alignItems="center" position="relative" zIndex="10">
          <Box>
            <span className="invisible">UOB</span>
            <Logo
              css={mq({
                height: '1.75rem',
                '.uob-blue': {
                  fill: basic ? '#00377b' : '#fff'
                }
              })}
            />
          </Box>
          <Box flex="1" />
          {/* <Box>
            <span className="invisible">Right By You</span>
            <Seal
              css={mq({
                height: '2.5rem',
                '.uob-blue': { fill: basic ? '#00377b' : '#fff' }
              })}
            />
          </Box> */}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
