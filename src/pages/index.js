/* eslint-disable no-new */
import { Heading, Text, Flex, Box } from '@chakra-ui/core';
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
// import Nav from '../components/nav';
// import SmoothScroll from '../smoothscroll';
// import Butter from '../butter';

const Home = () => {
  useEffect(() => {
    // SmoothScroll();
    // new Butter().init();
    new Rellax('.rellax');
  }, []);

  const [explore, toggleExplore] = useBoolean(false);

  return (
    <div>
      <Head title="UOB Cardmembers Welcome" />

      <Header />

      <Box id="butter">
        <Hero toggleExplore={toggleExplore} />
        {true && (
          <>
            <Explore />
            <Mighty />
            <Activate />
          </>
        )}
      </Box>
    </div>
  );
};

export default view(Home);
