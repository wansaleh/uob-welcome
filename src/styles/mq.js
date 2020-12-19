import theme from '@chakra-ui/theme';
import facepaint from 'facepaint';

export default facepaint([
  ...theme.breakpoints.map((br) => `@media(min-width: ${br})`)
]);
