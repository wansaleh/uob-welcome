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

import { rgba } from 'polished';
import Container from '../../components/container';
import TiltCard from '../../components/tilt-card';
import cards from './cards.json';
import ScrollIn from '../../components/scroll-in';

const Explore = () => {
  const theme = useTheme();

  return (
    <Box
      minH="100vh"
      bg="brand.500"
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
                  css={{
                    p: { opacity: 0.5 },
                    ':hover': {
                      p: { opacity: 1 },
                      '.uobcard': {
                        // transform: 'translateY(-2px)',
                        boxShadow: `0 8px 20px ${rgba(
                          '#000',
                          0.4
                        )}, 0 2px 1px ${rgba('#000', 0.25)}, 0 5px 10px ${rgba(
                          '#000',
                          0.15
                        )}`
                      }
                    }
                  }}
                >
                  <TiltCard
                    glareEnable
                    glareMaxOpacity={0.2}
                    css={{
                      borderRadius: 'clamp(0.75rem, 1vw, 1.5rem)',
                      overflow: 'hidden'
                    }}
                  >
                    <AspectRatio ratio={30 / 19}>
                      <Box
                        className="uobcard"
                        {...theme.insetProps}
                        zIndex="-1"
                        background={`url(${require(`../../images/cards/${card.image}`)}) no-repeat center/cover`}
                        w="100%"
                        borderRadius="clamp(0.75rem, 1vw, 1.5rem)"
                        overflow="hidden"
                        transition="all 0.2s ease"
                        boxShadow={`0 5px 12px ${rgba(
                          '#000',
                          0.2
                        )}, 0 2px 1px ${rgba('#000', 0.15)}`}
                      />
                    </AspectRatio>
                  </TiltCard>
                  <Text
                    mt="3"
                    fontSize="2xl"
                    fontWeight="600"
                    color="inherit"
                    transition="all 0.2s ease"
                  >
                    {card.name}
                  </Text>
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
