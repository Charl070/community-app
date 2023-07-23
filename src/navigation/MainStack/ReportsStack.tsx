import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Report } from 'screens';
import { ChevronRight } from 'assets/svg';
import { Button } from 'components/Button';
import { CustomHeader } from 'navigation/CustomHeader';

const ReportsStack = createNativeStackNavigator();

const ReportsStackScreen: React.FC = () => {
  return (
    <ReportsStack.Navigator
      screenOptions={{ header: props => <CustomHeader {...props} /> }}>
      <ReportsStack.Screen
        name="Reports"
        component={Report}
        options={({ navigation }) => {
          const handleNewReport = () => {
            navigation.navigate('News');
          };
          return {
            headerRight: () => (
              <Button
                title="New Report"
                variant={'primary'}
                onPress={handleNewReport}
                buttonTextColor="white"
                fontWeight="bold"
                iconElement={<ChevronRight height={24} width={24} />}
              />
            ),
          };
        }}
      />
      {/* other screens */}
    </ReportsStack.Navigator>
  );
};

export default ReportsStackScreen;
