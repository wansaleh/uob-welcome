/* eslint-disable no-sparse-arrays */
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  useTheme
} from '@chakra-ui/react';
import React from 'react';

// import { Fade } from 'react-awesome-reveal';
import Container from '../../components/container';
import MyFade from '../../components/my-fade';
import SlideIn from '../../components/slide-in';
import TiltCard from '../../components/tilt-card';
// import Safety from './safety';
// import ContactTerms from './contact-terms';

const Privileges = () => {
  const theme = useTheme();

  return (
    <Box
      id="privileges"
      w="100%"
      bg="#fff"
      color="#000"
      pb={['2rem', , '4rem']}
      textAlign={['center', , 'left']}
    >
      <Container maxW="7xl">
        <Flex wrap="wrap" mx="-8" alignItems="flex-end">
          <Box px="8" py="4" w={['full', , 1 / 2]}>
            <MyFade triggerOnce>
              <TiltCard scale={1.015}>
                <img
                  src={require('../../images/privileges.jpg')}
                  alt="Privileges"
                  css={{
                    borderRadius: '0.5em',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                  }}
                />
              </TiltCard>
            </MyFade>
          </Box>

          <Box px="8" py="4" w={['full', , 1 / 2]}>
            <SlideIn triggerOnce delay={0}>
              <Heading
                maxW="4xl"
                mx="auto"
                fontSize={['4xl', , '6xl']}
                mb="4"
                letterSpacing="tight"
              >
                Privileges
              </Heading>
            </SlideIn>

            <SlideIn triggerOnce delay={200}>
              <Heading
                as="h2"
                maxW="4xl"
                mx="auto"
                fontSize={['2xl', , '3xl']}
                fontWeight="200"
                lineHeight="1.2"
              >
                Privileged; that’s what it’s like to have a
                UOB&nbsp;Credit&nbsp;Card.
              </Heading>
            </SlideIn>

            <SlideIn triggerOnce delay={400}>
              <Button
                as="a"
                href="https://www.uob.com.my/personal/promotions/index.page"
                colorScheme="brand"
                _hover={{ bg: 'brandAlt.500' }}
                size="lg"
                mt="8"
              >
                <Box p="0.6em 1em 0.4em">Find out more</Box>
              </Button>
            </SlideIn>
          </Box>
        </Flex>
      </Container>

      <Container maxW="7xl" mt="24">
        <Flex wrap="wrap" mx="-8" alignItems="flex-end">
          <Box px="8" py="4" w={['full', , 1 / 2]}>
            <MyFade triggerOnce>
              <TiltCard scale={1.015}>
                <img
                  src={require('../../images/features.jpg')}
                  alt="Features"
                  css={{
                    borderRadius: '0.5em',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
                  }}
                />
              </TiltCard>
            </MyFade>
          </Box>

          <Box px="8" py="4" w={['full', , 1 / 2]}>
            <SlideIn triggerOnce delay={0}>
              <Heading
                maxW="4xl"
                mx="auto"
                fontSize={['4xl', , '6xl']}
                mb="4"
                letterSpacing="tight"
              >
                Features
              </Heading>
            </SlideIn>

            <SlideIn triggerOnce delay={200}>
              <Heading
                as="h2"
                maxW="4xl"
                mx="auto"
                fontSize={['2xl', , '3xl']}
                fontWeight="200"
                lineHeight="1.2"
              >
                Your UOB Credit Card has lots to offer. Here’s just a few of
                them.
              </Heading>
            </SlideIn>

            <SlideIn triggerOnce delay={400}>
              <Button
                as="a"
                href="https://www.uob.com.my/personal/cards/credit-card-features/index.page"
                colorScheme="brand"
                _hover={{ bg: 'brandAlt.500' }}
                size="lg"
                mt="8"
              >
                <Box p="0.6em 1em 0.4em">Find out more</Box>
              </Button>
            </SlideIn>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Privileges;
