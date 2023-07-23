import React, { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { BottomNavigator } from 'navigation/BottomNavigator';
import AuthStack from 'navigation/MainStack/AuthStack';
import { AuthContext } from 'context';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [user, setUser] = useState<boolean>(false);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          {user ? <BottomNavigator /> : <AuthStack />}
        </NavigationContainer>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
