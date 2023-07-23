import { useQuery, UseQueryResult } from 'react-query';
import { getReports } from 'api';
import { Reports } from 'api/api.types';

const useGetReports = (): UseQueryResult<Reports> => {
  const response = useQuery<Reports>(
    'reports',
    () => getReports() as unknown as Promise<Reports>,
  );
  return response;
};

export { useGetReports };
