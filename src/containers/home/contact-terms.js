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
import { lighten } from 'polished';
import { Fade } from 'react-awesome-reveal';
import Container from '../../components/container';

const ContactTerms = () => {
  const theme = useTheme();

  return (
    <Box
      color="#fff"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[700]}, ${theme.colors.brand[900]})`}
      py={[4, , 20]}
    >
      <Container pt="16" pb="16" textAlign="left" lineHeight="1.3">
        <SimpleGrid columns={[1, , 3]} spacing={10}>
          <Fade>
            <Box py="4">
              <Box
                fontSize="4xl"
                mb="2"
                color={lighten(0.2, theme.colors.brand[500])}
              >
                <i className="fal fa-phone" />
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
              <Text fontSize="lg" mb="4" maxW="xs">
                If you need further assistance, don&apos;t hesitate to call one
                of our UOB&nbsp;Contact&nbsp;Centres.
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
          </Fade>
          <Fade delay={300}>
            <Box py="4">
              <Box
                fontSize="4xl"
                mb="2"
                color={lighten(0.2, theme.colors.brand[500])}
              >
                <i className="fal fa-file-contract" />
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
              <Text fontSize="lg" mb="4" maxW="xs">
                Read the full UOB Visa/Mastercard Cardmember Agreement.
              </Text>
              <Button
                variant="solid"
                colorScheme="brand"
                size="lg"
                mt="8"
                onClick={() =>
                  Router.push(
                    'https://www.uob.com.my/web-resources/personal/pdf/personal/fees/visamaster-tnc.pdf'
                  )
                }
              >
                Read Agreement
              </Button>
            </Box>
          </Fade>
          <Fade delay={600}>
            <Box py="4">
              <Box
                fontSize="4xl"
                mb="2"
                color={lighten(0.2, theme.colors.brand[500])}
              >
                <i className="fal fa-handshake" />
              </Box>
              <Heading
                as="h3"
                fontSize="3xl"
                mb="8"
                letterSpacing="tight"
                lineHeight="1"
              >
                Terms &amp; Conditions
              </Heading>
              <Text fontSize="lg" mb="4" maxW="xs">
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
          </Fade>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactTerms;
