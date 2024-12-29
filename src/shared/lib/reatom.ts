import { createCtx, connectLogger } from '@reatom/framework'

export const ctx = createCtx()
if (import.meta.env.DEV) {
  connectLogger(ctx)
}
