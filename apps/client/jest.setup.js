// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// Mock React Native modules
jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native');
  return {
    ...RN,
    StatusBar: 'StatusBar',
  };
});

// Mock Tamagui
jest.mock('tamagui', () => ({
  TamaguiProvider: ({ children }) => children,
  Button: 'Button',
  Text: 'Text',
  YStack: 'YStack',
  XStack: 'XStack',
  TextArea: 'TextArea',
  Spinner: 'Spinner',
  Card: 'Card',
})); 