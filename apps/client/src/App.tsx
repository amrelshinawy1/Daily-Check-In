import React from 'react';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import { DailyCheckInScreen } from './screens/DailyCheckInScreen';

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <DailyCheckInScreen />
    </TamaguiProvider>
  );
} 