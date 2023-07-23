import {
  useMutation,
  useQuery,
  UseQueryResult,
  useQueryClient,
  UseMutationResult,
} from 'react-query';
import { getFiles, updateFile } from 'api';
import { Files } from 'api/api.types';

const useGetFiles = (): UseQueryResult<Files> => {
  const response = useQuery<Files>(
    'files',
    () => getFiles() as unknown as Promise<Files>,
  );

  return response;
};

const useFileUpdate = (): UseMutationResult => {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateFile, {
    onSuccess: async () => {
      // invalidate and refetch the files
      await queryClient.invalidateQueries('files');
    },
  });

  return mutation as UseMutationResult;
};

export { useGetFiles, useFileUpdate };
