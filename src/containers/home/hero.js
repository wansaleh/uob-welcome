/* eslint-disable no-sparse-arrays */
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';

// import { Fade } from 'react-awesome-reveal';
import Container from '../../components/container';
import MyFade from '../../components/my-fade';
// import TiltCard from '../../components/tilt-card';
// import cards from './cards.json';

// const cardImages = cards.map((card) => card.image);
// const cardColors = cards.map((card) => card.color);

// function randomInRange(min, max) {
//   return Math.random() * (max - min) + min;
// }

const Hero = () => {
  useEffect(() => {
    confettiInit();
  }, []);

  // useInterval(() => {
  //   setCardIndex(cardIndex + 1);
  // }, 5000);

  return (
    <Flex
      pos="relative"
      align="center"
      w="100vw"
      top="0"
      left="0"
      right="0"
      bottom="0"
      minH="100vh"
      h="1px"
      bg="#000"
      color="#fff"
      py="6rem"
      zIndex="100"
      overflow="hidden"
      // transition="all 1s ease"
      // transform={store.showHero ? 'translateY(0)' : 'translateY(-100%)'}
      // css={
      //   isIE && {
      //     ':after': {
      //       content: "''",
      //       minHeight: 'inherit',
      //       fontSize: 0
      //     }
      //   }
      // }
    >
      <Container h="100%" pos="relative" zIndex="1">
        <Flex
          h="100%"
          justify="center"
          align="center"
          wrap="wrap"
          mx="-8"
          mt={['-6rem', , 0]}
        >
          <Box
            // w={['full', , 1 / 2]}
            w="full"
            maxW="4xl"
            p={8}
            // textAlign={['center', , 'left']}
            textAlign="center"
            // className="rellax"
            // data-rellax-percentage="0.5"
            // data-rellax-speed="-5"
          >
            <MyFade>
              <Heading
                fontSize={['2.5rem', '5xl', '6xl']}
                lineHeight="1"
                mb="12"
                letterSpacing="-0.02em"
              >
                Congratulations on getting your new UOB Credit&nbsp;Card
              </Heading>
            </MyFade>

            <MyFade>
              <Heading
                as="h2"
                fontSize={['1.35rem', '2xl', '3xl']}
                fontWeight="200"
                lineHeight="1.2"
                letterSpacing="tight"
                mb={[4, , 8]}
              >
                Welcome to the UOB family, we are delighted that you’ve
                joined&nbsp;us.
              </Heading>
              <Heading
                as="h2"
                fontSize={['1.35rem', '2xl', '3xl']}
                fontWeight="200"
                lineHeight="1.2"
                letterSpacing="tight"
              >
                An abundance of perks, benefits, and privileges await&nbsp;you.
              </Heading>
            </MyFade>
          </Box>
        </Flex>
      </Container>

      <Box
        pos="absolute"
        // bottom={[32, , 8]}
        bottom={[32, , 8]}
        left="50%"
        transform="translateX(-50%)"
      >
        <MyFade>
          <Flex justify={['center', , 'flex-start']}>
            <Flex
              mt="10"
              justify="center"
              align="center"
              direction="column"
              textAlign="center"
            >
              {/* {detectMobile.isDesktop() && (
                <AspectRatio
                  ratio={0.55}
                  pos="relative"
                  border="2px solid #555"
                  borderRadius="9999px"
                  w="2rem"
                  d="block"
                  zIndex="10"
                >
                  <Box>
                    <Box
                      pos="absolute"
                      borderRadius="10px"
                      background="#fff"
                      w="4px"
                      h="4px"
                      top="10%"
                      left="calc(50% - 2px)"
                      ml="auto"
                      mr="auto"
                      animation="mousewheel 1.5s linear infinite running"
                    />
                  </Box>
                </AspectRatio>
              )} */}
              <Text
                mt="3"
                // opacity="0.75"
                fontSize="sm"
                fontWeight="800"
                lineHeight="1"
                d={['block', , 'none']}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4rem"
                  height="4rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  css={{
                    position: 'relative',
                    top: '-16px',
                    animation: 'mousewheel 1.5s linear reverse infinite running'
                  }}
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                {/* Swipe up */}
              </Text>
              <Text
                mt="3"
                // opacity="0.75"
                fontSize="sm"
                fontWeight="800"
                lineHeight="1"
                d={['none', , 'block']}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="4rem"
                  height="4rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  css={{
                    position: 'relative',
                    top: '-16px',
                    animation: 'mousewheel 1.5s linear infinite running'
                  }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
                {/* Scroll down */}
              </Text>
            </Flex>
          </Flex>
        </MyFade>
      </Box>

      <Box
        id="confetti-wrapper"
        pos="absolute"
        top="0"
        left="0"
        bottom="0"
        right="0"
        overflow="hidden"
        zIndex="-1"
        opacity="0.5"
        css={{
          ':after': {
            content: '""',
            position: 'absolute',
            height: '30%',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10,
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))'
          }
        }}
      />
    </Flex>
  );
};

