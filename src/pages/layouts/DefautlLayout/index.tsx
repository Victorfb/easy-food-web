import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../../components/SideMenu'
import { ContainerDefault } from './styles'

export function DefaultLayout() {
  return (
    <ContainerDefault>
      <SideMenu />
      <Outlet />
    </ContainerDefault>
  )
}
