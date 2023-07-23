import React, { useContext, useState } from 'react';
import { Typography } from 'components/Typography';
import { StyledScrollView, StyledSafeAreaView } from '../common.styles';
import { Button } from 'components/Button';
import { PasswordInput, PlainInput } from 'components/InputFields';
import { Eye, EyeSlash, Logo } from 'assets/svg';
import { AuthContext } from 'context';
import {
  BrandingView,
  ForgotPasswordText,
  LoginActionView,
  LoginFooterView,
  LoginFormView,
  LoginScreenContainer,
  LogoView,
  StyledText,
} from './Login.styles';
import { LoginScreenProps } from './Login.types';

const Login = ({ navigation }: LoginScreenProps): JSX.Element => {
  const { setUser } = useContext(AuthContext);
  const [hidePassword, setHidePassword] = useState<boolean>(true);

  const handleLogin = () => {
    setUser(true);
  };

  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <LoginScreenContainer>
          <BrandingView>
            <LogoView>
              <Logo />
            </LogoView>
            <Typography variant={'heading1'} weight="bold" textColor="navy">
              Myprop.
            </Typography>
          </BrandingView>
          <LoginFormView>
            <Typography weight="bold" variant="heading1">
              Log in
            </Typography>
            <Typography variant="text2">
              Please log into Myprop account.
            </Typography>
            <PlainInput placeholder="Email" handleInput={() => {}} />
            <PasswordInput
              handleInput={() => {}}
              hidePassword={hidePassword}
              rightIcon={
                hidePassword ? (
                  <Eye onPress={() => setHidePassword(!hidePassword)} />
                ) : (
                  <EyeSlash onPress={() => setHidePassword(!hidePassword)} />
                )
              }
            />
            <LoginActionView>
              <ForgotPasswordText onPress={() => navigation.push('SignUp')}>
                Forgot password?
              </ForgotPasswordText>
              <Button
                variant={'primary'}
                title={'Send'}
                buttonTextColor="white"
                onPress={handleLogin}
              />
            </LoginActionView>
          </LoginFormView>
          <LoginFooterView>
            <StyledText onPress={() => navigation.push('SignUp')}>
              Dont have an account?
            </StyledText>
          </LoginFooterView>
        </LoginScreenContainer>
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default Login;
