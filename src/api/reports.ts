import { request } from 'api/base';

const getReports = (token?: string): Promise<Response> => {
  return request('/api/reports', 'GET', null, {
    Authorization: `Bearer ${token}`,
  });
};

export { getReports };
