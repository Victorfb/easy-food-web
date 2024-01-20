import { Icon, ContainerSide, ButtonCircle } from './styles'
import chevronLeft from '../../assets/icons/chevron-left.svg'

export function SideMenu() {
  return (
    <ContainerSide>
      <ButtonCircle>
        <Icon src={chevronLeft} alt="" />
      </ButtonCircle>
    </ContainerSide>
  )
}
