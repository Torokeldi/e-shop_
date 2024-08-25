import { createWithEqualityFn } from 'zustand/traditional';
import { persist } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './slices/userSlice';

export type StoreState = UserSlice;

export const useUserStore = createWithEqualityFn<StoreState>()(
  persist(
    (...a) => ({
      ...createUserSlice(...a),
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({
        user: state.user,
      }),
    },
  ),
);
