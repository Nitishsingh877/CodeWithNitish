import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#e3f2fd',
      100: '#bbdefb',
      200: '#90caf9',
      300: '#64b5f6',
      400: '#42a5f5',
      500: '#2196f3',
      600: '#1e88e5',
      700: '#1976d2',
      800: '#1565c0',
      900: '#0d47a1',
    },
    accent: {
      50: '#f3e5f5',
      100: '#e1bee7',
      200: '#ce93d8',
      300: '#ba68c8',
      400: '#ab47bc',
      500: '#9c27b0',
      600: '#8e24aa',
      700: '#7b1fa2',
      800: '#6a1b9a',
      900: '#4a148c',
    }
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`,
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#0f1419' : '#f8f9fa',
        color: props.colorMode === 'dark' ? '#e8eef5' : '#1a202c',
      },
      '*::selection': {
        bg: props.colorMode === 'dark' ? '#42a5f5' : '#90caf9',
        color: 'white',
      },
      '::-webkit-scrollbar': {
        width: '8px',
        height: '8px',
      },
      '::-webkit-scrollbar-track': {
        bg: props.colorMode === 'dark' ? '#1a202c' : '#e2e8f0',
      },
      '::-webkit-scrollbar-thumb': {
        bg: '#42a5f5',
        borderRadius: '4px',
        '&:hover': {
          bg: '#1e88e5',
        },
      },
    }),
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'brand',
      },
      variants: {
        gradient: {
          bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          _hover: {
            bg: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
          },
          _active: {
            transform: 'translateY(0)',
          },
        },
        solidGradient: {
          bg: 'linear-gradient(135deg, #42a5f5 0%, #ab47bc 100%)',
          color: 'white',
          fontWeight: 'bold',
          _hover: {
            boxShadow: '0 10px 24px rgba(66, 165, 245, 0.4)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
          borderRadius: 'xl',
          boxShadow: props.colorMode === 'dark' 
            ? '0 4px 6px -1px rgba(0, 0, 0, 0.3)' 
            : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          _hover: {
            boxShadow: props.colorMode === 'dark'
              ? '0 20px 25px -5px rgba(0, 0, 0, 0.5)'
              : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          },
        },
      }),
    },
    Heading: {
      baseStyle: {
        fontWeight: '700',
        letterSpacing: '-0.01em',
      },
    },
    Text: {
      baseStyle: {
        lineHeight: '1.6',
      },
    },
    Input: {
      baseStyle: (props) => ({
        field: {
          borderRadius: 'lg',
          transition: 'all 0.2s',
          _focus: {
            borderColor: 'brand.400',
            boxShadow: '0 0 0 3px rgba(66, 165, 245, 0.1)',
          },
          _placeholder: {
            color: props.colorMode === 'dark' ? 'gray.500' : 'gray.400',
          },
        },
      }),
    },
    Badge: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: '500',
        fontSize: 'xs',
      },
    },
  },
})

export default theme