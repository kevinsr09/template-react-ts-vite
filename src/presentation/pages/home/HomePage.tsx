import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/home/NavBar'

export const HomePage = (): JSX.Element => {
  return (
    <>
      <header>
        <NavBar />
        <Outlet />
      </header>
    </>
  )
}
