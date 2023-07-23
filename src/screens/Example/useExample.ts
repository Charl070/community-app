// import { useAuth } from "@core/context/Authentication"
import { useQuery, UseQueryResult } from 'react-query';
import * as api from 'api';
import { Example } from 'api/api.types';

const useExample = (): UseQueryResult<Example> => {
  const response = useQuery<Example>(
    'example',
    () => api.example() as unknown as Promise<Example>,
  );

  return response;
};

export { useExample };
