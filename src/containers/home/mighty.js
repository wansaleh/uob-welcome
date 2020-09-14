/* eslint-disable no-sparse-arrays */
import React from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useTheme
} from '@chakra-ui/core';

import { mix, rgba } from 'polished';
import Container from '../../components/container';
import TiltCard from '../../components/tilt-card';
import cards from './cards.json';
import ScrollIn from '../../components/scroll-in';

const Mighty = () => {
  const theme = useTheme();

  return (
    <Box
      id="explore"
      minH="100vh"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, ${theme.colors.brand[800]})`}
      color="#fff"
      py="12rem"
      pos="relative"
      zIndex="10"
      overflow="hidden"
    >
      <Container textAlign="center">
        <ScrollIn>
          <Heading fontSize={['5xl', , '7xl']} lineHeight="0.95" mb="12">
            Explore your UOB Card
          </Heading>
        </ScrollIn>

        <ScrollIn>
          <Heading
            as="h2"
            maxW="3xl"
            mx="auto"
            fontSize={['2xl', , '4xl']}
            fontWeight="200"
            lineHeight="1.2"
            mb="16"
          >
            Be it shopping, travelling, dining – we’ve got you covered. Click on
            your Card below to find out more.
          </Heading>
        </ScrollIn>
      </Container>
    </Box>
  );
};

export default Mighty;
