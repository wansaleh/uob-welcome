import Plx from 'react-plx';
import { useMedia } from 'react-use';
import { Box } from '@chakra-ui/core';

const ScrollIn = ({ offset = 0, children, ...props }) => {
  const isWide = useMedia('(min-width: 480px)');

  return (
    // <Box>{children}</Box>
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
          duration: 500,
          startOffset: offset + 100,
          easing: 'easeOut',
          properties: [
            {
              startValue: 100,
              endValue: 0,
              property: 'translateY'
            },
            {
              startValue: 0,
              endValue: 1,
              property: 'opacity'
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
