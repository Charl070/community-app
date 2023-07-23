import styled from 'styled-components/native';
import {
  TypographyProps,
  TypographyWeight,
  TypographyVariant,
} from './Typography.types';
import { colors } from 'constants/colors';

const variantFontSizes: { [key in TypographyVariant]: number } = {
  heading1: 48,
  heading2: 24,
  text1: 20,
  text2: 16,
  text3: 14,
  paragraph: 12,
};

const weightFontFamily: { [key in TypographyWeight]: string } = {
  regular: 'DMSans-Regular',
  bold: 'DMSans-Bold',
  medium: 'DMSans-Medium',
};

export const StyledTypography = styled.Text<TypographyProps>`
  font-size: ${({ variant }) => variantFontSizes[variant]}px;
  font-family: ${({ weight }) => weightFontFamily[weight ?? 'regular']};
  color: ${({ textColor }) => colors[textColor ?? 'black']};
`;
