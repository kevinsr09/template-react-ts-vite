import { useNavigate } from 'react-router-dom'
import { CustomLink } from '../ui/CustomLink'

export const NavBar = (): JSX.Element => {
  const navigate = useNavigate()

  const handleLogout = (): void => {
    navigate('/login', { replace: true })
  }

  return (
    <nav className="flex gap-2 w-full justify-end">
      <CustomLink to="/marvel" isActiveClassName="text-cyan-500">
        Marvel
      </CustomLink>
      <CustomLink to="/dc" isActiveClassName="text-cyan-500">
        DC
      </CustomLink>
      <button className="text-red-500" onClick={handleLogout}>
        Login
      </button>
    </nav>
  )
}
