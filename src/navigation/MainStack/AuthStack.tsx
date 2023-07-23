import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from 'screens/Login';
import SignUp from 'screens/SignUp/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={SignUp} name="SignUp" />
      {/* other screens */}
    </Stack.Navigator>
  );
};

export default AuthStack;
