import { request } from 'api/base';

const getNewsItem = (id: string, token?: string): Promise<Response> => {
  return request(`/api/news/${id}`, 'GET', null, {
    Authorization: `Bearer ${token}`,
  });
};

const getNews = (token?: string): Promise<Response> => {
  return request('/api/news', 'GET', null, {
    Authorization: `Bearer ${token}`,
  });
};

export { getNews, getNewsItem };
