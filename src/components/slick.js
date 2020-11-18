/* eslint-disable no-sparse-arrays */
import { Box } from '@chakra-ui/react';

export const slickSettings = {
  arrows: true,
  dots: true,
  infinite: true,
  // swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

export const cardsSlickSettings = {
  ...slickSettings,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const arrowStyles = {
  pos: 'absolute',
  bottom: '50%',
  fontSize: '3rem',
  zIndex: '100',
  mx: [4, , , , -8],
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  _hover: { opacity: 0.7 }
};

export function PrevArrow({ onClick }) {
  return (
    <Box onClick={onClick} {...arrowStyles} left="0">
      <i className="fal fa-chevron-left" />
    </Box>
  );
}

export function NextArrow({ onClick }) {
  return (
    <Box onClick={onClick} {...arrowStyles} right="0">
      <i className="fal fa-chevron-right" />
    </Box>
  );
}
