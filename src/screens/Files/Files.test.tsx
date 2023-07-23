import React from 'react';
import { waitFor } from '@testing-library/react-native';
import { Server } from 'miragejs';
import { renderWithProviders } from '../../../tests/utils';
import buildMockServer from '../../../mock-server';
import * as mocks from '../../../mock-server/mocks';

import Files from './Files';

let server: Server;

/**
 * Shutting down lingering server instances before starting new one
 */
beforeEach(() => {
  if (window.server) {
    window.server.shutdown();
  }
  server = buildMockServer(0);
});

/**
 * Shutdown server instance after each test
 */
afterEach(() => {
  server.shutdown();
});

const seedMockServer = () => {
  const { data } = mocks.files;
  data.forEach(file => {
    server.create('file', file);
  });
};

describe('Testing the Files screen', () => {
  it('renders the favourited files section', async () => {
    seedMockServer();

    const { getByTestId } = renderWithProviders(<Files />);
    await waitFor(() => {
      expect(getByTestId('favouritesArea')).toBeTruthy();
    });
  });

  it('renders the recent files section', async () => {
    seedMockServer();

    const { getByTestId } = renderWithProviders(<Files />);
    await waitFor(() => {
      expect(getByTestId('recentsArea')).toBeTruthy();
    });
  });
});
