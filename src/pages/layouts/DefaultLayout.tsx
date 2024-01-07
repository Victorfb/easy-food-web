import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../components/SideMenu/SideMenu'

export function DefaultLayout() {
  return (
    <div>
      <SideMenu />
      <Outlet />
    </div>
  )
}