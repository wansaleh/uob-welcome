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

const Explore = () => {
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

      <Container maxW="5xl" textAlign="center">
        <Flex wrap="wrap" w="full" justify="center">
          {cards.map((card, i) => (
            <Box
              key={i}
              p={[4, , 8]}
              // pt="4"
              // pb="6"
              textAlign="center"
              w={['full', 1 / 2]}
            >
              <ScrollIn key={i}>
                <Link
                  href={card.link}
                  color="white"
                  transition="all 0.2s ease"
                  textDecoration="none !important"
                  display="block"
                >
                  <TiltCard
                    glareEnable
                    glareMaxOpacity={0.2}
                    css={{
                      borderRadius: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                      boxShadow: `0 3px 0 0 ${rgba(
                        mix(0.9, '#000', card.color),
                        0.35
                      )}, 0 0 30px ${rgba(card.color, 0.25)}`,
                      overflow: 'hidden'
                    }}
                  >
                    <AspectRatio ratio={86 / 54}>
                      <Box
                        className="uobcard"
                        {...theme.insetProps}
                        zIndex="-1"
                        background={`url(${require(`../../images/cards/${card.image}`)}) no-repeat center/cover`}
                        w="100%"
                        transition="all 0.2s ease"
                      />
                    </AspectRatio>
                  </TiltCard>
                  <Flex
                    mt="4"
                    px="6"
                    lineHeight="1"
                    justify="space-between"
                    align="center"
                    fontSize="xl"
                  >
                    <Text
                      fontWeight="300"
                      color="inherit"
                      pos="relative"
                      zIndex="100"
                      transition="all 0.2s ease"
                    >
                      <Text as="span" fontWeight="800">
                        UOB
                      </Text>{' '}
                      {card.name}
                    </Text>

                    <Box
                      dangerouslySetInnerHTML={{
                        __html: require(`../../images/${card.type}.svg?include`)
                      }}
                      opacity="0.25"
                      css={{
                        svg: {
                          height: '1.5rem'
                        }
                      }}
                    />
                  </Flex>
                </Link>
              </ScrollIn>
            </Box>
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Explore;
