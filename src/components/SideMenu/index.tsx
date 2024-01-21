import {
  Icon,
  ButtonCircle,
  ListItemIcon,
  SubListItem,
  List,
  SubList,
  ListItem,
  Logo,
  ContainerSide,
} from './styles'
import chevronLeft from '../../assets/icons/chevron-left.svg'

export function SideMenu() {
  return (
    <ContainerSide>
      <Logo>
        {'Easy'}
        <span>{'Food'}</span>
      </Logo>

      <ButtonCircle>
        <Icon src={chevronLeft} alt="" />
      </ButtonCircle>

      <List>
        <ListItem>
          <a>
            <ListItemIcon>
              <span className="material-symbols-rounded">home</span>
            </ListItemIcon>
            <text>Página Inicial</text>
          </a>
        </ListItem>
        <ListItem>
          <a>
            <ListItemIcon>
              <span className="material-symbols-rounded">menu_book</span>
            </ListItemIcon>
            <text>Experiencia Smart</text>
          </a>
        </ListItem>
        <ListItem>
          <a>
            <ListItemIcon active>
              <span className="material-symbols-rounded">order_play</span>
            </ListItemIcon>
            <text>Seleção do Pedido</text>
          </a>
          <SubList>
            <SubListItem stage="FINISH">
              <div>
                <text>Seleção do Restaurante</text>
              </div>
            </SubListItem>
            <SubListItem stage={'FINISH'}>
              <div>
                <text>Montagem do Pedido</text>
              </div>
            </SubListItem>
            <SubListItem stage={'CURRENT'}>
              <div>
                <text>Confirmação do Endereço</text>
              </div>
            </SubListItem>
            <SubListItem>
              <div>
                <text>Pagamento</text>
              </div>
            </SubListItem>
            <SubListItem>
              <div>
                <text>Confirmação do Pagamento</text>
              </div>
            </SubListItem>
            <SubListItem>
              <div>
                <text>Comprovante</text>
              </div>
            </SubListItem>
            <SubListItem>
              <div>
                <text>Acompanhamento do Pedido</text>
              </div>
            </SubListItem>
          </SubList>
        </ListItem>
      </List>
    </ContainerSide>
  )
}
