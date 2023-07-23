import * as React from 'react';
import { waitFor } from '@testing-library/react-native';
import { DetailedNews } from './DetailedNewsItem.component';
import startMirage from '../../../mock-server';
import { renderWithProviders } from '../../../tests/utils';
import * as mocks from '../../../mock-server/mocks';
import { Server } from 'miragejs';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
const getComponent = (id: string) => <DetailedNews newsId={id} />;

describe('Tests Detailed News Items', () => {
  let server: Server;

  const seedMockServer = () => {
    const { data } = mocks.news;
    data.forEach(item => {
      server.create('item', item);
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

  it('It renders DetailedNews component', async () => {
    seedMockServer();

    const { getByTestId } = renderWithProviders(getComponent('2'));

    await waitFor(() => {
      expect(getByTestId('NewsContainer')).toBeTruthy();
    });
  });
  it('It renders detailed news item', async () => {
    seedMockServer();

    const { getByTestId } = renderWithProviders(getComponent('2'));

    await waitFor(() => {
      expect(getByTestId('News')).toBeTruthy();
    });
  });
});
