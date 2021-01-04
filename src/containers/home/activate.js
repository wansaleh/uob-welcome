/* eslint-disable no-sparse-arrays */
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useTheme
} from '@chakra-ui/react';
import React, { useRef } from 'react';
import { isIE } from 'react-device-detect';
// import { Fade } from 'react-awesome-reveal';
import { useInView } from 'react-hook-inview';

import Container from '../../components/container';
import MyFade from '../../components/my-fade';
// import MyFade from '../../components/my-fade';
import SlideIn from '../../components/slide-in';
// import Safety from './safety';
// import ContactTerms from './contact-terms';

const Activate = () => {
  const theme = useTheme();

  const [ref, isVisible] = useInView({
    threshold: 1
  });

  return (
    <Flex
      id="activate"
      // borderTopWidth="1px"
      w="100%"
      // minH="100vh"
      bg="#fff"
      // bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, #000)`}
      color="#000"
      py={['6rem', , '12rem']}
      pos="relative"
      zIndex="10"
      overflow="hidden"
      direction="column"
      justify="center"
      align="center"
    >
      <Container textAlign="center" maxW="5xl" mb="20">
        <SlideIn delay={0}>
          <Heading
            maxW="4xl"
            mx="auto"
            fontSize={['5xl', , '7xl']}
            lineHeight="0.95"
            mb="12"
            letterSpacing="tight"
          >
            Activate your Card
          </Heading>
        </SlideIn>

        <SlideIn delay={200}>
          <Heading
            as="h2"
            maxW="4xl"
            mx="auto"
            fontSize={['2xl', , '3xl']}
            fontWeight="200"
            lineHeight="1.2"
            mb="2"
          >
            Create your 6-digit PIN to start using your Card.
          </Heading>
          <Text mb="8" fontSize="xl" lineHeight="1.2" opacity="0.5">
            For more info on your PIN and to activate your Card, visit{' '}
            <Link href="https://uob.my/pin">UOB.my/pin</Link>
          </Text>
        </SlideIn>

        <SlideIn delay={400}>
          <Flex justify="center" align="center">
            <Button
              as="a"
              href="https://www.uob.com.my/personal/cards/tools-tips/pin-n-pay.page#creatingyourpin"
              colorScheme="brand"
              // variant="outline"
              // bg="transparent"
              size="lg"
              fontSize={['3xl', , '4xl']}
              fontWeight="900"
              lineHeight="1"
              borderRadius="lg"
              // borderColor="white"
              // color="white"
              // borderWidth="2px"
              p="2px"
              h="initial"
              _hover={{ bg: 'brandAlt.500' }}
            >
              <Box p="0.6em 1em 0.4em">Create PIN</Box>
            </Button>
          </Flex>
        </SlideIn>
      </Container>

      <Container maxW="2xl">
        <Flex fontSize={['2xl', '3xl', '5xl']} textAlign="center" ref={ref}>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num} p="2" flex="1">
              <AspectRatio
                ratio={1}
                borderWidth="2px"
                borderColor="gray.300"
                borderRadius={['0.75rem', , '1.5rem']}
                color="brand.500"
              >
                <Flex justify="center" align="center">
                  <MyFade
                    // direction="up"
                    delay={num * 250}
                    duration={250}
                    css={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      // opacity: isVisible || isIE ? 1 : 0,
                      opacity: 1,
                      // transform: !isVisible
                      //   ? 'translateY(100%)'
                      //   : 'translateY(0)',
                      transition: `all 0.3s ease-out ${num * 200}ms`
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      width="1em"
                      height="1em"
                    >
                      <path d="M 17.699219 17 L 23.898438 25.398438 L 21.5 27 L 16 18.300781 L 10.5 27 L 8.199219 25.398438 L 14.398438 17 L 5.101563 14.601563 L 6 12 L 15.101563 15.199219 L 14.5 5 L 17.5 5 L 17 15.199219 L 26 12 L 26.800781 14.699219 Z" />
                    </svg>
                  </MyFade>
                </Flex>
              </AspectRatio>
            </Box>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Activate;
