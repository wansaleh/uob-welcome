/* eslint-disable no-sparse-arrays */
import React from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
  useTheme
} from '@chakra-ui/core';

import { rgba } from 'polished';
import Container from '../../components/container';
// import TiltCard from '../../components/tilt-card';
// import cards from './cards.json';
import ScrollIn from '../../components/scroll-in';

const Activate = () => {
  const theme = useTheme();

  return (
    <Flex
      id="activate"
      // borderTopWidth="1px"
      minH="100vh"
      bg="#111"
      // bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, ${theme.colors.brand[800]})`}
      color="#fff"
      py="12rem"
      pos="relative"
      zIndex="10"
      overflow="hidden"
      align="center"
    >
      <Container textAlign="center" maxW="5xl">
        <ScrollIn>
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
        </ScrollIn>

        <ScrollIn>
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
        </ScrollIn>

        <ScrollIn>
          <Flex mb="20" justify="center" align="center">
            <Button
              as="a"
              href="https://www.uob.com.my/personal/cards/tools-tips/pin-n-pay.page#creatingyourpin"
              colorScheme="brand"
              // bg="transparent"
              size="lg"
              fontSize={['3xl', , '4xl']}
              fontWeight="900"
              lineHeight="1"
              borderRadius="lg"
              // border="2px solid"
              p="2px"
              h="initial"
            >
              <Box p="0.6em 1em 0.4em">Find Out More</Box>
            </Button>
          </Flex>
        </ScrollIn>
      </Container>
    </Flex>
  );
};

export default Activate;
