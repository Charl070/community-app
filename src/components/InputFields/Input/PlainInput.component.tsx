import React from 'react';
import { StyledInput, StyledView } from '../styles';
import { InputFieldProps } from '../types';

const PlainInput: React.FC<InputFieldProps> = props => {
  return (
    <StyledView testID="PlainInput">
      <StyledInput
        {...props}
        onChangeText={props.handleInput}
        testID="PlainInputField"
      />
    </StyledView>
  );
};

export { PlainInput };
