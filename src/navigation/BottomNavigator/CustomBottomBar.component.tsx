import React from 'react';
import {
  CalendarFilled,
  CalendarOutline,
  FilesFilled,
  FilesOutline,
  HomeFilled,
  HomeOutline,
  ReportFilled,
  ReportOutline,
} from 'assets/svg';

import {
  StyledText,
  StyledTouchableOpacity,
  StyledView,
} from './CustomBottomBar.styles';

import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

function getImage(pageName: string, isFocused: boolean) {
  return (
    {
      Calendar: isFocused ? (
        <CalendarFilled height={24} width={24} />
      ) : (
        <CalendarOutline height={24} width={24} />
      ),
      Files: isFocused ? (
        <FilesFilled height={25} width={24} />
      ) : (
        <FilesOutline height={25} width={24} />
      ),
      News: isFocused ? (
        <HomeFilled height={24} width={24} />
      ) : (
        <HomeOutline height={24} width={24} />
      ),
      Report: isFocused ? (
        <ReportFilled height={24} width={24} />
      ) : (
        <ReportOutline height={24} width={24} />
      ),
    }[pageName] || null
  );
}

const BottomNavigator: React.FC<BottomTabBarProps> = props => {
  const { state, descriptors, navigation } = props;
  return (
    <StyledView>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const label = route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true, params: {} });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <StyledTouchableOpacity
            key={route.name}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {getImage(route.name, isFocused)}
            <StyledText isFocused={isFocused}>{label}</StyledText>
          </StyledTouchableOpacity>
        );
      })}
    </StyledView>
  );
};

export default BottomNavigator;
