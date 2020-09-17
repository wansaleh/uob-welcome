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
import SlideIn from '../../components/slide-in';
import Safety from './safety';
import ContactTerms from './contact-terms';

const Activate = () => {
  const theme = useTheme();

  return (
    <Flex
      id="activate"
      // borderTopWidth="1px"
      w="100%"
      // minH="100vh"
      bg="#fff"
      // bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, #000)`}
      color="#000"
      pt={['6rem', , '12rem']}
      pos="relative"
      zIndex="10"
      overflow="hidden"
      direction="column"
      justify="center"
      align="center"
    >
      <Container textAlign="center" maxW="5xl" mb="20">
        <SlideIn delay={0}>
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
        </SlideIn>

        <SlideIn delay={200}>
          <Heading
            as="h2"
            maxW="4xl"
            mx="auto"
            fontSize={['2xl', , '3xl']}
            fontWeight="200"
            lineHeight="1.2"
            mb="8"
          >
            Create your 6-digit PIN to start using your Card.
            <br />
            For more info on your PIN and to activate your Card, visit{' '}
            <Link href="https://uob.my/pin">UOB.my/pin</Link>
          </Heading>
        </SlideIn>

        <SlideIn delay={400}>
          <Flex justify="center" align="center">
            <Button
              as="a"
              href="https://www.uob.com.my/personal/cards/tools-tips/pin-n-pay.page#creatingyourpin"
              colorScheme="brand"
              // variant="outline"
              // bg="transparent"
              size="lg"
              fontSize={['3xl', , '4xl']}
              fontWeight="900"
              lineHeight="1"
              borderRadius="lg"
              // borderColor="white"
              // color="white"
              // borderWidth="2px"
              p="2px"
              h="initial"
            >
              <Box p="0.6em 1em 0.4em">Find Out More</Box>
            </Button>
          </Flex>
        </SlideIn>
      </Container>

      <Container maxW="2xl">
        <SimpleGrid
          columns="6"
          spacing={[3, , 4]}
          fontSize={['2xl', '3xl', '5xl']}
          textAlign="center"
        >
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Box key={num}>
              <AspectRatio
                ratio={1}
                borderWidth="2px"
                borderColor="gray.300"
                borderRadius={['0.75rem', , '1.5rem']}
                color="brand.500"
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
                    <i className="fas fa-asterisk" />
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0"
                      y="0"
                      viewBox="0 0 227.214 227.214"
                      xmlSpace="preserve"
                      css={{ height: '1em' }}
                      fill="currentColor"
                    >
                      <path d="M209.255 160.178l-80.648-46.563 80.637-46.556a7.5 7.5 0 00-7.5-12.99l-80.643 46.559V7.5a7.5 7.5 0 00-15 0v93.121L25.47 54.069a7.498 7.498 0 00-10.245 2.745 7.5 7.5 0 002.745 10.245l80.637 46.556-80.648 46.563a7.5 7.5 0 007.5 12.99l80.643-46.559v93.105a7.5 7.5 0 0015 0v-93.112l80.654 46.566a7.499 7.499 0 0010.245-2.745 7.5 7.5 0 00-2.746-10.245z" />
                    </svg> */}
                  </Fade>
                </Flex>
              </AspectRatio>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Flex>
  );
};

export default Activate;
