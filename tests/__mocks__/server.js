import buildMockServer from '../../mock-server';
import { setLogger } from 'react-query';

setLogger({
  log: () => {},
  warn: () => {},
  // ✅ no more errors on the console
  error: () => {},
});

let server;
beforeEach(() => {
  server = buildMockServer(0);
});

afterEach(() => {
  server.shutdown();
});
