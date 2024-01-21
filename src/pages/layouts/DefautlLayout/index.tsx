import { Outlet } from 'react-router-dom'
import { SideMenu } from '../../../components/SideMenu'
import { ContainerDefaultRoot, ContainerDefault } from './styles'
import { Header } from '../../../components/Header'

export function DefaultLayout() {
  return (
    <ContainerDefaultRoot>
      <SideMenu />
      <ContainerDefault>
        <Header />
        <Outlet />
      </ContainerDefault>
    </ContainerDefaultRoot>
  )
}
