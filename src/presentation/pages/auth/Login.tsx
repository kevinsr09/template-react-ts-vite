import { useNavigate } from 'react-router-dom'

export const Loging = (): JSX.Element => {
  const navigate = useNavigate()

  const handleLogin = (): void => {
    navigate('/', { replace: true })
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  )
}
