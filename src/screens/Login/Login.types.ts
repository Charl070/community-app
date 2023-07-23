import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export type AuthStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export type { LoginScreenProps };
