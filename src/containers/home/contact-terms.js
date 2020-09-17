/* eslint-disable no-sparse-arrays */
import React from 'react';
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
} from '@chakra-ui/core';

import Router from 'next/router';
import Container from '../../components/container';

const ContactTerms = () => {
  const theme = useTheme();

  return (
    <Box
      color="#fff"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[700]}, ${theme.colors.brand[900]})`}
      pt="20"
      pb="20"
    >
      <Container maxW="7xl" pt="16" pb="16" textAlign="center" lineHeight="1.3">
        <SimpleGrid columns={[1, , 3]} spacing={10} align="flex-start">
          <Box>
            <Heading
              as="h3"
              fontSize="3xl"
              mb="8"
              letterSpacing="tight"
              lineHeight="1"
            >
              Contact Centre
            </Heading>
            <Text fontSize="lg" mb="4">
              If you need further assistance, please call one of our UOB Contact
              Centres:
            </Text>
            <Text fontSize="md">
              Kuala Lumpur <b>03-26128 121</b>
              <br />
              Penang <b>04-2401 121</b>
              <br />
              Johor Bahru <b>07-2881 121</b>
              <br />
              Kuching <b>082-287 121</b>
              <br />
              Kota Kinabalu <b>088-477 121</b>
            </Text>
          </Box>
          <Box>
            <Heading
              as="h3"
              fontSize="3xl"
              mb="8"
              letterSpacing="tight"
              lineHeight="1"
            >
              Cardmember Agreement
            </Heading>
            <Text fontSize="lg">
              Read the full UOB Visa/Mastercard Cardmember Agreement.
            </Text>

            <Button
              variant="solid"
              colorScheme="brand"
              size="lg"
              mt="8"
              onClick={() =>
                Router.push(
                  'https://www.uob.com.my/personal/cards/credit-cards-terms.page'
                )
              }
            >
              Read Agreement
            </Button>
          </Box>
          <Box>
            <Heading
              as="h3"
              fontSize="3xl"
              mb="8"
              letterSpacing="tight"
              lineHeight="1"
            >
              Terms &amp; Conditions
            </Heading>
            <Text fontSize="lg">
              For the full UOB Credit Card Terms and Conditions, click here.
            </Text>

            <Button
              variant="solid"
              colorScheme="brand"
              size="lg"
              mt="8"
              onClick={() =>
                Router.push(
                  'https://www.uob.com.my/personal/cards/credit-cards-terms.page'
                )
              }
            >
              Read Terms &amp; Conditions
            </Button>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactTerms;
