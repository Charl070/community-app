import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { News } from 'screens';
import { NewsDetails } from 'screens/NewsDetails';
import { CustomHeader } from 'navigation/CustomHeader';
import { Filter, Hamburger, List } from 'assets/svg';
import { StyledSearchContainer } from 'screens/News/News.styles';
import { Search } from 'components/InputFields';
import { StyledTouchableOpacity } from 'navigation/CustomHeader/CustomHeader.styles';

const NewsStack = createNativeStackNavigator();

function getImage(pageName: string, isFocused: boolean) {
  return (
    {
      List: isFocused ? (
        <List height={24} width={24} />
      ) : (
        <List height={24} width={24} />
      ),
      Hamburger: isFocused ? (
        <Hamburger height={24} width={24} />
      ) : (
        <Hamburger height={24} width={24} />
      ),
      Filter: isFocused ? (
        <Filter height={24} width={24} />
      ) : (
        <Filter height={24} width={24} />
      ),
    }[pageName] || null
  );
}

const NewsStackScreen: React.FC = () => {
  return (
    <NewsStack.Navigator
      screenOptions={{ header: props => <CustomHeader {...props} /> }}>
      <NewsStack.Screen
        component={News}
        name="List"
        options={({ navigation }) => {
          const handleSearch = (searchQuery: string) => {
            navigation.navigate('List', { searchQuery });
          };
          return {
            headerLeft: () => (
              <StyledSearchContainer>
                <Search handleInput={handleSearch} />
              </StyledSearchContainer>
            ),
            headerRight: () => (
              <StyledTouchableOpacity onPress={() => {}}>
                {getImage('Hamburger', true)}
              </StyledTouchableOpacity>
            ),
          };
        }}
      />
      <NewsStack.Screen
        component={NewsDetails}
        name="NewsDetails"
        options={({ navigation }) => {
          const handleSearch = (searchQuery: string) => {
            navigation.navigate('News', { searchQuery });
          };
          return {
            headerLeft: () => (
              <StyledSearchContainer>
                <Search handleInput={handleSearch} />
              </StyledSearchContainer>
            ),
            headerRight: () => (
              <StyledTouchableOpacity onPress={() => {}}>
                {getImage('List', true)}
              </StyledTouchableOpacity>
            ),
          };
        }}
      />
    </NewsStack.Navigator>
  );
};

export default NewsStackScreen;
