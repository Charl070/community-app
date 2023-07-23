import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Files } from 'screens';
import { CustomHeader } from 'navigation/CustomHeader';
import { Search } from 'components/InputFields';

const FilesStack = createNativeStackNavigator();

const FilesStackScreen: React.FC = () => {
  return (
    <FilesStack.Navigator
      screenOptions={{ header: props => <CustomHeader {...props} /> }}>
      <FilesStack.Screen
        name="File"
        component={Files}
        options={({ navigation }) => {
          const handleSearch = (searchQuery: string) => {
            navigation.navigate('Files', { searchQuery });
          };
          return {
            headerLeft: () => <Search handleInput={handleSearch} />,
          };
        }}
      />
      {/* other screens */}
    </FilesStack.Navigator>
  );
};

export default FilesStackScreen;
