import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query'

import { router } from './router'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst',
      refetchOnWindowFocus: true,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.error('Something strange...', error.toString())

      router.navigate({
        to: '/errors/not-found',
      })
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.error('Something strange...', error.toString())
    },
  }),
})
