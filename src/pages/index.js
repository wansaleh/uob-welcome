/* eslint-disable no-new */
import { Heading, Text, Flex, Box } from '@chakra-ui/core';
import { view } from '@risingstack/react-easy-state';
import { useEffect } from 'react';
import Rellax from 'rellax';

import Head from '../components/head';
import Header from '../components/header';
import Explore from '../containers/home/explore';
import Hero from '../containers/home/hero';
// import Nav from '../components/nav';
import SmoothScroll from '../smoothscroll';

const Home = () => {
  useEffect(() => {
    // SmoothScroll();
    new Rellax('.rellax');
  }, []);

  return (
    <>
      <Head title="UOB Cardmembers Welcome" />

      <Header />

      <Box>
        <Hero />
        <Explore />
      </Box>
    </>
  );
};

export default view(Home);
