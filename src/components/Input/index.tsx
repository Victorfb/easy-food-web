import { Input, Icon, ContainerInput, ButtonIcon } from './styles'
import search from '../../assets/icons/search.svg'

export function InputDefault() {
  return (
    <ContainerInput>
      <Input />
      <ButtonIcon>
        <Icon src={search} alt="" />
      </ButtonIcon>
    </ContainerInput>
  )
}
