/* eslint-disable no-sparse-arrays */
import React from 'react';
import { Box, Button, Flex, Heading, useTheme } from '@chakra-ui/core';

import { view } from '@risingstack/react-easy-state';
import Container from '../../components/container';
import TiltCard from '../../components/tilt-card';

import store from '../../store';

const Hero = () => {
  const theme = useTheme();

  return (
    <Flex
      pos="relative"
      w="100vw"
      h="100vh"
      top="0"
      left="0"
      right="0"
      bottom="0"
      minH="100vh"
      bg="#000"
      color="#fff"
      py="6rem"
      // direction="column"
      justify="center"
      align="center"
      zIndex="100"
      overflow="hidden"
      // transition="all 1s ease"
      // transform={store.showHero ? 'translateY(0)' : 'translateY(-100%)'}
    >
      <Container
        maxW="5xl"
        textAlign="center"
        className="rellax"
        data-rellax-percentage="0.5"
        data-rellax-speed="-5"
      >
        <Heading fontSize={['5xl', , '7xl']} lineHeight="0.95" mb="12">
          Congratulations on getting your new UOB&nbsp;Credit&nbsp;Card
        </Heading>

        <Heading
          as="h2"
          fontSize={['2xl', , '4xl']}
          fontWeight="200"
          lineHeight="1.2"
        >
          Welcome to the UOB family, we are delighted that you’ve joined us. An
          abundance of perks, benefits, and privileges await you.
        </Heading>

        <Box>
          <Button
            mt="16"
            // colorScheme="brand"
            bg="transparent"
            size="lg"
            fontSize="4xl"
            fontWeight="900"
            lineHeight="1"
            borderRadius="lg"
            // border="2px solid"
            p="2px"
            h="initial"
            css={{
              backgroundClip: 'content-box,border-box',
              backgroundImage:
                'linear-gradient(#000,#000),linear-gradient(to right,#333,#333)'
            }}
            _hover={{
              bg: 'transparent',
              backgroundClip: 'content-box,border-box',
              backgroundImage:
                'linear-gradient(#000,#000),linear-gradient(to left,#ec6192 4.44%,#ec4c34 21.45%,#ffbd2b 37.21%,#ebde56 54.63%,#57c754 70.8%,#53a1eb 84.07%)'
            }}
            onClick={() => {
              confetti();
              setTimeout(() => {
                store.showHero = false;
              }, 2000);
            }}
          >
            <Box p="0.6em 1em 0.4em">Explore Your Card</Box>
          </Button>
        </Box>
      </Container>

      <Box
        id="confetti-wrapper"
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="-1"
      />

      <Flex pos="absolute" left="0" right="0" bottom="0" h="0">
        {[...Array(25)].map((val, i) => (
          <Box
            key={i}
            w={1 / 25}
            h="100rem"
            bg="brand.500"
            borderRadius="lg"
            className="rellax"
            data-rellax-speed={Math.random() * 4}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default view(Hero);

const confetti = () => {
  for (let i = 0; i < 100; i += 1) {
    // Random rotation
    const randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    const randomWidth = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    );
    const randomHeight = Math.floor(
      Math.random() *
        Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    );

    // Random animation-delay
    const randomAnimationDelay = Math.floor(Math.random() * 10);

    // Random colors
    const colors = [
      '#57c754',
      '#ec4c34',
      '#ec6192',
      '#53a1eb',
      '#ebde56',
      '#8497B0'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create confetti piece
    const confetti = document.createElement('div');
    confetti.className = ['confetti', 'confetti-2'][
      Math.floor(Math.random() * 2)
    ];
    confetti.style.top = `${randomHeight}px`;
    confetti.style.left = `${randomWidth}px`;
    confetti.style.backgroundColor = randomColor;
    confetti.style.transform = `skew(15deg) rotate(${randomRotation}deg)`;
    confetti.style.animationDelay = `${randomAnimationDelay}s`;
    document.getElementById('confetti-wrapper').appendChild(confetti);
  }
};
