import { useState, useCallback } from 'react';
import { LoadingState } from '../types';

interface UseAsyncReturn<T> extends LoadingState {
  data: T | null;
  execute: (...args: any[]) => Promise<void>;
  reset: () => void;
}

export function useAsync<T>(
  asyncFunction: (...args: any[]) => Promise<T>,
  immediate = false
): UseAsyncReturn<T> {
  const [status, setStatus] = useState<LoadingState>({
    isLoading: immediate,
    error: null
  });
  const [data, setData] = useState<T | null>(null);

  const execute = useCallback(
    async (...args: any[]) => {
      setStatus({ isLoading: true, error: null });
      try {
        const response = await asyncFunction(...args);
        setData(response);
        setStatus({ isLoading: false, error: null });
      } catch (error) {
        setStatus({
          isLoading: false,
          error: error instanceof Error ? error.message : 'An error occurred'
        });
      }
    },
    [asyncFunction]
  );

  const reset = useCallback(() => {
    setStatus({ isLoading: false, error: null });
    setData(null);
  }, []);

  return { ...status, data, execute, reset };
}