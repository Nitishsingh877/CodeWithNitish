import { extendTheme } from '@chakra-ui/react';

// Fonts should be added to index.html or imported via CSS
// We will use Playfair Display for headings and Inter for body text to give a premium feel.

const colors = {
  brand: {
    primary: '#FAF7F2',    // Warm White
    secondary: '#8B6F47',  // Soft Brown
    accent: '#4A3728',     // Dark Brown
    highlight: '#C8A97E',  // Gold Beige
    text: '#1A1A1A',       // Rich Black
    bg: '#FAF7F2',         // Background color
  },
};

const fonts = {
  heading: `'Playfair Display', serif`,
  body: `'Inter', sans-serif`,
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: '600',
      borderRadius: 'md',
    },
    variants: {
      solid: {
        bg: 'brand.accent',
        color: 'white',
        _hover: {
          bg: 'brand.secondary',
        },
      },
      outline: {
        borderColor: 'brand.accent',
        color: 'brand.accent',
        _hover: {
          bg: 'blackAlpha.50',
        },
      },
      ghost: {
        color: 'brand.text',
        _hover: {
          bg: 'blackAlpha.50',
        },
      },
    },
    defaultProps: {
      variant: 'solid',
    },
  },
  Heading: {
    baseStyle: {
      color: 'brand.text',
    },
  },
  Text: {
    baseStyle: {
      color: 'brand.text',
    },
  },
};

const styles = {
  global: {
    body: {
      bg: 'brand.bg',
      color: 'brand.text',
      lineHeight: 'tall',
      scrollBehavior: 'smooth',
    },
    '::selection': {
      bg: 'brand.highlight',
      color: 'brand.text',
    },
    '::-webkit-scrollbar': {
      width: '8px',
    },
    '::-webkit-scrollbar-track': {
      bg: 'brand.primary',
    },
    '::-webkit-scrollbar-thumb': {
      bg: 'brand.secondary',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      bg: 'brand.accent',
    },
  },
};

const theme = extendTheme({ colors, fonts, components, styles });

export default theme;
