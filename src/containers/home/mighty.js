/* eslint-disable no-sparse-arrays */
import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  useTheme
} from '@chakra-ui/core';

import { rgba } from 'polished';
import Container from '../../components/container';
import TiltCard from '../../components/tilt-card';
import SlideIn from '../../components/slide-in';

const Mighty = () => {
  const theme = useTheme();

  return (
    <Box
      id="mighty"
      minH="100vh"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[700]}, ${theme.colors.brand[500]} 60%)`}
      color="#fff"
      pt={['6rem', , '12rem']}
      pb="5rem"
      pos="relative"
      zIndex="10"
      overflow="hidden"
    >
      <Container textAlign="center" maxW="5xl">
        <SlideIn>
          <Heading
            maxW="4xl"
            mx="auto"
            fontSize={['xl', '2xl', '3xl']}
            lineHeight="0.95"
            mb="6"
            letterSpacing="tight"
            // opacity="0.5"
            color="#61A3FF"
          >
            Mobile Banking
          </Heading>
        </SlideIn>

        <SlideIn delay={200}>
          <Heading
            maxW="4xl"
            mx="auto"
            fontSize={['4xl', '5xl', '7xl']}
            lineHeight="0.95"
            mb="12"
            letterSpacing="tight"
            // color="brand.200"
          >
            Bring home the bank,
            <br />
            bring home Mighty
          </Heading>
        </SlideIn>

        <SlideIn delay={400}>
          <Heading
            as="h2"
            maxW="4xl"
            mx="auto"
            fontSize={['xl', '2xl', '3xl']}
            fontWeight="200"
            lineHeight="1.2"
            mb="16"
          >
            Life simplified with the all-new UOB Mighty. Redesigned to make
            banking easier. Manage your finances anytime, anywhere with the new
            and improved UOB Mighty. Our all-in-one app makes your mobile
            banking experience easier and mightier.
          </Heading>
        </SlideIn>

        <Flex mb="20" justify="center" align="center" wrap="wrap">
          <SlideIn>
            <Box
              mx={[1, , 2]}
              borderRadius="22.5%"
              overflow="hidden"
              borderColor="gray.400"
              borderWidth="2px"
              mb={[4, , 0]}
            >
              <Image
                pos="relative"
                src={require('../../images/mighty/icon.png')}
                alt=""
                d="block"
                w={['6rem']}
                h={['6rem']}
              />
            </Box>
          </SlideIn>
          <Box flexBasis="100%" h="0" d={['block', , 'none']} />
          <SlideIn delay={200}>
            <Link
              href="https://apps.apple.com/my/app/uob-mighty-malaysia/id1239716055"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line import/no-unresolved
                __html: require('../../images/mighty/appstore.svg?include')
              }}
              d="block"
              h={['2rem', , '3rem']}
              css={{ svg: { height: '100%' } }}
              mx={[1, , 2]}
            />
          </SlideIn>
          <SlideIn delay={400}>
            <Link
              href="https://play.google.com/store/apps/details?id=com.uob.mightymy&hl=en"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line import/no-unresolved
                __html: require('../../images/mighty/googleplay.svg?include')
              }}
              d="block"
              h={['2rem', , '3rem']}
              css={{ svg: { height: '100%' } }}
              mx={[1, , 2]}
            />
          </SlideIn>
          <SlideIn delay={600}>
            <Link
              href="https://appgallery.huawei.com/#/app/C101978121"
              dangerouslySetInnerHTML={{
                // eslint-disable-next-line import/no-unresolved
                __html: require('../../images/mighty/appgallery.svg?include')
              }}
              d="block"
              h={['2rem', , '3rem']}
              css={{ svg: { height: '100%' } }}
              mx={[1, , 2]}
            />
          </SlideIn>
        </Flex>
      </Container>

      <Container maxW="5xl">
        <SimpleGrid
          columns={3}
          spacing={[2, , 8]}
          zIndex="20"
          pos="relative"
          mx={[-6, , 0]}
        >
          {[1, 2, 3].map((num) => (
            <SlideIn key={num} delay={200 * num}>
              <Box>
                <TiltCard
                  tiltMaxAngleX={0}
                  tiltMaxAngleY={3}
                  // glareEnable
                  // glareMaxOpacity={0.2}
                  css={{
                    borderRadius: 'clamp(0.5rem, 3vw, 3rem)',
                    boxShadow: 'var(--shadow-card)',
                    overflow: 'hidden',
                    position: 'relative',
                    zIndex: 10
                  }}
                >
                  <Image
                    src={require(`../../images/mighty/${num}.png`)}
                    alt=""
                    w="full"
                  />
                </TiltCard>
              </Box>
            </SlideIn>
          ))}
        </SimpleGrid>
      </Container>

      <Box
        bg="#fff"
        pos="absolute"
        left="0"
        right="0"
        bottom="0"
        h={['15rem', , '30rem']}
      >
        <svg
          className="waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          css={{
            width: '100%',
            height: '30%',
            background: theme.colors.brand[500]
          }}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use xlinkHref="#gentle-wave" x="48" fill="rgba(255,255,255,0.7" />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>

          <style jsx>{`
            .parallax > use {
              animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5)
                infinite;
            }
            .parallax > use:nth-child(1) {
              animation-delay: -2s;
              animation-duration: 7s;
            }
            .parallax > use:nth-child(2) {
              animation-delay: -3s;
              animation-duration: 10s;
            }
            .parallax > use:nth-child(3) {
              animation-delay: -4s;
              animation-duration: 13s;
            }
            .parallax > use:nth-child(4) {
              animation-delay: -5s;
              animation-duration: 20s;
            }
            @keyframes move-forever {
              0% {
                transform: translate3d(-90px, 0, 0);
              }
              100% {
                transform: translate3d(85px, 0, 0);
              }
            }
          `}</style>
        </svg>
      </Box>
    </Box>
  );
};

export default Mighty;
