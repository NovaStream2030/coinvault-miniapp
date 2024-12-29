import type { FC } from 'react';

import { reatomContext } from '@reatom/npm-react'
import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';

import { ctx } from '@/shared/lib/reatom';
import { queryClient, router } from './providers';

import '@telegram-apps/telegram-ui/dist/styles.css';
import './index.css';

export const App: FC = () => {
  return (
    <reatomContext.Provider value={ctx}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </reatomContext.Provider>
  )
}
