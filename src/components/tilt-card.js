import React from 'react';
import Tilt from 'react-parallax-tilt';

const TiltCard = ({ children, ...props }) => {
  return (
    <div>
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
