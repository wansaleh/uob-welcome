/* eslint-disable no-sparse-arrays */
import {
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useTheme,
  VisuallyHidden
} from '@chakra-ui/react';
import React from 'react';
import Plx from 'react-plx';
import Slider from 'react-slick';
import { useMedia } from 'react-use';

import Container from '../../components/container';
import { cardsSlickSettings } from '../../components/slick';
import SlideIn from '../../components/slide-in';
import mq from '../../styles/mq';

const screenshots = [
  {
    id: 6,
    title: 'Mighty Insights',
    desc: 'Simplifies the banking experience by giving more meaning to numbers.'
  },
  {
    id: 1,
    title: 'Account Activity',
    desc:
      'Leave the hard work to us. We’ll alert you on new transactional activities and trends to safeguard your account.'
  },
  {
    id: 2,
    title: 'Cash Flow Forecast',
    desc:
      'Stay ahead of your day-to-day financial management and budgeting to meet your goals. Keep track with useful interactive charts and cash flow forecasts.'
  },
  {
    id: 3,
    title: 'Financial Education',
    desc:
      'Get savvy financial tips and alerts. We’ll help you identify opportunities to manage your finances effortlessly.'
  },
  {
    id: 4,
    title: 'Spending Analysis',
    desc:
      'Stretch your Ringgit and Cents with smarter spending. Reaching financial goals made easy with simplified interactive spending analysis.'
  },
  {
    id: 5,
    title: 'Personalised',
    desc:
      'Uniquely presented based on your usual spending habits and financial transactions, evolving as you grow with us.'
  },
  {
    id: 7,
    title: 'Bank',
    desc: 'Manage your accounts and transactions on the go.'
  },
  {
    id: 8,
    title: 'Pay',
    desc: 'Make payments and transfers in just a few steps.'
  },
  {
    id: 9,
    title: 'Lifestyle',
    desc:
      'Exclusive deals, dining reviews and rewards redemption anytime, anywhere.'
  }
];

