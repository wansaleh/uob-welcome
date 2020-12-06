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
  mx: [2, , , , -8],
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  _hover: { opacity: 0.7 }
};

export function PrevArrow({ onClick }) {
  return (
    <Box onClick={onClick} {...arrowStyles} left="-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-left"
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    </Box>
  );
}

export function NextArrow({ onClick }) {
  return (
    <Box onClick={onClick} {...arrowStyles} right="-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-chevron-right"
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </Box>
  );
}
