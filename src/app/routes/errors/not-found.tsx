import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/errors/not-found')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>TODO: error</div>
}
