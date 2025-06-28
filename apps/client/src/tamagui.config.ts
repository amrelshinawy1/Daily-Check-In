import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { themes, tokens } from '@tamagui/themes'

const headingFont = createInterFont()
const bodyFont = createInterFont()

const config = createTamagui({
  defaultFont: 'body',
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens,
})

export type AppConfig = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config 