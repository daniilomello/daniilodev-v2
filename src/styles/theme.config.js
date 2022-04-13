import { extendTheme } from '@chakra-ui/react';


export const theme = extendTheme({
  colors: {
    blue: {
      900: '#04194D',
      800: '#2D3460',
      700: '#575A8B',
      600: '#6B6EA0',
      500: '#7F82B6',
      400: '#9597CC',
      300: '#ABACE3',
      200: '#C1C2FA',
      100: '#D7D8FF',
      50: '#F7F8FF',
    },
    pink: {
      900: '#641957',
      800: '#792E6B',
      700: '#8F427F',
      600: '#A55694',
      500: '#BB6BA9',
      400: '#D280BF',
      300: '#E995D5',
      200: '#FFABEC',
      100: '#FFC1FF',
      50: '#FFD8FF',
    },
  },
  fonts: {
    heading: 'Anek Tamil',
    body: 'Anek Tamil',
  },
  styles: {
    global: {
      body: {
        bg: 'blue.900',
        color: 'blue.50',
      },
    },
  },
});
