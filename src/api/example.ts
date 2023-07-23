import { request } from 'api/base';

const example = (token?: string): Promise<Response> => {
  return request('/api/example', 'GET', null, {
    Authorization: `Bearer ${token}`,
  });
};

export { example };
