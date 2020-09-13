import facepaint from 'facepaint';
import theme from '@chakra-ui/theme';

export default facepaint([
  '@media(min-width: 20em)',
  ...theme.breakpoints.map((br) => `@media(min-width: ${br})`)
]);
