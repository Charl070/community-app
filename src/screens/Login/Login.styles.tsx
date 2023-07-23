import { colors } from 'constants/colors';
import styled from 'styled-components/native';

export const LoginScreenContainer = styled.View`
  width: 100%;
  height: 100%
  padding: 12px;
`;

export const BrandingView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-bottom: 25%;
  margin-top: 12px;
`;

export const LogoView = styled.View`
  height: 64px;
  width: 64px;
`;

export const LoginFormView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 280px;
  margin-bottom: 30%;
`;

export const LoginActionView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ForgotPasswordText = styled.Text`
  font-size: 16px;
  //font-family: regular;
  color: ${colors.black};
  text-decoration-line: underline;
`;

export const LoginFooterView = styled.View`
  width: 100%;
  position: absolute;
  bottom: 24px;
`;

export const StyledText = styled.Text`
  font-size: 16px;
  //font-family: regular;
  color: ${colors.black};
  text-decoration-line: underline;
  margin-left: auto;
  margin-right: auto;
`;