export default Hero;

const confettiInit = () => {
  const wrapper = document.getElementById('confetti-wrapper');
  for (let i = 0; i < 50; i += 1) {
    // Random rotation
    const randomRotation = Math.floor(Math.random() * 360);
    // Random width & height between 0 and viewport
    const randomWidth = Math.floor(Math.random() * wrapper.offsetWidth);
    const randomHeight = Math.floor(Math.random() * wrapper.offsetHeight);

    // Random animation-delay
    const randomAnimationDelay = Math.floor(Math.random() * 5);

    // Random colors
    const colors = ['#09369F', '#ed1c2b', '#8497B0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create confetti piece
    const confetti = document.createElement('div');
    confetti.className = ['confetti', 'confetti-2'][
      Math.floor(Math.random() * 2)
    ];
    confetti.style.top = `${randomHeight}px`;
    confetti.style.left = `${randomWidth}px`;
    confetti.style.backgroundColor = randomColor;
    confetti.style.transform = `skew(15deg) rotate(${randomRotation}deg)`;
    confetti.style.animationDelay = `${randomAnimationDelay}s`;
    wrapper.appendChild(confetti);
  }
};

// const CardCrossfade = ({ cardIndex }) => {
//   return (
//     <TiltCard
//       tiltMaxAngleX={5}
//       tiltMaxAngleY={5}
//       trackOnWindow
//       glareEnable
//       glareMaxOpacity={0.4}
//       css={{
//         borderRadius: 'clamp(0.75rem, 1.5vw, 1.5rem)',
//         boxShadow: `0 0 2px 3px ${rgba(
//           mix(0.9, '#000', cardColors[cardIndex % 7]),
//           0.25
//         )}, 0 2px 200px ${rgba(
//           cardColors[cardIndex % 7],
//           0.25
//         )}, 0 2px 56px ${rgba(cardColors[cardIndex % 7], 0.25)}`,
//         overflow: 'hidden'
//       }}
//     >
//       <AspectRatio ratio={86 / 54}>
//         <Box>
//           {cardImages.map((image, i) => (
//             <Image
//               key={i}
//               userSelect="none"
//               pointerEvents="none"
//               src={require(`../../images/cards/${image}`)}
//               alt=""
//               pos="absolute"
//               inset="0"
//               w="100%"
//               h="100%"
//               objectFit="cover"
//               // zIndex={cardIndex % cardImages.length === i ? 10 : 0}
//               opacity={cardIndex % cardImages.length === i ? 1 : 0}
//               transition="all 0.8s ease"
//               // transform={
//               //   cardIndex % cardImages.length === i
//               //     ? 'translateY(0)'
//               //     : 'translateY(200%)'
//               // }
//             />
//           ))}
//         </Box>
//       </AspectRatio>
//     </TiltCard>
//   );
// };
