import { type FC } from 'react'
import {
  Outlet,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'
import { AppRoot } from '@telegram-apps/telegram-ui'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

// import { queryClient } from '../providers'
 
// import { query } from '@/shared/query'
import { Tabbar } from '@/components/tabbar'
import { useLaunchParams, useSignal, miniApp } from '@telegram-apps/sdk-react'

const tabbarDisabledRoutes = [
  // errors
  '/errors/not-found',
] 

const RootLayout: FC = () => {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  const location = useLocation() 
  const isTabbarHidded = tabbarDisabledRoutes.includes(location.pathname)

  return (
    <AppRoot
      appearance={isDark ? 'dark' : 'light'}
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <Outlet />
      <TanStackRouterDevtools />
      {isTabbarHidded ? null : <Tabbar />}
    </AppRoot>
  )
}

export const Route = createRootRoute({
  component: RootLayout,
  // loader: async () => {
  //   const user = queryClient.getQueryData(['self-balance'])

  //   if (!user) {
  //     queryClient.prefetchQuery({
  //       queryKey: ['self-balance'],
  //       queryFn: query.user.getWithImagesPreload,
  //     })
  //   }
  // },
})
