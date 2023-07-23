import { colors } from 'constants/colors';

type TypographyColor = keyof typeof colors;
type TypographyVariant =
  | 'heading1'
  | 'heading2'
  | 'paragraph'
  | 'text1'
  | 'text2'
  | 'text3';
type TypographyWeight = 'regular' | 'medium' | 'bold';
type TypographyTransform = 'uppercase' | 'lowercase' | 'capitalize';
type TypographyEllipsizeMode = 'head' | 'middle' | 'tail' | 'clip';

interface TypographyProps {
  transform?: TypographyTransform;
  weight?: TypographyWeight;
  variant: TypographyVariant;
  children?: React.ReactNode;
  numberOfLines?: number;
  ellipsizeMode?: TypographyEllipsizeMode;
  textColor?: TypographyColor;
}

export type {
  TypographyProps,
  TypographyVariant,
  TypographyWeight,
  TypographyTransform,
  TypographyColor,
};
