/* eslint-disable no-sparse-arrays */
import React from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  useTheme
} from '@chakra-ui/core';

import { Fade } from 'react-awesome-reveal';
import Container from '../../components/container';
// import TiltCard from '../../components/tilt-card';
// import cards from './cards.json';
// import ScrollIn from '../../components/scroll-in';
import FadeIn from '../../components/fade-in';

const Activate = () => {
  const theme = useTheme();

  return (
    <Flex
      id="activate"
      // borderTopWidth="1px"
      minH="100vh"
      // bg="brand.500"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, #000)`}
      color="#fff"
      py="12rem"
      pos="relative"
      zIndex="10"
      overflow="hidden"
      direction="column"
      justify="center"
      align="center"
    >
      <Container maxW="2xl" mb="16">
        <SimpleGrid columns="6" spacing="4" fontSize="4xl" textAlign="center">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num}>
              <AspectRatio
                ratio={1}
                borderWidth="2px"
                borderColor="brand.500"
                borderRadius="1.5rem"
                // color="brand.200"
              >
                <Flex justify="center" align="center">
                  <Fade
                    direction="up"
                    delay={num * 200}
                    duration={500}
                    css={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <i className="far fa-asterisk" />
                  </Fade>
                </Flex>
              </AspectRatio>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      <Container textAlign="center" maxW="5xl">
        <FadeIn delay={0}>
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
        </FadeIn>

        <FadeIn delay={200}>
          <Heading
            as="h2"
            maxW="3xl"
            mx="auto"
            fontSize={['2xl', , '3xl']}
            fontWeight="200"
            lineHeight="1.2"
            mb="16"
          >
            Create your 6-digit PIN to start using your Card. For more info on
            your PIN and to activate your Card, visit{' '}
            <Link href="https://uob.my/pin">UOB.my/pin</Link>
          </Heading>
        </FadeIn>

        <FadeIn delay={400}>
          <Flex justify="center" align="center">
            <Button
              as="a"
              href="https://www.uob.com.my/personal/cards/tools-tips/pin-n-pay.page#creatingyourpin"
              colorScheme="brand"
              variant="outline"
              // bg="transparent"
              size="lg"
              fontSize={['3xl', , '4xl']}
              fontWeight="900"
              lineHeight="1"
              borderRadius="lg"
              // borderColor="white"
              color="white"
              borderWidth="2px"
              p="2px"
              h="initial"
            >
              <Box p="0.6em 1em 0.4em">Find Out More</Box>
            </Button>
          </Flex>
        </FadeIn>
      </Container>
    </Flex>
  );
};

export default Activate;
