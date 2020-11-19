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
} from '@chakra-ui/react';

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
      pt={[4, , 20]}
      textAlign="center"
    >
      <Container
        pt="16"
        pb="16"
        // textAlign="left"
        lineHeight="1.3"
      >
        <SimpleGrid columns={[1, , 3]} spacing={10}>
          <Fade triggerOnce>
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
                <Text as="span">Kuala Lumpur</Text>
                <Text as="b" w="12ch">
                  +603 26128 121
                </Text>
                <Box className="break" />
                <Text as="span">Penang</Text>
                <Text as="b" w="12ch">
                  +604 2401 121
                </Text>
                <Box className="break" />
                <Text as="span">Johor Bahru</Text>
                <Text as="b" w="12ch">
                  +607 2881 121
                </Text>
                <Box className="break" />
                <Text as="span">Kuching</Text>
                <Text as="b" w="12ch">
                  +6082 287 121
                </Text>
                <Box className="break" />
                <Text as="span">Kota Kinabalu</Text>
                <Text as="b" w="12ch">
                  +6088 477 121
                </Text>
              </Flex>
            </Box>
          </Fade>
          <Fade triggerOnce delay={300}>
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
          </Fade>
          <Fade triggerOnce delay={600}>
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
                Terms and Conditions
              </Heading>
              <Text fontSize="lg" mb="4" maxW="xs" mx="auto">
                For the full UOB Credit Card Terms and Conditions, click here.
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
                Read Terms and Conditions
              </Button>
            </Box>
          </Fade>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactTerms;
