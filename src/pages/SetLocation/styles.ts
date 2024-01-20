import styled from 'styled-components'
import { InputDefault } from '../../components/Input'
import Lottie from 'lottie-react'

export const ContainerRoot = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  height: calc(100vh);
  padding: 4.375rem 7.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.625rem;
  flex: 1 0 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.625rem;
`

export const ContainerText = styled.div`
  width: 43.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const Title = styled.text`
  color: ${(props) => props.theme.neutral0};
  text-align: center;
  font-family: 'DM Sans';
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 3.125rem;
  letter-spacing: -0.03125rem;
`

export const SubTitle = styled.text`
  color: ${(props) => props.theme.neutral0};
  text-align: center;
  font-family: 'Mulish';
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.75rem;
`

export const ContainerLocation = styled.div`
  display: flex;
  width: 43.75rem;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  border-radius: 1.25rem;
  background: ${(props) => props.theme.neutral700};
  /* Shadow/Basic/shadow-card */
  box-shadow:
    0px 4px 20px -2px rgba(50, 50, 71, 0.04),
    0px 0px 1px 0px rgba(12, 26, 75, 0.03);
`

export const InputLocation = styled(InputDefault)``

export const Map = styled.div`
  width: 40.75rem;
  height: 13.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  align-self: stretch;

  border-radius: 1rem;
  border: 1.5px solid ${(props) => props.theme.neutral600};
  background: ${(props) => props.theme.neutral600};
`

export const AnimationMap = styled(Lottie)`
  width: 100%;
  height: 100%;
`

export const ContainerButtons = styled.div``

export const ButtonMyLocation = styled.button`
  cursor: pointer;
  display: inline-flex;
  height: 1.3rem;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  background: transparent;
  border: 0;
  box-shadow: 0;

  color: ${(props) => props.theme.primary100};
  text-align: center;
  /* Button/Medium */
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`

export const ButtonSetLocation = styled.button`
  cursor: pointer;
  display: inline-flex;
  height: 1.3rem;
  padding: 0.75rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  background: transparent;
  border: 0;
  box-shadow: 0;

  color: ${(props) => props.theme.primary100};
  text-align: center;
  /* Button/Medium */
  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.375rem;
`

export const ButtonIcon = styled.img``