const Mighty = () => {
  const theme = useTheme();
  const isWide = useMedia('(min-width: 480px)');

  return (
    <Box
      id="mighty"
      minH="100vh"
      bg={`linear-gradient(to bottom, ${theme.colors.brand[700]}, ${theme.colors.brand[500]} 60%)`}
      color="#fff"
      pt={['6rem', , '12rem']}
      pb="5rem"
      pos="relative"
      zIndex="20"
      // overflow="hidden"
    >
      <Container textAlign="center" maxW="5xl">
        <Box className="trigger" />
        <Plx
          css={{ opacity: 0 }}
          parallaxData={[
            {
              start: 'self',
              duration: 400,
              startOffset: 200,
              easing: 'easeOut',
              properties: [
                {
                  startValue: -400,
                  endValue: 0,
                  // unit: 'vh',
                  property: 'translateY'
                },
                {
                  startValue: 0,
                  endValue: 1,
                  property: 'opacity'
                }
              ]
            }
            // {
            //   start: '.trigger',
            //   startOffset: '60vh',
            //   duration: '30vh',
            //   properties: [
            //     {
            //       startValue: 50,
            //       endValue: -100,
            //       unit: 'vh',
            //       property: 'translateY'
            //     },
            //     {
            //       startValue: 1,
            //       endValue: 0,
            //       property: 'opacity'
            //     }
            //   ]
            // }
          ]}
        >
          <Box>
            <Heading
              maxW="3xl"
              mx="auto"
              fontSize={['xl', '2xl', '3xl']}
              lineHeight="0.95"
              mb="6"
              letterSpacing="tight"
              // opacity="0.5"
              color="#61A3FF"
            >
              All Mighty Assistance. By My Side.
            </Heading>

            <Heading
              maxW="3xl"
              mx="auto"
              fontSize={['3xl', '4xl', '5xl']}
              lineHeight="0.95"
              mb="12"
              letterSpacing="tight"
              // color="brand.200"
            >
              AI-powered UOB Mighty app simplifies your banking experience by
              giving more meaning to numbers.
            </Heading>

            <Heading
              as="h2"
              maxW="4xl"
              mx="auto"
              fontSize={['2xl', , '4xl']}
              fontWeight="200"
              lineHeight="1.2"
              mb="16"
              className="trig"
            >
              Life is a lot easier, now that banking is simpler with
              UOB&nbsp;Mighty app.
            </Heading>
          </Box>
        </Plx>

        <Flex mb="20" justify="center" align="center" wrap="wrap">
          <SlideIn>
            <Box
              mx={[1, , 2]}
              borderRadius="22.5%"
              overflow="hidden"
              borderColor="brand.800"
              borderWidth="1px"
              mb={[4, , 0]}
            >
              <img
                src={require('../../images/mighty/icon.png')}
                alt=""
                css={{
                  position: 'relative',
                  display: 'block',
                  width: '6rem',
                  height: '6rem'
                }}
              />
            </Box>
          </SlideIn>
          <Box flexBasis="100%" h="0" d={['block', , 'none']} />
          <SlideIn delay={200}>
            <Link href="https://apps.apple.com/my/app/uob-mighty-malaysia/id1239716055">
              <VisuallyHidden>App Store</VisuallyHidden>
              <img
                src={require('../../images/mighty/appstore.svg')}
                alt=""
                css={mq({
                  height: ['2rem', , '3rem'],
                  margin: '0 0.25rem',
                  display: 'block'
                })}
              />
            </Link>
          </SlideIn>
          <SlideIn delay={400}>
            <Link href="https://play.google.com/store/apps/details?id=com.uob.mightymy&hl=en">
              <VisuallyHidden>Google Play</VisuallyHidden>
              <img
                src={require('../../images/mighty/googleplay.svg')}
                alt=""
                css={mq({
                  height: ['2rem', , '3rem'],
                  margin: '0 0.25rem',
                  display: 'block'
                })}
              />
            </Link>
          </SlideIn>
          <SlideIn delay={600}>
            <Link href="https://appgallery.huawei.com/#/app/C101978121">
              <VisuallyHidden>AppGallery</VisuallyHidden>
              <img
                src={require('../../images/mighty/appgallery.svg')}
                alt=""
                css={mq({
                  height: ['2rem', , '3rem'],
                  margin: '0 0.25rem',
                  display: 'block'
                })}
              />
            </Link>
          </SlideIn>
        </Flex>
      </Container>

      <Container maxW="7xl" py="8" px="0" pos="relative" zIndex="20">
        <Slider {...cardsSlickSettings}>
          {screenshots.map((screenshot, i) => (
            <Box key={screenshot.id} py="4" px="6">
              <Box
                bg="linear-gradient(to bottom right, #1E6BD7, #0A4CA9)"
                borderRadius={['2rem', , '3rem']}
                boxShadow="0 0 20px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1)"
                overflow="hidden"
                position="relative"
                zIndex="10"
                transition="all 0.8s cubic-bezier(0.19, 1, 0.22, 1)"
                _hover={
                  isWide && {
                    transform: 'scale(1.02)',
                    img: {
                      transform: 'translateY(-60px)'
                    }
                  }
                }
              >
                <Box pt="10" px="8" minH={['150px', , '220px']}>
                  <Heading fontSize={['3xl']} lineHeight="1.1">
                    {screenshot.title}
                  </Heading>
                  <Text fontSize={['lg', , 'xl']} lineHeight="1.2" mt="4">
                    {screenshot.desc}
                  </Text>
                </Box>
                <img
                  src={require(`../../images/mighty/${screenshot.id}.png`)}
                  alt=""
                  css={{
                    width: '100%',
                    maxWidth: 'initial',
                    margin: '0 0 -112px',
                    transition: 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)'
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Container>

      <Box
        bg="#fff"
        pos="absolute"
        left="0"
        right="0"
        bottom="0"
        h={['15rem', , '30rem']}
      >
        <svg
          className="waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          css={{
            width: '100%',
            height: '30%',
            background: theme.colors.brand[500]
          }}
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="wave-parallax">
            <use xlinkHref="#gentle-wave" x="48" fill="rgba(255,255,255,0.7" />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </Box>
    </Box>
  );
};

export default Mighty;
