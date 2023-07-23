import React from 'react';
import { StyledSafeAreaView } from '../common.styles';
import { CompactNewsItem } from 'components/CompactNewsItem';
import { useNews } from './useNews';
import { ActivityIndicator, FlatList } from 'react-native';
import { ScreenProps } from './News.types';

const News = (props: ScreenProps): JSX.Element => {
  const { data, isLoading } = useNews();
  const news = data?.data || [];
  const searchQuery = props.route?.params?.searchQuery;

  const searchedNews = searchQuery
    ? news.filter(newsItem =>
        newsItem.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : news;
  return (
    <StyledSafeAreaView testID="NewsScreen">
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={searchedNews}
          renderItem={({ item }) => (
            <CompactNewsItem
              key={item.id}
              date={item.date}
              title={item.title}
              description={item.description}
              attachments={item.attachments}
              onPress={() =>
                props.navigation.push('NewsDetails', {
                  id: item.id,
                  date: item.date,
                  description: item.description,
                  title: item.title,
                  attachments: item.attachments,
                })
              }
            />
          )}
        />
      )}
    </StyledSafeAreaView>
  );
};

export default News;
