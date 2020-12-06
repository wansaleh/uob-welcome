/* eslint-disable no-sparse-arrays */
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useTheme
} from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import Container from '../../components/container';
import SlideIn from '../../components/slide-in';
// import Safety from './safety';
// import ContactTerms from './contact-terms';

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
      py={['6rem', , '12rem']}
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
            mb="2"
          >
            Create your 6-digit PIN to start using your Card.
          </Heading>
          <Text mb="8" fontSize="xl" lineHeight="1.2" opacity="0.5">
            For more info on your PIN and to activate your Card, visit{' '}
            <Link href="https://uob.my/pin">UOB.my/pin</Link>
          </Text>
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
              _hover={{ bg: 'brandAlt.500' }}
            >
              <Box p="0.6em 1em 0.4em">Create PIN</Box>
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
                    // direction="up"
                    delay={num * 250}
                    duration={100}
                    css={{
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      width="1em"
                      height="1em"
                    >
                      <path d="M 17.699219 17 L 23.898438 25.398438 L 21.5 27 L 16 18.300781 L 10.5 27 L 8.199219 25.398438 L 14.398438 17 L 5.101563 14.601563 L 6 12 L 15.101563 15.199219 L 14.5 5 L 17.5 5 L 17 15.199219 L 26 12 L 26.800781 14.699219 Z" />
                    </svg>
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      width="1.5em"
                      height="1.5em"
                    >
                      <path d="M18.562,14.63379,14.00031,12,18.562,9.36621a1.00016,1.00016,0,0,0-1-1.73242L13,10.26776V5a1,1,0,0,0-2,0v5.26776l-4.562-2.634a1.00016,1.00016,0,0,0-1,1.73242L9.99969,12,5.438,14.63379a1.00016,1.00016,0,0,0,1,1.73242L11,13.73224V19a1,1,0,0,0,2,0V13.73224l4.562,2.634a1.00016,1.00016,0,0,0,1-1.73242Z" />
                    </svg> */}
                    {/* <i className="fas fa-asterisk" /> */}
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
