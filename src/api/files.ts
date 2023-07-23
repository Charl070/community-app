import { request } from 'api/base';
import { File } from 'api/api.types';

const getFiles = (token?: string): Promise<Response> => {
  return request('/api/files', 'GET', null, {
    Authorization: `Bearer ${token}`,
  });
};

const updateFile = (body: File, token?: string): Promise<Response> => {
  return request(`/api/files/${body.id}`, 'PUT', body, {
    Authorization: `Bearer ${token}`,
  });
};

export { getFiles, updateFile };
