import { retrieveLaunchParams } from '@telegram-apps/sdk-react'
import { createRoot } from 'react-dom/client'

import { init } from '@/app/init'
import { App } from '@/app'
import { EnvUnsupported } from './components/env-unsupported'

const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)

try {
  init(retrieveLaunchParams().startParam === 'debug' || import.meta.env.DEV)
  
  root.render(<App />)
} catch {
  root.render(<EnvUnsupported />)
}
