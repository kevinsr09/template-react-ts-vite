import { NavLink } from 'react-router-dom'

interface CustomLinkProps {
  to: string
  children: React.ReactNode
  className?: string
  isActiveClassName?: string
}
export const CustomLink = ({
  to,
  children,
  className,
  isActiveClassName
}: CustomLinkProps): JSX.Element => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? className + ' ' + isActiveClassName : '' + className
      }>
      {children}
    </NavLink>
  )
}
