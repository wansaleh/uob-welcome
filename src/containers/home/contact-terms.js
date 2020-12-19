/* eslint-disable no-sparse-arrays */
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useTheme,
  Wrap
} from '@chakra-ui/react';
import Router from 'next/router';
import { lighten } from 'polished';
import React from 'react';

// import { Fade } from 'react-awesome-reveal';
import Container from '../../components/container';
import MyFade from '../../components/my-fade';

const ContactTerms = () => {
  const theme = useTheme();

  return (
    <Box
      color="#fff"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[700]}, ${theme.colors.brand[900]})`}
      pt={[4, , 20]}
      textAlign="center"
    >
      <Container
        pt="16"
        pb="16"
        // textAlign="left"
        lineHeight="1.3"
      >
        <Flex wrap="wrap">
          <Box py="4" px="2" w={['full', , 1 / 3]}>
            <Box
              fontSize="4xl"
              mb="2"
              color={lighten(0.2, theme.colors.brand[500])}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1em"
                css={{ display: 'inline-block' }}
              >
                <path
                  fill="currentColor"
                  d="M487.8 24.1L387 .8c-14.7-3.4-29.8 4.2-35.8 18.1l-46.5 108.5c-5.5 12.7-1.8 27.7 8.9 36.5l53.9 44.1c-34 69.2-90.3 125.6-159.6 159.6l-44.1-53.9c-8.8-10.7-23.8-14.4-36.5-8.9L18.9 351.3C5 357.3-2.6 372.3.8 387L24 487.7C27.3 502 39.9 512 54.5 512 306.7 512 512 307.8 512 54.5c0-14.6-10-27.2-24.2-30.4zM55.1 480l-23-99.6 107.4-46 59.5 72.8c103.6-48.6 159.7-104.9 208.1-208.1l-72.8-59.5 46-107.4 99.6 23C479.7 289.7 289.6 479.7 55.1 480z"
                />
              </svg>
            </Box>
            <Heading
              as="h3"
              fontSize="3xl"
              mb="8"
              letterSpacing="tight"
              lineHeight="1"
            >
              Contact Centre
            </Heading>
            <Text fontSize="lg" mb="4" maxW="xs" mx="auto">
              If you need further assistance, please call one of our 24-hour
              UOB&nbsp;Contact&nbsp;Centres.
            </Text>
            <Flex
              wrap="wrap"
              fontSize="md"
              justify="space-between"
              maxW="14rem"
              mx="auto"
              lineHeight="1.5"
            >
              <Text as="span" w="50%" textAlign="left">
                Kuala Lumpur
              </Text>
              <Text as="b" w="50%" textAlign="right">
                +603 26128 121
              </Text>
              <Box className="break" />
              <Text as="span" w="50%" textAlign="left">
                Penang
              </Text>
              <Text as="b" w="50%" textAlign="right">
                +604 2401 121
              </Text>
              <Box className="break" />
              <Text as="span" w="50%" textAlign="left">
                Johor Bahru
              </Text>
              <Text as="b" w="50%" textAlign="right">
                +607 2881 121
              </Text>
              <Box className="break" />
              <Text as="span" w="50%" textAlign="left">
                Kuching
              </Text>
              <Text as="b" w="50%" textAlign="right">
                +6082 287 121
              </Text>
              <Box className="break" />
              <Text as="span" w="50%" textAlign="left">
                Kota Kinabalu
              </Text>
              <Text as="b" w="50%" textAlign="right">
                +6088 477 121
              </Text>
            </Flex>
          </Box>

          <Box py="4" px="2" w={['full', , 1 / 3]}>
            <Box
              fontSize="4xl"
              mb="2"
              color={lighten(0.2, theme.colors.brand[500])}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1em"
                css={{ display: 'inline-block' }}
              >
                <path
                  fill="currentColor"
                  d="M196.66 363.33l-13.88-41.62c-3.28-9.81-12.44-16.41-22.78-16.41s-19.5 6.59-22.78 16.41L119 376.36c-1.5 4.58-5.78 7.64-10.59 7.64H96c-8.84 0-16 7.16-16 16s7.16 16 16 16h12.41c18.62 0 35.09-11.88 40.97-29.53L160 354.58l16.81 50.48a15.994 15.994 0 0 0 14.06 10.89c.38.03.75.05 1.12.05 6.03 0 11.59-3.41 14.31-8.86l7.66-15.33c2.78-5.59 7.94-6.19 10.03-6.19s7.25.59 10.19 6.53c7.38 14.7 22.19 23.84 38.62 23.84H288c8.84 0 16-7.16 16-16s-7.16-16-16-16h-15.19c-4.28 0-8.12-2.38-10.16-6.5-11.96-23.85-46.24-30.33-65.99-14.16zM72 96h112c4.42 0 8-3.58 8-8V72c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8zm120 56v-16c0-4.42-3.58-8-8-8H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h112c4.42 0 8-3.58 8-8zm177.9-54.02L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zm95.98 431.42c0 8.8-7.2 16-16 16H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01z"
                />
              </svg>
            </Box>
            <Heading
              as="h3"
              fontSize="3xl"
              mb="8"
              letterSpacing="tight"
              lineHeight="1"
            >
              Cardmember Agreement
            </Heading>
            <Text fontSize="lg" mb="4" maxW="xs" mx="auto">
              Read the full UOB Visa/Mastercard Cardmember Agreement.
            </Text>
            <Button
              variant="solid"
              colorScheme="brand"
              size="lg"
              mt="8"
              _hover={{ bg: 'brandAlt.500' }}
              onClick={() =>
                Router.push(
                  'https://www.uob.com.my/personal/cards/credit-cards-terms.page'
                  // 'https://www.uob.com.my/web-resources/personal/pdf/personal/fees/visamaster-tnc.pdf'
                )
              }
            >
              Read Agreement
            </Button>
          </Box>

          <Box py="4" px="2" w={['full', , 1 / 3]}>
            <Box
              fontSize="4xl"
              mb="2"
              color={lighten(0.2, theme.colors.brand[500])}
            >
              <svg
                aria-hidden="true"
                focusable="false"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="1em"
                css={{ display: 'inline-block' }}
              >
                <path
                  fill="currentColor"
                  d="M16 319.8c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16c0 8.9 7.2 16 16 16zM632 128l-113.5.2-51.2-49.9c-9.1-9.1-21.1-14.1-33.9-14.1h-101c-10.4 0-20.1 3.9-28.3 10-8.4-6.5-18.7-10.3-29.3-10.3h-69.5c-12.7 0-24.9 5.1-33.9 14.1l-50 50H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h56v191.9H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h56c17.6 0 31.8-14.2 31.9-31.7h33.2l81.5 78c29.8 24.1 71.8 23.4 101-.2l7.2 6.2c9.6 7.8 21.3 11.9 33.5 11.9 16 0 31.1-7 41.4-19.6l21.9-26.9c16.4 8.9 42.9 9 60-12l9.5-11.7c6.2-7.6 9.6-16.6 10.5-25.7h48.6c.1 17.5 14.4 31.7 31.9 31.7h56c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8h-56V160.2l56-.2c4.4 0 8-3.6 8-8v-16c-.1-4.5-3.7-8-8.1-8zM460.2 357.6l-9.5 11.7c-5.4 6.6-15.4 8.1-22.5 2.3l-17.8-14.4-41.5 51c-7.5 9.3-21 10.2-29.4 3.4l-30.6-26.1-10.4 12.8c-16.7 20.5-47 23.7-66.6 7.9L142 320.1H96V159.9h38.6l59.3-59.3c3-3 7.1-4.7 11.3-4.7h69.5c.9 2.2.3.7 1.1 2.9l-59 54.2c-28.2 25.9-29.6 69.2-4.2 96.9 14.3 15.6 58.6 39.3 96.9 4.2l22.8-20.9 125.6 101.9c6.8 5.6 7.8 15.7 2.3 22.5zm83.8-37.5h-57.2c-2.5-3.5-5.3-6.9-8.8-9.8l-121.9-99 28.4-26.1c6.5-6 7-16.1 1-22.6s-16.1-6.9-22.6-1l-75.1 68.8c-14.4 13.1-38.6 12-51.7-2.2-13.6-14.8-12.7-38 2.2-51.7l83.1-76.2c3-2.7 6.8-4.2 10.8-4.2h101c4.3 0 8.3 1.7 11.4 4.8l60.7 59.1H544v160.1zm80-32.2c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16c0-8.9-7.2-16-16-16z"
                />
              </svg>
            </Box>
            <Heading
              as="h3"
              fontSize="3xl"
              mb="8"
              letterSpacing="tight"
              lineHeight="1"
            >
              Terms and conditions
            </Heading>
            <Text fontSize="lg" mb="4" maxW="xs" mx="auto">
              For the full UOB Credit Card Terms and conditions, click here.
            </Text>

            <Button
              variant="solid"
              colorScheme="brand"
              size="lg"
              mt="8"
              _hover={{ bg: 'brandAlt.500' }}
              onClick={() =>
                Router.push(
                  'https://www.uob.com.my/personal/cards/credit-cards-terms.page'
                )
              }
            >
              Read Terms and conditions
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactTerms;
