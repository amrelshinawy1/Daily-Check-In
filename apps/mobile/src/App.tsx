import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { DailyCheckInScreen } from './screens/DailyCheckInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fafafa" />
      <DailyCheckInScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
});

export default App; 