import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'

export const AppRouter = (): JSX.Element => {
  return <RouterProvider router={router} />
}
