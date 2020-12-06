/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-sparse-arrays */
import {
  Box,
  chakra,
  Flex,
  Link,
  List,
  ListItem,
  Text,
  useTheme
  // Modal,
  // useDisclosure,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalCloseButton,
  // ModalBody,
  // ModalFooter,
  // Button
} from '@chakra-ui/react';
import NextLink from 'next/link';

// import { tncLink } from '../config';
// import TermsContent from '../containers/tnc/content';
import Seal from '../images/rby-bottom';
// import { useRef } from 'react';
import Container from './container';

const CSeal = chakra(Seal);

const links = [
  {
    title: 'UOB Home',
    link: 'https://www.uob.com.my'
  },
  {
    title: 'About Us',
    link: 'https://www.uob.com.my/about'
  },
  {
    title: 'Careers',
    link: 'https://www.uobgroup.com/careers'
  },
  {
    title: 'Contact Us',
    link: 'https://www.uob.com.my/default/contact-us.page'
  },
  {
    title: 'Sitemap',
    link: 'https://www.uob.com.my/default/sitemap.page'
  },
  {
    title: 'Customer Service',
    link: 'https://www.uob.com.my/default/service-charter-eng.page'
  },
  {
    title: 'UOB Sites',
    link: 'https://www.uob.com.my/default/other-uob-sites.page'
  },
  {
    title: 'PIDM',
    link: 'https://www.uob.com.my/safeguard/3rdparty_pidmbrochure.html'
  }
];

const links2 = [
  {
    title: 'Privacy & Security',
    link: 'https://www.uob.com.my/default/privacy-policy.page'
  },
  // {
  //   title: 'Terms & Conditions',
  //   link: '/tnc.html',
  //   internal: true
  // },
  // {
  //   title: 'Terms & Conditions',
  //   link: tncLink
  // },
  {
    title: 'Security Advisory',
    link: 'https://www.uob.com.my/default/security-alert.page'
  }
];

const Footer = ({ ...props }) => {
  const theme = useTheme();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef();

  return (
    <Box
      as="footer"
      className="site-footer"
      {...props}
      bg={`linear-gradient(to bottom, ${theme.colors.brand[900]}, #000)`}
      color="gray.200"
      minH="5rem"
      position="relative"
      textAlign="center"
      pt={[10, , 10]}
      pb="20"
    >
      <Container position="relative" zIndex="10">
        <Box>
          <CSeal h="16" mx="auto" mb="10" />
        </Box>

        <Text fontSize="sm" opacity="0.5" maxW="2xl" mx="auto" lineHeight="1.3">
          Terms and conditions apply. Offers are only valid for payment made
          using UOB Cards. Promotions are not valid in conjunction with other
          promotions, offers, privileges, vouchers, loyalty program, privilege
          card(s) and mutually exclusive.
        </Text>

        <Text
          fontSize="md"
          fontWeight="700"
          maxW="2xl"
          mx="auto"
          mt="4"
          lineHeight="1.3"
        >
          Copyright &copy; 2020 United Overseas Bank (Malaysia) Bhd
          (199301017069 (271809-K)). All rights reserved.
        </Text>

        <Flex flexWrap="wrap" justify="center">
          <List
            d="flex"
            justifyContent="center"
            flexWrap="wrap"
            fontSize={['sm', 'md']}
            lineHeight="1.2"
            mt="8"
            mx="-0.5rem"
          >
            {links.map((link, i) => (
              <ListItem key={i}>
                <Link href={link.link} px="2" py="1" d="inline-block">
                  {link.title}
                </Link>
              </ListItem>
            ))}
            {links2.map((link, i) => (
              <Box key={i} as="li">
                {!link.internal ? (
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    px="2"
                    py="1"
                    d="inline-block"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <NextLink href={link.link} passHref>
                    <Link px="2" py="1" d="inline-block">
                      {link.title}
                    </Link>
                  </NextLink>
                )}
              </Box>
            ))}
          </List>
        </Flex>
      </Container>

      {/* <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="outside"
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TermsContent />
          </ModalBody>
          <ModalFooter>
            <Button>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    </Box>
  );
};

export default Footer;
