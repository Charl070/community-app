import { colors } from 'constants/colors';
import { ReactNode } from 'react';

type TypographyWeight = 'regular' | 'medium' | 'bold';
type ButtonVariant = 'primary' | 'secondary' | 'primary2';
type TypographyColor = keyof typeof colors;
interface ButtonProps {
  onPress?(payload: unknown): void;
  variant: ButtonVariant;
  icon?: string; // name of icon from getImage
  iconElement?: ReactNode;
  title: string;
  buttonTextColor?: TypographyColor;
  fontWeight?: TypographyWeight;
}

export type { ButtonProps, ButtonVariant };
