import { createContext, useContext } from 'react';

type AuthContextType = {
  user: boolean;
  setUser: (user: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: false,
  setUser: () => {},
});

export const useAuthContext = (): AuthContextType => useContext(AuthContext);
