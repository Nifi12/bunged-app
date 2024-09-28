import type { RouteObject } from 'react-router-dom'

import { App } from '../App'

export const router: RouteObject[] = [
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/about',
    element: <h1>Hello</h1>,
  },
  {
    path: '/contact',
    element: <h1>Contact</h1>,
  },
]
