import React from 'react';
import ReactDOM from 'react-dom/client';
import { TamaguiProvider } from 'tamagui';
import config from './tamagui.config';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TamaguiProvider config={config}>
      <App />
    </TamaguiProvider>
  </React.StrictMode>
); 