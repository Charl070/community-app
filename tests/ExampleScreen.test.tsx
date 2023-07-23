import React from 'react';
import { Example } from 'screens/Example';

import { renderWithProviders } from './utils';

/**
 * this is an example test for the home screen example
 */
describe('Example screen', () => {
  it('renders correctly', async () => {
    const { findByTestId } = renderWithProviders(<Example />);
    const apiResponse = await findByTestId('list');
    expect(apiResponse).not.toBeNull();
    expect(apiResponse.children.length).toBe(5);
  });
});
