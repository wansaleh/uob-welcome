import { ChakraProvider } from '@chakra-ui/react';

import chakra from '../styles/chakra';
import '../styles/main.css';
import '../styles/font-agenda.css';
import '../styles/slick.css';
import '../styles/slick-theme.css';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={chakra}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
