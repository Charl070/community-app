import { Typography } from 'components/Typography';
import React from 'react';
import { StyledButton, StyledIconContainer } from './Button.styles';
import { ButtonProps } from './Button.types';

import {
  HomeOutline,
  ReportOutline,
  HomeFilled,
  ReportFilled,
} from 'assets/svg';

function getImage(pageName: string, buttonVariant: string) {
  return (
    {
      News:
        buttonVariant === 'secondary' ? (
          <HomeFilled height={18} width={18} />
        ) : (
          <HomeOutline height={18} width={18} />
        ),
      Report:
        buttonVariant === 'secondary' ? (
          <ReportFilled height={18} width={18} />
        ) : (
          <ReportOutline height={18} width={18} />
        ),
    }[pageName] || null
  );
}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <StyledButton {...props}>
      <Typography
        textColor={props.buttonTextColor}
        weight={props.fontWeight}
        variant="text1">
        {props.title}
      </Typography>
      <StyledIconContainer>
        {props.icon ? getImage(props.icon, props.variant) : props.iconElement}
      </StyledIconContainer>
    </StyledButton>
  );
};

export { Button };
