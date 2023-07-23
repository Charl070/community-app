import * as React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Search } from './Search.component';

jest.useFakeTimers();

describe('Testing the Search component', () => {
  it('renders the Search component', () => {
    const { getByTestId } = render(<Search handleInput={() => null} />);
    const item = getByTestId('SearchBar');
    expect(item).toBeTruthy();
  });

  it('waits 500ms before firing callback', async () => {
    const mockFn = jest.fn();
    const { getByTestId } = render(<Search handleInput={mockFn} />);
    const searchInput = getByTestId('SearchInput');
    fireEvent.changeText(searchInput, 'h');

    // at this point the mockFn should not have be called
    expect(mockFn).not.toBeCalled();

    // fast-forward by 600ms and check if it was called
    jest.advanceTimersByTime(600);

    // at this point the mockFn should have been called
    expect(mockFn).toBeCalled();
  });
});
