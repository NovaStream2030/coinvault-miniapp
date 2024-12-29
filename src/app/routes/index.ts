import { createFileRoute } from '@tanstack/react-router'

import { IndexPage } from '@/pages/index-page/index-page'

export const Route = createFileRoute('/')({
  component: IndexPage,
})
