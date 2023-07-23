import React from 'react';
import { StyledInput, StyledView } from '../styles';
import { InputFieldProps } from '../types';
import { SearchFilled } from 'assets/svg';
import { debounceWithRef } from 'constants/utils';

const Search: React.FC<InputFieldProps> = ({ handleInput }) => {
  const DELAY = 500;
  const timerRef = React.useRef<ReturnType<typeof setTimeout>>(null!);

  return (
    <StyledView testID="SearchBar">
      <SearchFilled height={24} width={24} />
      <StyledInput
        onChangeText={text =>
          debounceWithRef(() => handleInput(text), DELAY, timerRef)
        }
        placeholder="Search"
        autoCapitalize="none"
        testID="SearchInput"
      />
    </StyledView>
  );
};

export { Search };
