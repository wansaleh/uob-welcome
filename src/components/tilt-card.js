import Tilt from 'react-parallax-tilt';
import { useEffect, useRef } from 'react';

const TiltCard = ({ children, ...props }) => {
  const ref = useRef();

  return (
    <div
      ref={ref}
      // style={{ '--image-x': `${imgX}px`, '--image-y': `${imgY}px` }}
      css={{
        '.moveimage': {
          transition: 'transform 4s cubic-bezier(.03,.98,.52,.99)'
        },
        ':hover .moveimage': {
          transform: 'scale(1.1) translate(var(--image-x), var(--image-y))'
        }
      }}
    >
      <Tilt
        className="tilt-card"
        // onMove={onMove}
        // tiltReverse
        scale={1.03}
        perspective={1000}
        tiltMaxAngleX={3}
        tiltMaxAngleY={3}
        transitionSpeed={1000}
        // glareEnable
        // glareMaxOpacity={0.1}
        // glarePosition="bottom"
        // glareReverse
        {...props}
        css={{
          position: 'relative',
          zIndex: 0,
          transformStyle: 'preserve-3d',
          '.inner': {
            transform: 'translateZ(50px) scale(0.9)'
            // transition: 'transform 0.3s ease'
          }
          // ':hover .inner': {
          //   transform: 'translateZ(70px)'
          // }
        }}
      >
        {children}
      </Tilt>
    </div>
  );
};

export default TiltCard;
