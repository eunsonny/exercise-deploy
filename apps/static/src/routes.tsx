import { RootRoute, Route, Router } from '@tanstack/react-router'
import App from './App'
import Blog from './app/blog'

let rootRoute = new RootRoute()
const indexRoute = new Route({ getParentRoute: () => rootRoute, path: '/', component: App })
const blogRoute = new Route({ getParentRoute: () => rootRoute, path: 'blog',component: Blog })
// const postRoute = new Route({ getParentRoute: () => blogRoute, path: '$slug' })

const routeTree = rootRoute.addChildren([
  indexRoute,
  blogRoute
  // blogRoute.addChildren([postRoute]),
])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default router