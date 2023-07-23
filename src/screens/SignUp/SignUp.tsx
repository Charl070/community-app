import React from 'react';
import { Typography } from 'components/Typography';
import { StyledSafeAreaView } from 'screens/common.styles';

const Signup: React.FC = () => {
  return (
    <StyledSafeAreaView>
      <Typography variant={'heading1'} weight="bold">
        Signup Screen
      </Typography>
    </StyledSafeAreaView>
  );
};

export default Signup;
