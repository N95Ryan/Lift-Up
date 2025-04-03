import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      500: '#9E0031', // Main accent color for buttons and selectors
    },
    background: {
      900: '#222725', // Main background color
    },
    text: {
      50: '#FFFFFF', // Main text color
    }
  },
  config: {
    initialColorMode: 'dark',
  },
  components: {
    Box: {
      baseStyle: {
        bg: 'background.900',
      },
    },
    Text: {
      baseStyle: {
        color: 'text.50',
      },
    },
    Pressable: {
      baseStyle: {
        _pressed: {
          opacity: 0.8,
        },
      },
    },
  },
}); 