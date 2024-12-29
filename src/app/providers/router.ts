import { createRouter } from '@tanstack/react-router'

import { routeTree } from './routeTree.gen'

import { createTelegramHistory } from '@/shared/lib/router'

export const history = createTelegramHistory()

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  basepath: '/coinvault-miniapp/',
  // defaultNotFoundComponent: NotFoundPage,
  // defaultErrorComponent
  defaultPendingMinMs: 100,
  history,
})
