import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Typography } from 'components/Typography';
import Logo from 'assets/svg/Logo.svg';
import { StyledScrollView, StyledSafeAreaView } from './Example.styles';
import { useExample } from './useExample';

const Example = (): JSX.Element => {
  const { data, isLoading } = useExample();

  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <Logo width={72} height={72} />
        <Typography weight="bold" variant="heading1">
          Hello world!
        </Typography>
        <Typography weight="bold" variant="paragraph">
          Mocked API data:
        </Typography>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Typography variant="paragraph">{data?.data.sample}</Typography>
            <View testID="list">
              {data?.data.message.map((msg: string) => (
                <Typography key={msg} variant="paragraph">
                  {msg}
                </Typography>
              ))}
            </View>
          </>
        )}
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default Example;
