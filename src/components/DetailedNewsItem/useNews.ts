import { useQuery, UseQueryResult } from 'react-query';
import { getNews, getNewsItem } from 'api';
import { News, NewsItem } from 'api/api.types';

const useNews = (): UseQueryResult<News> => {
  const response = useQuery<News>(
    'items',
    () => getNews() as unknown as Promise<News>,
  );
  return response;
};

const useNewsItem = (id: string): UseQueryResult<NewsItem> => {
  const response = useQuery<NewsItem>(
    ['items', id],
    () => getNewsItem(id) as unknown as Promise<NewsItem>,
  );
  return response;
};
export { useNews, useNewsItem };
