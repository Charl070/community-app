import React from 'react';
import {
  StyledNewsItemContainer,
  StyledDateContainer,
  StyledNewsContent,
  StyledDate,
  BigImage,
  SmallImage,
  ImagesContainer,
} from './CompactNewsItem.styles';
import { CompactNewsItemProps } from './CompactNewsItem';
import { Typography } from 'components/Typography';
import formatDate from 'constants/utils/formatDateTime';

const CompactNewsItem: React.FC<CompactNewsItemProps> = ({ ...props }) => {
  return (
    <StyledNewsItemContainer {...props}>
      <StyledDateContainer>
        <StyledDate>
          <Typography textColor="blue" weight="bold" variant="paragraph">
            {formatDate(props.date).day}
          </Typography>
          <Typography textColor="blue" weight="bold" variant="paragraph">
            {formatDate(props.date).month}
          </Typography>
        </StyledDate>
      </StyledDateContainer>
      <StyledNewsContent>
        <Typography weight="bold" variant="text1">
          {props.title}
        </Typography>
        <Typography
          ellipsizeMode="tail"
          numberOfLines={1}
          weight="medium"
          variant="text2">
          {props.description}
        </Typography>
        <ImagesContainer>
          {props.attachments &&
            props.attachments.length &&
            props.attachments.slice(0, 2).map(attachment => (
              <BigImage key={attachment.id}>
                <Typography
                  ellipsizeMode="tail"
                  numberOfLines={1}
                  variant="paragraph"
                  textColor="grey8">
                  {attachment.fileName}
                </Typography>
              </BigImage>
            ))}
          {props.attachments &&
            props.attachments.length &&
            props.attachments.length > 2 && (
              <SmallImage>
                <Typography variant="paragraph" textColor="grey8">
                  +{props.attachments.length - 2}
                </Typography>
              </SmallImage>
            )}
        </ImagesContainer>
      </StyledNewsContent>
    </StyledNewsItemContainer>
  );
};

export { CompactNewsItem };
