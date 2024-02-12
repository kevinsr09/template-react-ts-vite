import { createBrowserRouter } from 'react-router-dom'
import { Loging } from '../pages/auth/Login'
import { DCPage } from '../pages/heros/DCPage'
import { MarvelPage } from '../pages/heros/MarvelPage'
import { HomePage } from '../pages/home/HomePage'
import { HeroPage } from '../pages/heros/HeroPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    children: [
      {
        path: 'marvel',
        element: <MarvelPage />
      },
      {
        path: 'dc',
        element: <DCPage />
      },
      {
        path: 'hero/:id',
        element: <HeroPage />
      }
    ]
  },
  {
    path: '/login',
    element: <Loging />
  }
])
