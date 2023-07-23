import * as React from 'react';
import { render } from '@testing-library/react-native';
import { Button } from './Button.component';
import { ButtonVariant } from './Button.types';

const mockProps = {
  onPress() {},
  variant: 'secondary' as ButtonVariant,
  title: 'Button One',
};

it('renders the Button component with title', async () => {
  const { getByText } = render(<Button {...mockProps} />);
  const item = await getByText('Button One');
  expect(item).toBeTruthy();
});
