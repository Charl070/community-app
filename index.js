import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import buildMockServer from './mock-server';

import App from 'App';

if (process.env.NODE_ENV !== 'test') {
  if (window.server) {
    window.server.shutdown();
  }

  window.server = buildMockServer();
}

AppRegistry.registerComponent(appName, () => App);
