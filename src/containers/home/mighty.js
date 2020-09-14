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

const Mighty = () => {
  const theme = useTheme();

  return (
    <Box
      id="explore"
      minH="100vh"
      // bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, ${theme.colors.brand[800]})`}
      // color="#fff"
      py="12rem"
      pos="relative"
      zIndex="10"
      overflow="hidden"
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
            Bring home the bank,
            <br />
            bring home UOB Mighty
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
            Life simplified with the all new UOB Mighty. Redesigned to make
            banking easier. Manage your finances anytime, anywhere with the new
            and improved UOB Mighty. Our all-in-one app makes your mobile
            banking experience easier and mightier.
          </Heading>
        </ScrollIn>

        <ScrollIn>
          <Flex mb="20" justify="center" align="center">
            <Box
              mx="2"
              borderRadius="22.5%"
              overflow="hidden"
              borderColor="gray.400"
              borderWidth="2px"
            >
              <Image
                pos="relative"
                src={require('../../images/mighty/icon.png')}
                alt=""
                h="6rem"
              />
            </Box>
            <Link
              href="https://apps.apple.com/my/app/uob-mighty-malaysia/id1239716055"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line import/no-unresolved
                __html: require('../../images/mighty/appstore.svg?include')
              }}
              css={{ svg: { height: '4rem' } }}
              mx="2"
            />
            <Link
              href="https://play.google.com/store/apps/details?id=com.uob.mightymy&hl=en"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line import/no-unresolved
                __html: require('../../images/mighty/googleplay.svg?include')
              }}
              css={{ svg: { height: '4rem' } }}
              mx="2"
            />
            <Link
              href="https://appgallery.huawei.com/#/app/C101978121"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line import/no-unresolved
                __html: require('../../images/mighty/appgallery.svg?include')
              }}
              css={{ svg: { height: '4rem' } }}
              mx="2"
            />
          </Flex>
        </ScrollIn>
      </Container>

      <Container maxW="6xl">
        <SimpleGrid columns={[1, , 3]} spacing="8">
          {[1, 2, 3].map((num) => (
            <ScrollIn offset={num * 100}>
              <Box
                jey={num}
                borderRadius="clamp(2rem, 4vw, 3rem)"
                overflow="hidden"
                boxShadow={`0 0 20px ${rgba('#000', 0.1)}, 0 3px 10px ${rgba(
                  '#000',
                  0.075
                )}`}
              >
                <Image
                  src={require(`../../images/mighty/${num}.png`)}
                  alt=""
                  w="full"
                />
              </Box>
            </ScrollIn>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Mighty;
