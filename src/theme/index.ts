import { theme as chakraTheme, extendTheme } from '@chakra-ui/react'
import images from './images'

const theme = extendTheme({
  ...chakraTheme,
  fonts: {
    body: 'Muli, sans-serif',
    mono: 'Muli, sans-serif',
    heading: 'Muli, sans-serif'
  },
  colors: {
    ...chakraTheme.colors,
    brand: {
      50: '#9277ff', // light purple
      100: '#7c5dfa', // purple
      200: '#252945', // nav gray
      300: '#1e2139', // nav light gray
      400: '#dfe3fa',
      500: '#888eb0',
      600: '#7e88c3',
      700: 'rgb(255,151,151)',
      800: '#ec5757',
      900: '#141625'
    },
    accent: {
      50: '#fff7db',
      100: '#ffe5ae',
      200: '#fdd57f',
      300: '#fbc44e',
      400: '#fab31f',
      500: '#FAB423',
      600: '#af7700',
      700: '#7e5500',
      800: '#4c3300',
      900: '#1d1000'
    },
    success: {
      50: '#e3fbee',
      100: '#c3ebd7',
      200: '#a0dcbf',
      300: '#7ccda7',
      400: '#59bf8e',
      500: '#40a674',
      600: '#30815a',
      700: '#205c40',
      800: '#0e3825',
      900: '#001509'
    }
  },
  boxShadow: '0px 0px 4px 4px rgba(0,0,0,0.4)',
  gridGutter: 1 // rem - taken from Chakra UI space scale https://chakra-ui.com/theme#spacing
})

export { theme, images }
