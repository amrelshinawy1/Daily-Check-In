// Polyfills for Node.js globals in browser environment
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.process = {
    env: {},
    platform: 'browser',
    version: 'v16.0.0',
    browser: true,
    node: false,
  };
} 