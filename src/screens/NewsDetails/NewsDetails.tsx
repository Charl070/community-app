import React from 'react';
import { StyledScrollView, StyledSafeAreaView } from '../common.styles';
import { DetailedNews } from 'components/DetailedNewsItem';
import { ScreenProps } from './NewsDetails.types';

const NewsDetails = ({ route }: ScreenProps): JSX.Element => {
  const { id, date, title, description, attachments } = route?.params;
  return (
    <StyledSafeAreaView>
      <StyledScrollView contentInsetAdjustmentBehavior="automatic">
        <DetailedNews
          id={id}
          date={date}
          title={title}
          description={description}
          attachments={attachments}
        />
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default NewsDetails;
