import React from 'react';
import { StyledInput, StyledView } from '../styles';
import { PasswordInputProps } from '../types';

const PasswordInput: React.FC<PasswordInputProps> = props => {
  return (
    <StyledView testID="PasswordInput">
      <StyledInput
        onChangeText={() => {}}
        secureTextEntry={props.hidePassword}
        placeholder="password"
        autoCapitalize="none"
        testID="PasswordInputField"
      />
      {props.rightIcon}
    </StyledView>
  );
};

export { PasswordInput };
