import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Calendar } from 'screens';
import { CustomHeader } from 'navigation/CustomHeader';

const CalendarStack = createNativeStackNavigator();

const CalendarStackScreen: React.FC = () => {
  return (
    <CalendarStack.Navigator
      screenOptions={{ header: props => <CustomHeader {...props} /> }}>
      <CalendarStack.Screen name="CalenderScreen" component={Calendar} />
      {/* other screens */}
    </CalendarStack.Navigator>
  );
};

export default CalendarStackScreen;
