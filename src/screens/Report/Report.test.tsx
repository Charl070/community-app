import { waitFor } from '@testing-library/react-native';
import { Server } from 'miragejs';
import React from 'react';
import startMirage from '../../../mock-server';
import { renderWithProviders } from '../../../tests/utils';
import * as mocks from '../../../mock-server/mocks';
import Report from './Report';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
const getComponent = () => <Report />;

describe('Tests report screen', () => {
  let server: Server;

  const seedMockServer = () => {
    const { data } = mocks.reports;
    data.forEach(report => {
      server.create('report', report);
    });
  };

  beforeEach(() => {
    if (window.server) {
      window.server.shutdown();
    }
    server = startMirage(0);
  });

  afterEach(() => {
    server.shutdown();
  });

  it('renders report screen', async () => {
    seedMockServer();
    const { getAllByTestId } = renderWithProviders(getComponent());

    await waitFor(() => {
      expect(getAllByTestId('ReportsContainer')).toBeTruthy();
    });
  });
  it('renders report number and status', async () => {
    seedMockServer();
    const { getAllByTestId } = renderWithProviders(getComponent());

    await waitFor(() => {
      expect(getAllByTestId('TicketNumber')).toBeTruthy();
    });
    await waitFor(() => {
      expect(getAllByTestId('StatusCard')).toBeTruthy();
    });
  });
});
