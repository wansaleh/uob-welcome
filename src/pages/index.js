/* eslint-disable no-new */
import { Box } from '@chakra-ui/core';
import { view } from '@risingstack/react-easy-state';
import { useEffect } from 'react';
import Rellax from 'rellax';

import { useBoolean } from 'react-use';
import Head from '../components/head';
import Header from '../components/header';
import Explore from '../containers/home/explore';
import Hero from '../containers/home/hero';
import Mighty from '../containers/home/mighty';
import Activate from '../containers/home/activate';
import Footer from '../components/footer';
import Safety from '../containers/home/safety';
import ContactTerms from '../containers/home/contact-terms';

const Home = () => {
  useEffect(() => {
    new Rellax('.rellax');
  }, []);

  const [explore, toggleExplore] = useBoolean(false);

  return (
    <Box bg="#fff">
      <Head title="UOB Cardmembers Welcome" />

      <Header />

      <Hero toggleExplore={toggleExplore} />
      {true && (
        <>
          <Explore />
          <Mighty />
          <Activate />
          <Safety />
          <ContactTerms />
        </>
      )}

      <Footer />
    </Box>
  );
};

export default view(Home);
