/* eslint-disable no-sparse-arrays */
import React, { useEffect, useState } from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  useTheme
} from '@chakra-ui/core';

import { view } from '@risingstack/react-easy-state';
import { mix, rgba } from 'polished';
import { useInterval } from 'react-use';
import { Fade } from 'react-awesome-reveal';
import Container from '../../components/container';
import TiltCard from '../../components/tilt-card';

import cards from './cards.json';

const cardImages = cards.map((card) => card.image);
const cardColors = cards.map((card) => card.color);

const Hero = ({ toggleExplore }) => {
  const theme = useTheme();
  const [cardIndex, setCardIndex] = useState(0);

  useEffect(() => {
    confettiInit();
  }, []);

  useInterval(() => {
    setCardIndex(cardIndex + 1);
  }, 5000);

  return (
    <Flex
      pos="relative"
      align="center"
      w="100vw"
      top="0"
      left="0"
      right="0"
      bottom="0"
      minH="100vh"
      bg="#000"
      color="#fff"
      py="6rem"
      zIndex="100"
      overflow="hidden"
      // transition="all 1s ease"
      // transform={store.showHero ? 'translateY(0)' : 'translateY(-100%)'}
    >
      <Container h="100%">
        <Flex h="100%" align="center" wrap="wrap" mx="-8">
          <Box
            w={['full', , 1 / 2]}
            p={8}
            textAlign={['center', , 'left']}
            // className="rellax"
            // data-rellax-percentage="0.5"
            // data-rellax-speed="-5"
          >
            <Fade>
              <Heading
                fontSize={['5xl', , '7xl']}
                lineHeight="0.95"
                mb="12"
                letterSpacing="-0.02em"
              >
                Congratulations on getting your new UOB Credit&nbsp;Card
              </Heading>
            </Fade>

            <Fade delay={300}>
              <Heading
                as="h2"
                fontSize={['3xl', , '4xl']}
                fontWeight="200"
                lineHeight="1.2"
              >
                Welcome to the UOB family, we are delighted that you’ve joined
                us. An abundance of perks, benefits, and privileges await you.
              </Heading>
            </Fade>

            <Fade delay={600}>
              <Box>
                <Button
                  mt="16"
                  // colorScheme="brand"
                  bg="transparent"
                  size="lg"
                  fontSize={['3xl', , '4xl']}
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
                    setTimeout(() => {
                      document
                        .getElementById('explore')
                        .scrollIntoView({ behavior: 'smooth' });
                    }, 10);
                  }}
                >
                  <Box p="0.6em 1em 0.4em">Explore your Card</Box>
                </Button>
              </Box>
            </Fade>
          </Box>

          <Box
            w={['full', , 1 / 2]}
            px="12"
            py="16"
            textAlign="center"
            // className="rellax"
            // data-rellax-percentage="0.5"
            // data-rellax-speed="-6"
          >
            <Fade duration={3000} delay={500} triggerOnce>
              <Box>
                <TiltCard
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  trackOnWindow
                  glareEnable
                  glareMaxOpacity={0.4}
                  css={{
                    borderRadius: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                    boxShadow: `0 0 2px 3px ${rgba(
                      mix(0.9, '#000', cardColors[cardIndex % 7]),
                      0.5
                    )}, 0 2px 200px ${rgba(
                      cardColors[cardIndex % 7],
                      0.5
                    )}, 0 2px 56px ${rgba(cardColors[cardIndex % 7], 0.25)}`,
                    overflow: 'hidden'
                  }}
                >
                  <AspectRatio ratio={86 / 54}>
                    <Box
                      className="uobcard"
                      {...theme.insetProps}
                      zIndex="-1"
                      transition="all 0.5s ease"
                      background={`url(${require(`../../images/cards/${
                        cardImages[cardIndex % 7]
                      }`)}) no-repeat center/cover`}
                      w="100%"
                      borderRadius="clamp(0.75rem, 1.5vw, 1.5rem)"
                      transform="scale(1.01)"
                      // border="2px solid"
                      overflow="hidden"
                    />
                  </AspectRatio>
                </TiltCard>
              </Box>
            </Fade>
          </Box>
        </Flex>
      </Container>

      <Box
        id="confetti-wrapper"
        pos="absolute"
        top="0"
        left="0"
        bottom="0"
        right="0"
        overflow="hidden"
        zIndex="-1"
        opacity="0.5"
        css={{
          ':after': {
            content: '""',
            position: 'absolute',
            height: '30%',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))'
          }
        }}
      />
    </Flex>
  );
};

export default view(Hero);

const confettiInit = () => {
  const wrapper = document.getElementById('confetti-wrapper');
  for (let i = 0; i < 50; i += 1) {
    // Random rotation
    const randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    const randomWidth = Math.floor(Math.random() * wrapper.offsetWidth);
    const randomHeight = Math.floor(Math.random() * wrapper.offsetHeight);

    // Random animation-delay
    const randomAnimationDelay = Math.floor(Math.random() * 5);

    // Random colors
    const colors = [
      '#09369F',
      '#ed1c2b',
      // '#57c754',
      // '#ec4c34',
      // '#ec6192',
      // '#53a1eb',
      // '#ebde56',
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
    wrapper.appendChild(confetti);
  }
};
