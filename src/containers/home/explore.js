/* eslint-disable no-sparse-arrays */
import {
  AspectRatio,
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useTheme
} from '@chakra-ui/react';
import { mix, rgba } from 'polished';
import React from 'react';
import Masonry from 'react-masonry-css';

// import { useMedia } from 'react-use';
import Container from '../../components/container';
import ScrollIn from '../../components/scroll-in';
import SlideIn from '../../components/slide-in';
import TiltCard from '../../components/tilt-card';
import mq from '../../styles/mq';
import cards from './cards.json';

const Explore = () => {
  const theme = useTheme();

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
            <Text as="span" d={['inline', , 'none']}>
              Tap
            </Text>
            <Text as="span" d={['none', , 'inline']}>
              Click
            </Text>{' '}
            on your Cards below to find out more.
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
                      whiteSpace="nowrap"
                    >
                      <Text as="span" fontWeight="800">
                        UOB
                      </Text>{' '}
                      {card.name}
                    </Text>

                    <Box
                      dangerouslySetInnerHTML={{
                        __html: require(`../../images/${card.type}.svg?include`)
                      }}
                      opacity="0.25"
                      mt="-1"
                      css={{
                        svg: {
                          height: '1.1em',
                          width: `${
                            1.1 * ((card.type === 'visa1' ? 68 : 35.6) / 22)
                          }em`
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
                          <img
                            alt=""
                            src={require(`../../images/cards/${card.image}`)}
                            css={{
                              position: 'absolute',
                              width: '100%',
                              height: '100%',
                              top: '0',
                              left: '0',
                              right: '0',
                              bottom: '0',
                              zIndex: '-1'
                            }}
                            className="uobcard"
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
