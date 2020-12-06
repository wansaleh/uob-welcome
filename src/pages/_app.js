import '../styles/main.css';
import '../styles/font-agenda.css';
import '../styles/slick.css';
import '../styles/slick-theme.css';

import { ChakraProvider } from '@chakra-ui/react';

import chakra from '../styles/chakra';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
