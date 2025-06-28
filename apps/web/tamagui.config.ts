import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { themes, tokens } from '@tamagui/themes'

const headingFont = createInterFont({
  size: {
    6: 15,
    7: 18,
    8: 20,
    9: 23,
    10: 27,
    11: 30,
    12: 35,
    14: 40,
    15: 43,
  },
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    6: '400',
    7: '600',
    8: '700',
    9: '700',
    10: '700',
    11: '700',
    12: '800',
    14: '800',
    15: '800',
  },
  color: {
    6: '$colorFocus',
    7: '$color',
    8: '$color',
    9: '$color',
    10: '$color',
    11: '$color',
    12: '$color',
    14: '$color',
    15: '$color',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: 0,
    9: -1,
    10: -1.5,
    11: -2,
    12: -2.5,
    14: -3,
    15: -4,
  },
  face: {
    700: { normal: 'InterBold' },
    800: { normal: 'InterBold' },
    900: { normal: 'InterBold' },
  },
})

const bodyFont = createInterFont(
  {
    face: {
      900: { normal: 'InterBold' },
    },
  },
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
)

const config = createTamagui({
  defaultFont: 'body',
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes: {
    ...themes,
    light: {
      ...themes.light,
      background: '#ffffff',
      backgroundHover: '#f8f9fa',
      backgroundPress: '#e9ecef',
      backgroundFocus: '#ffffff',
      borderColor: '#dee2e6',
      color: '#212529',
      colorHover: '#495057',
      colorPress: '#212529',
      colorFocus: '#495057',
      placeholderColor: '#6c757d',
    },
    dark: {
      ...themes.dark,
      background: 'transparent',
      backgroundHover: 'rgba(255, 255, 255, 0.1)',
      backgroundPress: 'rgba(255, 255, 255, 0.2)',
      backgroundFocus: 'rgba(255, 255, 255, 0.05)',
      borderColor: 'rgba(255, 255, 255, 0.2)',
      color: '#ffffff',
      colorHover: 'rgba(255, 255, 255, 0.9)',
      colorPress: '#ffffff',
      colorFocus: 'rgba(255, 255, 255, 0.9)',
      placeholderColor: 'rgba(255, 255, 255, 0.5)',
    },
  },
  tokens: {
    ...tokens,
    color: {
      ...tokens.color,
      primary: '#667eea',
      secondary: '#764ba2',
      success: '#4ade80',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
    },
    space: {
      ...tokens.space,
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      13: 52,
      14: 56,
      15: 60,
      16: 64,
      17: 68,
      18: 72,
      19: 76,
      20: 80,
    },
    size: {
      ...tokens.size,
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
      11: 44,
      12: 48,
      13: 52,
      14: 56,
      15: 60,
      16: 64,
      17: 68,
      18: 72,
      19: 76,
      20: 80,
    },
    radius: {
      ...tokens.radius,
      0: 0,
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      6: 24,
      7: 28,
      8: 32,
      9: 36,
      10: 40,
    },
  },
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config 