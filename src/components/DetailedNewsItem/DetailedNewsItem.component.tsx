import React from 'react';
import { Alert } from 'react-native';
import {
  ContainerView,
  TouchableImage,
  NewsContainer,
  ShortDateView,
  StyledImage,
  StyledParagraph,
} from './DetailedNewsItem.styles';
import { Typography } from 'components/Typography';
import formatDate from 'constants/utils/formatDateTime';
import { DetailedNewsProp } from './DetailedNewsItems.types';

const DetailedNews: React.FC<DetailedNewsProp> = ({ ...props }) => {
  return (
    <ContainerView {...props} testID="NewsContainer">
      <ShortDateView testID="shortDate">
        <Typography textColor="blue" variant={'paragraph'} weight="bold">
          {formatDate(props.date).day}
        </Typography>
        <Typography textColor="blue" variant={'paragraph'} weight="bold">
          {formatDate(props.date).month}
        </Typography>
      </ShortDateView>

      <NewsContainer key={props.id} testID="News">
        <Typography variant="text1" weight="bold">
          {props.title}
        </Typography>
        {props.description && (
          <StyledParagraph variant="text2" testID="newsText">
            {props.description}
          </StyledParagraph>
        )}
        {props.attachments &&
          props?.attachments?.map(attachment => (
            <TouchableImage
              testID="touchableImage"
              key={attachment.id}
              onPress={() => Alert.alert('#TODO show images in full')}>
              <StyledImage
                testID="images"
                source={{
                  uri: attachment.src,
                }}
              />
            </TouchableImage>
          ))}
      </NewsContainer>
    </ContainerView>
  );
};

export { DetailedNews };
