/* eslint-disable no-sparse-arrays */
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useTheme
} from '@chakra-ui/react';
import { mix, rgba } from 'polished';
import React from 'react';
import Masonry from 'react-masonry-css';
import useMobileDetect from 'use-mobile-detect-hook';

// import { useMedia } from 'react-use';
import Container from '../../components/container';
import ScrollIn from '../../components/scroll-in';
import SlideIn from '../../components/slide-in';
import TiltCard from '../../components/tilt-card';
import mq from '../../styles/mq';
import cards from './cards.json';

const Explore = () => {
  const theme = useTheme();
  // const isWide = useMedia('(min-width: 480px)');
  const detectMobile = useMobileDetect();

  return (
    <Box
      id="explore"
      minH="100vh"
      bg={`linear-gradient(to bottom, ${theme.colors.black}, ${theme.colors.brand[700]})`}
      color="#fff"
      py={['6rem', , '12rem']}
      pos="relative"
      zIndex="10"
      overflow="hidden"
    >
      <Container textAlign="center">
        <SlideIn>
          <Heading
            fontSize={['5xl', , '7xl']}
            lineHeight="0.95"
            mb="12"
            color="#85B1FF"
            textShadow={`0 0 60px ${rgba(theme.colors.brand[500], 0.9)}`}
          >
            Explore your UOB Cards
          </Heading>
        </SlideIn>

        <SlideIn delay={300}>
          <Heading
            as="h2"
            maxW="3xl"
            mx="auto"
            fontSize={['2xl', , '4xl']}
            fontWeight="200"
            lineHeight="1.2"
            letterSpacing="tight"
            mb="0"
          >
            Be it shopping, travelling, dining – we’ve got you covered.
          </Heading>

          <Heading
            as="h2"
            maxW="3xl"
            mx="auto"
            fontSize={['2xl', , '4xl']}
            fontWeight="600"
            lineHeight="1.2"
            letterSpacing="tight"
            mt="8"
            mb="16"
          >
            {detectMobile.isMobile() ? 'Tap' : 'Click'} on your Cards below to
            find out more.
          </Heading>
        </SlideIn>
      </Container>

      <Container maxW="5xl" textAlign="center" pos="relative" zIndex="100">
        <Masonry
          breakpointCols={{
            default: 2,
            1100: 2,
            700: 1,
            500: 1
          }}
          className="card-grid"
          columnClassName="card-grid_column"
        >
          {cards.map((card, i) => (
            <Box
              key={i}
              p={[4, , 8]}
              // pt="4"
              // pb="6"
              textAlign="center"
              // w={['full', 1 / 2]}
            >
              <ScrollIn key={i}>
                <Link
                  href={card.link}
                  transition="all 0.2s ease"
                  textDecoration="none !important"
                  display="block"
                  // _hover={{
                  //   '.card-title': {
                  //     transform: 'translateY(0)',
                  //     opacity: 1
                  //   }
                  // }}
                >
                  <Flex
                    mb="5"
                    px="4"
                    lineHeight="1"
                    justify="space-between"
                    align="center"
                    fontSize={['md', 'xl']}
                    pos="relative"
                    zIndex="0"
                    w={card.vertical ? 'calc(100% * (54 / 86))' : '100%'}
                    mx="auto"
                    className="card-title"
                  >
                    <Text
                      fontWeight="300"
                      color="inherit"
                      pos="relative"
                      zIndex="100"
                    >
                      <Text as="span" fontWeight="800">
                        UOB
                      </Text>{' '}
                      {card.name}
                    </Text>

                    {/* {card.type === 'visa1' ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                        height="2em"
                      >
                        <path d="M 5 6 C 3.355469 6 2 7.355469 2 9 L 2 23 C 2 24.644531 3.355469 26 5 26 L 27 26 C 28.644531 26 30 24.644531 30 23 L 30 9 C 30 7.355469 28.644531 6 27 6 Z M 5 8 L 27 8 C 27.566406 8 28 8.433594 28 9 L 28 23 C 28 23.566406 27.566406 24 27 24 L 5 24 C 4.433594 24 4 23.566406 4 23 L 4 9 C 4 8.433594 4.433594 8 5 8 Z M 19.40625 12.375 C 17.480469 12.375 16.46875 13.324219 16.46875 14.53125 C 16.46875 16.710938 19.03125 16.410156 19.03125 17.53125 C 19.03125 17.722656 18.871094 18.15625 17.8125 18.15625 C 16.753906 18.15625 16.0625 17.78125 16.0625 17.78125 L 15.75 19.21875 C 15.75 19.21875 16.40625 19.625 17.71875 19.625 C 19.03125 19.625 20.875 18.617188 20.875 17.15625 C 20.875 15.398438 18.3125 15.28125 18.3125 14.5 C 18.3125 14.101563 18.652344 13.78125 19.5625 13.78125 C 20.15625 13.78125 20.8125 14.25 20.8125 14.25 L 21.125 12.71875 C 21.125 12.71875 20.253906 12.375 19.40625 12.375 Z M 11.1875 12.5 L 9.5 17.4375 C 9.5 17.4375 9.414063 17.011719 9.375 16.75 C 8.421875 14.609375 6.875 13.8125 6.875 13.8125 L 8.34375 19.40625 L 10.34375 19.40625 L 13.15625 12.5 Z M 13.875 12.5 L 12.78125 19.40625 L 14.625 19.40625 L 15.71875 12.5 Z M 23.8125 12.5 L 20.8125 19.40625 L 22.625 19.40625 L 23 18.4375 L 25.3125 18.4375 L 25.5 19.40625 L 27.15625 19.40625 L 25.75 12.5 Z M 4.84375 12.53125 C 4.84375 12.53125 8.441406 13.632813 9.28125 16.34375 L 8.65625 13.21875 C 8.65625 13.21875 8.382813 12.53125 7.65625 12.53125 Z M 24.5 14.5 L 25.03125 17.09375 L 23.53125 17.09375 Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="2em"
                      >
                        <path d="M15.26465,5.27441a6.68141,6.68141,0,0,0-3.27295.85505,6.72754,6.72754,0,1,0,0,11.745,6.72551,6.72551,0,1,0,3.27295-12.6ZM10.23712,16.457a4.66714,4.66714,0,0,1-1.51837.27252,4.72754,4.72754,0,0,1,0-9.45508,4.66688,4.66688,0,0,1,1.51837.27253,6.68737,6.68737,0,0,0,0,8.91ZM11.9917,15.3996a4.69542,4.69542,0,0,1,0-6.79529,4.69542,4.69542,0,0,1,0,6.79529Zm3.27295,1.32989a4.66709,4.66709,0,0,1-1.51837-.27252,6.68737,6.68737,0,0,0,0-8.91,4.66683,4.66683,0,0,1,1.51837-.27253,4.72754,4.72754,0,0,1,0,9.45508Z" />
                      </svg>
                    )} */}

                    <Box
                      dangerouslySetInnerHTML={{
                        __html: require(`../../images/${card.type}.svg?include`)
                      }}
                      opacity="0.25"
                      mt="-1"
                      css={{
                        svg: {
                          height: '1.1em'
                        }
                      }}
                    />
                  </Flex>

                  <TiltCard
                    glareEnable
                    glareMaxOpacity={0.2}
                    css={mq({
                      borderRadius: ['1rem', , '1.5rem'],
                      boxShadow: `0 3px 0 0 ${rgba(
                        mix(0.9, '#000', card.color),
                        0.35
                      )}, 0 0 30px ${rgba(
                        card.color,
                        0.25
                      )}, 0 0 1px 3px ${rgba('#fff', 0.2)}`,
                      overflow: 'hidden',
                      position: 'relative',
                      zIndex: 10,
                      width: card.vertical ? 'calc(100% * (54 / 86))' : '100%',
                      margin: '0 auto'
                    })}
                  >
                    <AspectRatio
                      ratio={card.vertical ? 54 / 86 : 86 / 54}
                      w="full"
                    >
                      <Box>
                        <AspectRatio
                          ratio={86 / 54}
                          w="100%"
                          transform={
                            card.vertical && `rotate(90deg) scale(${86 / 54})`
                          }
                        >
                          <Image
                            alt=""
                            src={require(`../../images/cards/${card.image}`)}
                            w="100%"
                            h="100%"
                            className="uobcard"
                            pos="absolute"
                            inset="0"
                            zIndex="-1"
                          />
                        </AspectRatio>
                      </Box>
                    </AspectRatio>
                  </TiltCard>
                </Link>
              </ScrollIn>
            </Box>
          ))}
        </Masonry>
      </Container>
    </Box>
  );
};

export default Explore;
