import React from 'react';
import {
  ActionsView,
  ContainerView,
  FooterView,
  StyledTouchableOpacity,
} from './CustomHeader.styles';
import { ChevronLeft } from 'assets/svg';
import { Typography } from 'components/Typography';
import { SafeAreaView } from 'react-native';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

const getHeaderTitle = (routeName: string) => {
  switch (routeName) {
    case 'List':
      return 'List';
    case 'File':
      return 'Files';
    case 'CalenderScreen':
      return 'Calendar';
    case 'Reports':
      return 'Report';
    default:
      return 'Back';
  }
};

const CustomHeader: React.FC<NativeStackHeaderProps> = props => {
  const { navigation, options, route } = props;
  const title = getHeaderTitle(route.name);

  return (
    <SafeAreaView>
      <ContainerView testID="CustomHeader">
        <ActionsView testID="TitleView">
          {title === 'Back' ? (
            <StyledTouchableOpacity
              onPress={() => navigation.goBack()}
              testID="backButton">
              <ChevronLeft height={32} width={32} />
              <Typography variant="heading2" weight="bold">
                Back
              </Typography>
            </StyledTouchableOpacity>
          ) : (
            <Typography variant="heading2" weight="bold">
              {title}
            </Typography>
          )}
          {options.headerRight
            ? options.headerRight({
                canGoBack: false,
              })
            : null}
        </ActionsView>
        <FooterView>
          {options.headerLeft
            ? options.headerLeft({
                canGoBack: false,
              })
            : null}
        </FooterView>
      </ContainerView>
    </SafeAreaView>
  );
};

export { CustomHeader };
