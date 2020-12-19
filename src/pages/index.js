import { Box } from '@chakra-ui/react';

import Footer from '../components/footer';
import Head from '../components/head';
import Header from '../components/header';
import Activate from '../containers/home/activate';
import ContactTerms from '../containers/home/contact-terms';
import Explore from '../containers/home/explore';
import Hero from '../containers/home/hero';
import Mighty from '../containers/home/mighty';
import Privileges from '../containers/home/privileges';
import Safety from '../containers/home/safety';

const Home = () => {
  return (
    <Box bg="#fff" maxW="100vw" overflowX="hidden">
      <Head title="UOB Cardmembers Welcome" />

      <Header />

      <Hero />
      <Explore />
      <Mighty />
      <Privileges />
      <Safety />
      <Activate />
      <ContactTerms />

      <Footer />
    </Box>
  );
};

export default Home;
