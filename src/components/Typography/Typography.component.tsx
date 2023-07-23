import React from 'react';
import { StyledTypography } from './Typography.styles';
import { TypographyProps } from './Typography.types';

const Typography: React.FC<TypographyProps> = ({ ...props }) => (
  <StyledTypography {...props} />
);

export { Typography };
