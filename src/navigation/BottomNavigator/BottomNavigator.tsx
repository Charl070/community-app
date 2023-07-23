import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomBar from './CustomBottomBar.component';
import NewsStackScreen from 'navigation/MainStack/NewsStack';
import ReportsStackScreen from 'navigation/MainStack/ReportsStack';
import FilesStackScreen from 'navigation/MainStack/FilesStack';
import CalendarStackScreen from 'navigation/MainStack/CalendarStack';

const Tabs = createBottomTabNavigator();

const BottomNavigator: React.FC = () => {
  return (
    <Tabs.Navigator
      tabBar={props => <CustomBottomBar {...props} />}
      screenOptions={{ headerShown: false }}
      initialRouteName="News">
      <Tabs.Screen name="News" component={NewsStackScreen} />
      <Tabs.Screen name="Calendar" component={CalendarStackScreen} />
      <Tabs.Screen name="Files" component={FilesStackScreen} />
      <Tabs.Screen name="Report" component={ReportsStackScreen} />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
