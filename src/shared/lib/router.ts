import type { NavigateOptions } from '@tanstack/react-router'

import { createBrowserHistory } from '@tanstack/react-router'
import { backButton } from '@telegram-apps/sdk-react'

export function createTelegramHistory() {
  const history = createBrowserHistory()
  let step = 1

  if (backButton.hide.isAvailable()) {
    backButton.hide()
  }

  const originalPush = history.push
  const originalReplace = history.replace
  const originalBack = history.back

  history.subscribe(() => {
    if (step === 1)
      backButton.hide()
  })

  history.push = (path: string, state?: any, navigateOpts?: NavigateOptions) => {
    step += 1
    backButton.show()
    return originalPush(path, state, navigateOpts)
  }

  history.replace = (path: string, state?: any, navigateOpts?: NavigateOptions) => {
    backButton.hide()
    step = 1

    if (window.history.length > 1)
      history.go(-(window.history.length - 1))

    return setTimeout(() => originalReplace(path, state, navigateOpts), 0)
  }

  history.back = (navigateOpts?: NavigateOptions) => {
    step -= 1
    return originalBack(navigateOpts)
  }

  return history
}
