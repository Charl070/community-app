import * as React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from 'navigation/BottomNavigator';
import { renderWithProviders } from '../../../tests/utils';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const getComponent = () => (
  <NavigationContainer>
    <BottomNavigator />
  </NavigationContainer>
);

describe('Testing BottomTab Navigator', () => {
  it('takes you to the Calendar screen', async () => {
    const { getByText } = renderWithProviders(getComponent());
    const toClick = await getByText('Calendar');

    fireEvent(toClick, 'press');
    const newHeader = await getByText('Calendar Screen');
    expect(newHeader).toBeTruthy();
  });

  it('takes you to Files screen', async () => {
    const { getByText, getByTestId } = renderWithProviders(getComponent());
    const toClick = await getByText('Files');

    fireEvent(toClick, 'press');
    const screen = await getByTestId('FilesScreen');
    expect(screen).toBeTruthy();
  });

  it('takes you to Report screen', async () => {
    const { getByText, getByTestId } = renderWithProviders(getComponent());
    const toClick = await getByText('Report');

    fireEvent(toClick, 'press');
    const newHeader = await getByTestId('ReportsScreen');
    expect(newHeader).toBeTruthy();
  });
});
