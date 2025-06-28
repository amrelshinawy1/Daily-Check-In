module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'transform-inline-environment-variables',
      {
        include: ['TAMAGUI_TARGET'],
      },
    ],
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './src/tamagui.config.ts',
      },
    ],
  ],
}; 