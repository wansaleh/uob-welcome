/* eslint-disable no-sparse-arrays */
import {
  Box,
  Heading,
  List,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useTheme,
  Wrap
} from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

import Container from '../../components/container';

const Safety = () => {
  const theme = useTheme();

  return (
    <Box id="safety" pos="relative" bg="#fff" textAlign={['center', , 'left']}>
      <Container maxW="5xl" mt="32" pos="relative" zIndex="10">
        <Box
          bg="linear-gradient(to bottom, #1E6BD7, #0A4CA9)"
          color="#fff"
          p={[8, , 16]}
          py={16}
          borderRadius="1rem"
          boxShadow="0 0 20px rgba(0, 0, 0, 0.1), 0 3px 10px rgba(0, 0, 0, 0.1)"
        >
          <Fade triggerOnce>
            <Heading
              maxW="4xl"
              fontSize={['4xl', , '5xl']}
              lineHeight="0.95"
              mb="12"
              letterSpacing="tight"
            >
              Safety Tips
              <Box
                as="svg"
                d="inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                h="1em"
                // color="brand.600"
                mt="-2"
                ml="4"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </Box>
            </Heading>
          </Fade>

          <Fade triggerOnce>
            <Heading
              fontSize={['lg', , '2xl']}
              fontWeight="200"
              lineHeight="1.2"
              mb="4"
            >
              Your UOB Credit Cards may be the gateway to a myriad of
              conveniences, but it can be subjected to scams and theft.
            </Heading>
          </Fade>

          <Fade triggerOnce>
            <Text
              fontSize={['lg', , '2xl']}
              fontWeight="600"
              mb="16"
              lineHeight="1.2"
            >
              To prevent this, safeguard your UOB Cards and PIN at all times.
            </Text>
          </Fade>

          <SimpleGrid
            columns={[1, , 3]}
            spacing={10}
            maxW="5xl"
            mx="auto"
            css={{ svg: { display: 'inline-block' } }}
          >
            <Box>
              <Fade triggerOnce duration={600}>
                <svg
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  css={{ height: '4rem' }}
                >
                  <path
                    d="M434.5 290.25s-66.54 74.4-66.54 112.044 29.16 77.956 66.54 77.956c28.94 0 70-4.425 70-44.253 0-44.531-25.66-69.187-70-145.747M77.5 290.25c-44.34 76.56-70 101.216-70 145.747 0 39.829 41.06 44.253 70 44.253 37.38 0 66.54-40.311 66.54-77.956S77.5 290.25 77.5 290.25"
                    fill="#7e8b96"
                  />
                  <path
                    d="M434.5 374.75s-38.607 14.74-38.607 66.893c0 24.073 14.907 38.607 38.607 38.607 28.94 0 70-4.425 70-44.253 0-44.531-70-61.247-70-61.247M77.5 374.75s-70 16.716-70 61.247c0 39.829 41.06 44.253 70 44.253 23.7 0 38.607-14.534 38.607-38.607 0-52.153-38.607-66.893-38.607-66.893"
                    fill="#a2abb8"
                  />
                  <path
                    d="M77.5 480.25c0 8.25 6.75 15 15 15h327c8.25 0 15-6.75 15-15l-184.385-10z"
                    fill="#c8d2dc"
                  />
                  <path
                    d="M434.5 480.25v-7.51c0-4.119-3.371-7.49-7.49-7.49l-171.01-15-171.01 15c-4.119 0-7.49 3.371-7.49 7.49v7.51z"
                    fill="#e9edf1"
                  />
                  <path
                    d="M256 255.25c-84.6 0-136.022-20-136.022-20s9.739-70.227 39.939-111.54c17.921-24.515 47.69-45.82 96.083-45.82s78.162 21.305 96.083 45.82c30.2 41.312 39.939 111.54 39.939 111.54s-51.422 20-136.022 20z"
                    fill="#4e5a61"
                  />
                  <path
                    d="M332.044 235.25H179.956l-6.922-44.12S119.978 83.161 256 83.161s82.966 107.969 82.966 107.969z"
                    fill="#bcd1e1"
                  />
                  <path
                    d="M198.257 142.073c-27.591 0-40.119 6.989-40.119 18.36 0 27.989 15.382 44.817 42.973 44.817s41.973-13.975 41.973-41.964c0-11.371-17.236-21.213-44.827-21.213zM313.743 142.073c27.591 0 40.119 6.989 40.119 18.36 0 27.989-15.382 44.817-42.973 44.817s-41.973-13.975-41.973-41.964c.001-11.371 17.236-21.213 44.827-21.213z"
                    fill="#f9c8dc"
                  />
                  <path
                    d="M256 107.89c48.393 0 78.162 21.305 96.083 45.82 30.2 41.312 39.939 81.54 39.939 81.54C368.758 121.455 361.717 16.75 256 16.75s-112.758 104.705-136.022 218.5c0 0 9.739-40.227 39.939-81.54 17.921-24.515 47.69-45.82 96.083-45.82z"
                    fill="#a2abb8"
                  />
                  <path
                    d="M419.5 465.25h-327c-8.25 0-15-6.75-15-15v-200c0-8.25 6.75-15 15-15h.977L434.5 448.616v1.634c0 8.25-6.75 15-15 15z"
                    fill="#c8d2dc"
                  />
                  <path
                    d="M419.5 235.25H93.477v198.366c0 8.25 6.75 15 15 15H434.5V250.25c0-8.25-6.75-15-15-15z"
                    fill="#e9edf1"
                  />
                  <g>
                    <path d="M472.25 337.868c-1.67-2.661-3.39-5.401-5.159-8.229a7.5 7.5 0 10-12.718 7.954c1.773 2.835 3.498 5.582 5.171 8.249 10.941 17.433 19.647 31.314 25.907 44.122-15.677-11.584-34.208-18.139-43.453-20.921V250.25c0-12.407-10.093-22.5-22.5-22.5H398.16c-2.069-10.33-4.036-20.618-5.942-30.619-12.413-65.133-23.133-121.384-55.13-155.756a7.5 7.5 0 00-10.979 10.221c24.264 26.064 35.478 68.223 45.494 118.03a265.388 265.388 0 00-13.468-20.341C334.755 117.297 299.437 100.39 256 100.39s-78.755 16.907-102.137 48.894a265.797 265.797 0 00-13.468 20.342C157.153 86.287 177.283 24.25 256 24.25c20.525 0 37.401 4.052 51.593 12.387a7.501 7.501 0 007.597-12.935C298.631 13.978 279.27 9.25 256 9.25c-45.565 0-78.042 18.91-99.288 57.81-18.652 34.151-27.532 80.743-36.932 130.072-1.906 10.001-3.873 20.289-5.942 30.619H92.5c-12.407 0-22.5 10.093-22.5 22.5v37.977c-11.357 19.534-21.38 35.509-30.25 49.64C14.962 377.362 0 401.201 0 435.997c0 20.529 9.902 35.72 28.637 43.932 13.652 5.984 29.883 7.447 42.628 7.748 3.075 8.767 11.43 15.073 21.235 15.073h327c9.805 0 18.16-6.306 21.235-15.073 12.745-.302 28.976-1.765 42.628-7.748C502.098 471.717 512 456.525 512 435.997c0-34.795-14.962-58.634-39.75-98.129zM381.945 227.75h-37.741l5.483-30.954c4.372-5.158 7.55-11.466 9.479-18.688 12.165 20.553 19.269 39.066 22.779 49.642zm-36.856-70.86l.033.043c.817 1.066 1.24 2.235 1.24 3.499 0 17.024-6.154 37.317-35.473 37.317-23.519 0-34.473-10.951-34.473-34.464 0-5.605 13.292-13.713 37.326-13.713 16.578.001 27.732 2.675 31.347 7.318zm-22.429-22.058c-2.81-.169-5.774-.259-8.917-.259-23.26 0-41.217 6.733-48.623 17.306-2.481-.652-5.488-1.028-9.119-1.028s-6.639.377-9.119 1.028c-7.406-10.573-25.363-17.306-48.623-17.306-3.144 0-6.107.089-8.918.259 18.102-12.913 40.403-19.441 66.66-19.441 26.256-.001 48.557 6.527 66.659 19.441zm-157.022 25.601c0-1.267.424-2.438 1.245-3.506l.025-.033c3.612-4.645 14.768-7.321 31.349-7.321 24.034 0 37.326 8.108 37.326 13.713 0 23.513-10.954 34.464-34.473 34.464-29.318 0-35.472-20.293-35.472-37.317zm-12.804 17.675c1.929 7.222 5.107 13.53 9.479 18.688l5.483 30.954h-37.741c3.511-10.578 10.614-29.091 22.779-49.642zM15 435.997c0-30.478 13.304-51.675 37.455-90.155 5.406-8.613 11.24-17.91 17.545-28.279v51.494c-5.556 1.685-14.517 4.749-24.189 9.446a7.5 7.5 0 00-3.47 10.023 7.5 7.5 0 0010.023 3.471c6.554-3.183 12.81-5.554 17.637-7.182v65.436a22.37 22.37 0 003.82 12.528c-2.343 2.625-3.785 6.066-3.814 9.847C32.045 471.341 15 459.895 15 435.997zm412 44.253c0 4.136-3.364 7.5-7.5 7.5h-327c-4.136 0-7.5-3.364-7.5-7.5l-.01-7.5h155.933a7.5 7.5 0 000-15H92.5c-4.136 0-7.5-3.364-7.5-7.5v-200c0-4.136 3.364-7.5 7.5-7.5h160.705l-32.368 100.705a7.5 7.5 0 007.141 9.795h38.711l-25.323 78.785a7.5 7.5 0 0014.28 4.59l28.471-88.58a7.5 7.5 0 00-7.141-9.795h-38.711l32.368-100.705a7.5 7.5 0 00-7.141-9.795H183.03l-3.317-18.727c6.329 2.459 13.52 3.727 21.398 3.727 30.861 0 48.308-16.44 49.414-46.387 2.921-.687 8.029-.687 10.95 0 1.107 29.947 18.553 46.387 49.414 46.387 7.878 0 15.069-1.269 21.398-3.727l-3.317 18.727h-35.476a7.5 7.5 0 000 15H419.5c4.136 0 7.5 3.364 7.5 7.5v200c0 4.136-3.364 7.5-7.5 7.5H270.923a7.5 7.5 0 000 15l148.393-.009c.062.002.122.009.184.009.123 0 .244-.007.367-.009H427zm14.994-7.625c-.029-3.78-1.471-7.222-3.814-9.847A22.37 22.37 0 00442 450.25v-65.441c17.781 5.98 55 21.988 55 51.187 0 23.899-17.045 35.345-55.006 36.629z" />
                  </g>
                </svg>
                <Heading as="h3" fontSize="2xl" mb="4" mt="4">
                  Beware of scams.
                </Heading>
                <Text>
                  Do not fall victim to phone scam. Never transfer money to any
                  unknown party. Do not divulge OTP details to anyone.
                </Text>
              </Fade>
            </Box>
            <Box>
              <Fade triggerOnce duration={600}>
                <svg
                  id="Capa_1"
                  viewBox="0 0 511.38 511.38"
                  xmlns="http://www.w3.org/2000/svg"
                  css={{ height: '4rem' }}
                >
                  <path
                    d="M479.604 481.918H31.64c-13.368 0-24.205-10.837-24.205-24.205V351.204c0-13.368 10.837-24.205 24.205-24.205h447.964c13.368 0 24.205 10.837 24.205 24.205v106.509c.001 13.368-10.836 24.205-24.205 24.205z"
                    fill="#fe646f"
                  />
                  <path
                    d="M363.362 52.498v231.98c0 8.35-10.25 12.35-15.9 6.21l-71.673-77.809a16.685 16.685 0 00-12.273-5.381H36.852c-13.25 0-24-10.74-24-24v-131c0-13.255 10.745-24 24-24h302.51c13.26 0 24 10.75 24 24z"
                    fill="#f5f8f9"
                  />
                  <path
                    d="M42.85 52.5v131c0 13.26 10.75 24 24 24h-30c-13.25 0-24-10.74-24-24v-131c0-13.26 10.75-24 24-24h30c-13.25 0-24 10.74-24 24zM363.36 275.38v9.1c0 8.35-10.25 12.35-15.9 6.21l-71.67-77.81a16.684 16.684 0 00-12.27-5.38h30c4.66 0 9.11 1.95 12.27 5.38z"
                    fill="#e8edf2"
                  />
                  <path
                    d="M61.64 481.92h-30c-13.37 0-24.2-10.84-24.2-24.21V351.2c0-13.36 10.83-24.2 24.2-24.2h30c-13.37 0-24.2 10.84-24.2 24.2v106.51c0 13.37 10.83 24.21 24.2 24.21z"
                    fill="#fd4755"
                  />
                  <g>
                    <path d="M122.119 386.918a7.5 7.5 0 00-10.245-2.745l-20.771 11.992V372.18c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v23.985l-20.771-11.992a7.5 7.5 0 10-7.5 12.99l20.771 11.992-20.771 11.992a7.5 7.5 0 007.5 12.99l20.771-11.992v23.984c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-23.984l20.771 11.992a7.497 7.497 0 0010.245-2.745 7.5 7.5 0 00-2.745-10.245l-20.771-11.992 20.771-11.992a7.5 7.5 0 002.745-10.245zM351.569 386.918a7.5 7.5 0 00-10.245-2.745l-20.771 11.992V372.18c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v23.985l-20.771-11.992a7.5 7.5 0 10-7.5 12.99l20.771 11.992-20.771 11.992a7.5 7.5 0 007.5 12.99l20.771-11.992v23.984c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-23.984l20.771 11.992a7.497 7.497 0 0010.245-2.745 7.5 7.5 0 00-2.745-10.245l-20.771-11.992 20.771-11.992a7.5 7.5 0 002.745-10.245zM236.844 386.918a7.5 7.5 0 00-10.245-2.745l-20.771 11.992V372.18c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v23.985l-20.771-11.992a7.5 7.5 0 10-7.5 12.99l20.771 11.992-20.771 11.992a7.5 7.5 0 007.5 12.99l20.771-11.992v23.984c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-23.984l20.771 11.992a7.497 7.497 0 0010.245-2.745 7.5 7.5 0 00-2.745-10.245l-20.771-11.992 20.771-11.992a7.5 7.5 0 002.745-10.245zM420.277 446.13c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-23.984l20.771 11.992a7.497 7.497 0 0010.245-2.745 7.5 7.5 0 00-2.745-10.245l-20.771-11.992 20.771-11.992a7.5 7.5 0 00-7.5-12.99l-20.771 11.992V372.18c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v23.985l-20.771-11.992a7.5 7.5 0 00-7.5 12.99l20.771 11.992-20.771 11.992a7.5 7.5 0 007.5 12.99l20.771-11.992z" />
                    <path d="M479.67 319.98H31.71C14.225 319.98 0 334.205 0 351.69v106.5c0 17.485 14.225 31.71 31.71 31.71h350.07c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5H31.71c-9.214 0-16.71-7.496-16.71-16.71v-106.5c0-9.214 7.496-16.71 16.71-16.71h447.96c9.214 0 16.71 7.496 16.71 16.71v106.5c0 9.214-7.496 16.71-16.71 16.71h-62.89c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h62.89c17.485 0 31.71-14.225 31.71-31.71v-106.5c0-17.485-14.225-31.71-31.71-31.71zM44.308 70.829a7.5 7.5 0 007.5 7.5h13.438v90.459c0 4.143 3.358 7.5 7.5 7.5s7.5-3.357 7.5-7.5V70.829a7.5 7.5 0 00-7.5-7.5H51.808a7.5 7.5 0 00-7.5 7.5zM319.521 76.996c-.53-6.364-4.251-11.523-9.479-13.143-2.466-.766-8.852-1.741-14.88 5.654-5.522 6.775-33.205 56.789-38.698 66.746a7.501 7.501 0 006.566 11.124h41.438c-.054 7.567-.111 14.863-.167 21.347a7.5 7.5 0 007.435 7.564h.066a7.5 7.5 0 007.498-7.436c.022-2.543.092-10.838.168-21.476h5.076c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5h-4.976c.149-24.19.246-51.852-.047-55.38zm-14.954 55.38h-28.802c10.484-18.822 23.425-41.645 28.904-50.281.098 8.524.026 29.081-.102 50.281zM158.009 100.42c.057-.246.102-.494.133-.744l.484-3.79c.041-.315.061-.633.061-.95 0-17.957-14.609-32.565-32.565-32.565-15.527 0-28.966 11.045-31.955 26.262a7.5 7.5 0 0014.719 2.891c1.611-8.2 8.859-14.152 17.236-14.152 9.54 0 17.329 7.645 17.56 17.13l-.367 2.879c-1.303 5.318-4.387 11.477-9.17 18.312-15.56 22.231-24.849 34.395-29.839 40.929-6 7.856-7.811 10.228-6.463 14.61.765 2.489 2.663 4.403 5.207 5.252.989.329 2.339.78 21.148.78 7.38 0 17.45-.069 31.237-.243a7.5 7.5 0 00-.093-14.999l-.096.001c-12.905.161-26.729.254-36.362.217 5.452-7.177 14.238-18.926 27.55-37.945 5.993-8.568 9.888-16.599 11.575-23.875zM209.185 162.44c-8.715 0-16.194-6.494-17.396-15.107a17.797 17.797 0 01-.17-2.458c0-4.143-3.358-7.5-7.5-7.5s-7.5 3.357-7.5 7.5c0 1.516.106 3.041.314 4.532 2.23 15.981 16.095 28.033 32.252 28.033 17.957 0 32.566-14.608 32.566-32.565 0-10.071-4.596-19.088-11.8-25.066 7.204-5.978 11.8-14.995 11.8-25.066 0-17.957-14.609-32.565-32.566-32.565-15.527 0-28.966 11.045-31.955 26.262a7.5 7.5 0 0014.719 2.891c1.61-8.2 8.859-14.152 17.236-14.152 9.686 0 17.566 7.88 17.566 17.565s-7.88 17.565-17.566 17.565c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5c9.686 0 17.566 7.88 17.566 17.566 0 9.685-7.88 17.565-17.566 17.565z" />
                    <path d="M36.92 215.48h226.66a9.22 9.22 0 016.763 2.961l71.668 77.809c3.233 3.513 7.66 5.394 12.212 5.393 2.04 0 4.105-.378 6.099-1.155 6.444-2.514 10.608-8.608 10.608-15.527V52.98c0-17.369-14.131-31.5-31.5-31.5H96.63c-4.142 0-7.5 3.357-7.5 7.5s3.358 7.5 7.5 7.5h242.8c9.098 0 16.5 7.401 16.5 16.5v231.979c0 .756-.356 1.279-1.06 1.554-.698.273-1.313.132-1.824-.424l-71.671-77.812a24.26 24.26 0 00-17.795-7.798H36.92c-9.098 0-16.5-7.402-16.5-16.5v-131c0-9.099 7.402-16.5 16.5-16.5h24.71c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5H36.92c-17.369 0-31.5 14.131-31.5 31.5v131c0 17.37 14.131 31.501 31.5 31.501z" />
                  </g>
                </svg>
                <Heading as="h3" fontSize="2xl" mb="4" mt="4">
                  No common numbers.
                </Heading>
                <Text>
                  Do not use common numbers like your birth date, identity card,
                  passport, driving license or contact numbers when choosing a
                  PIN.
                </Text>
              </Fade>
            </Box>
            <Box>
              <Fade triggerOnce duration={600}>
                <svg
                  viewBox="0 0 511.262 511.262"
                  xmlns="http://www.w3.org/2000/svg"
                  css={{ height: '4rem' }}
                >
                  <path
                    d="M215.034 489.211V441.42c0-11.871-9.599-21.508-21.47-21.554l-74.58-.292c-12.782-.05-23.681-9.271-25.849-21.868l-12.691-73.767H52.471a6.15 6.15 0 01-6.15-6.15c0-23.513 6.578-46.556 18.99-66.526l9.101-14.643a11.115 11.115 0 001.642-6.723l-3.416-44.206C65.211 89.581 141.195 7.499 237.591 7.499c117.757 0 202.185 113.562 168.262 226.328l-34.465 114.569v140.045c0 7.954-6.423 14.415-14.376 14.463l-127.429.769c-8.021.049-14.549-6.44-14.549-14.462z"
                    fill="#ffcebf"
                  />
                  <path
                    d="M262.238 495.683v-84.989c0-11.871-9.599-21.508-21.47-21.554l-74.58-.292c-12.782-.05-23.681-9.271-25.849-21.868l-7.948-46.199c-2.74-15.928-16.554-27.568-32.716-27.568-3.398 0-6.151-2.781-6.15-6.179a126.02 126.02 0 0118.99-66.497l9.101-14.643a11.115 11.115 0 001.642-6.723l-3.416-44.206c-4.105-53.12 17.284-101.954 53.503-135.014-64.086 26.47-107.528 91.975-101.828 165.74l3.416 44.206a11.113 11.113 0 01-1.642 6.723l-9.101 14.643a126.023 126.023 0 00-18.99 66.526 6.15 6.15 0 006.15 6.15h27.973l12.691 73.767c2.167 12.597 13.067 21.818 25.849 21.868l74.58.292c11.871.046 21.47 9.683 21.47 21.554v51.989c0 5.708 4.645 10.325 10.353 10.29l41.526-.25a10.254 10.254 0 01-3.554-7.766z"
                    fill="#ffb09e"
                  />
                  <circle
                    cx="242.039"
                    cy="181.247"
                    fill="#fd8087"
                    r="125.936"
                  />
                  <path
                    d="M175.412 181.247c0-59.337 41.057-109.086 96.298-122.42a126.36 126.36 0 00-29.671-3.515c-69.552 0-125.936 56.383-125.936 125.936s56.383 125.936 125.936 125.936c10.216 0 20.161-1.224 29.671-3.52-55.241-13.336-96.298-63.08-96.298-122.417z"
                    fill="#fe646f"
                  />
                  <path
                    d="M250.577 247.056l59.366-65.137c15.016-16.475 14.428-41.844-1.334-57.606l-.139-.139c-16.293-16.294-42.71-16.294-59.004 0l-7.451 7.451-7.601-7.571c-16.303-16.237-42.674-16.21-58.944.06-15.843 15.843-16.344 41.37-1.136 57.823l60.246 65.176c4.319 4.672 11.711 4.646 15.997-.057z"
                    fill="#f9f7f8"
                  />
                  <g>
                    <path d="M389.459 288.328c-3.961-1.194-8.148 1.055-9.342 5.021l-15.91 52.887a7.49 7.49 0 00-.318 2.16v154.422c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V349.5l15.592-51.83a7.5 7.5 0 00-5.022-9.342z" />
                    <path d="M237.591 0c-24.587 0-48.322 5.04-70.548 14.98-21.396 9.569-40.36 23.188-56.366 40.479s-28.124 37.248-36.015 59.318c-8.199 22.925-11.396 46.979-9.501 71.492l3.415 44.206a3.592 3.592 0 01-.534 2.187l-9.101 14.643a133.4 133.4 0 00-20.12 70.484c0 7.527 6.123 13.65 13.649 13.65h21.654l11.619 67.538a33.786 33.786 0 0033.211 28.097l74.58.291c7.719.03 13.999 6.335 13.999 14.055v62.342c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5V441.42c0-15.958-12.982-28.991-28.94-29.055l-74.58-.291a18.804 18.804 0 01-18.486-15.64l-12.691-73.767a7.5 7.5 0 00-7.392-6.229H53.829a118.392 118.392 0 0117.853-61.217l9.101-14.643a18.496 18.496 0 002.749-11.262l-3.415-44.205c-3.429-44.376 11.334-86.802 41.569-119.464S193.083 15 237.592 15c53.731 0 102.935 24.73 134.992 67.852 32.058 43.12 41.566 97.361 26.088 148.815l-9.262 30.789a7.5 7.5 0 005.021 9.342c3.96 1.19 8.149-1.055 9.342-5.021l9.262-30.789c16.859-56.041 6.503-115.119-28.413-162.085C349.706 26.937 296.115 0 237.591 0z" />
                    <path d="M344.241 95.467a7.5 7.5 0 00-10.566-.918 7.498 7.498 0 00-.918 10.566c17.875 21.274 27.719 48.313 27.719 76.132 0 65.306-53.131 118.436-118.437 118.436s-118.436-53.13-118.436-118.436 53.13-118.436 118.436-118.436c24.463 0 47.946 7.399 67.911 21.399 3.39 2.378 8.068 1.557 10.446-1.835s1.557-8.068-1.835-10.446c-22.501-15.778-48.962-24.118-76.522-24.118-73.576 0-133.436 59.859-133.436 133.436s59.859 133.436 133.436 133.436 133.437-59.859 133.437-133.436c-.001-31.344-11.094-61.809-31.235-85.78z" />
                    <path d="M245.035 242.004a3.333 3.333 0 01-2.471 1.097h-.011a3.331 3.331 0 01-2.466-1.078l-20.567-22.252a7.5 7.5 0 00-10.599-.417 7.5 7.5 0 00-.417 10.599l20.568 22.253a18.404 18.404 0 0013.48 5.896h.064a18.407 18.407 0 0013.503-5.992l59.365-65.137c17.751-19.477 17.06-49.328-1.573-67.962l-.14-.14c-19.19-19.19-50.417-19.19-69.611 0l-2.158 2.159-2.298-2.289c-19.19-19.112-50.385-19.082-69.54.07a49.084 49.084 0 00-1.34 68.218l17.72 19.169a7.5 7.5 0 1011.016-10.182l-17.72-19.169a34.125 34.125 0 01.932-47.429c13.316-13.317 35.005-13.338 48.348-.05l7.601 7.57a7.502 7.502 0 0010.597-.01l7.45-7.451c13.344-13.345 35.056-13.344 48.397 0l.14.14c12.955 12.954 13.436 33.71 1.095 47.251zM452.592 70.754a7.5 7.5 0 00-9.553-11.565l-12.147 10.035a7.5 7.5 0 009.552 11.565zM400.552 52.019a7.504 7.504 0 002.373.387 7.503 7.503 0 007.114-5.13l5.281-15.844a7.499 7.499 0 00-4.743-9.487 7.497 7.497 0 00-9.487 4.743l-5.281 15.844a7.501 7.501 0 004.743 9.487zM464.941 110.813h-17.125c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h17.125c4.143 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z" />
                  </g>
                </svg>
                <Heading as="h3" fontSize="2xl" mb="4" mt="4">
                  Don&apos;t write. Remember.
                </Heading>
                <Text>
                  Never write down your PIN on anything that is kept in close
                  proximity with your card, including the back of your card.
                </Text>
              </Fade>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>

      {/* <Box
        bg={`linear-gradient(to bottom, ${theme.colors.brand[500]}, ${theme.colors.brand[700]})`}
        h="50%"
        w="100%"
        pos="absolute"
        zIndex="0"
        bottom="0"
        left="0"
        right="0"
      /> */}
    </Box>
  );
};

export default Safety;
