import {
  HomeContainer,
  LeftImg,
  RightImg,
  Subtitle,
  Title,
  ItemLeft,
  ItemRight,
  ItemTop,
  ItemBottom,
} from './styles'
import leftFood from '../../assets/leftfood.png'
import rightFood from '../../assets/rightfood.png'

export function Home() {
  return (
    <HomeContainer>
      <ItemLeft>
        <ItemTop>
          <LeftImg src={leftFood} alt="" data-atropos-offset="-5" />
        </ItemTop>
        <ItemBottom>
          <Title>
            {'Easy'}
            <span>{'Food'}</span>
          </Title>
          <Subtitle>
            Você está cansado de percorrer os menus e ter dificuldade para
            decidir o que pedir? Nosso novo aplicativo de restaurante oferece
            recomendações personalizadas de nosso assistente digital...
          </Subtitle>
        </ItemBottom>
      </ItemLeft>
      <ItemRight>
        <RightImg src={rightFood} alt="" data-atropos-offset="5" />
      </ItemRight>
    </HomeContainer>
  )
}
