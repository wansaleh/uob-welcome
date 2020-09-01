/* eslint-disable no-sparse-arrays */
import React from 'react';
import { Box, Button, Flex, Heading, Link, useTheme } from '@chakra-ui/core';

import Container from '../../components/container';
// import TiltCard from '../../components/tilt-card';
// import cards from './cards.json';
import ScrollIn from '../../components/scroll-in';

const chevronProps = {
  css: {
    height: '1em',
    display: 'inline-block'
  }
};

// const Chevron = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 20 20"
//     fill="currentColor"
//     {...chevronProps}
//   >
//     <path
//       fillRule="evenodd"
//       d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
//       clipRule="evenodd"
//     />
//   </svg>
// );

const Activate = () => {
  const theme = useTheme();

  return (
    <Flex
      id="activate"
      // borderTopWidth="1px"
      minH="100vh"
      // bg="brand.500"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, #000)`}
      color="#fff"
      py="12rem"
      pos="relative"
      zIndex="10"
      overflow="hidden"
      direction="column"
      justify="center"
      align="center"
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
            Activate your Card
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
            Create your 6-digit PIN to start using your Card. For more info on
            your PIN and to activate your Card, visit{' '}
            <Link href="https://uob.my/pin">UOB.my/pin</Link>
          </Heading>
        </ScrollIn>

        <ScrollIn>
          <Flex mb="20" justify="center" align="center">
            <Button
              as="a"
              href="https://www.uob.com.my/personal/cards/tools-tips/pin-n-pay.page#creatingyourpin"
              colorScheme="brand"
              variant="outline"
              // bg="transparent"
              size="lg"
              fontSize={['3xl', , '4xl']}
              fontWeight="900"
              lineHeight="1"
              borderRadius="lg"
              // borderColor="white"
              color="white"
              borderWidth="2px"
              p="2px"
              h="initial"
            >
              <Box p="0.6em 1em 0.4em">Find Out More</Box>
            </Button>
          </Flex>
        </ScrollIn>
      </Container>

      {/* <Container>
        <SimpleGrid
          mb="20"
          columns="3"
          spacing="16"
          css={{ ol: { lineHeight: 1.3, li: { marginBottom: '0.75rem' } } }}
        >
          <Box textAlign="left">
            <Heading as="h3" fontSize="2xl" mb="4">
              Method 1
            </Heading>
            <OrderedList>
              <ListItem>
                Download UOB Mighty Malaysia mobile app from Google Play Store,
                Apple App Store, or Huawei AppGallery
              </ListItem>
              <ListItem>
                Sign up or log in to Mighty <Chevron /> Tap on “Accounts”{' '}
                <Chevron /> Select your Card <Chevron /> Tap “Settings”{' '}
                <Chevron /> “Reset card PIN”
              </ListItem>
              <ListItem>Create your new 6-digit PIN</ListItem>
            </OrderedList>
          </Box>

          <Box textAlign="left">
            <Heading as="h3" fontSize="2xl" mb="4">
              Method 2
            </Heading>
            <OrderedList>
              <ListItem>
                Sign up or log in to UOB Personal Internet Banking via{' '}
                <Link href="https://www.uob.com.my">www.UOB.com.my</Link>
              </ListItem>
              <ListItem>
                Go to “Account Services” <Chevron /> “Manage Cards” <Chevron />{' '}
                Select your Card <Chevron />
                Click “PIN Reset”
              </ListItem>
              <ListItem>Create your new 6-digit PIN</ListItem>
            </OrderedList>
          </Box>

          <Box textAlign="left">
            <Heading as="h3" fontSize="2xl" mb="4">
              Method 2
            </Heading>
            <OrderedList>
              <ListItem>
                Sign up or log in to UOB Personal Internet Banking via{' '}
                <Link href="https://www.uob.com.my">www.UOB.com.my</Link>
              </ListItem>
              <ListItem>
                Go to “Account Services” <Chevron /> “Manage Cards” <Chevron />{' '}
                Select your Card <Chevron />
                Click “PIN Reset”
              </ListItem>
              <ListItem>Create your new 6-digit PIN</ListItem>
            </OrderedList>
          </Box>
        </SimpleGrid>
      </Container> */}
    </Flex>
  );
};

export default Activate;
