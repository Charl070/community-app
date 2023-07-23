import React from 'react';
import { render } from '@testing-library/react-native';
import { PasswordInput } from './Password.component';

describe('Testing the StyledInput component', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(
      <PasswordInput handleInput={() => null} hidePassword={false} />,
    );
    const item = getByTestId('PasswordInput');
    expect(item).toBeTruthy();
  });
});
