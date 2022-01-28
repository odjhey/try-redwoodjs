// TODO: see how to better integrate this with mantine

type pallete = '#ffffff' | '#1a1a1a' | '#2a2a2a'

type TColors = {
  bg: pallete
  bg1: pallete
}

type TThemeColors = {
  dark: TColors
  light: TColors
}

const colors: TThemeColors = {
  dark: {
    bg: '#1a1a1a',
    bg1: '#1a1a1a',
  },
  light: {
    bg: '#ffffff',
    bg1: '#2a2a2a',
  },
}

export default colors
