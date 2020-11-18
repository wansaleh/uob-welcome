import Plx from 'react-plx';
import { useMedia } from 'react-use';
import { Box } from '@chakra-ui/react';

const ScrollIn = ({ offset = 0, children, ...props }) => {
  const isWide = useMedia('(min-width: 480px)');

  return (
    <Plx
      disabled={!isWide}
      className="scroll-in"
      css={
        isWide && {
          transform: 'translateY(100px)',
          opacity: 0
        }
      }
      parallaxData={[
        {
          start: 'self',
          duration: 250,
          startOffset: offset + 50,
          easing: 'easeOut',
          properties: [
            {
              startValue: -200,
              endValue: 0,
              property: 'translateY'
            },
            {
              startValue: 0,
              endValue: 1,
              property: 'opacity'
            },
            {
              startValue: 40,
              endValue: 0,
              property: 'rotateX'
            },
            {
              startValue: -200,
              endValue: 0,
              property: 'translateZ'
            }
          ]
        }
      ]}
      {...props}
    >
      {children}
    </Plx>
  );
};

export default ScrollIn;
