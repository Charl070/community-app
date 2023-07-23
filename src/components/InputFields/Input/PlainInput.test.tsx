import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { PlainInput } from './PlainInput.component';

describe('Testing the StyledInput component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<PlainInput handleInput={() => null} />);
    const item = getByTestId('PlainInput');
    expect(item).toBeTruthy();
  });

  it('calls the handleInput function', () => {
    const handleFn = jest.fn();
    const { getByTestId } = render(<PlainInput handleInput={handleFn} />);
    const field = getByTestId('PlainInputField');

    fireEvent.changeText(field, 'h');
    expect(handleFn).toBeCalled();
  });
});
