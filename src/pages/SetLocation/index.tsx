import {
  AnimationMap,
  ButtonMyLocation,
  ButtonSetLocation,
  Container,
  ContainerButtons,
  ContainerLocation,
  ContainerRoot,
  ContainerText,
  InputLocation,
  Map,
  SubTitle,
  Title,
} from './styles'
import locationMap from '../../assets/lottie/locationAnimation.json'

export function SetLocation() {
  return (
    <ContainerRoot>
      <Container>
        <ContainerText>
          <Title>Inicie a experiência do Smart Menu</Title>
          <SubTitle>
            Insira sua localização ou use sua localização atual e aproveite a
            experiência personalizada em qualquer um de seus restaurantes.
          </SubTitle>
        </ContainerText>
        <ContainerLocation>
          <InputLocation />
          <Map>
            <AnimationMap animationData={locationMap} />
          </Map>
          <ContainerButtons>
            <ButtonMyLocation>Usar minha localização atual</ButtonMyLocation>
            <ButtonSetLocation>
              Definir minha localização no mapa
            </ButtonSetLocation>
          </ContainerButtons>
        </ContainerLocation>
      </Container>
    </ContainerRoot>
  )
}
