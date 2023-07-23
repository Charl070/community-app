import React, { useContext } from 'react';
import { Typography } from 'components/Typography';
import { StyledScrollView, StyledSafeAreaView } from '../common.styles';
import { Button } from 'components/Button';
import { AuthContext } from 'context';

const Calendar = (): JSX.Element => {
  const { setUser } = useContext(AuthContext);
  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Typography weight="bold" variant="heading1">
          Calendar Screen
        </Typography>
        <Button
          variant={'primary'}
          title={'Logout'}
          onPress={() => setUser(false)}
        />
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default Calendar;
