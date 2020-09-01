/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-sparse-arrays */
import {
  Box,
  Text,
  Link,
  Flex
  // Modal,
  // useDisclosure,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalCloseButton,
  // ModalBody,
  // ModalFooter,
  // Button
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { useRef } from 'react';
import Container from './container';
import { tncLink } from '../config';
// import TermsContent from '../containers/tnc/content';

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
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const btnRef = useRef();

  return (
    <Box
      as="footer"
      className="site-footer"
      {...props}
      bg="#000"
      color="gray.200"
      minH="5rem"
      position="relative"
      py={[10, , 16]}
    >
      <Container position="relative" zIndex="10">
        <Text fontSize="sm" opacity="0.5" maxW="2xl" lineHeight="1.3">
          Terms and conditions apply. Offers are only valid for payment made
          using UOB Cards. Promotions are not valid in conjunction with other
          promotions, offers, privileges, vouchers, loyalty program, privilege
          card(s) and mutually exclusive.
        </Text>

        <Text fontSize="md" fontWeight="700" mt="4" lineHeight="1.3">
          Copyright &copy; 2020 United Overseas Bank (Malaysia) Bhd
          (199301017069 (271809-K)). All rights reserved.
        </Text>

        <Flex flexWrap="wrap" justify="space-between">
          <Flex
            as="ul"
            flexWrap="wrap"
            fontSize="md"
            lineHeight="1.2"
            mt="4"
            mx="-0.5rem"
            mr="4"
          >
            {links.map((link, i) => (
              <Box key={i} as="li">
                <Link href={link.link} px="2">
                  {link.title}
                </Link>
              </Box>
            ))}
          </Flex>
          <Flex
            as="ul"
            flexWrap="wrap"
            fontSize="md"
            lineHeight="1.2"
            mt="4"
            mx="-0.5rem"
            display="flex"
          >
            {links2.map((link, i) => (
              <Box key={i} as="li">
                {!link.internal ? (
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    px="2"
                  >
                    {link.title}
                  </Link>
                ) : (
                  <NextLink href={link.link} passHref>
                    <Link px="2">{link.title}</Link>
                  </NextLink>
                )}
              </Box>
            ))}
          </Flex>
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
