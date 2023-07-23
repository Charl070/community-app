import React from 'react';
import { render, RenderAPI } from '@testing-library/react-native';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

export const renderWithProviders = (children: React.ReactNode): RenderAPI => {
  return render(
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
  );
};

export const waitForSideEffects = async (): Promise<void> => {
  await new Promise(resolve => setTimeout(resolve, 0));
};
