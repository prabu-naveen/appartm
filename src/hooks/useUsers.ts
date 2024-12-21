import { useState, useCallback } from 'react';
import { UserFormData } from '../types';
import { userApi } from '../api/users';

export function useUsers() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createUser = useCallback(async (data: UserFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const user = await userApi.create(data);
      return user;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateUser = useCallback(async (id: string, data: UserFormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const user = await userApi.update(id, data);
      return user;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    createUser,
    updateUser,
  };
}