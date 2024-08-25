import { useState } from 'react';
import { authAPI } from '@/lib/auth';
import { User } from '@/types/common';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    try {
      const userData = await authAPI.login(username, password);
      setUser(userData);
      console.log('Login successful', userData);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return { user, login };
};
